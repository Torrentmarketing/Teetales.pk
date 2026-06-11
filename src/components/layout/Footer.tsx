import Link from 'next/link'
import { BRAND, NAV_LINKS } from '@/lib/data'

const EXTRA_LINKS = [
  { label: 'Shipping Policy', href: '/shipping-policy' },
  { label: 'Return Policy',   href: '/return-policy' },
]

const PAYMENT_METHODS = ['COD', 'JazzCash', 'EasyPaisa', 'Visa', 'MC']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="container-site py-12 md:py-16">
        <div className="text-center mb-10">
          <Link href="/" className="text-3xl font-bold tracking-tight text-white inline-block mb-2">
            {BRAND.logo}
          </Link>
          <p className="text-charcoal-200 text-sm">{BRAND.tagline}</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {[...NAV_LINKS, ...EXTRA_LINKS].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-charcoal-200 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/track-order"
            className="text-sm font-semibold text-charcoal-200 hover:text-white transition-colors 
                       flex items-center gap-1.5 border border-charcoal-600 px-3 py-1 rounded-brand"
          >
            <span>📦</span> Track Your Order
          </Link>
        </nav>

        {/* Contact */}
        <div className="text-center mb-8 space-y-1">
          <p className="text-sm text-charcoal-200">
            📞{' '}
            <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">
              {BRAND.phone}
            </a>
            {' '}·{' '}
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">
              WhatsApp Us
            </a>
          </p>
          <p className="text-xs text-charcoal-400">{BRAND.address}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-charcoal-400">
              © 2026 {BRAND.name} · Made in Pakistan
            </p>
            <div className="flex items-center gap-2">
              {PAYMENT_METHODS.map(method => (
                <span
                  key={method}
                  className="text-xs font-semibold text-charcoal-400 border border-charcoal-600 
                             px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
