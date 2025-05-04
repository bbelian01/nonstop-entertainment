"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Music, Users, Calendar, Award, CheckCircle, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
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
import HeroSection21st from "@/components/ui/HeroSection21st"

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
    className={cn(
      "group relative overflow-hidden rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl",
      bgColor
    )}
    variants={cardHover}
    whileHover="hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.div className="relative z-10">
      <motion.h3
        className="bg-gradient-to-r from-[#0A1128] to-[#1E1E1E] bg-clip-text text-4xl font-bold text-transparent"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {number}
      </motion.h3>
      <p className="mt-2 text-[#1E1E1E]">{text}</p>
    </motion.div>
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-gray-100 opacity-0 transition-opacity group-hover:opacity-100" />
  </motion.div>
)

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
    variants={cardHover}
    whileHover="hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <motion.div
      className="mb-6 flex justify-center"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="rounded-xl bg-[#E6D3B3]/10 p-3">
        <Icon className="h-8 w-8 text-[#E6D3B3]" />
      </div>
    </motion.div>
    <h3 className="mb-4 text-xl font-bold text-[#0A1128]">{title}</h3>
    <p className="text-[#1E1E1E]">{description}</p>
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-gray-100 opacity-0 transition-opacity group-hover:opacity-100" />
  </motion.div>
)

const EventTypeCard = ({ image, title, features }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
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
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </div>
    <div className="relative p-8">
      <h3 className="mb-4 text-2xl font-bold text-[#0A1128]">{title}</h3>
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
            <CheckCircle className="mr-3 h-5 w-5 text-[#E6D3B3]" />
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
      className="relative overflow-hidden"
    >
      {/* Hero Section - 21st.dev modern video hero */}
      <HeroSection21st
        badge={{ text: "Services" }}
        title="Our Services"
        description="From intimate gatherings to grand celebrations, we provide premium DJ services tailored to your event's unique needs."
        actions={[
          { text: "Get a Quote", href: "/get-a-quote", variant: "default" }
        ]}
        backgroundVideo={{
          src: "/hero-bg.mp4",
          fallbackImage: "/event2.jpeg"
        }}
        className="text-white"
      />

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

      {/* New Eye-catching CTA Section */}
      <section className="relative isolate overflow-hidden bg-[#0A1128] py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1E1E1E] to-[#0A1128]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <motion.h2
                className="bg-gradient-to-r from-[#E6D3B3] to-white bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Create Something Extraordinary?
              </motion.h2>
              <motion.p
                className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Let's transform your vision into an unforgettable celebration. Our team is ready to bring your event to life.
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
                  className="group relative isolate overflow-hidden rounded-xl bg-[#E6D3B3] px-8 py-6 text-lg font-semibold text-[#0A1128] shadow-lg transition-all hover:text-white"
                >
                  <Link href="/get-a-quote" className="flex items-center gap-2">
                    <span className="relative z-10">Start Planning Your Event</span>
                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#B87D4B] to-[#8B5E2F] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </Button>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-white transition-colors hover:text-[#E6D3B3]"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#E6D3B3] to-[#B87D4B] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>
    </motion.div>
  )
}
