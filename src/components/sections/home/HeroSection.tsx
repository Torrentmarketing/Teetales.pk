import { Button } from '@/components/ui'

export default function HeroSection() {
  return (
    <section className="bg-cream-100 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[560px] py-16 lg:py-20">

          {/* Text */}
          <div className="order-2 lg:order-1 max-w-lg">
            <p className="eyebrow mb-4">New Arrivals · Peshawar</p>
            <h1 className="text-display-xl font-black text-charcoal mb-5 leading-[1.05]">
              Wear your<br />story.
            </h1>
            <p className="text-charcoal-400 text-base leading-relaxed mb-8 max-w-sm">
              100% breathable cotton tees tailored for everyday life. Minimalist, bold, and made to last — one tee for every mood.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/packs/pack-of-5" variant="primary" size="lg">
                Shop the Pack of 5
              </Button>
              <Button href="/packs" variant="outline" size="lg">
                All Packs
              </Button>
            </div>

            {/* Trust mini row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-8">
              {['Free delivery', 'COD available', '7-day returns'].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-charcoal-400">
                  <svg className="w-3.5 h-3.5 text-green-text" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative h-[380px] lg:h-[520px]">
            <div className="absolute inset-0 bg-cream-200 rounded-2xl overflow-hidden">
              {/* Replace with real model image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-charcoal-200 text-8xl">👕</span>
              </div>
            </div>
            {/* Floating pack count badge */}
            <div className="absolute -bottom-4 -left-4 lg:left-8 bg-white border border-charcoal-100 
                            rounded-xl px-4 py-3 shadow-sm">
              <p className="text-xs text-charcoal-400">Starting from</p>
              <p className="text-lg font-bold text-charcoal">Rs.1,749 PKR</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
