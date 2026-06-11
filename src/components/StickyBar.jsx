/* ── LifestyleSection ── */
export function LifestyleSection() {
  return (
    <section className="bg-[#F6F2EB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-[#C2622D] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
            The TeeTales Life
          </p>
          <h2
            className="text-[#18120E]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: "'Georgia', serif", fontWeight: '700' }}
          >
            One tee. Endless stories.
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" id="gallery">
          <div className="col-span-1 md:col-span-2 bg-[#DDD8CF] rounded-sm" style={{ aspectRatio: '16/9' }}>
            <div className="w-full h-full flex items-center justify-center text-[#7A6A57] text-xs opacity-40">
              Lifestyle photo 1
            </div>
          </div>
          <div className="bg-[#DDD8CF] rounded-sm" style={{ aspectRatio: '3/4' }}>
            <div className="w-full h-full flex items-center justify-center text-[#7A6A57] text-xs opacity-40">
              Photo 2
            </div>
          </div>
          <div className="bg-[#DDD8CF] rounded-sm" style={{ aspectRatio: '3/4' }}>
            <div className="w-full h-full flex items-center justify-center text-[#7A6A57] text-xs opacity-40">
              Photo 3
            </div>
          </div>
          <div className="bg-[#DDD8CF] rounded-sm" style={{ aspectRatio: '3/4' }}>
            <div className="w-full h-full flex items-center justify-center text-[#7A6A57] text-xs opacity-40">
              Photo 4
            </div>
          </div>
          <div className="bg-[#DDD8CF] rounded-sm" style={{ aspectRatio: '3/4' }}>
            <div className="w-full h-full flex items-center justify-center text-[#7A6A57] text-xs opacity-40">
              Photo 5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── UGCSection ── */
export function UGCSection() {
  return (
    <section className="bg-[#F0EBE1] py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-[#C2622D] text-xs tracking-widest uppercase font-semibold mb-3">
          @teetales.pk
        </p>
        <h2
          className="text-[#18120E] mb-2"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: "'Georgia', serif", fontWeight: '700' }}
        >
          Tag us. Get featured.
        </h2>
        <p className="text-[#7A6A57] text-sm mb-8">
          Wear your story, tag @teetales.pk, and join the tribe on Instagram.
        </p>

        {/* UGC strip placeholders */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-[#DDD8CF] rounded-sm flex items-center justify-center text-[#7A6A57] text-xs opacity-40"
              style={{ width: '160px', aspectRatio: '1' }}
            >
              UGC {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── StickyBar ── */
export default function StickyBar() {
  return (
    <div className="sticky bottom-0 z-40 bg-[#18120E] border-t border-[#2A1F18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span
            className="text-[#F6F2EB] font-bold text-lg"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Wear your story.
          </span>
          <span className="text-[#7A6A57] text-sm ml-3 hidden sm:inline">
            Start with the Pack of 5.
          </span>
        </div>
        <a
          href="/packs/pack-of-5"
          className="bg-[#C2622D] hover:bg-[#A84E22] text-white px-6 py-2.5 text-sm font-semibold rounded-sm transition-colors duration-150 whitespace-nowrap"
        >
          Start with Pack of 5 →
        </a>
      </div>
    </div>
  );
}

/* ── Footer ── */
export function Footer() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Referral', href: '/referral' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Packs', href: '/packs' },
    { label: 'T Shirts', href: '/tshirts' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
    { label: 'Return Policy', href: '/return-policy' },
  ];

  const payments = ['COD', 'JAZZCASH', 'EASYPAISA', 'VISA', 'MC'];

  return (
    <footer className="bg-[#18120E]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Logo + tagline */}
        <div className="text-center mb-10">
          <a href="/" className="inline-block mb-2">
            <span
              className="text-[#F6F2EB] font-bold tracking-tight"
              style={{ fontSize: '1.75rem', fontFamily: "'Georgia', serif" }}
            >
              teetales<span className="text-[#C2622D]">.</span>
            </span>
          </a>
          <p className="text-[#7A6A57] text-sm">Every Tee tells a story.</p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#7A6A57] text-xs hover:text-[#F6F2EB] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/track-order"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#F6F2EB] border border-[#3D3428] px-3 py-1.5 rounded-sm hover:border-[#C2622D] hover:text-[#C2622D] transition-all"
          >
            📦 Track Your Order
          </a>
        </div>

        {/* Contact */}
        <div className="text-center mb-8">
          <p className="text-[#4A3728] text-xs">
            📞 0343-1659033 &nbsp;·&nbsp; 📍 Opp. ICMS School, Warsak Road, Peshawar &nbsp;·&nbsp; 💬 DM us to order
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A1F18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4A3728] text-[11px]">© 2025 TeeTales · Made in Pakistan</p>
          <div className="flex items-center gap-3">
            {payments.map((p) => (
              <span
                key={p}
                className="text-[#4A3728] text-[10px] font-semibold tracking-wider border border-[#2A1F18] px-2 py-0.5 rounded"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
