import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Professional DJ Setup"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Start Your Journey<br />Here
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Transform your vision into reality with Chicago's premier entertainment team.
              Let's discuss your perfect event.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-2 text-[#0B132B]">Start the Conversation</h2>
                <p className="text-[#1E1E1E]/80 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <div className="bg-[#E6D3B3]/10 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-8 text-[#0B132B]">Get in Touch</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-[#E6D3B3] p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-[#0B132B]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0B132B]">Phone</h4>
                        <a href="tel:224-216-4402" className="text-[#1E1E1E]/80 hover:text-[#B87D4B]">
                          224-216-4402
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#E6D3B3] p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-[#0B132B]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0B132B]">Email</h4>
                        <a href="mailto:info@nonstopentertainers.com" className="text-[#1E1E1E]/80 hover:text-[#B87D4B]">
                          info@nonstopentertainers.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#E6D3B3] p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-[#0B132B]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0B132B]">Service Area</h4>
                        <p className="text-[#1E1E1E]/80">
                          North Shore of Illinois<br />
                          8-mile radius from Winnetka
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-[#E6D3B3]/20">
                    <h4 className="font-semibold text-[#0B132B] mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com/nonstopentertainers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#E6D3B3] p-3 rounded-full hover:bg-[#B87D4B] transition-colors"
                      >
                        <Instagram className="h-5 w-5 text-[#0B132B]" />
                      </a>
                      <a
                        href="https://facebook.com/nonstopentertainers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#E6D3B3] p-3 rounded-full hover:bg-[#B87D4B] transition-colors"
                      >
                        <Facebook className="h-5 w-5 text-[#0B132B]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
