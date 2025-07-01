import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, BookOpen, FileText, Video, Headphones } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Understanding Special Needs",
      description: "Comprehensive guide for parents and caregivers",
      type: "PDF Guide",
      icon: <BookOpen className="h-6 w-6" />,
      category: "Guides",
    },
    {
      title: "Home Therapy Activities",
      description: "Simple exercises you can do at home with your child",
      type: "Activity Sheet",
      icon: <FileText className="h-6 w-6" />,
      category: "Activities",
    },
    {
      title: "Communication Strategies",
      description: "Effective ways to communicate with children with special needs",
      type: "Video Tutorial",
      icon: <Video className="h-6 w-6" />,
      category: "Videos",
    },
    {
      title: "Sensory Play Ideas",
      description: "Creative sensory activities for development",
      type: "PDF Guide",
      icon: <BookOpen className="h-6 w-6" />,
      category: "Activities",
    },
    {
      title: "Behavioral Support Tips",
      description: "Managing challenging behaviors with positive strategies",
      type: "Audio Guide",
      icon: <Headphones className="h-6 w-6" />,
      category: "Support",
    },
    {
      title: "IEP Planning Worksheet",
      description: "Template for Individual Education Program planning",
      type: "Worksheet",
      icon: <FileText className="h-6 w-6" />,
      category: "Planning",
    },
  ]

  const externalLinks = [
    {
      title: "National Institute for Empowerment of Persons with Disabilities",
      description: "Government resources and support services",
      url: "https://niepvd.nic.in/",
      category: "Government",
    },
    {
      title: "Autism Society of India",
      description: "Support and advocacy for autism spectrum disorders",
      url: "https://www.autismsocietyindia.org/",
      category: "Organizations",
    },
    {
      title: "Special Olympics Bharat",
      description: "Sports and recreation opportunities",
      url: "https://www.specialolympicsbharat.org/",
      category: "Sports",
    },
    {
      title: "Action for Autism",
      description: "Resources and training for autism support",
      url: "https://www.autism-india.org/",
      category: "Organizations",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Resources & Downloads</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access helpful guides, activities, and tools to support your child's development at home and in the
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Downloadable Resources</h2>
            <p className="text-lg text-gray-600">Free resources to support your child's journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <div className="text-teal-600">{resource.icon}</div>
                    </div>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">{resource.category}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-800">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.type}</span>
                    <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Helpful Links</h2>
            <p className="text-lg text-gray-600">Additional resources and organizations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {externalLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{link.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{link.category}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-blue-600 bg-transparent"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to receive new resources and updates directly in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
