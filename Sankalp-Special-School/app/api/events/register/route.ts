import { type NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import type { EventRegistration, ApiResponse } from "@/lib/types"

const DATA_DIR = path.join(process.cwd(), "data")
const EVENTS_FILE = path.join(DATA_DIR, "event-registrations.json")

async function ensureDataDirectory() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  if (!existsSync(EVENTS_FILE)) {
    await writeFile(EVENTS_FILE, "[]")
  }
}

async function getEventRegistrations(): Promise<EventRegistration[]> {
  await ensureDataDirectory()
  try {
    const data = await readFile(EVENTS_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading event registrations file:", error)
    return []
  }
}

async function saveEventRegistrations(registrations: EventRegistration[]) {
  await ensureDataDirectory()
  await writeFile(EVENTS_FILE, JSON.stringify(registrations, null, 2))
}

function validateEventRegistrationData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.eventId || typeof data.eventId !== "string") {
    errors.push("Event ID is required")
  }

  if (!data.eventTitle || typeof data.eventTitle !== "string") {
    errors.push("Event title is required")
  }

  if (!data.participantName || typeof data.participantName !== "string" || data.participantName.trim().length < 2) {
    errors.push("Participant name must be at least 2 characters long")
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

  if (!data.numberOfAttendees || typeof data.numberOfAttendees !== "number" || data.numberOfAttendees < 1) {
    errors.push("Number of attendees must be at least 1")
  }

  return { isValid: errors.length === 0, errors }
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "").trim().substring(0, 500)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { isValid, errors } = validateEventRegistrationData(body)

    if (!isValid) {
      const response: ApiResponse = {
        success: false,
        message: "Validation failed",
        error: errors.join(", "),
      }
      return NextResponse.json(response, { status: 400 })
    }

    const sanitizedData: EventRegistration = {
      id: `event_reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      eventId: sanitizeInput(body.eventId),
      eventTitle: sanitizeInput(body.eventTitle),
      participantName: sanitizeInput(body.participantName),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      numberOfAttendees: Number.parseInt(body.numberOfAttendees),
      specialRequirements: body.specialRequirements ? sanitizeInput(body.specialRequirements) : undefined,
      date: new Date().toISOString(),
    }

    const registrations = await getEventRegistrations()
    registrations.unshift(sanitizedData)
    await saveEventRegistrations(registrations)

    const response: ApiResponse<EventRegistration> = {
      success: true,
      data: sanitizedData,
      message: "Event registration submitted successfully",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error processing event registration:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to process event registration",
    }
    return NextResponse.json(response, { status: 500 })
  }
}

export async function GET() {
  try {
    const registrations = await getEventRegistrations()
    const response: ApiResponse<EventRegistration[]> = {
      success: true,
      data: registrations,
      message: "Event registrations retrieved successfully",
    }
    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching event registrations:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to fetch event registrations",
    }
    return NextResponse.json(response, { status: 500 })
  }
}
