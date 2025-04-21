import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-[#1E1E1E]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-5xl mx-auto">
          <div className="text-center md:text-left md:flex-1">
            <h3 className="text-xl font-bold mb-3 text-[#1E1E1E]">NONSTOP ENTERTAINMENT</h3>
            <p className="mb-4 text-[#1E1E1E]">
              Redefining nightlife for your most memorable moments. DJs, ambiance, and energy for every upscale occasion.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.instagram.com/nonstopentertainers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E1E1E] hover:text-[#E6D3B3] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left md:flex-1">
            <h3 className="text-xl font-bold mb-3 text-[#1E1E1E]">CONTACT US</h3>
            <p className="mb-2 text-[#1E1E1E]">Phone: 224-216-4402</p>
            <p className="mb-2 text-[#1E1E1E]">Email: info@nonstopentertainers.com</p>
            <p className="text-[#1E1E1E]">Serving the northern suburbs of Illinois.</p>
          </div>
        </div>

        <div className="border-t border-black/20 mt-8 pt-4 text-center">
          <p className="text-[#1E1E1E]">&copy; {new Date().getFullYear()} Non-Stop Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
