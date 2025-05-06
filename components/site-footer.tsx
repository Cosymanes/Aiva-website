import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image src="/images/aiva-logo.png" alt="AIVA Solutions Logo" width={120} height={40} />
            </Link>
            <p className="mb-4 text-gray-600">
              Delivering cutting-edge AI and software solutions tailored for the Zimbabwean market.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-aiva-blue">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-aiva-blue">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-aiva-blue">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-aiva-blue">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-aiva-blue">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-aiva-blue">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-aiva-blue">
                  Web & Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-aiva-blue">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-aiva-blue">
                  DevOps & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-aiva-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-aiva-blue">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-aiva-blue">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-aiva-blue">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-aiva-blue">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-aiva-blue" />
                <span className="text-gray-600">Harare, Zimbabwe</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-aiva-blue" />
                <span className="text-gray-600">+263 123 456 789</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-aiva-blue" />
                <span className="text-gray-600">info@aivasolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} AIVA Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
