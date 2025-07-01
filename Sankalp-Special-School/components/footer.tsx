import Link from "next/link"
import { Heart, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Sankalp</span>
                <span className="text-sm text-gray-300 block leading-none">Special School</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering special minds for a brighter future. 18 years of dedicated service to children with special
              needs in Kanpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Admissions", href: "/admissions" },
                { name: "Gallery", href: "/gallery" },
                { name: "Events", href: "/events" },
                { name: "Resources", href: "/resources" },
                { name: "Reviews", href: "/reviews" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  121/396, Shastri Nagar, Behind C L Memorial Nursing Home, Kanpur, UP 208005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300 text-sm">info@sankalpspecialschool.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="text-gray-300 text-sm space-y-1 mb-6">
              <p>Mon - Fri: 10:00 AM – 2:30 PM</p>
              <p>Saturday: 10:00 AM – 1:30 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Sankalp Special School. All rights reserved. Made with ❤️ for special children
            and their families.
          </p>
        </div>
      </div>
    </footer>
  )
}
