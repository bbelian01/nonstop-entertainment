"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, eventType: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form data to your API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json() // Get the response data

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      toast.success("Thank you for your inquiry! We'll be in touch soon.")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        message: "",
      })
    } catch (error) {
      console.error('Submission error:', error) // Log the full error
      toast.error(`Error: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0B132B] mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-[#E6D3B3] focus:ring-[#B87D4B] focus:border-[#B87D4B]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0B132B] mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-[#E6D3B3] focus:ring-[#B87D4B] focus:border-[#B87D4B]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0B132B] mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-[#E6D3B3] focus:ring-[#B87D4B] focus:border-[#B87D4B]"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-[#0B132B] mb-2">
            Event Type *
          </label>
          <Select onValueChange={handleSelectChange} value={formData.eventType} required>
            <SelectTrigger className="w-full border-[#E6D3B3] focus:ring-[#B87D4B] focus:border-[#B87D4B]">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="birthday">Birthday Celebration</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="holiday">Holiday Party</SelectItem>
              <SelectItem value="fundraiser">Fundraiser/Gala</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-[#0B132B] mb-2">
            Event Date
          </label>
          <div className="relative">
            <Input
              id="eventDate"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full border-[#E6D3B3] focus:ring-[#B87D4B] focus:border-[#B87D4B]"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-[#0B132B] mb-2">
            Expected Guest Count
          </label>
          <Input
            id="guestCount"
            name="guestCount"
            type="number"
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full border-[#E6D3B3] focus:ring-[#B87D4B] focus:border-[#B87D4B]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0B132B] mb-2">
          Tell Us About Your Event *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full border-[#E6D3B3] focus:ring-[#B87D4B] focus:border-[#B87D4B]"
          placeholder="Share your vision for the event..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0B132B] hover:bg-[#0B132B]/90 text-white py-6 text-lg font-medium"
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}
