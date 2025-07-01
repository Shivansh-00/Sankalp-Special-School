import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Calendar, Users, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AdmissionForm from "@/components/forms/admission-form"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Admissions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Begin your child's journey with us. Our admission process is designed to understand your child's unique
              needs and create the best learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AdmissionForm />
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600">Simple steps to join our school family</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Inquiry",
                description: "Fill out our admission form with your child's details and needs.",
                icon: <FileText className="h-8 w-8" />,
                color: "blue",
              },
              {
                step: "2",
                title: "Initial Consultation",
                description: "We'll contact you to schedule a consultation and school visit.",
                icon: <Calendar className="h-8 w-8" />,
                color: "green",
              },
              {
                step: "3",
                title: "Assessment",
                description: "Comprehensive evaluation of your child's needs and abilities.",
                icon: <Users className="h-8 w-8" />,
                color: "orange",
              },
              {
                step: "4",
                title: "Enrollment",
                description: "Complete documentation and begin your child's journey with us.",
                icon: <CheckCircle className="h-8 w-8" />,
                color: "purple",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div
                    className={`bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <div className={`text-${item.color}-600`}>{item.icon}</div>
                  </div>
                  <div
                    className={`bg-${item.color}-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Admission Requirements</h2>
              <div className="space-y-4">
                {[
                  "Child's birth certificate",
                  "Medical records and reports",
                  "Previous school records (if applicable)",
                  "Recent photographs",
                  "Parent/guardian identification",
                  "Assessment reports from specialists",
                  "Vaccination records",
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Children learning together"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 px-4 bg-orange-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Admissions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us directly if you have questions about the admission process.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="opacity-90">+91 XXXXX XXXXX</p>
                <p className="text-sm opacity-75">Mon-Fri: 10:00 AM – 2:30 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="opacity-90">info@sankalpspecialschool.com</p>
                <p className="text-sm opacity-75">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact">Schedule Visit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
