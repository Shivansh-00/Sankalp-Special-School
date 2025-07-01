import { type NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import type { AdmissionInquiry, ApiResponse } from "@/lib/types"

const DATA_DIR = path.join(process.cwd(), "data")
const ADMISSIONS_FILE = path.join(DATA_DIR, "admissions.json")

async function ensureDataDirectory() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  if (!existsSync(ADMISSIONS_FILE)) {
    await writeFile(ADMISSIONS_FILE, "[]")
  }
}

async function getAdmissions(): Promise<AdmissionInquiry[]> {
  await ensureDataDirectory()
  try {
    const data = await readFile(ADMISSIONS_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading admissions file:", error)
    return []
  }
}

async function saveAdmissions(admissions: AdmissionInquiry[]) {
  await ensureDataDirectory()
  await writeFile(ADMISSIONS_FILE, JSON.stringify(admissions, null, 2))
}

function validateAdmissionData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.parentName || typeof data.parentName !== "string" || data.parentName.trim().length < 2) {
    errors.push("Parent name must be at least 2 characters long")
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

  if (!data.childName || typeof data.childName !== "string" || data.childName.trim().length < 2) {
    errors.push("Child name must be at least 2 characters long")
  }

  if (!data.childAge || typeof data.childAge !== "string") {
    errors.push("Child age is required")
  }

  if (!data.childCondition || typeof data.childCondition !== "string" || data.childCondition.trim().length < 5) {
    errors.push("Please provide details about the child's condition")
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
    const { isValid, errors } = validateAdmissionData(body)

    if (!isValid) {
      const response: ApiResponse = {
        success: false,
        message: "Validation failed",
        error: errors.join(", "),
      }
      return NextResponse.json(response, { status: 400 })
    }

    const sanitizedData: AdmissionInquiry = {
      id: `admission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      parentName: sanitizeInput(body.parentName),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      childName: sanitizeInput(body.childName),
      childAge: sanitizeInput(body.childAge),
      childCondition: sanitizeInput(body.childCondition),
      previousSchool: body.previousSchool ? sanitizeInput(body.previousSchool) : undefined,
      message: sanitizeInput(body.message),
      date: new Date().toISOString(),
      status: "new",
    }

    const admissions = await getAdmissions()
    admissions.unshift(sanitizedData)
    await saveAdmissions(admissions)

    const response: ApiResponse<AdmissionInquiry> = {
      success: true,
      data: sanitizedData,
      message: "Admission inquiry submitted successfully",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error processing admission inquiry:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to process admission inquiry",
    }
    return NextResponse.json(response, { status: 500 })
  }
}

export async function GET() {
  try {
    const admissions = await getAdmissions()
    const response: ApiResponse<AdmissionInquiry[]> = {
      success: true,
      data: admissions,
      message: "Admission inquiries retrieved successfully",
    }
    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching admission inquiries:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to fetch admission inquiries",
    }
    return NextResponse.json(response, { status: 500 })
  }
}
