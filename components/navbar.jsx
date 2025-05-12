"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0B132B] ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar - Only visible on desktop */}
        <div className="hidden md:flex justify-end items-center text-white mb-2 text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:224-216-4402" className="flex items-center hover:text-[#E6D3B3] transition-colors">
              <Phone size={14} className="mr-2" />
              <span>224-216-4402</span>
            </a>
            <a href="mailto:info@nonstopentertainers.com" className="flex items-center hover:text-[#E6D3B3] transition-colors">
              <Mail size={14} className="mr-2" />
              <span>info@nonstopentertainers.com</span>
            </a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/Logo.jpg"
              alt="Non-Stop Entertainment - Professional DJ and MC Services Logo"
              width={200}
              height={55}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                isActive("/") ? "text-[#E6D3B3]" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              href="/services"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                isActive("/services") ? "text-[#E6D3B3]" : ""
              }`}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                isActive("/about") ? "text-[#E6D3B3]" : ""
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/testimonials"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                isActive("/testimonials") ? "text-[#E6D3B3]" : ""
              }`}
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/content"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                isActive("/content") ? "text-[#E6D3B3]" : ""
              }`}
            >
              CONTENT
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                asChild 
                variant="ghost"
                className="!bg-[#E6D3B3] hover:!bg-[#3A6EA5] !text-[#0A1128] hover:!text-white !border-2 !border-transparent hover:!border-[#E6D3B3] transition-all"
              >
                <Link href="/get-a-quote">GET A QUOTE</Link>
              </Button>
              <Button
                variant="ghost"
                size="default"
                className="!bg-transparent hover:!bg-[#E6D3B3]/10 !text-white hover:!text-[#E6D3B3] !border !border-[#E6D3B3]/30 hover:!border-[#E6D3B3] transition-all"
                onClick={() => window.location.href = '/login'}
              >
                <LogIn size={16} className="mr-2" />
                Log In
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#E6D3B3] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                  isActive("/") ? "text-[#E6D3B3]" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/services"
                className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                  isActive("/services") ? "text-[#E6D3B3]" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                  isActive("/about") ? "text-[#E6D3B3]" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/testimonials"
                className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                  isActive("/testimonials") ? "text-[#E6D3B3]" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
              <Link
                href="/content"
                className={`text-white font-bold hover:text-[#E6D3B3] transition-colors ${
                  isActive("/content") ? "text-[#E6D3B3]" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTENT
              </Link>
              <Button 
                asChild 
                variant="ghost"
                className="!bg-[#E6D3B3] hover:!bg-[#3A6EA5] !text-[#0A1128] hover:!text-white !border-2 !border-transparent hover:!border-[#E6D3B3] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/get-a-quote">GET A QUOTE</Link>
              </Button>
              <Button
                variant="ghost"
                size="default"
                className="!bg-transparent hover:!bg-[#E6D3B3]/10 !text-white hover:!text-[#E6D3B3] !border !border-[#E6D3B3]/30 hover:!border-[#E6D3B3] transition-all"
                onClick={() => {
                  window.location.href = '/login';
                  setMobileMenuOpen(false);
                }}
              >
                <LogIn size={16} className="mr-2" />
                Log In
              </Button>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <a 
                  href="tel:224-216-4402" 
                  className="flex items-center text-white hover:text-[#E6D3B3] transition-colors mb-2"
                >
                  <Phone size={14} className="mr-2" />
                  <span>224-216-4402</span>
                </a>
                <a 
                  href="mailto:info@nonstopentertainers.com" 
                  className="flex items-center text-white hover:text-[#E6D3B3] transition-colors"
                >
                  <Mail size={14} className="mr-2" />
                  <span>info@nonstopentertainers.com</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}