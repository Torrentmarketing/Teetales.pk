'use client'
import { useState } from 'react'
import { SectionHeading, StarRating } from '@/components/ui'
import { COLOR_SWATCHES, REVIEWS } from '@/lib/data'

// ─── Quality Pillars ──────────────────────────────────────
const PILLARS = [
  {
    emoji: '🧵',
    label: 'The Fabric',
    title: '190 GSM cotton',
    body: 'Ring-spun and combed for a smooth finish that stays soft wash after wash.',
  },
  {
    emoji: '📐',
    label: 'Pakistani Fit',
    title: 'Cut for real bodies',
    body: 'Not oversized, not boxy. Clean structure and the right length for everyday wear.',
  },
  {
    emoji: '🔒',
    label: 'Built to last',
    title: 'No shrink. No fade.',
    body: 'Pre-washed and colour-locked. Wear it 50 times — it holds its shape.',
  },
]

export function QualityPillars() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading title="Done right, not loud." className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map(({ emoji, label, title, body }) => (
            <div key={title} className="group">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-cream-200 rounded-xl mb-5 flex items-center justify-center overflow-hidden group-hover:bg-cream-100 transition-colors">
                <span className="text-6xl">{emoji}</span>
              </div>
              <p className="eyebrow mb-2">{label}</p>
              <h3 className="text-lg font-bold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-charcoal-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Color Palette ────────────────────────────────────────
export function ColorPalette() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="colors" className="section-pad bg-cream-100">
      <div className="container-site">
        <SectionHeading
          eyebrow="10+ Colors"
          title="Pick your palette."
          subtitle="Every pack lets you mix and match — no minimums per colour."
          className="mb-10"
        />

        {/* Hanger image placeholder */}
        <div className="w-full h-[200px] md:h-[300px] bg-cream-200 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
          <span className="text-7xl">👕👕👕👕👕</span>
        </div>

        {/* Swatches */}
        <div className="flex flex-wrap justify-center gap-3">
          {COLOR_SWATCHES.map(color => (
            <button
              key={color.name}
              onClick={() => setActive(active === color.name ? null : color.name)}
              title={color.name}
              className={`group flex flex-col items-center gap-2 transition-all`}
            >
              <span
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  active === color.name
                    ? 'border-charcoal scale-110 ring-2 ring-charcoal ring-offset-2'
                    : 'border-white ring-1 ring-charcoal-100 hover:ring-charcoal-400'
                }`}
                style={{ backgroundColor: color.hex }}
              />
              <span className={`text-[10px] transition-colors ${
                active === color.name ? 'text-charcoal font-semibold' : 'text-charcoal-400'
              }`}>
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ──────────────────────────────────────────────
export function ReviewsSection() {
  const [index, setIndex] = useState(0)
  const visible = REVIEWS.slice(index, index + 3)

  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-3">
          <SectionHeading title="Customers are saying" className="mb-3" />
          <div className="flex items-center justify-center gap-3">
            <StarRating rating={4.9} size="lg" />
            <span className="text-sm font-semibold text-charcoal">4.9</span>
            <span className="text-xs text-charcoal-400">· {REVIEWS.length * 12}+ reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map(review => (
            <div key={review.id} className="bg-cream-50 border border-charcoal-100 rounded-xl p-5">
              <StarRating rating={review.rating} size="sm" />
              <h4 className="text-sm font-semibold text-charcoal mt-3 mb-1">{review.packName}</h4>
              <p className="text-sm text-charcoal-400 leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-charcoal">{review.author}</span>
                <span className="text-xs text-charcoal-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => setIndex(Math.max(0, index - 1))}
            disabled={index === 0}
            className="w-9 h-9 rounded-full border border-charcoal-100 flex items-center justify-center 
                       text-charcoal-400 hover:border-charcoal hover:text-charcoal disabled:opacity-30 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={() => setIndex(Math.min(REVIEWS.length - 3, index + 1))}
            disabled={index >= REVIEWS.length - 3}
            className="w-9 h-9 rounded-full border border-charcoal-100 flex items-center justify-center 
                       text-charcoal-400 hover:border-charcoal hover:text-charcoal disabled:opacity-30 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Lifestyle ────────────────────────────────────────────
export function LifestyleSection() {
  return (
    <section className="section-pad bg-cream-100">
      <div className="container-site">
        <div className="mb-10">
          <p className="eyebrow mb-3">The Everyday</p>
          <h2 className="text-display-md font-bold text-charcoal max-w-sm">
            One uniform. Endless days.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`bg-cream-200 rounded-xl overflow-hidden flex items-center justify-center
                ${i === 0 ? 'col-span-2 row-span-2 h-64 md:h-full' : 'h-36 md:h-40'}`}
            >
              <span className="text-5xl">📸</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── UGC Strip ────────────────────────────────────────────
export function UGCSection() {
  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="container-site">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">@teetales.pk</p>
          <h2 className="text-display-md font-bold text-charcoal">Tag us. Get featured.</h2>
          <p className="text-sm text-charcoal-400 mt-2">
            Share your tees on Instagram and we'll repost our favourites.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-cream-200 rounded-lg overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="text-3xl">📸</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Sticky CTA Bar ───────────────────────────────────────
export function StickyBar() {
  return (
    <section className="bg-charcoal py-12 md:py-16 text-center">
      <div className="container-site">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Build your pack.</h2>
        <a
          href="/packs/pack-of-5"
          className="inline-flex items-center gap-2 bg-white text-charcoal text-sm font-semibold 
                     px-8 py-4 rounded-brand hover:bg-cream-100 active:scale-[0.98] transition-all"
        >
          Start with the Pack of 5
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <p className="text-xs text-charcoal-400 mt-4">Free delivery · COD available · Ships in 4–8 hrs</p>
      </div>
    </section>
  )
}
