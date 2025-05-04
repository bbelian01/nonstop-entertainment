"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Music, Users, Calendar, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
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
      className="inline-block overflow-hidden"
      variants={containerAnimation}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
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
          <span className={`inline-block ${className}`}>{word}&nbsp;</span>
        </motion.span>
      ))}
    </motion.span>
  )
}

const StatCard = ({ number, text, bgColor }) => (
  <motion.div
    className={`${bgColor} p-8 rounded-lg`}
    variants={cardHover}
    whileHover="hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.h3
      className="text-4xl font-bold text-[#0A1128] mb-2"
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {number}
    </motion.h3>
    <p className="text-[#1E1E1E]">{text}</p>
  </motion.div>
)

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow"
    variants={cardHover}
    whileHover="hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <motion.div
      className="flex justify-center mb-6"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="h-12 w-12 text-[#E6D3B3]" />
    </motion.div>
    <h3 className="text-xl font-bold mb-4 text-[#0A1128]">{title}</h3>
    <p className="text-[#1E1E1E]">{description}</p>
  </motion.div>
)

const EventTypeCard = ({ image, title, features }) => (
  <motion.div
    className="bg-[#DCE0E6] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    variants={cardHover}
    whileHover="hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="relative h-80">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 text-[#0A1128]">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center text-[#1E1E1E]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <CheckCircle className="h-5 w-5 text-[#E6D3B3] mr-3" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
)

export default function ServicesPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#E6D3B3]">
        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="text-center space-y-8">
              <motion.div className="overflow-hidden">
                <AnimatedText
                  text="ELEVATE YOUR EVENT"
                  className="text-5xl md:text-7xl font-bold text-[#0A1128] leading-tight"
                />
              </motion.div>
              
              <motion.p
                className="text-2xl md:text-3xl text-[#0A1128]/90 font-light max-w-2xl mx-auto"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.8 }}
              >
                Professional DJ Services for Sophisticated Celebrations
              </motion.p>
              
              <motion.div
                className="w-24 h-1 bg-[#0A1128] mx-auto mt-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                variants={fadeIn}
              >
                <AnimatedText
                  text="CRAFTING UNFORGETTABLE MOMENTS"
                  className="text-3xl md:text-4xl font-bold text-[#0A1128] leading-tight"
                />
                
                <motion.div
                  className="w-20 h-1 bg-[#E6D3B3]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                <motion.p
                  className="text-xl text-[#1E1E1E] leading-relaxed"
                  variants={fadeIn}
                >
                  We specialize in delivering sophisticated entertainment for upscale adult events. Our expert DJs create the perfect atmosphere for your celebration.
                </motion.p>
                
                <motion.ul
                  className="space-y-4 pt-4"
                  variants={staggerContainer}
                >
                  {["Corporate Galas & Events", "Milestone Celebrations", "Upscale Private Parties"].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      variants={fadeIn}
                      custom={index}
                    >
                      <motion.div
                        className="w-2 h-2 bg-[#E6D3B3] rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-lg text-[#1E1E1E]">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <StatCard number="8+" text="Years of Experience" bgColor="bg-[#DCE0E6]" />
                  <StatCard number="500+" text="Events Completed" bgColor="bg-[#E6D3B3]" />
                </div>
                <div className="space-y-4 pt-8">
                  <StatCard number="100%" text="Client Satisfaction" bgColor="bg-[#0A1128]" />
                  <StatCard number="20+" text="Venues Partnered" bgColor="bg-[#DCE0E6]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-[#DCE0E6]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <AnimatedText
              text="WHY CHOOSE US"
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0A1128]"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Music}
                title="CURATED MUSIC"
                description="Expertly crafted playlists tailored to your event's atmosphere and guest preferences."
              />
              <FeatureCard
                icon={Users}
                title="SKILLED EMCEES"
                description="Professional announcements and elegant event coordination throughout your celebration."
              />
              <FeatureCard
                icon={Award}
                title="PREMIUM EQUIPMENT"
                description="State-of-the-art sound systems and lighting to create the perfect ambiance."
              />
              <FeatureCard
                icon={Calendar}
                title="SEAMLESS PLANNING"
                description="Detailed coordination with your venue and vendors for a stress-free experience."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <AnimatedText
              text="OUR EXPERTISE"
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0A1128]"
            />
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <EventTypeCard
                image="/corporate.jpg"
                title="CORPORATE EVENTS"
                features={[
                  "Holiday celebrations & team events",
                  "Professional atmosphere management",
                  "Elegant corporate entertainment"
                ]}
              />
              
              <EventTypeCard
                image="/private.jpg"
                title="PRIVATE CELEBRATIONS"
                features={[
                  "Milestone birthdays & anniversaries",
                  "Customized music selection",
                  "Special moment coordination"
                ]}
              />
              
              <EventTypeCard
                image="/gala.jpg"
                title="GALAS & FUNDRAISERS"
                features={[
                  "Sophisticated event management",
                  "Auction & program coordination",
                  "Professional sound setup"
                ]}
              />
              
              <EventTypeCard
                image="/social.jpg"
                title="UPSCALE SOCIAL EVENTS"
                features={[
                  "Elegant dinner parties",
                  "Ambient music curation",
                  "Professional sound setup"
                ]}
              />
            </div>
          </motion.div>
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
    </motion.div>
  )
}
