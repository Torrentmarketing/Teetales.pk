import Link from 'next/link'
import { Button, Badge, SectionHeading } from '@/components/ui'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS, FEATURED_PRODUCT } from '@/lib/data'

// ─── Pricing Banner ───────────────────────────────────────
export function PricingBanner() {
  return (
    <section className="bg-cream-100 py-14 text-center">
      <div className="container-site">
        <p className="eyebrow mb-3">Volume Pricing</p>
        <h2 className="text-display-md font-bold text-charcoal">
          The more you grab, the less each tee costs.
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { pack: 'Pack of 2',  perShirt: 'Rs.875' },
            { pack: 'Pack of 3',  perShirt: 'Rs.766' },
            { pack: 'Pack of 5',  perShirt: 'Rs.710' },
            { pack: 'Pack of 7',  perShirt: 'Rs.686' },
          ].map(({ pack, perShirt }) => (
            <div key={pack} className="bg-white rounded-xl border border-charcoal-100 p-4">
              <p className="text-xs text-charcoal-400 mb-1">{pack}</p>
              <p className="text-base font-bold text-charcoal">{perShirt}</p>
              <p className="text-[10px] text-charcoal-400">per shirt</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Featured Product Card ────────────────────────────────
export function FeaturedProduct() {
  const p = FEATURED_PRODUCT
  return (
    <section id="packs" className="section-pad">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-cream-100 rounded-2xl overflow-hidden">

          {/* Image */}
          <div className="relative h-[280px] lg:h-full min-h-[320px] bg-cream-200 flex items-center justify-center">
            <span className="text-8xl">👕</span>
          </div>

          {/* Info */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {p.badge && (
              <div className="mb-4">
                <Badge label={p.badge.label} variant={p.badge.variant} size="md" />
              </div>
            )}
            <h2 className="text-display-md font-bold text-charcoal mb-3">{p.name}</h2>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-bold text-charcoal">
                Rs.{p.price.toLocaleString()}.00 PKR
              </span>
              {p.originalPrice && (
                <span className="text-base text-charcoal-400 line-through">
                  Rs.{p.originalPrice.toLocaleString()}.00
                </span>
              )}
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-8">
              Pick any 5 colours from 10+ options. Delivered to your door, all over Pakistan. Free shipping included.
            </p>
            <Button href={`/packs/${p.slug}`} variant="primary" size="lg">
              Build your Pack of 5
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Product Grid ─────────────────────────────────────────
export function ProductGrid() {
  return (
    <section className="pb-section bg-white">
      <div className="container-site">
        <div className="flex items-end justify-between mb-8">
          <SectionHeading
            title="All Packs"
            subtitle="Choose your count. Mix your colours."
            align="left"
          />
          <Link href="/packs" className="text-sm font-medium text-charcoal-400 hover:text-charcoal transition-colors whitespace-nowrap ml-8">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
