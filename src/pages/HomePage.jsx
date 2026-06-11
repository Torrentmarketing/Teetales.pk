import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SubNav from '../components/SubNav';
import FeatureBlock from '../components/FeatureBlock';
import PricingBanner from '../components/PricingBanner';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductGrid from '../components/ProductGrid';
import QualityPillars from '../components/QualityPillars';
import ColorPalette from '../components/ColorPalette';
import Reviews from '../components/Reviews';
import LifestyleSection from '../components/LifestyleSection';
import UGCSection from '../components/UGCSection';
import StickyBar from '../components/StickyBar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-[#F6F2EB] min-h-screen font-sans">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <SubNav />
      <FeatureBlock
        eyebrow="THE FABRIC"
        headline="Breathable where it matters."
        body="100% premium cotton that moves with you. Preshrunk, pill-resistant, and cut to keep its shape wash after wash. This isn't fast fashion — it's built to last."
        ctaText="Feel the difference"
        ctaHref="#quality"
        imageAlt="TeeTales fabric close-up"
        imageSide="left"
      />
      <FeatureBlock
        eyebrow="THE FIT"
        headline="Tailored for every body."
        body="Whether you're shopping for yourself, your partner, or your kids — TeeTales cuts for real bodies. Men, women, and children. Find your fit in seconds."
        ctaText="Start the size guide"
        ctaHref="/size-guide"
        imageAlt="TeeTales fit model"
        imageSide="right"
      />
      <PricingBanner />
      <FeaturedProduct />
      <ProductGrid />
      <QualityPillars />
      <ColorPalette />
      <Reviews />
      <LifestyleSection />
      <UGCSection />
      <StickyBar />
      <Footer />
    </div>
  );
}
