import { type NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import type { NewsletterSubscription, ApiResponse } from "@/lib/types"

const DATA_DIR = path.join(process.cwd(), "data")
const NEWSLETTER_FILE = path.join(DATA_DIR, "newsletter.json")

async function ensureDataDirectory() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  if (!existsSync(NEWSLETTER_FILE)) {
    await writeFile(NEWSLETTER_FILE, "[]")
  }
}

async function getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
  await ensureDataDirectory()
  try {
    const data = await readFile(NEWSLETTER_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading newsletter file:", error)
    return []
  }
}

async function saveNewsletterSubscriptions(subscriptions: NewsletterSubscription[]) {
  await ensureDataDirectory()
  await writeFile(NEWSLETTER_FILE, JSON.stringify(subscriptions, null, 2))
}

function validateNewsletterData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required")
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push("Invalid email format")
    }
  }

  return { isValid: errors.length === 0, errors }
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "").trim().substring(0, 100)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { isValid, errors } = validateNewsletterData(body)

    if (!isValid) {
      const response: ApiResponse = {
        success: false,
        message: "Validation failed",
        error: errors.join(", "),
      }
      return NextResponse.json(response, { status: 400 })
    }

    // Check if email already exists
    const subscriptions = await getNewsletterSubscriptions()
    const existingSubscription = subscriptions.find((sub) => sub.email === body.email && sub.active)

    if (existingSubscription) {
      const response: ApiResponse = {
        success: false,
        message: "Email already subscribed",
        error: "This email is already subscribed to our newsletter",
      }
      return NextResponse.json(response, { status: 400 })
    }

    const sanitizedData: NewsletterSubscription = {
      id: `newsletter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email: sanitizeInput(body.email),
      name: body.name ? sanitizeInput(body.name) : undefined,
      date: new Date().toISOString(),
      active: true,
    }

    subscriptions.unshift(sanitizedData)
    await saveNewsletterSubscriptions(subscriptions)

    const response: ApiResponse<NewsletterSubscription> = {
      success: true,
      data: sanitizedData,
      message: "Successfully subscribed to newsletter",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to process newsletter subscription",
    }
    return NextResponse.json(response, { status: 500 })
  }
}

export async function GET() {
  try {
    const subscriptions = await getNewsletterSubscriptions()
    const activeSubscriptions = subscriptions.filter((sub) => sub.active)

    const response: ApiResponse<NewsletterSubscription[]> = {
      success: true,
      data: activeSubscriptions,
      message: "Newsletter subscriptions retrieved successfully",
    }
    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching newsletter subscriptions:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to fetch newsletter subscriptions",
    }
    return NextResponse.json(response, { status: 500 })
  }
}
