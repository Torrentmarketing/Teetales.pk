import type { Metadata } from 'next'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    'Premium plain cotton tees made for Pakistani body types. 100% breathable fabric, minimalist styles, and fast delivery across Pakistan.',
  keywords: ['t-shirts', 'plain tees', 'Pakistan', 'Peshawar', 'cotton tshirts', 'TeeTales'],
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: 'Premium plain cotton tees. Made for everyday life.',
    type: 'website',
    locale: 'en_PK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Navbar cartCount={0} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
