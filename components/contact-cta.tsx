import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

interface ContactCTAProps {
  title?: string
  description?: string
  showForm?: boolean
  className?: string
}

export function ContactCTA({
  title = "Ready to Transform Your Business?",
  description = "Let AIVA Solutions help you leverage cutting-edge technology to solve real challenges in Zimbabwe.",
  showForm = false,
  className,
}: ContactCTAProps) {
  return (
    <section className={`bg-aiva-blue/5 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {showForm ? (
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>
              <p className="mx-auto max-w-2xl text-gray-600">{description}</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">{description}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
