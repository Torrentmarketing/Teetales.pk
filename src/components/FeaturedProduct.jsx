export default function FeaturedProduct() {
  return (
    <section className="bg-[#F6F2EB] py-16" id="packs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm overflow-hidden border border-[#E2DDD4] flex flex-col lg:flex-row min-h-[360px]">

          {/* Image */}
          <div className="w-full lg:w-1/2 bg-[#DDD8CF] min-h-[260px] lg:min-h-auto flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-[#7A6A57]">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" opacity="0.4">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span className="text-xs opacity-50">Pack lifestyle photo</span>
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 bg-[#F6F2EB] p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-block bg-[#C2622D] text-[#F6F2EB] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 w-fit">
              Best Seller
            </span>

            <h2
              className="text-[#18120E] mb-3 leading-tight"
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontFamily: "'Georgia', serif",
                fontWeight: '700',
              }}
            >
              Pack of 5 Plain T-Shirts
            </h2>

            <p className="text-[#7A6A57] text-sm mb-5">
              Your everyday essentials. Mix colors, wear daily, look effortlessly put-together.
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-[#18120E] text-2xl font-bold">Rs.3,549</span>
              <span className="text-[#7A6A57] line-through text-base">Rs.4,299</span>
              <span className="text-[#C2622D] text-xs font-semibold">Save 17%</span>
            </div>

            <a
              href="/packs/pack-of-5"
              className="bg-[#18120E] text-[#F6F2EB] px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-[#C2622D] transition-colors duration-200 rounded-sm w-fit"
            >
              Build your Pack of 5
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
