import { ProductCardProps } from '@/components/ui/ProductCard';

export const BRAND = {
  name:     'TeeTales',
  domain:   'teetales.pk',
  tagline:  'Every Tee Tells a Story',
  phone:    '0343-1659033',
  whatsapp: '923431659033',
  address:  'Opp. ICMS School, Warsak Road, Peshawar',
  instagram:'@teetales.pk',
};

export const COLORS = [
  { name: 'Black',       hex: '#1C1C1A' },
  { name: 'Charcoal',    hex: '#3D3D3B' },
  { name: 'White',       hex: '#F5F0E8' },
  { name: 'Olive',       hex: '#5C5E3A' },
  { name: 'Navy',        hex: '#1B2A4A' },
  { name: 'Burgundy',    hex: '#6B1C2A' },
  { name: 'Royal Blue',  hex: '#2554A0' },
  { name: 'Pink',        hex: '#D4879C' },
  { name: 'Slate Grey',  hex: '#7A8088' },
  { name: 'Earth Brown', hex: '#8B6352' },
];

export const PACKS: ProductCardProps[] = [
  {
    id:    'pack-5',
    name:  'Pack of 5 Plain T Shirts',
    price: 3549,
    image: '/images/pack-5.jpg',
    href:  '/packs/pack-of-5',
    badge: { label: 'Best Seller', variant: 'bestseller' },
    swatches: COLORS,
  },
  {
    id:    'pack-3',
    name:  'Pack of 3 Plain T Shirts',
    price: 2299,
    image: '/images/pack-3.jpg',
    href:  '/packs/pack-of-3',
    swatches: COLORS,
  },
  {
    id:    'pack-2',
    name:  'Pack of 2 Plain T Shirts',
    price: 1749,
    image: '/images/pack-2.jpg',
    href:  '/packs/pack-of-2',
    swatches: COLORS,
  },
  {
    id:    'pack-7',
    name:  'Pack of 7 Plain T Shirts',
    price: 4799,
    image: '/images/pack-7.jpg',
    href:  '/packs/pack-of-7',
    badge: { label: 'Most Popular', variant: 'popular' },
    swatches: COLORS,
  },
  {
    id:    'pack-10',
    name:  'Pack of 10 Plain T Shirts',
    price: 6599,
    image: '/images/pack-10.jpg',
    href:  '/packs/pack-of-10',
    badge: { label: 'Trending', variant: 'trending' },
    swatches: COLORS,
  },
];

export const TRUST_PILLARS = [
  {
    icon: '↩️',
    title: '7-Day Returns',
    sub:   'Within 7 days',
  },
  {
    icon: '🚚',
    title: '2–6 Day Delivery',
    sub:   '490+ cities',
  },
  {
    icon: '⚡',
    title: '4–8hr Processing',
    sub:   'Fastest in PK',
  },
];
