import Link from 'next/link';

const footerLinks = [
  { label: 'Home',            href: '/' },
  { label: 'About',           href: '/about' },
  { label: 'Referral',        href: '/referral' },
  { label: 'Size Guide',      href: '/size-guide' },
  { label: 'Packs',           href: '/packs' },
  { label: 'T Shirts',        href: '/tshirts' },
  { label: 'Shipping Policy', href: '/shipping-policy' },
  { label: 'Return Policy',   href: '/return-policy' },
];

const paymentMethods = ['COD', 'JAZZCASH', 'EASYPAISA', 'VISA', 'MC'];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Logo & tagline */}
        <div className="text-center mb-10">
          <p className="text-2xl font-bold tracking-tight">
            teetales<span className="text-brand-amber">.</span>
          </p>
          <p className="text-sm text-neutral-400 mt-1 tracking-wide">Every Tee Tells a Story</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Track Your Order — highlighted */}
          <Link
            href="/track-order"
            className="text-sm font-medium bg-neutral-700 hover:bg-neutral-600
                       px-4 py-1 rounded-full transition-colors flex items-center gap-1.5"
          >
            📦 Track Your Order
          </Link>
        </nav>

        {/* Contact info */}
        <div className="text-center text-sm text-neutral-400 mb-10 space-y-1">
          <p>📞 0343-1659033</p>
          <p>📍 Teetales Store, Opp. ICMS School, Warsak Road, Peshawar</p>
        </div>

        <div className="border-t border-neutral-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© 2026 TeeTales · Made in Pakistan 🇵🇰</p>

          {/* Payment badges */}
          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="text-[10px] font-bold text-neutral-400 border border-neutral-700
                           px-2 py-1 rounded tracking-wider"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
