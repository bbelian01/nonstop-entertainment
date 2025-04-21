'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Quote, Star, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const testimonials = [
    {
      quote: "Had a fantastic time with Brandon, Noah and Non-Stop Entertainment for a graduation party. They were super easy to work with and all communication was clear and easy to understand. The night of the event, they set up efficiently & quickly.",
      author: "Beth Mueller",
      eventType: "Graduation Party",
      image: "/grad.jpg"
    },
    {
      quote: "Non-Stop Entertainment did an amazing job with my son's Bar-Mitzvah party! DJ Ryan and MC Gator kept the kids moving and the party buzzing. Everyone had a wonderful time and I would definitely hire them again!",
      author: "Dan Shulman",
      eventType: "Bar Mitzvah",
      image: "/bm.jpg"
    },
    {
      quote: "Ryan and Brandon are simply amazing! We had a fundraiser for about 275 guests at the Highland Park Country Club. Our guests ranged in ages from 30-60 years old. Ryan and Brandon read the vibe of the crowd perfectly.",
      author: "Ann Shafer",
      eventType: "Fundraiser",
      featured: true,
      image: "/fe.jpg"
    },
    // ... other testimonials
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dj-lights.jpg"
            alt="DJ Equipment with dramatic lighting"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block px-6 py-2 bg-[#B87D4B]/10 rounded-full text-[#B87D4B] font-semibold mb-6">
            WHAT OUR CLIENTS SAY
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1E1E1E] mb-6 tracking-tight">
            Real Stories from<br />Real Celebrations
          </h1>
          <div className="w-32 h-1 bg-[#B87D4B] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-[#1E1E1E]/80 max-w-2xl mx-auto font-light">
            Discover why Chicago's most memorable events trust Non-Stop Entertainment
          </p>
        </motion.div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/countryclub.jpg"
                  alt="Highland Park Country Club Fundraiser"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-40"></div>
              </div>
              <div className="space-y-6">
                <Quote className="text-[#B87D4B] w-12 h-12" />
                <p className="text-2xl text-[#1E1E1E] leading-relaxed italic">
                  "Ryan and Brandon are simply amazing! We had a fundraiser for about 275 guests at the Highland Park Country Club. Our guests ranged in ages from 30-60 years old. Ryan and Brandon read the vibe of the crowd perfectly."
                </p>
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current" size={20} />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-[#1E1E1E] text-lg">Ann Shafer</p>
                  <p className="text-[#B87D4B]">Fundraiser Event</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#F8F8F8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.eventType} event`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-40"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-1 mb-4 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-[#1E1E1E] mb-6 line-clamp-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-[#1E1E1E]">{testimonial.author}</p>
                    <p className="text-[#B87D4B]">{testimonial.eventType}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-[#F8F8F8] to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-[#1E1E1E]/80 mb-12 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trusted us with their special moments
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-colors bg-bronze hover:bg-gold rounded-md"
            >
              Book Your Event
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
