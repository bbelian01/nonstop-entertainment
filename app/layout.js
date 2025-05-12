import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.nonstopentertainers.com'),
  title: {
    default: 'Non-Stop Entertainment | Chicago\'s Premier Entertainment Team',
    template: '%s | Non-Stop Entertainment'
  },
  description: 'Chicago\'s most innovative entertainment team. Transforming your event into an unforgettable experience with cutting-edge technology and creative expertise.',
  keywords: ['entertainment services', 'event entertainment', 'Chicago entertainment', 'corporate entertainment', 'wedding entertainment', 'professional entertainers', 'DJ services', 'event planning'],
  authors: [{ name: 'Non-Stop Entertainment' }],
  creator: 'Non-Stop Entertainment',
  publisher: 'Non-Stop Entertainment',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nonstopentertainers.com',
    siteName: 'Non-Stop Entertainment',
    title: 'Non-Stop Entertainment | Chicago\'s Premier Entertainment Team',
    description: 'Chicago\'s most innovative entertainment team. Transforming your event into an unforgettable experience with cutting-edge technology and creative expertise.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Non-Stop Entertainment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Non-Stop Entertainment | Chicago\'s Premier Entertainment Team',
    description: 'Chicago\'s most innovative entertainment team. Transforming your event into an unforgettable experience with cutting-edge technology and creative expertise.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="pt-16 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
