import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sanuthi Liyoni Rathnayake',
    template: '%s | Sanuthi Liyoni Rathnayake',
  },
  description: "I'm a Computer Science Undergraduate trying to understand what's happening in the tech industry!",
  openGraph: {
    title: 'Sanuthi Liyoni Rathnayake',
    description: "I'm a Computer Science Undergraduate trying to understand what's happening in the tech industry!",
    url: baseUrl,
    siteName: 'Sanuthi Liyoni Rathnayake',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable)}
      style={{ backgroundColor: 'var(--paper)', color: 'var(--ink)' }}
    >
      <body className="antialiased max-w-full mx-auto mt-8 px-10">
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}