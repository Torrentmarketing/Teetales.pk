export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  packSize: number
  badge?: {
    label: string
    variant: 'bestseller' | 'popular' | 'trending' | 'value'
  }
  image: string
  colors: ColorSwatch[]
  description?: string
}

export interface ColorSwatch {
  name: string
  hex: string
  image?: string
}

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  packName: string
  verified: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  selections: ShirtSelection[]
}

export interface ShirtSelection {
  index: number
  color: string
  size: string
}

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL'

export interface NavLink {
  label: string
  href: string
}
