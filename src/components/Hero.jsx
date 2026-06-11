export default function Hero() {
  return (
    <section className="bg-[#F6F2EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[88vh] gap-8 py-16 lg:py-0">

          {/* Left: Text */}
          <div className="flex-1 max-w-xl lg:max-w-none lg:pr-8">
            {/* Eyebrow */}
            <p className="text-[#C2622D] text-xs tracking-widest uppercase font-semibold mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#C2622D]" />
              Peshawar, Pakistan
            </p>

            {/* Headline */}
            <h1
              className="text-[#18120E] leading-none mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: '700',
                letterSpacing: '-0.02em',
              }}
            >
              Wear your<br />
              <span className="relative inline-block">
                story.
                <span
                  className="absolute bottom-1 left-0 w-full h-1 bg-[#C2622D] opacity-60 rounded"
                  style={{ transform: 'scaleX(1)', transformOrigin: 'left' }}
                />
              </span>
            </h1>

            {/* Sub */}
            <p className="text-[#7A6A57] text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
              High-quality cotton tees — plain, bold, and timeless. Tailored for men, women & children. Every tee tells a story.
            </p>

            {/* Values */}
            <div className="flex items-center gap-5 mb-10 flex-wrap">
              {['Minimalist', 'Bold', 'Timeless'].map((v) => (
                <span key={v} className="text-xs text-[#18120E] font-semibold tracking-widest uppercase border-b border-[#18120E] pb-0.5">
                  {v}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/packs"
                className="bg-[#18120E] text-[#F6F2EB] px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-[#C2622D] transition-colors duration-200 rounded-sm"
              >
                Shop the Packs
              </a>
              <a
                href="/tshirts"
                className="border border-[#18120E] text-[#18120E] px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-[#C2622D] hover:text-[#C2622D] transition-colors duration-200 rounded-sm"
              >
                All T-Shirts
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {[
                { icon: '✓', text: '100% Cotton' },
                { icon: '✓', text: 'COD Available' },
                { icon: '✓', text: 'Free Delivery' },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-1.5 text-xs text-[#7A6A57]">
                  <span className="text-[#C2622D] font-bold">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative">
              {/* Main image block */}
              <div
                className="w-full rounded-sm overflow-hidden"
                style={{ aspectRatio: '4/5', background: '#DDD8CF', maxHeight: '580px' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-[#7A6A57]">
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" opacity="0.4">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="text-sm opacity-50">Hero Model Photo</span>
                </div>
              </div>

              {/* Floating tag */}
              <div className="absolute bottom-6 left-6 bg-[#18120E] text-[#F6F2EB] px-4 py-3 rounded-sm">
                <p className="text-[10px] tracking-widest uppercase text-[#7A6A57] mb-0.5">New Collection</p>
                <p className="text-sm font-semibold">Plain Essentials Pack</p>
              </div>

              {/* Accent dot */}
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-[#C2622D] opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
