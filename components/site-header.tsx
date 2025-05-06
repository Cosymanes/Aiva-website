"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-gray-800">
          <Image src="/images/aiva-logo.png" alt="AIVA Solutions Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-aiva-blue transition-colors hover:text-aiva-blue/80"
          >
            Services
          </Link>
          <Link href="/about" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
            About Us
          </Link>
          <Link href="/case-studies" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
            Case Studies
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 transition-colors hover:text-gray-800">
            Contact
          </Link>
          <Button variant="default">Get Started</Button>
        </nav>

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
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors hover:text-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-aiva-blue transition-colors hover:text-aiva-blue/80"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-600 transition-colors hover:text-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/case-studies"
            className="text-sm text-gray-600 transition-colors hover:text-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-600 transition-colors hover:text-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Button variant="default" className="w-full" onClick={() => setMenuOpen(false)}>
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
