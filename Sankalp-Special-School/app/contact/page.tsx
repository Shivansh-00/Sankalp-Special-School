import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"
import LeafletMap from "@/components/leaflet-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you and your child. Reach out to us for consultations, questions, or to learn more
              about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We welcome you to visit our school, meet our team, and see how we can support your child's unique
                  journey. Contact us to schedule a consultation or ask any questions you may have.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Sankalp Special School
                          <br />
                          121/396, Shastri Nagar
                          <br />
                          Behind C L Memorial Nursing Home
                          <br />
                          Kanpur, Uttar Pradesh, India 208005
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600">+91 XXXXX XXXXX</p>
                        <p className="text-sm text-gray-500 mt-1">Call during consultation hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">info@sankalpspecialschool.com</p>
                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-purple-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Consultation Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 10:00 AM – 2:30 PM</p>
                          <p>Saturday: 10:00 AM – 1:30 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Located in the heart of Kanpur for easy accessibility</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96">
              <LeafletMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
