"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { apiClient } from "@/lib/api-client"
import { useFormSubmission } from "@/hooks/use-form-submission"
import type { AdmissionInquiry } from "@/lib/types"

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    childCondition: "",
    previousSchool: "",
    message: "",
  })

  const { submit, isSubmitting, submitStatus, errorMessage, reset } = useFormSubmission(
    (data: Omit<AdmissionInquiry, "id" | "date" | "status">) => apiClient.submitAdmissionInquiry(data),
    {
      onSuccess: () => {
        setFormData({
          parentName: "",
          email: "",
          phone: "",
          childName: "",
          childAge: "",
          childCondition: "",
          previousSchool: "",
          message: "",
        })
      },
    },
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitStatus !== "idle") reset()
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitStatus !== "idle") reset()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submit(formData)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Admission Inquiry Form</CardTitle>
        <p className="text-gray-600">Please fill out this form to begin the admission process for your child.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                Parent/Guardian Name *
              </label>
              <Input
                id="parentName"
                name="parentName"
                type="text"
                required
                value={formData.parentName}
                onChange={handleInputChange}
                placeholder="Enter parent/guardian name"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                Child's Name *
              </label>
              <Input
                id="childName"
                name="childName"
                type="text"
                required
                value={formData.childName}
                onChange={handleInputChange}
                placeholder="Enter child's name"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                Child's Age *
              </label>
              <Select onValueChange={(value) => handleSelectChange("childAge", value)} disabled={isSubmitting}>
                <SelectTrigger>
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-3">0-3 years</SelectItem>
                  <SelectItem value="3-6">3-6 years</SelectItem>
                  <SelectItem value="6-12">6-12 years</SelectItem>
                  <SelectItem value="12-18">12-18 years</SelectItem>
                  <SelectItem value="18+">18+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-2">
                Previous School (if any)
              </label>
              <Input
                id="previousSchool"
                name="previousSchool"
                type="text"
                value={formData.previousSchool}
                onChange={handleInputChange}
                placeholder="Enter previous school name"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="childCondition" className="block text-sm font-medium text-gray-700 mb-2">
              Child's Condition/Special Needs *
            </label>
            <Textarea
              id="childCondition"
              name="childCondition"
              required
              value={formData.childCondition}
              onChange={handleInputChange}
              placeholder="Please describe your child's condition, diagnosis, or special needs..."
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your goals for your child, any specific concerns, or questions you have..."
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="text-green-800">
                Thank you! Your admission inquiry has been submitted successfully. We'll contact you within 2 business
                days to schedule a consultation.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="text-red-800">
                {errorMessage ||
                  "Sorry, there was an error submitting your inquiry. Please try again or call us directly."}
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit Admission Inquiry
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
