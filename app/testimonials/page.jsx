'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Quote, Star, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Had a fantastic time with Brandon, Noah and Non-Stop Entertainment for a graduation party. They were super easy to work with and all communication was clear and easy to understand. The night of the event, they set up efficiently & quickly.",
    author: "Beth Mueller",
    eventType: "Graduation Party",
    image: "/grad.jpg",
    rating: 5
  },
  {
    quote: "Non-Stop Entertainment did an amazing job with my son's Bar-Mitzvah party! DJ Ryan and MC Gator kept the kids moving and the party buzzing. Everyone had a wonderful time and I would definitely hire them again!",
    author: "Dan Shulman",
    eventType: "Bar Mitzvah",
    image: "/bm.jpg",
    rating: 5
  },
  {
    quote: "Ryan and Brandon are simply amazing! We had a fundraiser for about 275 guests at the Highland Park Country Club. Our guests ranged in ages from 30-60 years old. Ryan and Brandon read the vibe of the crowd perfectly.",
    author: "Ann Shafer",
    eventType: "Fundraiser",
    featured: true,
    image: "/fe.jpg",
    rating: 5
  },
  // ... other testimonials
]

const TestimonialCard = ({ quote, author, eventType, image, rating, className }) => {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-gray-50/50 shadow-lg transition-all hover:shadow-xl",
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${eventType} event`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="relative z-10 p-8">
        <div className="mb-6">
          <Quote className="h-10 w-10 text-[#B87D4B] opacity-50" />
        </div>
        <div className="mb-4 flex space-x-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
          ))}
        </div>
        <blockquote className="mb-8">
          <p className="text-lg font-medium leading-relaxed text-gray-700">{quote}</p>
        </blockquote>
        <footer className="flex items-center justify-between">
          <div>
            <cite className="not-italic">
              <span className="block font-semibold text-gray-900">{author}</span>
              <span className="block text-sm text-[#B87D4B]">{eventType}</span>
            </cite>
          </div>
        </footer>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-gray-100 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />
          <Image
            src="/dj-lights.jpg"
            alt="DJ Equipment with dramatic lighting"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#B87D4B]/10 px-6 py-2 text-[#B87D4B]">
              WHAT OUR CLIENTS SAY
            </span>
          </motion.div>
          
          <motion.h1
            className="mt-8 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real Stories from
            <br />
            Real Celebrations
          </motion.h1>
          
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover why Chicago's most memorable events trust Non-Stop Entertainment
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-xl lg:max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:grid-cols-2">
            <div className="relative col-span-1">
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-white shadow-xl">
                <Image
                  src="/countryclub.jpg"
                  alt="Highland Park Country Club Fundraiser"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            <div className="col-span-1">
              <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  "Ryan and Brandon are simply amazing! We had a fundraiser for about 275 guests at the Highland Park Country Club. Our guests ranged in ages from 30-60 years old. Ryan and Brandon read the vibe of the crowd perfectly."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-x-6">
                <div>
                  <div className="font-semibold text-gray-900">Ann Shafer</div>
                  <div className="mt-1 text-[#B87D4B]">Fundraiser Event</div>
                </div>
              </figcaption>
            </div>
          </figure>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-50 to-white" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Create Your Own Success Story?
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join hundreds of satisfied clients who trusted us with their special moments
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              asChild
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#B87D4B] px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#96633B] hover:shadow-xl"
            >
              <Link href="/get-a-quote">
                Book Your Event
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
