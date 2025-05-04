'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import HeroSection21st from "@/components/ui/HeroSection21st"

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  eventDate: z.date().optional(),
  eventTime: z.string().optional(),
  hoursNeeded: z.string().optional(),
  venueAddress: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  guestCount: z.string().optional(),
  venue: z.enum(["indoor", "outdoor"]).optional(),
  eventType: z.string().min(1, "Please select an event type"),
  referralSource: z.string().min(1, "Please tell us how you found us"),
  message: z.string().optional(),
})

const generateTimeOptions = () => {
  const times = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hour = i % 12 || 12
      const period = i < 12 ? 'AM' : 'PM'
      const minute = j === 0 ? '00' : '30'
      times.push(`${hour}:${minute} ${period}`)
    }
  }
  return times
}

export default function GetAQuote() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventDate: undefined,
      eventTime: "",
      hoursNeeded: "",
      venueAddress: "",
      city: "",
      state: "",
      zipCode: "",
      guestCount: "",
      venue: undefined,
      eventType: "",
      referralSource: "",
      message: "",
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
  
      if (response.ok) {
        toast.success("Quote request submitted successfully!")
        router.push('/thank-you')
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 21st.dev modern video hero */}
      <HeroSection21st
        badge={{ text: "Get Started" }}
        title="Get a Quote"
        description="Ready to elevate your event? Fill out our quick form below and we'll get back to you with a customized quote."
        backgroundImage="/event3.jpeg"
        className="text-white"
      />
      <section className="py-0 md:py-0">
        <div className="container mx-auto px-0">
          {/* Embedded CheckCherry Form */}
          <div
            className="w-full bg-white p-0 m-0 rounded-none shadow-none"
            style={{
              height: 'calc(100vh - 72px - 80px)',
              overflowY: 'auto',
              minHeight: '400px',
            }}
          >
            <iframe
              className="checkcherry-autoresize-frame w-full h-full"
              src="https://non-stop-entertainment.checkcherry.com/contact/8038?iframe=true&props=%7B%22labelsAsPlaceholders%22%3Afalse%2C%22wideSubmitButtons%22%3Afalse%2C%22buttonBackgroundColor%22%3A%22%22%2C%22buttonForegroundColor%22%3A%22%22%2C%22maxWidth%22%3A%22%22%7D"
              style={{ margin: 0, padding: 0, border: 'none', width: '100%', height: '100%' }}
              scrolling="auto"
              allowtransparency="true"
              title="Get a Quote Form"
            />
            <noscript>
              <p className="text-red-600 mt-4">Please enable JavaScript to use the quote request form.</p>
            </noscript>
          </div>
          {/* Load CheckCherry script */}
          <script src="https://non-stop-entertainment.checkcherry.com/api/checkcherry_widgets/iframe" type="text/javascript" charSet="utf-8"></script>
        </div>
      </section>
    </div>
  )
}
