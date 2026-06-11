import React from 'react'
import Link from 'next/link'

// ─── Button ───────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'amber'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-brand transition-all duration-200 active:scale-[0.98]'

  const variants = {
    primary: 'bg-charcoal text-white hover:bg-charcoal-800',
    outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
    amber:   'bg-amber-brand text-white hover:opacity-90',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

// ─── Badge ────────────────────────────────────────────────
interface BadgeProps {
  label: string
  variant?: 'bestseller' | 'popular' | 'trending' | 'value' | 'default'
  size?: 'sm' | 'md'
}

const badgeStyles = {
  bestseller: 'bg-amber-brand text-white',
  popular:    'bg-amber-brand text-white',
  trending:   'bg-red-500 text-white',
  value:      'bg-charcoal text-white',
  default:    'bg-charcoal-100 text-charcoal',
}

const badgeIcons = {
  bestseller: '🔥',
  popular:    '⭐',
  trending:   '📈',
  value:      '💎',
  default:    '',
}

export function Badge({ label, variant = 'default', size = 'sm' }: BadgeProps) {
  return (
    <span className={`
      inline-flex items-center gap-1 font-semibold rounded-full
      ${size === 'sm' ? 'text-[10px] px-2.5 py-1' : 'text-xs px-3 py-1.5'}
      ${badgeStyles[variant]}
    `}>
      {badgeIcons[variant] && <span>{badgeIcons[variant]}</span>}
      {label}
    </span>
  )
}

// ─── StarRating ───────────────────────────────────────────
interface StarRatingProps {
  rating: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  count?: number
}

export function StarRating({ rating, max = 5, size = 'md', showCount, count }: StarRatingProps) {
  const sizes = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating)
        const partial = !filled && i < rating
        return (
          <svg key={i} className={`${sizes[size]} flex-shrink-0`} viewBox="0 0 20 20">
            <defs>
              {partial && (
                <linearGradient id={`star-partial-${i}`}>
                  <stop offset={`${(rating % 1) * 100}%`} stopColor="#C4722A"/>
                  <stop offset={`${(rating % 1) * 100}%`} stopColor="#D4D4D4"/>
                </linearGradient>
              )}
            </defs>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              fill={filled ? '#C4722A' : partial ? `url(#star-partial-${i})` : '#D4D4D4'}
            />
          </svg>
        )
      })}
      {showCount && count !== undefined && (
        <span className="text-xs text-charcoal-400 ml-1">({count})</span>
      )}
    </div>
  )
}

// ─── EyebrowLabel ─────────────────────────────────────────
export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`eyebrow ${className}`}>{children}</p>
  )
}

// ─── SectionHeading ───────────────────────────────────────
interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-display-md font-bold text-charcoal">{title}</h2>
      {subtitle && <p className="text-charcoal-400 text-base max-w-xl">{subtitle}</p>}
    </div>
  )
}
