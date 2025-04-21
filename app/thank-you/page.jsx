import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle className="h-16 w-16 text-[#E6D3B3]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B132B] mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-[#1E1E1E]/80 mb-8">
            We've received your quote request and will get back to you within 24 hours to discuss your event.
          </p>
          <Button
            asChild
            className="bg-[#0B132B] hover:bg-[#0B132B]/90 text-white"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
