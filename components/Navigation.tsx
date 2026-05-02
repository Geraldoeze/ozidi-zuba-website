'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
// import ThemeSwitcher from './ThemeSwitcher' // TODO: Re-enable when theme system is fixed

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg"
                alt="Ozidi Zuba in Kubwa"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm md:text-base font-bold text-primary">OZIDI ZUBA</span>
              <span className="text-xs text-muted-foreground">Auto Parts Center</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* <ThemeSwitcher /> */}
            <a
              href="https://wa.me/234..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg text-sm font-medium"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down border-t border-border/40 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg hover:bg-card text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <a
                href="https://wa.me/234..."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-center font-medium text-sm"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
