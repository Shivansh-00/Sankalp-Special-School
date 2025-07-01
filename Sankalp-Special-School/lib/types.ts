// Shared types for frontend and backend
export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  message: string
  date: string
  status: "new" | "contacted" | "resolved"
}

export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  approved: boolean
}

export interface AdmissionInquiry {
  id: string
  parentName: string
  email: string
  phone: string
  childName: string
  childAge: string
  childCondition: string
  previousSchool?: string
  message: string
  date: string
  status: "new" | "scheduled" | "assessed" | "enrolled"
}

export interface EventRegistration {
  id: string
  eventId: string
  eventTitle: string
  participantName: string
  email: string
  phone: string
  numberOfAttendees: number
  specialRequirements?: string
  date: string
}

export interface NewsletterSubscription {
  id: string
  email: string
  name?: string
  date: string
  active: boolean
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message: string
  error?: string
}
