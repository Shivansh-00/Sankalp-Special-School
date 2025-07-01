import { type NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import type { Review, ApiResponse } from "@/lib/types"

const DATA_DIR = path.join(process.cwd(), "data")
const REVIEWS_FILE = path.join(DATA_DIR, "reviews.json")

const INITIAL_REVIEWS: Review[] = [
  {
    id: "review_1",
    name: "Priya Sharma",
    rating: 5,
    comment:
      "Sankalp has been a blessing for our family. The dedicated staff and personalized approach have helped our child grow tremendously. The 18 years of experience really shows in their care.",
    date: "2024-01-15T10:00:00.000Z",
    approved: true,
  },
  {
    id: "review_2",
    name: "Rajesh Kumar",
    rating: 5,
    comment:
      "Exceptional care and attention our child receives here. The minimal fees make quality special education accessible to families like ours. Highly recommended!",
    date: "2024-02-20T14:30:00.000Z",
    approved: true,
  },
  {
    id: "review_3",
    name: "Anita Singh",
    rating: 5,
    comment:
      "The team at Sankalp truly understands the needs of special children. Their individualized programs have made such a difference in our child's development. Thank you!",
    date: "2024-03-10T09:15:00.000Z",
    approved: true,
  },
]

async function ensureDataDirectory() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  if (!existsSync(REVIEWS_FILE)) {
    await writeFile(REVIEWS_FILE, JSON.stringify(INITIAL_REVIEWS, null, 2))
  }
}

async function getReviews(): Promise<Review[]> {
  await ensureDataDirectory()
  try {
    const data = await readFile(REVIEWS_FILE, "utf-8")
    const reviews = JSON.parse(data)
    return reviews.length > 0 ? reviews : INITIAL_REVIEWS
  } catch (error) {
    console.error("Error reading reviews file:", error)
    return INITIAL_REVIEWS
  }
}

async function saveReviews(reviews: Review[]) {
  await ensureDataDirectory()
  await writeFile(REVIEWS_FILE, JSON.stringify(reviews, null, 2))
}

function validateReviewData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long")
  }

  if (!data.rating || typeof data.rating !== "number" || data.rating < 1 || data.rating > 5) {
    errors.push("Rating must be between 1 and 5")
  }

  if (!data.comment || typeof data.comment !== "string" || data.comment.trim().length < 10) {
    errors.push("Comment must be at least 10 characters long")
  }

  if (data.comment && data.comment.length > 500) {
    errors.push("Comment must be less than 500 characters")
  }

  return { isValid: errors.length === 0, errors }
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, "").trim().substring(0, 500)
}

export async function GET() {
  try {
    const reviews = await getReviews()
    const approvedReviews = reviews.filter((review) => review.approved)
    const sortedReviews = approvedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    const response: ApiResponse<Review[]> = {
      success: true,
      data: sortedReviews,
      message: "Reviews retrieved successfully",
    }
    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching reviews:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to fetch reviews",
    }
    return NextResponse.json(response, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { isValid, errors } = validateReviewData(body)

    if (!isValid) {
      const response: ApiResponse = {
        success: false,
        message: "Validation failed",
        error: errors.join(", "),
      }
      return NextResponse.json(response, { status: 400 })
    }

    const sanitizedReview: Review = {
      id: `review_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: sanitizeInput(body.name),
      rating: Number.parseInt(body.rating),
      comment: sanitizeInput(body.comment),
      date: new Date().toISOString(),
      approved: false, // Reviews need approval
    }

    const reviews = await getReviews()
    reviews.unshift(sanitizedReview)
    await saveReviews(reviews)

    const response: ApiResponse<Review> = {
      success: true,
      data: sanitizedReview,
      message: "Review submitted successfully and is pending approval",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error processing review:", error)
    const response: ApiResponse = {
      success: false,
      message: "Internal server error",
      error: "Failed to process review",
    }
    return NextResponse.json(response, { status: 500 })
  }
}
