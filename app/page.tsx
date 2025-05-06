"use client"

import { Suspense, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { Environment, PresentationControls } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Dynamically import the 3D scene to avoid SSR issues
const Scene = dynamic(() => import("@/components/scene"), { ssr: false })

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 text-gray-800">
            <Image src="/images/aiva-logo.png" alt="AIVA Solutions Logo" width={120} height={40} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="#solutions" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
              Solutions
            </Link>
            <Link href="#about" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
              About Us
            </Link>
            <Link href="#services" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
              Services
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
              Contact
            </Link>
            <Button variant="default">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block text-gray-800 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute z-40 w-full bg-white/90 p-4 backdrop-blur-lg border-b shadow-md transition-all duration-300 md:hidden",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
          )}
        >
          <div className="flex flex-col gap-4">
            <Link
              href="#solutions"
              className="text-sm text-gray-600 transition-colors hover:text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#about"
              className="text-sm text-gray-600 transition-colors hover:text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-sm text-gray-600 transition-colors hover:text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 transition-colors hover:text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="default" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* 3D Hero Section */}
      <section className="relative h-screen w-full bg-white">
        {/* 3D Canvas - Positioned behind the content */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Suspense fallback={null}>
              <PresentationControls
                global
                zoom={0.8}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              >
                <Scene />
              </PresentationControls>
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Overlay Content - Positioned above the 3D scene with a semi-transparent background */}
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <div className="rounded-xl bg-white/70 backdrop-blur-sm p-8 max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Transforming Business with <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Intelligent AI Solutions
              </span>
            </h1>
            <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600">
              AIVA Solutions delivers cutting-edge artificial intelligence technologies that drive innovation and growth
              for enterprises worldwide.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button size="lg" className="min-w-[150px]">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="min-w-[150px]">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 z-10">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Our AI Solutions</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:scale-105"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">About AIVA Solutions</h2>
            <p className="mb-8 text-gray-600">
              AIVA Solutions is at the forefront of artificial intelligence innovation, creating transformative
              technologies that empower businesses to achieve unprecedented efficiency and growth. Our team of experts
              combines deep AI knowledge with industry expertise to deliver solutions that matter.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize artificial intelligence and make it accessible to businesses of all sizes.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  A world where AI enhances human potential and creates sustainable business solutions.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, integrity, collaboration, and a relentless pursuit of excellence in all we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Ready to Transform Your Business?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Join the hundreds of companies already leveraging AIVA Solutions to drive innovation and growth.
          </p>
          <Button size="lg" className="min-w-[200px]">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/aiva-logo.png" alt="AIVA Solutions Logo" width={120} height={40} />
            </Link>
            <div className="flex gap-8">
              <Link href="#solutions" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
                Solutions
              </Link>
              <Link href="#about" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
                About Us
              </Link>
              <Link href="#services" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
                Services
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AIVA Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Sample solutions data
const solutions = [
  {
    title: "Predictive Analytics",
    description:
      "Leverage advanced machine learning algorithms to predict market trends and customer behavior with unparalleled accuracy.",
    icon: HexagonIcon,
  },
  {
    title: "Natural Language Processing",
    description: "Transform how you understand and interact with text data through our state-of-the-art NLP solutions.",
    icon: HexagonIcon,
  },
  {
    title: "Computer Vision",
    description:
      "See the world through AI with our computer vision technology that can analyze, interpret, and act on visual data.",
    icon: HexagonIcon,
  },
  {
    title: "Conversational AI",
    description:
      "Create natural, engaging digital experiences with our conversational AI platforms for customer service and engagement.",
    icon: HexagonIcon,
  },
  {
    title: "Decision Intelligence",
    description: "Enhance decision-making processes with AI-powered insights that drive strategic business outcomes.",
    icon: HexagonIcon,
  },
  {
    title: "Custom AI Solutions",
    description: "We develop bespoke AI solutions tailored to your unique business challenges and objectives.",
    icon: HexagonIcon,
  },
]

// Custom hexagon icon to match the logo's hexagonal pattern
function HexagonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}
