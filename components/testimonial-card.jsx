'use client'

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialCard({
  quote,
  author,
  eventType,
  image,
  featured = false
}) {
  return (
    <motion.div 
      className={`bg-[#F8F8F8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
        featured ? 'md:col-span-2' : ''
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${author}'s ${eventType} event at Non-Stop Entertainment`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-40"></div>
      </div>
      <div className="p-8">
        <Quote className="text-[#B87D4B] w-8 h-8 mb-4" />
        <div className="flex items-center space-x-1 mb-4 text-[#D4AF37]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-current" size={16} />
          ))}
        </div>
        <p className="text-[#1E1E1E] mb-6 line-clamp-4">{quote}</p>
        <div>
          <p className="font-bold text-[#1E1E1E]">{author}</p>
          <p className="text-[#B87D4B]">{eventType}</p>
        </div>
      </div>
    </motion.div>
  )
}
