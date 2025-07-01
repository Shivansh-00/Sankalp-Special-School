import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, BookOpen, Brain, MessageCircle, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Programs & Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive, individualized programs designed to support every aspect of your child's development
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Consultation Mode</h3>
                <p className="text-gray-600">In-person sessions</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Weekday Hours</h3>
                <p className="text-gray-600">Mon-Fri: 10:00 AM – 2:30 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Saturday Hours</h3>
                <p className="text-gray-600">Sat: 10:00 AM – 1:30 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Programs</h2>
            <p className="text-lg text-gray-600">Tailored services to meet diverse needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Special Education */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Special Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Individualized educational programs designed to meet each child's unique learning needs and abilities.
                </p>
                <ul className="space-y-2">
                  {[
                    "Customized curriculum development",
                    "One-on-one and small group instruction",
                    "Academic skill building",
                    "Life skills training",
                    "Behavioral support strategies",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Special education classroom"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
              </CardContent>
            </Card>

            {/* Therapy Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Therapy Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Comprehensive therapy services to support physical, cognitive, and emotional development.
                </p>
                <ul className="space-y-2">
                  {[
                    "Speech and language therapy",
                    "Occupational therapy",
                    "Physical therapy",
                    "Behavioral therapy",
                    "Sensory integration therapy",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Therapy session"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
              </CardContent>
            </Card>

            {/* Parental Counseling */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Parental Counseling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Support and guidance for families navigating the journey of raising a child with special needs.
                </p>
                <ul className="space-y-2">
                  {[
                    "Individual family consultations",
                    "Support group sessions",
                    "Home program development",
                    "Resource and referral services",
                    "Advocacy training",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Family counseling session"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Age-Specific Programs</h2>
            <p className="text-lg text-gray-600">Developmentally appropriate services for every stage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Early Intervention</h3>
                <p className="text-gray-600 mb-4">Ages 0-6 years</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Developmental assessments</li>
                  <li>• Early learning activities</li>
                  <li>• Family support services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎒</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">School Age</h3>
                <p className="text-gray-600 mb-4">Ages 6-14 years</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Academic skill development</li>
                  <li>• Social skills training</li>
                  <li>• Transition planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Adolescent</h3>
                <p className="text-gray-600 mb-4">Ages 14+ years</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vocational training</li>
                  <li>• Independent living skills</li>
                  <li>• Community integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Assessment Process</h2>
            <p className="text-lg text-gray-600">How we create personalized programs for your child</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    Meet with our team to discuss your child's needs and your family's goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">
                    Detailed evaluation of your child's strengths, challenges, and developmental needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Program Development</h3>
                  <p className="text-gray-600">
                    Create an individualized program tailored to your child's specific needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Implementation & Monitoring</h3>
                  <p className="text-gray-600">
                    Begin services and regularly review progress to ensure optimal outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Assessment and consultation process"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to schedule your initial consultation and learn more about our programs.
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
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
