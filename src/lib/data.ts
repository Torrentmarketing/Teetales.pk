import type { Product, Review, ColorSwatch, NavLink } from './types'

export const BRAND = {
  name: 'TeeTales',
  logo: 'teetales.',
  tagline: 'Every Tee Tells a Story',
  phone: '03431659033',
  whatsapp: 'https://wa.me/923431659033',
  address: 'Opp of ICMS School, Warsak Road, Peshawar',
  instagram: '@teetales.pk',
  email: 'hello@teetales.pk',
} as const

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Referal',    href: '/referral' },
  { label: 'Size Guide', href: '/size-guide' },
  { label: 'Packs',      href: '/packs' },
  { label: 'T Shirts',   href: '/t-shirts' },
]

export const COLOR_SWATCHES: ColorSwatch[] = [
  { name: 'Black',      hex: '#1A1A1A' },
  { name: 'White',      hex: '#F5F5F0' },
  { name: 'Charcoal',   hex: '#3C3C3C' },
  { name: 'Navy',       hex: '#1B2A4A' },
  { name: 'Olive',      hex: '#4A5240' },
  { name: 'Slate',      hex: '#6B7280' },
  { name: 'Maroon',     hex: '#6B1F2A' },
  { name: 'Camel',      hex: '#B5834A' },
  { name: 'Royal Blue', hex: '#2A4FAA' },
  { name: 'Pink',       hex: '#D4849A' },
]

export const PRODUCTS: Product[] = [
  {
    id: 'pack-2',
    name: 'Pack of 2 Plain T Shirts',
    slug: 'pack-of-2',
    price: 1749,
    packSize: 2,
    image: '/images/teetales-2.png',
    colors: COLOR_SWATCHES.slice(0, 6),
  },
  {
    id: 'pack-3',
    name: 'Pack of 3 Plain T Shirts',
    slug: 'pack-of-3',
    price: 2299,
    packSize: 3,
    badge: { label: 'Best Seller', variant: 'bestseller' },
    image: '/images/teetales-3.png',
    colors: COLOR_SWATCHES.slice(0, 6),
  },
  {
    id: 'pack-5',
    name: 'Pack of 5 Plain T Shirts',
    slug: 'pack-of-5',
    price: 3549,
    originalPrice: 4250,
    packSize: 5,
    badge: { label: 'Most Popular', variant: 'popular' },
    image: '/images/teetales-5.png',
    colors: COLOR_SWATCHES,
  },
  {
    id: 'pack-7',
    name: 'Pack of 7 Plain T Shirts',
    slug: 'pack-of-7',
    price: 4799,
    packSize: 7,
    badge: { label: 'Trending', variant: 'trending' },
    image: '/images/teetales-6.png',
    colors: COLOR_SWATCHES,
  },
  {
    id: 'pack-10',
    name: 'Pack of 10 Plain T Shirts',
    slug: 'pack-of-10',
    price: 6599,
    packSize: 10,
    badge: { label: 'Best Value', variant: 'value' },
    image: '/images/teetales-7.png',
    colors: COLOR_SWATCHES,
  },
]

export const FEATURED_PRODUCT = PRODUCTS.find(p => p.id === 'pack-5')!

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Abdullah Raza',
    rating: 5,
    text: 'Best quality tees I\'ve found in Peshawar. The fabric is thick, stitching is clean, and they actually fit properly. Ordered the Pack of 5 and wore them all week.',
    date: 'Jun 3, 2025',
    packName: 'Pack of 5 Plain T Shirts',
    verified: true,
  },
  {
    id: 'r2',
    author: 'Danish Farooq',
    rating: 5,
    text: 'Delivery was faster than expected — reached in 2 days. Quality is exactly as described. Will definitely reorder.',
    date: 'May 28, 2025',
    packName: 'Pack of 3 Plain T Shirts',
    verified: true,
  },
  {
    id: 'r3',
    author: 'Hamza Tariq',
    rating: 4,
    text: 'Solid everyday tees. Minimal and clean. The black and navy are my favourites from the pack. Good value for the price.',
    date: 'May 19, 2025',
    packName: 'Pack of 7 Plain T Shirts',
    verified: true,
  },
  {
    id: 'r4',
    author: 'Sana K.',
    rating: 5,
    text: 'Ordered for my brother — he loves them. The sizing guide was accurate and the exchange process was smooth. Highly recommend!',
    date: 'Apr 30, 2025',
    packName: 'Pack of 5 Plain T Shirts',
    verified: true,
  },
]

export const SIZE_CHART = [
  { size: 'S',   waist: 19, length: 26 },
  { size: 'M',   waist: 20, length: 27 },
  { size: 'L',   waist: 21, length: 28 },
  { size: 'XL',  waist: 22, length: 29 },
  { size: 'XXL', waist: 23, length: 30 },
]
