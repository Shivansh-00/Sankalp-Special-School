"use client"

import { useState } from "react"
import type { ApiResponse } from "@/lib/types"

interface UseFormSubmissionOptions {
  onSuccess?: (data: any) => void
  onError?: (error: string) => void
  resetOnSuccess?: boolean
}

export function useFormSubmission<T>(
  submitFn: (data: T) => Promise<ApiResponse>,
  options: UseFormSubmissionOptions = {},
) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const submit = async (data: T) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await submitFn(data)

      if (response.success) {
        setSubmitStatus("success")
        options.onSuccess?.(response.data)
      } else {
        setSubmitStatus("error")
        setErrorMessage(response.error || response.message)
        options.onError?.(response.error || response.message)
      }
    } catch (error) {
      setSubmitStatus("error")
      const errorMsg = error instanceof Error ? error.message : "An unexpected error occurred"
      setErrorMessage(errorMsg)
      options.onError?.(errorMsg)
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setSubmitStatus("idle")
    setErrorMessage("")
  }

  return {
    submit,
    isSubmitting,
    submitStatus,
    errorMessage,
    reset,
  }
}
