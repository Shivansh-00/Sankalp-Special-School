import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sankalp Special School - Empowering Special Minds for a Brighter Future",
  description:
    "Sankalp Special School in Kanpur provides quality education and care for children with special needs. 18 years of experience, minimal fees, personalized attention.",
  keywords: "special needs education, Kanpur, special school, therapy, special education, children with disabilities",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
