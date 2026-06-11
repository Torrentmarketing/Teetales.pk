# TeeTales — Project Structure

## Tech Stack
- React (or Next.js App Router)
- Tailwind CSS
- Component-based architecture

## Folder Structure
```
src/
├── components/
│   ├── AnnouncementBar.jsx   ← shared top strip
│   ├── Navbar.jsx            ← sticky nav with active state prop
│   ├── Hero.jsx              ← homepage hero
│   ├── SubNav.jsx            ← anchor pill nav
│   ├── FeatureBlock.jsx      ← reusable alternating layout block
│   ├── PricingBanner.jsx     ← dark bundle pricing banner
│   ├── FeaturedProduct.jsx   ← hero product card
│   ├── ProductGrid.jsx       ← 4-col product card grid
│   ├── QualityPillars.jsx    ← 3-col quality features
│   ├── ColorPalette.jsx      ← interactive color swatch picker
│   ├── Reviews.jsx           ← review carousel with arrows
│   ├── BottomComponents.jsx  ← LifestyleSection, UGCSection, StickyBar, Footer
│   └── [PacksPage, CartPage, SizeGuidePage, ReferralPage in pages/]
├── pages/
│   ├── HomePage.jsx
│   └── OtherPages.jsx (stubs for Packs, Cart, SizeGuide, Referral)
└── data/
    └── (products, reviews, colors arrays — ready to extract)

## Brand Tokens
- Background:  #F6F2EB (parchment)
- Text:        #18120E (espresso)
- Accent:      #C2622D (burnt sienna)
- Muted:       #7A6A57 (warm brown)
- Surface:     #F0EBE1 (alt sections)
- Dark bg:     #18120E

## Contact Info (from Facebook page)
- Phone: 0343-1659033
- Address: Teetales Store, Opp. ICMS School, Warsak Road, Peshawar
- Instagram: @teetales.pk
- Tagline: "Every Tee tells a story"
