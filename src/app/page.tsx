import HeroSection from '@/components/sections/home/HeroSection'
import SubNav from '@/components/sections/home/SubNav'
import FeatureBlocks from '@/components/sections/home/FeatureBlocks'
import {
  PricingBanner,
  FeaturedProduct,
  ProductGrid,
} from '@/components/sections/home/ProductSections'
import {
  QualityPillars,
  ColorPalette,
  ReviewsSection,
  LifestyleSection,
  UGCSection,
  StickyBar,
} from '@/components/sections/home/ContentSections'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SubNav />
      <FeatureBlocks />
      <PricingBanner />
      <FeaturedProduct />
      <ProductGrid />
      <QualityPillars />
      <ColorPalette />
      <ReviewsSection />
      <LifestyleSection />
      <UGCSection />
      <StickyBar />
    </>
  )
}
