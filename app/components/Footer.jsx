import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.jpg"
                alt="Nonstop Entertainment Logo"
                width={120}
                height={32}
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Professional entertainment services for all your events. Making memories that last a lifetime.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Info</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-sm text-gray-600">
                <a href="tel:+1234567890" className="hover:text-gray-900">
                  (123) 456-7890
                </a>
              </li>
              <li className="text-sm text-gray-600">
                <a href="mailto:info@nonstopentertainment.com" className="hover:text-gray-900">
                  info@nonstopentertainment.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Nonstop Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 