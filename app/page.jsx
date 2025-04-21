'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Sparkles, Heart, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Unique Focus on Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vdp.jpg"
            alt="Epic event moment"
            fill
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B132B]/90"></div>
        </div>

        <div className="container relative z-20 mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Where Every Moment<br />
                Becomes <span className="text-[#E6D3B3]">Legendary</span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Transform your event into an unforgettable experience with Chicago's most innovative entertainment team
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4"
              >
                <Button
                  asChild
                  className="bg-[#E6D3B3] hover:bg-[#3A6EA5] text-[#0A1128] hover:text-white 
                           border-2 border-transparent hover:border-[#E6D3B3] px-8 py-6 
                           text-lg rounded-xl transition-all transform hover:scale-105 group"
                >
                  <Link
                    href="/get-a-quote"
                    className="flex items-center space-x-2"
                  >
                    <span>START YOUR JOURNEY</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-[#E6D3B3]/10 rounded-full">
                  <Sparkles className="w-8 h-8 text-[#E6D3B3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B132B] mb-3">
                  Innovation First
                </h3>
                <p className="text-[#1E1E1E]/80 max-w-sm mx-auto">
                  Cutting-edge technology meets creative expertise to deliver experiences beyond imagination
              </p>
            </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-[#E6D3B3]/10 rounded-full">
                  <Heart className="w-8 h-8 text-[#E6D3B3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B132B] mb-3">
                  Passion Driven
                </h3>
                <p className="text-[#1E1E1E]/80 max-w-sm mx-auto">
                  Every event is an opportunity to create something extraordinary and unique
              </p>
            </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-[#E6D3B3]/10 rounded-full">
                  <Zap className="w-8 h-8 text-[#E6D3B3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B132B] mb-3">
                  Energy Masters
                </h3>
                <p className="text-[#1E1E1E]/80 max-w-sm mx-auto">
                  Expertly crafting the perfect atmosphere and maintaining the perfect vibe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Preview - Unique Approach */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B132B]">
                Your Vision,<br />Our Expertise
              </h2>
              <div className="w-20 h-1 bg-[#E6D3B3]"></div>
              
              <p className="text-lg text-[#1E1E1E]/80">
                From intimate gatherings to grand celebrations, we bring your vision to life with 
                precision and creativity. Our approach combines technical excellence with an 
                intuitive understanding of what makes an event truly memorable.
              </p>

              <div className="flex items-center space-x-4">
                <Link 
                  href="/services"
                  className="inline-flex items-center text-[#0B132B] hover:text-[#E6D3B3] transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
            </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                  src="/setup3.jpg" 
                  alt="Event preview"
                fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] to-transparent opacity-30"></div>
            </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#E6D3B3] rounded-2xl -z-10 opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Unique Approach */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-unique.jpg" // Unique image not used elsewhere
            alt="Event atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/90 to-[#0B132B]/80"></div>
        </div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let's Create Something<br />Extraordinary
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your perfect event begins with a conversation
            </p>
            <Button
              asChild
              variant="ghost"
              className="!bg-[#E6D3B3] hover:!bg-[#3A6EA5] !text-[#0A1128] hover:!text-white 
                       !border-2 !border-transparent hover:!border-[#E6D3B3] px-12 py-8 
                       text-xl rounded-xl transition-all transform hover:scale-105 group"
            >
              <a
                href="/get-a-quote"
                className="flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}