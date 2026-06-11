# TeeTales — Next.js + Tailwind Frontend

> Every Tee Tells a Story · Peshawar, Pakistan

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (AnnouncementBar + Navbar + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind base + brand utilities
│   ├── packs/
│   │   └── page.tsx        # All Packs collection page
│   ├── cart/
│   │   └── page.tsx        # Cart page with upsells + order summary
│   ├── size-guide/
│   │   └── page.tsx        # Size guide page
│   └── referral/
│       └── page.tsx        # Refer & Earn page
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx   # Scrolling top strip
│   │   ├── Navbar.tsx            # Sticky nav with mobile menu
│   │   └── Footer.tsx            # Dark footer with payment logos
│   ├── ui/
│   │   ├── index.tsx             # Button, Badge, StarRating, Eyebrow, SectionHeading
│   │   └── ProductCard.tsx       # Reusable product card with swatches
│   └── sections/
│       └── home/
│           ├── HeroSection.tsx
│           ├── SubNav.tsx
│           ├── FeatureBlocks.tsx
│           ├── ProductSections.tsx   # PricingBanner, FeaturedProduct, ProductGrid
│           └── ContentSections.tsx   # QualityPillars, ColorPalette, Reviews, Lifestyle, UGC, StickyBar
│
└── lib/
    ├── data.ts             # Products, reviews, colors, brand constants
    └── types.ts            # TypeScript interfaces
```

## Brand Config

All brand constants live in `src/lib/data.ts`:

```ts
export const BRAND = {
  name:      'TeeTales',
  logo:      'teetales.',
  tagline:   'Every Tee Tells a Story',
  phone:     '03431659033',
  whatsapp:  'https://wa.me/923431659030',
  address:   'Opp of ICMS School, Warsak Road, Peshawar',
  instagram: '@teetales.pk',
}
```

## Replacing Placeholder Images

All image slots currently show emoji placeholders.
Replace with real product photos in `public/images/`:

```
public/images/
├── pack-2.jpg
├── pack-3.jpg
├── pack-5.jpg
├── pack-7.jpg
├── pack-10.jpg
├── hero-model.jpg
└── lifestyle-*.jpg
```

## Pages Built

| Route           | Page               | Status |
|----------------|--------------------|--------|
| `/`            | Homepage           | ✅     |
| `/packs`       | All Packs          | ✅     |
| `/cart`        | Cart               | ✅     |
| `/size-guide`  | Size Guide         | ✅     |
| `/referral`    | Refer & Earn       | ✅     |
| `/packs/[slug]`| Product Detail     | 🔜 Next |
| `/about`       | About              | 🔜     |

## Color Tokens (tailwind.config.ts)

| Token            | Hex       | Usage                  |
|-----------------|-----------|------------------------|
| `cream-100`     | #F5EFE4   | Section backgrounds    |
| `charcoal`      | #1A1A1A   | Primary text + buttons |
| `charcoal-400`  | #6B6B6B   | Muted text             |
| `amber-brand`   | #C4722A   | Eyebrows, accents, CTAs|
