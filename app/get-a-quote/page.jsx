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
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      toast.success("Quote request submitted successfully!")
      router.push('/thank-you')
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-32 md:py-40 bg-[#0B132B]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Plan Your Perfect Event
          </h1>
          <p className="text-lg text-white/80">
            Tell us about your vision and we'll create the perfect entertainment package
          </p>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white p-6 rounded-xl border border-[#DCE0E6]">
                  <h2 className="text-2xl font-bold text-[#0B132B] mb-6">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-white p-6 rounded-xl border border-[#DCE0E6]">
                  <h2 className="text-2xl font-bold text-[#0B132B] mb-6">Event Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Event Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal bg-white border-[#E6D3B3] hover:bg-white hover:border-[#B87D4B]",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "MMMM d, yyyy")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white" align="start">
                              <DayPicker
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className="rounded-md"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-[#E6D3B3] focus:border-[#B87D4B]">
                                <SelectValue placeholder="Select a time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white max-h-[200px] overflow-y-auto">
                              {generateTimeOptions().map((time) => (
                                <SelectItem key={time} value={time} className="hover:bg-[#E6D3B3]/20">
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hoursNeeded"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hours Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-[#E6D3B3] focus:border-[#B87D4B]">
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="2" className="hover:bg-[#E6D3B3]/20">2 Hours</SelectItem>
                              <SelectItem value="3" className="hover:bg-[#E6D3B3]/20">3 Hours</SelectItem>
                              <SelectItem value="4" className="hover:bg-[#E6D3B3]/20">4 Hours</SelectItem>
                              <SelectItem value="5" className="hover:bg-[#E6D3B3]/20">5 Hours</SelectItem>
                              <SelectItem value="6+" className="hover:bg-[#E6D3B3]/20">6+ Hours</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Guest Count</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="venue"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Venue Type</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="indoor" id="indoor" />
                                <label htmlFor="indoor">Indoor</label>
                              </div>
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="outdoor" id="outdoor" />
                                <label htmlFor="outdoor">Outdoor</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="venueAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Venue Address</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-[#E6D3B3] focus:border-[#B87D4B]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div className="bg-white p-6 rounded-xl border border-[#DCE0E6]">
                  <h2 className="text-2xl font-bold text-[#0B132B] mb-6">Event Type</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-[#E6D3B3] focus:border-[#B87D4B]">
                                <SelectValue placeholder="Select event type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="wedding" className="hover:bg-[#E6D3B3]/20">Wedding</SelectItem>
                              <SelectItem value="corporate" className="hover:bg-[#E6D3B3]/20">Corporate Event</SelectItem>
                              <SelectItem value="birthday" className="hover:bg-[#E6D3B3]/20">Birthday Party</SelectItem>
                              <SelectItem value="graduation" className="hover:bg-[#E6D3B3]/20">Graduation</SelectItem>
                              <SelectItem value="other" className="hover:bg-[#E6D3B3]/20">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="referralSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you find us? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-[#E6D3B3] focus:border-[#B87D4B]">
                                <SelectValue placeholder="Select referral source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="google" className="hover:bg-[#E6D3B3]/20">Google Search</SelectItem>
                              <SelectItem value="social" className="hover:bg-[#E6D3B3]/20">Social Media</SelectItem>
                              <SelectItem value="referral" className="hover:bg-[#E6D3B3]/20">Friend/Family Referral</SelectItem>
                              <SelectItem value="wedding" className="hover:bg-[#E6D3B3]/20">Wedding Vendor</SelectItem>
                              <SelectItem value="other" className="hover:bg-[#E6D3B3]/20">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white p-6 rounded-xl border border-[#DCE0E6]">
                  <h2 className="text-2xl font-bold text-[#0B132B] mb-6">Additional Information</h2>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="min-h-[100px] border-[#E6D3B3] focus:border-[#B87D4B]" 
                            placeholder="Tell us more about your event..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#B87D4B] hover:bg-[#96633C] text-white px-8 py-3 rounded-md text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  )
}
