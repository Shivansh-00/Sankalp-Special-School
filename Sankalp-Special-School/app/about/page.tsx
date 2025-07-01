import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Sankalp Special School</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For 18 years, we have been a beacon of hope and learning for children with special needs, providing
              compassionate care and quality education in the heart of Kanpur.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in 2006, Sankalp Special School began with a simple yet powerful vision: to create a
                  nurturing environment where children with special needs could thrive, learn, and reach their full
                  potential.
                </p>
                <p>
                  Over the past 18 years, we have grown from a small initiative to a recognized institution in Kanpur,
                  serving hundreds of families and touching countless lives. Our commitment to providing quality
                  education at minimal fees has made specialized care accessible to families from all backgrounds.
                </p>
                <p>
                  What sets us apart is our unwavering dedication to personalized care. We believe that every child is
                  unique, with their own strengths, challenges, and potential. Our experienced team works closely with
                  each family to create individualized programs that address specific needs and goals.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Sankalp Special School building and children"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">18+</div>
                  <div className="text-sm">Years of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide comprehensive, individualized education and therapy services that empower children with
                  special needs to achieve their maximum potential and lead fulfilling lives in their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every child with special needs has access to quality education, support, and
                  opportunities to succeed in their unique journey, regardless of their family's economic background.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>• Compassion and empathy</li>
                  <li>• Individual dignity and respect</li>
                  <li>• Excellence in education</li>
                  <li>• Family-centered approach</li>
                  <li>• Accessibility and affordability</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Dedicated Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals committed to your child's success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "Director & Special Education Specialist",
                experience: "15+ years",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Rajesh Kumar",
                role: "Speech Therapist",
                experience: "12+ years",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Anita Singh",
                role: "Occupational Therapist",
                experience: "10+ years",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600">Modern, accessible spaces designed for learning and growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  "Fully accessible classrooms and therapy rooms",
                  "Sensory integration therapy space",
                  "Computer lab with assistive technology",
                  "Outdoor play area with adaptive equipment",
                  "Parent consultation rooms",
                  "Resource library for families",
                ].map((facility, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-700">{facility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=250"
                alt="Classroom facility"
                width={250}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=250"
                alt="Therapy room"
                width={250}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=250"
                alt="Play area"
                width={250}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=250"
                alt="Computer lab"
                width={250}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Child's Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn more about our programs and schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact">Schedule Consultation</Link>
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
