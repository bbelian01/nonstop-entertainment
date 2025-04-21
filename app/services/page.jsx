import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Music, Users, Calendar, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#E6D3B3]">
        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-[#0A1128] leading-tight">
                ELEVATE 
                <br className="hidden md:block" />
                YOUR EVENT
              </h1>
              <p className="text-2xl md:text-3xl text-[#0A1128]/90 font-light max-w-2xl mx-auto">
                Professional DJ Services for Sophisticated Celebrations
              </p>
              <div className="w-24 h-1 bg-[#0A1128] mx-auto mt-8"></div>
        </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1128] leading-tight">
                  CRAFTING UNFORGETTABLE MOMENTS
                </h2>
                <div className="w-20 h-1 bg-[#E6D3B3]"></div>
            <p className="text-xl text-[#1E1E1E] leading-relaxed">
                  We specialize in delivering sophisticated entertainment for upscale adult events. Our expert DJs create the perfect atmosphere for your celebration.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#E6D3B3] rounded-full"></div>
                    <span className="text-lg text-[#1E1E1E]">Corporate Galas & Events</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#E6D3B3] rounded-full"></div>
                    <span className="text-lg text-[#1E1E1E]">Milestone Celebrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#E6D3B3] rounded-full"></div>
                    <span className="text-lg text-[#1E1E1E]">Upscale Private Parties</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#DCE0E6] p-8 rounded-lg">
                    <h3 className="text-4xl font-bold text-[#0A1128] mb-2">8+</h3>
                    <p className="text-[#1E1E1E]">Years of Experience</p>
                  </div>
                  <div className="bg-[#E6D3B3] p-8 rounded-lg">
                    <h3 className="text-4xl font-bold text-[#0A1128] mb-2">500+</h3>
                    <p className="text-[#0A1128]">Events Completed</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-[#0A1128] p-8 rounded-lg">
                    <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                    <p className="text-white">Client Satisfaction</p>
                  </div>
                  <div className="bg-[#DCE0E6] p-8 rounded-lg">
                    <h3 className="text-4xl font-bold text-[#0A1128] mb-2">20+</h3>
                    <p className="text-[#1E1E1E]">Venues Partnered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-[#DCE0E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0A1128]">WHY CHOOSE US</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Music className="h-12 w-12 text-[#E6D3B3]" />
            </div>
              <h3 className="text-xl font-bold mb-4 text-[#0A1128]">CURATED MUSIC</h3>
              <p className="text-[#1E1E1E]">
                Expertly crafted playlists tailored to your event's atmosphere and guest preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Users className="h-12 w-12 text-[#E6D3B3]" />
          </div>
              <h3 className="text-xl font-bold mb-4 text-[#0A1128]">SKILLED EMCEES</h3>
              <p className="text-[#1E1E1E]">
                Professional announcements and elegant event coordination throughout your celebration.
              </p>
          </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Award className="h-12 w-12 text-[#E6D3B3]" />
            </div>
              <h3 className="text-xl font-bold mb-4 text-[#0A1128]">PREMIUM EQUIPMENT</h3>
              <p className="text-[#1E1E1E]">
                State-of-the-art sound systems and lighting to create the perfect ambiance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Calendar className="h-12 w-12 text-[#E6D3B3]" />
          </div>
              <h3 className="text-xl font-bold mb-4 text-[#0A1128]">SEAMLESS PLANNING</h3>
              <p className="text-[#1E1E1E]">
                Detailed coordination with your venue and vendors for a stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0A1128]">OUR EXPERTISE</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Corporate Events */}
            <div className="bg-[#DCE0E6] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/corporate.jpg"
                  alt="Corporate event"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#0A1128]">CORPORATE EVENTS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Holiday celebrations & team events
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Professional atmosphere management
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Elegant corporate entertainment
                  </li>
                </ul>
              </div>
            </div>

            {/* Private Celebrations */}
            <div className="bg-[#DCE0E6] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/private.jpg"
                  alt="Private celebration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#0A1128]">PRIVATE CELEBRATIONS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Milestone birthdays & anniversaries
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Customized music selection
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Special moment coordination
                  </li>
                </ul>
              </div>
            </div>

            {/* Galas & Fundraisers */}
            <div className="bg-[#DCE0E6] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/gala.jpg"
                  alt="Gala event"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#0A1128]">GALAS & FUNDRAISERS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Sophisticated event management
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Auction & program coordination
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Professional sound setup
                  </li>
                </ul>
              </div>
            </div>

            {/* Upscale Social Events */}
            <div className="bg-[#DCE0E6] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/social.jpg"
                  alt="Social event"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#0A1128]">UPSCALE SOCIAL EVENTS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Elegant dinner parties
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Ambient music curation
                  </li>
                  <li className="flex items-center text-[#1E1E1E]">
                    <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
                    Sophisticated entertainment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dance.jpg"
            alt="Professional DJ setup"
            fill
            className="object-cover brightness-[0.7]" />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/80 to-[#0A1128]/60 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">READY TO ELEVATE YOUR EVENT?</h2>
            <p className="text-xl mb-8">Let's create an unforgettable experience together.</p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-colors bg-bronze hover:bg-gold rounded-md"
            >
                GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
