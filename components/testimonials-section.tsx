"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  content: string
  author: string
  position: string
  company: string
  image: string
  logo?: string
}

interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  className?: string
}

export function TestimonialsSection({ title = "What Our Clients Say", subtitle, className }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mb-12 text-gray-600">{subtitle}</p>}

          <div className="relative mt-12">
            {/* Testimonial Cards */}
            <div className="relative mx-auto h-[400px] w-full max-w-3xl overflow-hidden md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center transition-all duration-500 md:flex-row",
                    index === activeIndex
                      ? "translate-x-0 opacity-100"
                      : index < activeIndex
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0",
                  )}
                >
                  <div className="mb-6 flex flex-col items-center md:mb-0 md:w-1/3">
                    <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-aiva-blue/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80px, 80px"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm font-medium text-aiva-blue">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 md:pl-8">
                    <Quote className="mb-4 h-8 w-8 text-aiva-blue/20" />
                    <p className="mb-4 text-gray-600">{testimonial.content}</p>
                    {testimonial.logo && (
                      <div className="mt-4 flex justify-center md:justify-start">
                        <div className="relative h-8 w-32">
                          <Image
                            src={testimonial.logo || "/placeholder.svg"}
                            alt={`${testimonial.company} logo`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 128px, 128px"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === activeIndex ? "bg-aiva-blue w-6" : "bg-gray-300",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "AIVA Solutions transformed our construction tendering process with their AI-powered bid optimization system. We've seen a 30% increase in successful bids and saved countless hours on paperwork. Their understanding of Zimbabwe's construction sector made all the difference.",
    author: "Tatenda Moyo",
    position: "Operations Director",
    company: "BuildTech Zimbabwe",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "The smart irrigation system AIVA developed for our farm has been a game-changer. Even with Zimbabwe's unpredictable power supply, their edge AI solution works reliably and has helped us reduce water usage by 40% while improving crop yields. Their team's technical expertise combined with agricultural knowledge is impressive.",
    author: "Chiedza Mutasa",
    position: "Farm Manager",
    company: "Green Horizons Farms",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "As a government ministry, we needed a secure, reliable system that could work with our existing infrastructure. AIVA Solutions delivered a digital transformation that exceeded our expectations. Their team understood our unique challenges and developed solutions that work specifically for Zimbabwe's public sector needs.",
    author: "Dr. Simba Nyamadzawo",
    position: "Director of IT",
    company: "Ministry of Digital Transformation",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    content:
      "AIVA's training program has significantly upskilled our development team. Their workshops on AI and machine learning were tailored to our specific needs and delivered in a way that made complex concepts accessible. We're now implementing AI solutions in-house thanks to their capacity building program.",
    author: "Rudo Chikwanha",
    position: "CTO",
    company: "ZimTech Solutions",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    content:
      "The mobile banking app AIVA developed for us works flawlessly even in areas with poor connectivity - a critical requirement for our rural customers. Their understanding of Zimbabwe's unique mobile money ecosystem and technical challenges resulted in a solution that's truly made for our market.",
    author: "Farai Manyika",
    position: "Head of Digital Banking",
    company: "Unity Financial Services",
    image: "/placeholder.svg?height=80&width=80",
  },
]
