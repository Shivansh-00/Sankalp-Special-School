import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Users,
  Heart,
  Star,
  Award,
  BookOpen,
  Brain,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4" />
                  18+ Years of Excellence
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Sankalp
                  <span className="block text-orange-600">Special School</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium">(for Children with Special Needs)</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold leading-relaxed">
                  Empowering Special Minds for a <span className="text-orange-600">Brighter Future</span>
                </h2>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                With 18 years of dedicated experience, we provide personalized care and education for children with
                special needs at minimal fees. Every child deserves the opportunity to reach their full potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 h-auto"
                >
                  <Link href="/about">
                    Discover Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent text-lg px-8 py-4 h-auto"
                >
                  <Link href="/contact">Schedule Visit</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-600 font-medium">500+ Families Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-600 font-medium">Minimal Fees</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Children learning at Sankalp Special School"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">18+</div>
                      <div className="text-sm text-gray-600">Years of Care</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs">Dedicated</div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="bg-orange-100 p-4 rounded-2xl">
                    <Clock className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation Hours</h3>
                    <p className="text-gray-600 font-medium">Mon-Fri: 10:00 AM – 2:30 PM</p>
                    <p className="text-gray-600 font-medium">Sat: 10:00 AM – 1:30 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Care</h3>
                    <p className="text-gray-600">Individual attention for every child's unique needs and abilities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="bg-green-100 p-4 rounded-2xl">
                    <Award className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Excellence</h3>
                    <p className="text-gray-600">18 years of dedicated service in Kanpur with outstanding results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Sankalp?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For 18 years, we have been dedicated to providing exceptional education and care for children with special
              needs, creating a nurturing environment where every child can thrive and reach their potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced Team</h3>
                    <p className="text-gray-600">
                      Our qualified professionals have years of experience in special education and therapy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Affordable Care</h3>
                    <p className="text-gray-600">
                      Quality education and therapy services at minimal fees, making it accessible to all families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Individual Attention</h3>
                    <p className="text-gray-600">
                      Personalized programs tailored to each child's specific needs and learning style.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4 h-auto">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="School facilities and caring environment"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Comprehensive Support</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide a full range of services designed to support your child's development and help them achieve
              their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Special Education",
                description:
                  "Customized learning programs tailored to each child's abilities, learning style, and developmental needs",
                icon: <BookOpen className="h-8 w-8" />,
                color: "blue",
                features: ["Individual Education Plans", "Adaptive Learning Methods", "Progress Tracking"],
              },
              {
                title: "Therapy Services",
                description:
                  "Comprehensive therapy including speech, occupational, and behavioral support for holistic development",
                icon: <Brain className="h-8 w-8" />,
                color: "green",
                features: ["Speech Therapy", "Occupational Therapy", "Behavioral Support"],
              },
              {
                title: "Family Support",
                description: "Guidance and counseling for families to create supportive environments at home",
                icon: <MessageCircle className="h-8 w-8" />,
                color: "orange",
                features: ["Parent Counseling", "Home Programs", "Family Workshops"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div
                    className={`bg-${service.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <div className={`text-${service.color}-600`}>{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className={`h-4 w-4 text-${service.color}-500`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8 py-4 h-auto">
              <Link href="/programs">
                Explore All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Families Say</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-700">5.0</span>
              <span className="text-lg text-gray-600">(Based on 50+ reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                text: "Sankalp has been a blessing for our family. The dedicated staff and personalized approach have helped our child grow tremendously. The progress we've seen is incredible.",
                rating: 5,
                role: "Parent of 8-year-old student",
              },
              {
                name: "Rajesh Kumar",
                text: "18 years of experience really shows in their approach. The care and attention our child receives here is exceptional. The fees are very reasonable for the quality of service.",
                rating: 5,
                role: "Parent of 12-year-old student",
              },
              {
                name: "Anita Singh",
                text: "The team at Sankalp truly understands special needs children. Their individualized programs and family support have made such a difference in our lives.",
                rating: 5,
                role: "Parent of 6-year-old student",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent text-lg px-8 py-4 h-auto"
            >
              <Link href="/reviews">
                Read All Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Child's Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards unlocking your child's potential. Contact us today to schedule a consultation
            and learn how we can support your family.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-lg">Call Us Today</h3>
                <p className="opacity-90">+91 XXXXX XXXXX</p>
                <p className="text-sm opacity-75">Mon-Fri: 10:00 AM – 2:30 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-lg">Email Us</h3>
                <p className="opacity-90">info@sankalpspecialschool.com</p>
                <p className="text-sm opacity-75">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-4 h-auto"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 bg-transparent text-lg px-8 py-4 h-auto"
            >
              <Link href="/admissions">View Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
