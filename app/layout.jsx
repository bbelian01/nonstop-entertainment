import './globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatBubble from '@/components/chat-bubble'

export const metadata = {
  title: "Northshore DJ – Non-Stop Entertainment",
  description: "Professional DJ and MC services for weddings, corporate events, and private parties in the Northshore area. Book your entertainment today!",
  keywords: "DJ, MC, wedding entertainment, corporate events, private parties, Northshore DJ, professional DJ services",
  openGraph: {
    title: "Northshore DJ – Non-Stop Entertainment",
    description: "Professional DJ and MC services for weddings, corporate events, and private parties in the Northshore area. Book your entertainment today!",
    url: "https://nonstopentertainers.com",
    siteName: "Non-Stop Entertainment",
    images: [
      {
        url: "https://nonstopentertainers.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Non-Stop Entertainment - Professional DJ Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northshore DJ – Non-Stop Entertainment",
    description: "Professional DJ and MC services for weddings, corporate events, and private parties in the Northshore area. Book your entertainment today!",
    images: ["https://nonstopentertainers.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ChatBubble />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
