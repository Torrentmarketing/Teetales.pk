import Link from 'next/link'
import { Eyebrow } from '@/components/ui'

interface FeatureBlockProps {
  eyebrow: string
  title: string
  body: string
  ctaLabel: string
  ctaHref: string
  imageSide?: 'left' | 'right'
  imagePlaceholder?: string
  id?: string
}

function FeatureBlock({
  eyebrow, title, body, ctaLabel, ctaHref,
  imageSide = 'left', imagePlaceholder = '🧵', id,
}: FeatureBlockProps) {
  const imgOrder = imageSide === 'left' ? 'order-1' : 'order-1 lg:order-2'
  const txtOrder = imageSide === 'left' ? 'order-2' : 'order-2 lg:order-1'

  return (
    <section id={id} className="section-pad">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className={`${imgOrder} relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden bg-cream-200`}>
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-8xl">{imagePlaceholder}</span>
            </div>
          </div>

          {/* Text */}
          <div className={txtOrder}>
            <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
            <h2 className="text-display-md font-bold text-charcoal mb-4 max-w-xs">
              {title}
            </h2>
            <p className="text-charcoal-400 leading-relaxed mb-6 max-w-sm">
              {body}
            </p>
            <Link
              href={ctaHref}
              className="text-sm font-semibold text-charcoal underline underline-offset-4 
                         hover:text-amber-brand transition-colors inline-flex items-center gap-1"
            >
              {ctaLabel}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FeatureBlocks() {
  return (
    <>
      <FeatureBlock
        id="fabric"
        eyebrow="The Fabric"
        title="Thick where it counts."
        body="190 GSM combed cotton — soft on your skin, tough enough to outlast your wardrobe. We don't cut corners on the fabric because your comfort shouldn't be a compromise."
        ctaLabel="Find the difference"
        ctaHref="/about"
        imageSide="left"
        imagePlaceholder="🧵"
      />

      <div className="border-t border-charcoal-100" />

      <FeatureBlock
        id="fit"
        eyebrow="The Fit"
        title="Cut for how you're actually built."
        body="Designed for Pakistani body types. Structured shoulders, clean drape, and the right length — not too cropped, not too boxy. Sizes S to XXL, detailed in our size guide."
        ctaLabel="Start the size guide"
        ctaHref="/size-guide"
        imageSide="right"
        imagePlaceholder="📐"
      />
    </>
  )
}
