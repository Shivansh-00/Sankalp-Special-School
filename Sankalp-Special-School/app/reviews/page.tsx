"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Send, User } from "lucide-react"

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews")
      if (response.ok) {
        const data = await response.json()
        setReviews(data)
      }
    } catch (error) {
      console.error("Error fetching reviews:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number.parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", rating: 5, comment: "" })
        setShowForm(false)
        fetchReviews() // Refresh reviews
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    )
  }

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Reviews & Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Hear from the families who have experienced the care and dedication of Sankalp Special School
            </p>

            {/* Rating Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-2">{renderStars(Math.round(averageRating))}</div>
                <p className="text-gray-600">
                  Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Parents Say</h2>
            <Button onClick={() => setShowForm(!showForm)} className="bg-orange-500 hover:bg-orange-600">
              Write a Review
            </Button>
          </div>

          {/* Review Form */}
          {showForm && (
            <Card className="mb-12 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Share Your Experience</CardTitle>
                <p className="text-gray-600">
                  Help other families by sharing your experience with Sankalp Special School
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="reviewName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="reviewName"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                    <div className="flex items-center gap-2">
                      {renderStars(formData.rating, true, (rating) => setFormData((prev) => ({ ...prev, rating })))}
                      <span className="text-sm text-gray-600 ml-2">
                        ({formData.rating} star{formData.rating !== 1 ? "s" : ""})
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reviewComment" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Review *
                    </label>
                    <Textarea
                      id="reviewComment"
                      name="comment"
                      required
                      value={formData.comment}
                      onChange={handleInputChange}
                      placeholder="Share your experience with Sankalp Special School..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                      <p className="text-green-800">Thank you for your review! It has been submitted successfully.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                      <p className="text-red-800">
                        Sorry, there was an error submitting your review. Please try again.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600">
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Review
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Reviews List */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading reviews...</p>
            </div>
          ) : reviews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="mb-3">{renderStars(review.rating)}</div>

                    <p className="text-gray-600 italic">"{review.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No reviews yet. Be the first to share your experience!</p>
              <Button onClick={() => setShowForm(true)} className="bg-orange-500 hover:bg-orange-600">
                Write the First Review
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Sankalp Difference</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the families who have found hope, support, and success at Sankalp Special School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/contact">Schedule a Visit</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a href="/programs">View Our Programs</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
