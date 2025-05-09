'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Music, Star, CheckCircle, Award, Headphones, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import HeroSection21st from "@/components/ui/HeroSection21st"

export default function AboutPageContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const scaleIn = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <>
      {/* Hero Section - More Compact */}
      <HeroSection21st
        badge={{ text: "Meet the Team" }}
        title="The Faces Behind the Music"
        description="Meet the visionaries who transform events into unforgettable experiences. Learn more about our story and our team."
        actions={[
          { text: "Get a Quote", href: "/get-a-quote", variant: "default" },
        ]}
        backgroundImage="/setup2.jpg"
        className="text-white"
      />

      {/* Company Story - More Visual */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F8F8F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              {...scaleIn}
            >
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/team1.jpg"
                  alt="Non-Stop Entertainment Setup"
                  fill
                  className="object-cover object-[center_40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-30"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#B87D4B] rounded-2xl -z-10 opacity-10"></div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              {...fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">Our Story</h2>
              <div className="w-20 h-1 bg-[#B87D4B]"></div>
              <p className="text-lg text-[#1E1E1E]/80 leading-relaxed">
                Founded in 2018, Non-Stop Entertainment began as a smaller scale DJ company with two speakers and an iPad. 
                What started as a passion project in 7th grade has evolved into Chicago's premier entertainment service, 
                delivering sophisticated experiences for upscale events across the region.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#B87D4B]/5 p-4 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#B87D4B]">500+</h3>
                  <p className="text-[#1E1E1E]/70">Events Mastered</p>
                </div>
                <div className="bg-[#B87D4B]/5 p-4 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#B87D4B]">2018</h3>
                  <p className="text-[#1E1E1E]/70">Founded</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - More Dynamic Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Brandon's Section */}
            <motion.div 
              className="grid md:grid-cols-12 gap-8 items-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="md:col-span-5 relative"
                {...scaleIn}
              >
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/brandon.jpg"
                    alt="Brandon Belian - Lead MC and Co-Owner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-40"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4AF37] rounded-2xl -z-10 opacity-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-[#B87D4B] rounded-2xl -z-10 opacity-20"></div>
              </motion.div>

              <motion.div 
                className="md:col-span-7 space-y-6"
                {...fadeIn}
              >
                <div className="inline-block px-6 py-2 bg-[#B87D4B]/10 rounded-full">
                  <span className="text-[#B87D4B] font-semibold">LEAD MC & CO-OWNER</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E]">
                  Brandon Belian
                </h2>
                
                <div className="w-20 h-1 bg-[#D4AF37]"></div>
                
                <p className="text-lg text-[#1E1E1E]/80 leading-relaxed">
                Brandon Belian is the co-founder and lead MC of Non-Stop Entertainment, 
                bringing unmatched energy, charisma, and professionalism to every event. 
                With over 6 years of experience on the mic, he knows exactly how to engage any crowd, 
                from high-energy teen parties to elegant private events. Brandon’s talent 
                lies in creating a seamless flow, hyping the room, and keeping every moment
                 exciting and on schedule. Known for his confidence, creativity, and crowd 
                 control, Brandon ensures that every guest feels part of the action. When 
                 Brandon’s on the mic, your event comes to life.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#B87D4B]/5 p-6 rounded-xl backdrop-blur-sm">
                    <Award className="w-8 h-8 text-[#B87D4B] mb-3" />
                    <h3 className="text-[#1E1E1E] font-bold mb-1">Expert MC</h3>
                    <p className="text-[#1E1E1E]/70 text-sm">Masterful crowd engagement</p>
                  </div>
                  <div className="bg-[#B87D4B]/5 p-6 rounded-xl backdrop-blur-sm">
                    <Heart className="w-8 h-8 text-[#B87D4B] mb-3" />
                    <h3 className="text-[#1E1E1E] font-bold mb-1">Event Curator</h3>
                    <p className="text-[#1E1E1E]/70 text-sm">Crafting perfect moments</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Ryan's Section */}
            <motion.div 
              className="grid md:grid-cols-12 gap-8 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="md:col-span-7 space-y-6 order-2 md:order-1"
                {...fadeIn}
              >
                <div className="inline-block px-6 py-2 bg-[#B87D4B]/10 rounded-full">
                  <span className="text-[#B87D4B] font-semibold">LEAD DJ & CO-OWNER</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E]">
                  Ryan Kleczynski
                </h2>
                
                <div className="w-20 h-1 bg-[#D4AF37]"></div>
                
                <p className="text-lg text-[#1E1E1E]/80 leading-relaxed">
                With over 6 years of experience behind the decks, Ryan Kleczynski brings energy, 
                precision, and a deep love for music to every event. As the founder of Non-Stop Entertainment, 
                he’s performed at over 300 weddings, private parties, school dances, and corporate 
                events across Chicago and Los Angeles. Known for his seamless transitions, high-end sound and
                 lighting setups, and crowd-first mentality, Ryan turns every celebration into an 
                 unforgettable experience. Whether it’s Top 40, throwbacks, hip hop, EDM, or 
                 custom-curated vibes, he keeps the party moving — and the dance floor packed.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#B87D4B]/5 p-6 rounded-xl backdrop-blur-sm">
                    <Headphones className="w-8 h-8 text-[#B87D4B] mb-3" />
                    <h3 className="text-[#1E1E1E] font-bold mb-1">Music Master</h3>
                    <p className="text-[#1E1E1E]/70 text-sm">Genre-blending expertise</p>
                  </div>
                  <div className="bg-[#B87D4B]/5 p-6 rounded-xl backdrop-blur-sm">
                    <Music className="w-8 h-8 text-[#B87D4B] mb-3" />
                    <h3 className="text-[#1E1E1E] font-bold mb-1">Sound Pioneer</h3>
                    <p className="text-[#1E1E1E]/70 text-sm">Technical innovation</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="md:col-span-5 relative order-1 md:order-2"
                {...scaleIn}
              >
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/ryan.jpg"
                    alt="Ryan Kleczynski - Lead DJ and Co-Owner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-40"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4AF37] rounded-2xl -z-10 opacity-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-[#B87D4B] rounded-2xl -z-10 opacity-20"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - More Impactful */}
      <section className="relative py-20 bg-gradient-to-b from-[#F8F8F8] to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/turntable.jpg"
            alt="DJ Equipment"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white"></div>
        </div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1E1E1E]">
              Ready to Create Something<br />Extraordinary?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-[#1E1E1E]/80">
              Let's transform your vision into an unforgettable celebration
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-colors bg-bronze hover:bg-gold rounded-md"
            >
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
} 