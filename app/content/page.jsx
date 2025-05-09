"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Image as ImageIcon, Film, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroSection21st from "@/components/ui/HeroSection21st"

// Add your content items here
const contentItems = [
  {
    id: 1,
    type: "image",
    src: "/house.mp4",
    caption: "Sweet 16 Birthday Celebration",
    altText: "Bride and groom's first dance with elegant lighting",
    eventType: "Milestone",
    date: "2024-02-15"
  },
  {
    id: 2,
    type: "video",
    src: "/promo.mp4",
    thumbnail: "/event2.jpeg",
    caption: "Corporate Event Highlight Reel - Chicago Tech Summit",
    altText: "Highlights from the Chicago Tech Summit featuring DJ performances",
    eventType: "Corporate",
    date: "2024-01-20"
  },
  {
    id: 3,
    type: "image",
    src: "/event3.jpeg",
    caption: "Sweet 16 Birthday Celebration",
    altText: "Teenagers dancing at a vibrant sweet 16 party",
    eventType: "Birthday",
    date: "2024-03-01"
  },
  // Add more content items as needed
]

const VideoCard = ({ src, thumbnail, caption, altText }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
      {!isPlaying ? (
        <>
          <div className="relative aspect-video">
            <Image
              src={thumbnail}
              alt={altText}
              fill
              className="object-cover rounded-t-xl"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-[#E6D3B3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-[#0B132B] ml-1" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <video
          src={src}
          className="w-full rounded-t-xl aspect-video object-cover"
          controls
          autoPlay
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  )
}

const ContentCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {item.type === "image" ? (
        <div className="relative aspect-video">
          <Image
            src={item.src}
            alt={item.altText}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>
      ) : (
        <VideoCard
          src={item.src}
          thumbnail={item.thumbnail}
          caption={item.caption}
          altText={item.altText}
        />
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[#0B132B] flex-grow">{item.caption}</h3>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span className="px-3 py-1 bg-[#E6D3B3]/20 text-[#0B132B] rounded-full">
            {item.eventType}
          </span>
          <span className="text-gray-500">
            {new Date(item.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ContentPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection21st
        badge={{ text: "Gallery" }}
        title="Our Event Gallery"
        description="Explore our collection of unforgettable moments and legendary experiences. See the magic we've created for our clients."
        actions={[
          { text: "Get a Quote", href: "/get-a-quote", variant: "default" },
        ]}
        backgroundImage="/event1.jpeg"
        className="text-white"
      />

      {/* Coming Soon Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/event2.jpeg"
            alt="Background"
            fill
            className="object-cover filter blur-md opacity-20"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full">
          <motion.div 
            className="flex flex-col items-center justify-center h-[60vh] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-[#1E1E1E]/70">
              We're curating an amazing collection of our best moments.
              <br />Check back soon!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
} 