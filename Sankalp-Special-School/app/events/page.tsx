import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Parent Workshop: Understanding Autism",
      date: "2024-02-15",
      time: "10:00 AM - 12:00 PM",
      location: "School Auditorium",
      description:
        "Interactive workshop for parents to better understand autism spectrum disorders and support strategies.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Workshop",
    },
    {
      title: "Annual Sports Day",
      date: "2024-02-28",
      time: "9:00 AM - 3:00 PM",
      location: "School Playground",
      description: "Celebrating abilities through adaptive sports and fun activities for all our students.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Sports",
    },
    {
      title: "Art Exhibition: Creative Expressions",
      date: "2024-03-10",
      time: "11:00 AM - 4:00 PM",
      location: "School Gallery",
      description: "Showcasing the artistic talents of our students through paintings, crafts, and creative works.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Arts",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Events & Activities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for workshops, celebrations, and community events that bring families together and support our
              mission.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don't miss these exciting upcoming activities</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-4">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't miss out on our events and activities. Contact us to stay informed about upcoming programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
