'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/lib/data'
import type { Product } from '@/lib/types'

type SortOption = 'default' | 'price-asc' | 'price-desc'
type GridView  = 2 | 3

function FilterBar({
  count, sort, setSort, grid, setGrid,
}: {
  count: number
  sort: SortOption
  setSort: (s: SortOption) => void
  grid: GridView
  setGrid: (g: GridView) => void
}) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-charcoal-100 mb-8">
      {/* Left: Filters */}
      <div className="flex items-center gap-3">
        <select className="text-sm border border-charcoal-100 rounded-brand px-3 py-2 bg-white 
                           text-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal">
          <option>Availability</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
        <select className="text-sm border border-charcoal-100 rounded-brand px-3 py-2 bg-white 
                           text-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal">
          <option>Price</option>
          <option>Under Rs.2,000</option>
          <option>Rs.2,000 – Rs.5,000</option>
          <option>Over Rs.5,000</option>
        </select>
      </div>

      {/* Right: Sort + Grid */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-charcoal-400 hidden sm:block">{count} items</span>
        <select
          value={sort}
          onChange={e => setSort(e.target.value as SortOption)}
          className="text-sm border border-charcoal-100 rounded-brand px-3 py-2 bg-white 
                     text-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal"
        >
          <option value="default">Sort</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        {/* Grid toggle */}
        <div className="hidden sm:flex items-center gap-1">
          <button
            onClick={() => setGrid(3)}
            className={`p-1.5 rounded transition-colors ${grid === 3 ? 'text-charcoal' : 'text-charcoal-200 hover:text-charcoal-400'}`}
            aria-label="3-column grid"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="6" height="6" rx="1"/><rect x="9" y="3" width="6" height="6" rx="1"/>
              <rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="9" width="6" height="6" rx="1"/>
              <rect x="9" y="9" width="6" height="6" rx="1"/><rect x="15" y="9" width="6" height="6" rx="1"/>
              <rect x="3" y="15" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/>
              <rect x="15" y="15" width="6" height="6" rx="1"/>
            </svg>
          </button>
          <button
            onClick={() => setGrid(2)}
            className={`p-1.5 rounded transition-colors ${grid === 2 ? 'text-charcoal' : 'text-charcoal-200 hover:text-charcoal-400'}`}
            aria-label="2-column grid"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/>
              <rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Social proof toast
function SocialProofToast() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="fixed bottom-6 left-4 z-50 bg-white border border-charcoal-100 rounded-xl 
                    shadow-lg p-3 flex items-center gap-3 max-w-xs animate-slide-in">
      <div className="w-10 h-10 bg-cream-200 rounded-lg flex-shrink-0 flex items-center justify-center text-lg">
        👕
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-charcoal-400">Hamza from Karachi purchased</p>
        <p className="text-xs font-semibold text-amber-brand truncate">Pack Of 3 Plain T Shirts</p>
        <p className="text-[10px] text-charcoal-400">19 Hours ago</p>
      </div>
      <button onClick={() => setVisible(false)} className="text-charcoal-200 hover:text-charcoal flex-shrink-0 ml-1">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  )
}

export default function PacksPage() {
  const [sort, setSort] = useState<SortOption>('default')
  const [grid, setGrid] = useState<GridView>(3)

  const sorted: Product[] = [...PRODUCTS].sort((a, b) => {
    if (sort === 'price-asc')  return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    return 0
  })

  const gridClass = grid === 3
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2'

  return (
    <>
      {/* Page title */}
      <section className="bg-cream-50 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-charcoal">Packs</h1>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="container-site">
          <FilterBar
            count={sorted.length}
            sort={sort} setSort={setSort}
            grid={grid} setGrid={setGrid}
          />
          <div className={`grid ${gridClass} gap-5`}>
            {sorted.map(product => (
              <ProductCard key={product.id} product={product} size="md" />
            ))}
          </div>
        </div>
      </section>

      <SocialProofToast />
    </>
  )
}
