'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, Badge, StarRating } from '@/components/ui'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/lib/data'

// Simulated cart item
const MOCK_ITEM = {
  product: PRODUCTS.find(p => p.id === 'pack-5')!,
  quantity: 1,
  selections: [
    { index: 1, color: 'Black',      size: 'XL' },
    { index: 2, color: 'Royal Blue', size: 'XL' },
    { index: 3, color: 'Charcoal',   size: 'XL' },
    { index: 4, color: 'Navy',       size: 'XL' },
    { index: 5, color: 'Olive',      size: 'XL' },
  ],
}

function CartItem() {
  const [qty, setQty] = useState(MOCK_ITEM.quantity)
  const { product, selections } = MOCK_ITEM

  return (
    <div className="border border-charcoal-100 rounded-xl p-4 md:p-5">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="w-20 h-20 bg-cream-200 rounded-lg flex-shrink-0 flex items-center justify-center">
          <span className="text-3xl">👕</span>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between gap-2">
            <h3 className="text-sm font-semibold text-charcoal">{product.name}</h3>
            <p className="text-sm font-semibold text-charcoal flex-shrink-0">
              Rs.{(product.price * qty).toLocaleString()}.00
            </p>
          </div>

          <div className="mt-2 space-y-0.5">
            {selections.map(s => (
              <p key={s.index} className="text-xs text-charcoal-400">
                Shirt {s.index}: {s.color} / {s.size}
              </p>
            ))}
          </div>

          <p className="text-xs font-medium text-charcoal mt-2">
            Rs.{product.price.toLocaleString()}.00
          </p>

          {/* Quantity stepper */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center border border-charcoal-100 rounded-brand">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-8 h-8 flex items-center justify-center text-charcoal-400 hover:text-charcoal transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14"/>
                </svg>
              </button>
              <span className="w-8 text-center text-sm font-medium text-charcoal">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-8 h-8 flex items-center justify-center text-charcoal-400 hover:text-charcoal transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </div>
            <button className="text-charcoal-200 hover:text-red-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function UpsellCard() {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-charcoal-100 rounded-xl p-4 bg-cream-50">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <Badge label="Most Popular" variant="popular" size="sm" />
          <div>
            <p className="text-sm font-semibold text-charcoal">Round it out with a Pack of 7</p>
            <p className="text-xs text-charcoal-400 mt-1 max-w-xs">
              Add 2 tees for Rs.625 each — cheaper than your current Rs.710 a shirt.
            </p>
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="text-charcoal-400 flex-shrink-0">
          <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
               fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="mt-4 pt-4 border-t border-charcoal-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-charcoal">Pack of 7 Plain T Shirts</p>
              <p className="text-sm text-charcoal-400">Rs.4,799.00</p>
            </div>
            <Button variant="primary" size="sm" href="/packs/pack-of-7">
              Switch to Pack of 7
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function TrustBadges() {
  const badges = [
    { icon: '↩️', title: '7-Day Returns',     sub: 'Within 7 days' },
    { icon: '🚚', title: '2–6 Day Delivery',  sub: '490+ cities' },
    { icon: '⏱️', title: '4–8hr Processing',  sub: 'Fastest in PK' },
  ]
  return (
    <div className="grid grid-cols-3 gap-3">
      {badges.map(b => (
        <div key={b.title} className="border border-charcoal-100 rounded-xl p-3 text-center">
          <span className="text-xl block mb-1">{b.icon}</span>
          <p className="text-xs font-semibold text-charcoal leading-snug">{b.title}</p>
          <p className="text-[10px] text-charcoal-400">{b.sub}</p>
        </div>
      ))}
    </div>
  )
}

function StatsCard() {
  return (
    <div className="bg-amber-light border border-amber-muted rounded-xl p-5">
      <p className="text-sm font-bold text-amber-brand mb-1">📦 105+ orders this month</p>
      <p className="text-xs text-charcoal-400 mb-4">delivered to 20+ cities across Pakistan</p>
      <div className="grid grid-cols-3 gap-4 text-center">
        {[['37', 'Karachi'], ['32', 'Lahore'], ['8', 'Islamabad']].map(([n, city]) => (
          <div key={city}>
            <p className="text-2xl font-black text-amber-brand">{n}</p>
            <p className="text-[10px] font-semibold text-charcoal-400 uppercase tracking-wide">{city}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function OrderSummary() {
  const [discountOpen, setDiscountOpen] = useState(false)
  const [code, setCode] = useState('')
  const total = MOCK_ITEM.product.price

  return (
    <div className="bg-white border border-charcoal-100 rounded-xl p-5 sticky top-24">
      {/* Discount */}
      <button
        onClick={() => setDiscountOpen(!discountOpen)}
        className="w-full flex items-center justify-between text-sm font-medium text-charcoal 
                   border border-charcoal-100 rounded-brand px-4 py-3 hover:bg-cream-50 transition-colors"
      >
        Discount
        <svg className={`w-4 h-4 transition-transform ${discountOpen ? 'rotate-45' : ''}`}
             fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </button>
      {discountOpen && (
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Enter code"
            className="flex-1 text-sm border border-charcoal-100 rounded-brand px-3 py-2 
                       focus:outline-none focus:ring-1 focus:ring-charcoal"
          />
          <Button variant="primary" size="sm">Apply</Button>
        </div>
      )}

      {/* Total */}
      <div className="flex items-center justify-between mt-5 mb-1">
        <span className="text-sm text-charcoal-400">Estimated total</span>
        <span className="text-base font-bold text-charcoal">Rs.{total.toLocaleString()}.00 PKR</span>
      </div>
      <p className="text-xs text-charcoal-400 mb-5">Taxes and shipping calculated at checkout.</p>

      <Button variant="primary" size="lg" className="w-full justify-center">
        Check out
      </Button>
    </div>
  )
}

export default function CartPage() {
  const related = PRODUCTS.filter(p => p.id !== 'pack-5')

  return (
    <div className="section-pad">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* Left column */}
          <div className="space-y-5">
            <CartItem />
            <UpsellCard />

            {/* Free delivery banner */}
            <div className="bg-green-soft border border-green-text/20 rounded-xl px-4 py-3">
              <p className="text-sm text-green-text">
                <span className="font-semibold">✓ Free delivery included</span>{' '}
                — every TeeTales order ships free, all over Pakistan.
              </p>
            </div>

            <TrustBadges />

            {/* Customers also bought */}
            <div>
              <p className="text-xs font-semibold text-charcoal-400 uppercase tracking-widest mb-3">
                Customers Also Bought
              </p>
              <div className="border border-charcoal-100 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cream-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👕</span>
                  </div>
                  <div>
                    <Badge label="Best Value" variant="value" size="sm" />
                    <p className="text-sm font-semibold text-charcoal mt-1">Pack of 7 Plain T-Shirts</p>
                    <p className="text-xs text-charcoal-400">Rs.4,799.00</p>
                  </div>
                </div>
                <Link
                  href="/packs/pack-of-7"
                  className="w-9 h-9 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-charcoal-800 transition-colors flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            <StatsCard />

            {/* You may also like */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-charcoal">You may also like</h3>
                <Link href="/packs" className="text-sm text-charcoal-400 hover:text-charcoal transition-colors">
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.slice(0, 4).map(p => (
                  <ProductCard key={p.id} product={p} size="sm" showColors={false} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Order Summary */}
          <div>
            <OrderSummary />
          </div>

        </div>
      </div>
    </div>
  )
}
