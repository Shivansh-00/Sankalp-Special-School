import { type NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import type { ContactSubmission, ApiResponse } from "@/lib/types"

const DATA_DIR = path.join(process.cwd(), "data")
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json")

async function ensureDataDirectory() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  if (!existsSync(CONTACTS_FILE)) {
    await writeFile(CONTACTS_FILE, "[]")
  }
}

async function getContacts(): Promise<ContactSubmission[]> {
  await ensureDataDirectory()
  try {
    const data = await readFile(CONTACTS_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading contacts file:", error)
    return []
  }
}

async function saveContacts(contacts: ContactSubmission[]) {
  await ensureDataDirectory()
  await writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2))
}

function validateContactData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long")
  }

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required")
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push("Invalid email format")
    }
  }

  if (!data.phone || typeof data.phone !== "string") {
    errors.push("Phone number is required")
  } else {
    const phoneRegex = /^[\d\s\-+()]{10,15}$/
    if (!phoneRegex.test(data.phone)) {
      errors.push("Invalid phone number format")
    }
  }

  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long")
  }

  return { isValid: errors.length === 0, errors }
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "").trim().substring(0, 1000)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { isValid, errors } = validateContactData(body)

    if (!isValid) {
      const response: ApiResponse = {
        success: false,
        message: "Validation failed",
        error: errors.join(", "),
      }
      return NextResponse.json(response, { status: 400 })
    }

    const sanitizedData: ContactSubmission = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      message: sanitizeInput(body.message),
      date: new Date().toISOString(),
      status: "new",
    }

    const contacts = await getContacts()
    contacts.unshift(sanitizedData)
    await saveContacts(contacts)

    const response: ApiResponse<ContactSubmission> = {
      success: true,
      data: sanitizedData,
      message: "Contact form submitted successfully",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to process contact form",
    }
    return NextResponse.json(response, { status: 500 })
  }
}

export async function GET() {
  try {
    const contacts = await getContacts()
    const response: ApiResponse<ContactSubmission[]> = {
      success: true,
      data: contacts,
      message: "Contacts retrieved successfully",
    }
    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to fetch contacts",
    }
    return NextResponse.json(response, { status: 500 })
  }
}
