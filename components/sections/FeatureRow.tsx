import Link from 'next/link';

interface FeatureRowProps {
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  imageSide?: 'left' | 'right';
  imageAlt: string;
  id?: string;
}

export default function FeatureRow({
  eyebrow, headline, body, ctaLabel, ctaHref,
  imageSide = 'left', imageAlt, id,
}: FeatureRowProps) {
  const isLeft = imageSide === 'left';

  return (
    <section id={id} className="bg-brand-cream section-pad border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isLeft ? '' : 'lg:flex-row-reverse'}`}>

          {/* Image */}
          <div className={`order-1 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 flex items-center justify-center">
              <div className="text-center text-neutral-400">
                <p className="text-5xl mb-2">👕</p>
                <p className="text-xs">{imageAlt}</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`order-2 ${isLeft ? 'lg:order-2' : 'lg:order-1'} lg:px-8`}>
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight mb-5">
              {headline}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6 text-base max-w-md">
              {body}
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-charcoal
                         underline underline-offset-4 hover:text-brand-amber transition-colors"
            >
              {ctaLabel} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
