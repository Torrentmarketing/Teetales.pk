import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui'
import type { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
  size?: 'sm' | 'md' | 'lg'
  showColors?: boolean
}

export default function ProductCard({
  product,
  size = 'md',
  showColors = true,
}: ProductCardProps) {
  const { name, slug, price, originalPrice, badge, image, colors } = product

  const visibleColors = colors.slice(0, 6)
  const overflow = colors.length - 6

  return (
    <Link href={`/packs/${slug}`} className="card-base group block">
      {/* Image */}
      <div className="relative overflow-hidden bg-cream-100 aspect-[4/3]">
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge label={badge.label} variant={badge.variant} />
          </div>
        )}
        <div className="w-full h-full bg-cream-200 transition-transform duration-500 group-hover:scale-105 relative">
          {/* In production, replace with real images */}
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              // fallback placeholder
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          {/* Placeholder when no image */}
          <div className="absolute inset-0 flex items-center justify-center bg-cream-100">
            <span className="text-charcoal-200 text-4xl">👕</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-charcoal mb-1 group-hover:text-amber-brand transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-charcoal">
            Rs.{price.toLocaleString()}.00 PKR
          </span>
          {originalPrice && (
            <span className="text-xs text-charcoal-400 line-through">
              Rs.{originalPrice.toLocaleString()}.00
            </span>
          )}
        </div>

        {/* Color swatches */}
        {showColors && (
          <div className="flex items-center gap-1.5">
            {visibleColors.map(color => (
              <span
                key={color.name}
                title={color.name}
                className="w-5 h-5 rounded-full border-2 border-white ring-1 ring-charcoal-100 
                           hover:ring-charcoal-400 transition-all cursor-pointer flex-shrink-0"
                style={{ backgroundColor: color.hex }}
              />
            ))}
            {overflow > 0 && (
              <span className="text-[10px] text-charcoal-400 font-medium ml-0.5">
                +{overflow}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
