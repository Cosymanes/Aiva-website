import { Mail, MapPin, Phone } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapComponent } from "@/components/map-component"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Get in Touch</h1>
            <p className="mb-6 text-lg text-gray-600">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-aiva-blue/10">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-aiva-blue/10 text-aiva-blue">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Visit Us</h3>
                <p className="text-gray-600">
                  123 Innovation Drive
                  <br />
                  Harare, Zimbabwe
                </p>
              </CardContent>
            </Card>

            <Card className="border-aiva-blue/10">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-aiva-blue/10 text-aiva-blue">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">
                  info@aivasolutions.com
                  <br />
                  support@aivasolutions.com
                </p>
              </CardContent>
            </Card>

            <Card className="border-aiva-blue/10">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-aiva-blue/10 text-aiva-blue">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">
                  +263 123 456 789
                  <br />
                  Mon-Fri, 8am-5pm CAT
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you within 24-48 hours.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Our Location</h2>
              <p className="text-gray-600">Visit our office in Harare, Zimbabwe</p>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <MapComponent className="h-[400px] md:h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mb-8 text-gray-600">
              Find quick answers to common questions about working with AIVA Solutions
            </p>

            <div className="grid gap-6 text-left">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">What is the typical project timeline?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on complexity and scope. A simple web application might take 4-8 weeks,
                  while more complex AI solutions can take 3-6 months. We'll provide a detailed timeline during our
                  initial consultation.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Do you offer support after project completion?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer various support and maintenance packages to ensure your solution continues to run
                  smoothly. Our standard support includes 3 months of post-launch support, with options to extend.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  How do you handle projects with connectivity challenges?
                </h3>
                <p className="text-gray-600">
                  We design all our solutions with Zimbabwe's connectivity challenges in mind. This includes
                  offline-first approaches, low-bandwidth optimizations, and resilient architecture that can handle
                  intermittent connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
