import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Children in classroom learning",
      title: "Classroom Activities",
      category: "Education",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Therapy session in progress",
      title: "Therapy Sessions",
      category: "Therapy",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Outdoor play activities",
      title: "Outdoor Activities",
      category: "Recreation",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Art and craft session",
      title: "Creative Arts",
      category: "Arts",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Music therapy session",
      title: "Music Therapy",
      category: "Therapy",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "School building exterior",
      title: "School Building",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Computer lab session",
      title: "Technology Learning",
      category: "Education",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Parent counseling session",
      title: "Parent Support",
      category: "Support",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Group activities",
      title: "Social Skills",
      category: "Development",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Photo Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take a glimpse into daily life at Sankalp Special School - where learning, growth, and joy come together.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600">Capturing moments of growth and learning</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to See More?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a visit to experience our facilities and programs firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Schedule Visit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
