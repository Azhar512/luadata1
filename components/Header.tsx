"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container py-4 min-h-[80px]">
          <div className="flex justify-between items-center">
            <div className="relative">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">LuaData</span>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-dot"></div>
              </Link>
            </div>

            <ul className="hidden md:flex gap-8">
              <li>
                <Link
                  href="#services"
                  className="relative font-medium text-text-primary hover:text-primary transition-colors duration-300 py-2 px-4"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#solutions"
                  className="relative font-medium text-text-primary hover:text-primary transition-colors duration-300 py-2 px-4"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="relative font-medium text-text-primary hover:text-primary transition-colors duration-300 py-2 px-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="relative font-medium text-text-primary hover:text-primary transition-colors duration-300 py-2 px-4"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 py-2 px-6 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get Started
              </Link>
              <button
                className="md:hidden flex flex-col gap-1 p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="#services"
              className="block py-3 px-4 text-lg font-medium text-text-primary hover:text-primary border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#solutions"
              className="block py-3 px-4 text-lg font-medium text-text-primary hover:text-primary border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block py-3 px-4 text-lg font-medium text-text-primary hover:text-primary border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block py-3 px-4 text-lg font-medium text-text-primary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-6">
          <Link
            href="#contact"
            className="block w-full py-3 text-center bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </>
  )
}

export default Header
