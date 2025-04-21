"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0B132B] ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar - Only visible on desktop */}
        <div className="hidden md:flex justify-between items-center text-white mb-2 text-sm">
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <Button
              variant="ghost"
              size="sm"
              className="!bg-transparent hover:!bg-[#E6D3B3]/10 !text-white hover:!text-[#E6D3B3] !border !border-[#E6D3B3]/30 hover:!border-[#E6D3B3] transition-all"
              onClick={() => window.location.href = '/login'}
            >
              <LogIn size={14} className="mr-2" />
              Log In
            </Button>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center hover:text-[#E6D3B3] transition-colors">
              <Phone size={14} className="mr-2" />
              <span>224-216-4402</span>
            </div>
            <div className="flex items-center hover:text-[#E6D3B3] transition-colors">
              <Mail size={14} className="mr-2" />
              <span>info@nonstopentertainers.com</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 mr-8">
            <div className="relative h-10">
              <div className="text-white font-bold text-xl hover:text-[#E6D3B3] transition-colors whitespace-nowrap">NONSTOP ENTERTAINMENT</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 flex-grow justify-end">
            <Link
              href="/"
              className="text-white font-bold hover:text-[#E6D3B3] transition-colors whitespace-nowrap">
              HOME
            </Link>
            <Link
              href="/services"
              className="text-white font-bold hover:text-[#E6D3B3] transition-colors whitespace-nowrap">
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-white font-bold hover:text-[#E6D3B3] transition-colors whitespace-nowrap">
              ABOUT
            </Link>
            <Link
              href="/testimonials"
              className="text-white font-bold hover:text-[#E6D3B3] transition-colors whitespace-nowrap">
              TESTIMONIALS
            </Link>
            <Link
              href="/contact"
              className="text-white font-bold hover:text-[#E6D3B3] transition-colors whitespace-nowrap">
              CONTACT
            </Link>
            {/* Desktop Quote Button */}
            <Button 
              asChild 
              variant="ghost"
              className="!bg-[#E6D3B3] hover:!bg-[#3A6EA5] !text-[#0A1128] hover:!text-white !border-2 !border-transparent hover:!border-[#E6D3B3] transition-all whitespace-nowrap">
              <a
                href="https://non-stop-entertainment.checkcherry.com/contact/8038"
                target="_blank"
                rel="noopener noreferrer">
                GET A QUOTE
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#E6D3B3] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors py-2 ${isActive("/") ? "text-[#E6D3B3]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link
              href="/services"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors py-2 ${isActive("/services") ? "text-[#E6D3B3]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}>
              DJ SERVICES
            </Link>
            <Link
              href="/about"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors py-2 ${isActive("/about") ? "text-[#E6D3B3]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}>
              ABOUT US
            </Link>
            <Link
              href="/testimonials"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors py-2 ${isActive("/testimonials") ? "text-[#E6D3B3]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}>
              TESTIMONIALS
            </Link>
            <Link
              href="/contact"
              className={`text-white font-bold hover:text-[#E6D3B3] transition-colors py-2 ${isActive("/contact") ? "text-[#E6D3B3]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </Link>
            {/* Mobile Quote Button */}
            <Button 
              asChild 
              variant="ghost"
              className="!bg-[#E6D3B3] hover:!bg-[#3A6EA5] !text-[#0A1128] hover:!text-white !border-2 !border-transparent hover:!border-[#E6D3B3] transition-all w-full"
              onClick={() => setMobileMenuOpen(false)}>
              <a
                href="https://non-stop-entertainment.checkcherry.com/contact/8038"
                target="_blank"
                rel="noopener noreferrer">
                GET A QUOTE
              </a>
            </Button>

            {/* Add Login Button to Mobile Menu */}
            <Button 
              variant="ghost"
              className="!bg-transparent hover:!bg-[#E6D3B3]/10 !text-white hover:!text-[#E6D3B3] !border !border-[#E6D3B3]/30 hover:!border-[#E6D3B3] transition-all w-full"
              onClick={() => window.location.href = '/login'}
            >
              <LogIn size={18} className="mr-2" />
              Log In
            </Button>

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-white/20 mt-4 text-white text-sm">
              <div className="flex items-center mb-2 hover:text-[#E6D3B3] transition-colors">
                <Phone size={14} className="mr-2" />
                <span>224-216-4402</span>
              </div>
              <div className="flex items-center hover:text-[#E6D3B3] transition-colors">
                <Mail size={14} className="mr-2" />
                <span>info@nonstopentertainers.com</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}