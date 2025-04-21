import './globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatBubble from '@/components/chat-bubble'

export const metadata = {
  title: 'Non-Stop Entertainment',
  description: "Chicagoland's Premier DJ Service for Adults",
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
