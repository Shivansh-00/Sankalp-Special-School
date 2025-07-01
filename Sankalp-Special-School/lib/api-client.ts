import type {
  ApiResponse,
  ContactSubmission,
  Review,
  AdmissionInquiry,
  EventRegistration,
  NewsletterSubscription,
} from "./types"

class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`/api${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "An error occurred")
      }

      return data
    } catch (error) {
      return {
        success: false,
        message: "Network error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  }

  // Contact API
  async submitContact(data: Omit<ContactSubmission, "id" | "date" | "status">) {
    return this.request<ContactSubmission>("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async getContacts() {
    return this.request<ContactSubmission[]>("/contact")
  }

  // Reviews API
  async submitReview(data: Omit<Review, "id" | "date" | "approved">) {
    return this.request<Review>("/reviews", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async getReviews() {
    return this.request<Review[]>("/reviews")
  }

  // Admissions API
  async submitAdmissionInquiry(data: Omit<AdmissionInquiry, "id" | "date" | "status">) {
    return this.request<AdmissionInquiry>("/admissions", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async getAdmissionInquiries() {
    return this.request<AdmissionInquiry[]>("/admissions")
  }

  // Events API
  async registerForEvent(data: Omit<EventRegistration, "id" | "date">) {
    return this.request<EventRegistration>("/events/register", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async getEventRegistrations() {
    return this.request<EventRegistration[]>("/events/register")
  }

  // Newsletter API
  async subscribeNewsletter(data: Omit<NewsletterSubscription, "id" | "date" | "active">) {
    return this.request<NewsletterSubscription>("/newsletter", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async getNewsletterSubscriptions() {
    return this.request<NewsletterSubscription[]>("/newsletter")
  }
}

export const apiClient = new ApiClient()
