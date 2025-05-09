"use client"

import PhotoCarousel from "@/components/ui/photocarousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Sparkles, Heart, Zap, Music, Users, Calendar, Award, CheckCircle, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, Play, Pause, Volume2, VolumeX } from "lucide-react"
import {
  fadeIn,
  staggerContainer,
  textReveal,
  scrollReveal,
  cardHover,
  buttonHover,
  containerAnimation,
  pageTransition
} from "@/components/animations"

const AnimatedText = ({ text, className }) => {
  return (
    <motion.span
      className="inline-block overflow-hidden align-middle"
      variants={containerAnimation}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block align-middle"
          variants={{
            initial: { y: "100%", opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1
              }
            }
          }}
        >
          <span className={`inline-block ${className} leading-none`}>{word}&nbsp;</span>
        </motion.span>
      ))}
    </motion.span>
  )
}

const images = [
  "/event1.jpeg",
  "/event2.jpeg",
  "/event3.jpeg",
  "/event4.jpeg",
  "/event5.jpeg",
  "/event6.jpeg",
]

function VideoPlayer() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [inView, setInView] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Intersection Observer for scroll-based play/pause
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  // Auto play/pause based on inView
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [inView])

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e) => {
    const newVolume = Number.parseFloat(e.target.value)
    videoRef.current.volume = newVolume
    setVolume(newVolume)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume
    }
  }, [volume])

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.video
        ref={videoRef}
        src="/promo.mp4"
        className="w-full rounded-xl shadow-lg aspect-video"
        loop
        muted={isMuted}
        onLoadedData={() => setIsLoaded(true)}
        style={{
          objectFit: 'cover',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: isLoaded ? 1.08 : 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 p-2 sm:p-3 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={togglePlay}
          className="text-white hover:text-[#E6D3B3] transition-colors p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6" />}
        </motion.button>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <motion.button
            onClick={toggleMute}
            className="text-white hover:text-[#E6D3B3] transition-colors p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
          </motion.button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 sm:w-20"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

const HeroBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{
          scale: isLoaded ? 1.1 : 1
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B132B]/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section - Unique Focus on Impact */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />

        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="text-center min-h-[200px] flex flex-col items-center justify-center">
              <motion.div className="overflow-visible py-2 px-4 md:px-0">
                <AnimatedText
                  text="Your Event. Our-Energy."
                  className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text leading-relaxed"
                />
                <AnimatedText
                  text="Non-Stop."
                  className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#E6D3B3] via-[#E6D3B3] to-[#C4A47C] text-transparent bg-clip-text leading-relaxed"
                />
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-white/90 to-white/70 text-transparent bg-clip-text mb-8 md:mb-12 mt-4 md:mt-6 px-4 md:px-0"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 1 }}
              >
                Transforming your event into an unforgettable experience as Chicago's most innovative entertainment team
              </motion.p>

              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 1.2 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-0"
              >
                <motion.div
                  variants={buttonHover}
                  whileHover="hover"
                >
                  <Button
                    asChild
                    className="bg-[#E6D3B3] hover:bg-[#3A6EA5] text-[#0A1128] hover:text-white 
                             border-2 border-transparent hover:border-[#E6D3B3] px-8 py-6 
                             text-lg rounded-xl transition-all transform group"
                  >
                    <Link href="/get-a-quote" className="flex items-center space-x-2">
                      <span>BOOK YOUR EVENT</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0B132B] mb-12 md:mb-16 leading-relaxed"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-12">
              {/* Card 1 */}
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div
                  className="mb-6 p-4 bg-[#E6D3B3]/10 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(230, 211, 179, 0.2)" }}
                >
                  <Sparkles className="w-8 h-8 text-[#E6D3B3]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0B132B] mb-3 leading-relaxed">Innovation First</h3>
                <p className="text-[#1E1E1E]/80 max-w-sm mx-auto leading-relaxed">
                  Cutting-edge technology meets creative expertise to deliver experiences beyond imagination
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="mb-6 p-4 bg-[#E6D3B3]/10 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(230, 211, 179, 0.2)" }}
                >
                  <Heart className="w-8 h-8 text-[#E6D3B3]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0B132B] mb-3 leading-relaxed">Passion Driven</h3>
                <p className="text-[#1E1E1E]/80 max-w-sm mx-auto leading-relaxed">
                  Every event is an opportunity to create something extraordinary and unique
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="mb-6 p-4 bg-[#E6D3B3]/10 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(230, 211, 179, 0.2)" }}
                >
                  <Zap className="w-8 h-8 text-[#E6D3B3]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0B132B] mb-3 leading-relaxed">Energy Masters</h3>
                <p className="text-[#1E1E1E]/80 max-w-sm mx-auto leading-relaxed">
                  Expertly crafting the perfect atmosphere and maintaining the perfect vibe
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Photo Carousel */}
      <section className="py-12 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-16"
              variants={fadeIn}
            >
              <AnimatedText
                text="Our Memory-Generating Events"
                className="text-4xl md:text-5xl font-bold text-[#0B132B] leading-relaxed"
              />
              <motion.div
                className="w-20 h-1 bg-[#E6D3B3] mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.p
                className="text-lg text-[#1E1E1E]/80 max-w-3xl mx-auto mt-6 leading-relaxed"
                variants={fadeIn}
              >
                Browse through our gallery of unforgettable moments we've created for our clients
              </motion.p>
            </motion.div>

            <PhotoCarousel />
          </motion.div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
            variants={containerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-8"
              variants={fadeIn}
            >
              <AnimatedText
                text="Your Vision & Taste,"
                className="text-4xl md:text-5xl font-bold text-[#0B132B] leading-relaxed"
              />
              <AnimatedText
                text="Our Energy & Skills"
                className="text-4xl md:text-5xl font-bold text-[#0B132B] leading-relaxed"
              />
              
              <motion.div
                className="w-20 h-1 bg-[#E6D3B3]"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />

              <motion.p
                className="text-lg text-[#1E1E1E]/80 leading-relaxed"
                variants={fadeIn}
              >
                From intimate gatherings to grand celebrations, we bring your vision to life with precision and
                creativity. Our approach combines technical excellence with an intuitive understanding of what makes an
                event truly memorable.
              </motion.p>

              <motion.div
                className="flex items-center space-x-4"
                variants={fadeIn}
              >
                <motion.div
                  variants={buttonHover}
                  whileHover="hover"
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center text-[#0B132B] hover:text-[#E6D3B3] transition-colors"
                  >
                    <span>Explore Our Services</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <VideoPlayer />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
