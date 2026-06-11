import Link from 'next/link';
import Image from 'next/image';

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: { label: string; variant: 'bestseller' | 'popular' | 'trending' | 'value' };
  swatches?: ColorSwatch[];
  href: string;
}

const badgeStyles: Record<string, string> = {
  bestseller: 'bg-amber-100 text-amber-800',
  popular:    'bg-amber-100 text-amber-800',
  trending:   'bg-red-100 text-red-700',
  value:      'bg-green-100 text-green-800',
};

const badgeIcons: Record<string, string> = {
  bestseller: '🔥',
  popular:    '⭐',
  trending:   '📈',
  value:      '✅',
};

export default function ProductCard({
  id, name, price, originalPrice, image, badge, swatches = [], href
}: ProductCardProps) {
  const visibleSwatches = swatches.slice(0, 6);
  const overflow = swatches.length - 6;

  return (
    <Link href={href} className="group block bg-white rounded-2xl overflow-hidden card-hover border border-brand-border">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <div className={`absolute top-3 left-3 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[badge.variant]}`}>
            <span>{badgeIcons[badge.variant]}</span>
            {badge.label}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-brand-charcoal mb-1">{name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-bold text-brand-charcoal">
            Rs.{price.toLocaleString()}.00 PKR
          </span>
          {originalPrice && (
            <span className="text-xs text-brand-muted line-through">
              Rs.{originalPrice.toLocaleString()}.00
            </span>
          )}
        </div>

        {/* Color swatches */}
        {visibleSwatches.length > 0 && (
          <div className="flex items-center gap-1.5">
            {visibleSwatches.map((swatch) => (
              <button
                key={swatch.name}
                title={swatch.name}
                className="w-6 h-6 rounded-full border-2 border-white ring-1 ring-neutral-200
                           hover:ring-brand-charcoal transition-all"
                style={{ backgroundColor: swatch.hex }}
                onClick={(e) => e.preventDefault()}
              />
            ))}
            {overflow > 0 && (
              <span className="text-xs text-brand-muted font-medium ml-1">+{overflow}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
