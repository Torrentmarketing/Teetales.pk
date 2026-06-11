export default function FeatureBlock({
  eyebrow,
  headline,
  body,
  ctaText,
  ctaHref,
  imageAlt,
  imageSide = 'left',
}) {
  const isLeft = imageSide === 'left';

  return (
    <section className="bg-[#F0EBE1] py-16 sm:py-24" id={eyebrow.toLowerCase().replace(/\s/g, '-')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center gap-12 lg:gap-20`}
        >
          {/* Image Block */}
          <div className="w-full lg:w-1/2">
            <div
              className="rounded-sm overflow-hidden bg-[#DDD8CF] w-full"
              style={{ aspectRatio: '3/2' }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#7A6A57]">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" opacity="0.4">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span className="text-xs opacity-50">{imageAlt}</span>
              </div>
            </div>
          </div>

          {/* Text Block */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#C2622D] text-[10px] tracking-[0.2em] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-[#C2622D]" />
              {eyebrow}
            </p>
            <h2
              className="text-[#18120E] mb-5 leading-tight"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: '700',
              }}
            >
              {headline}
            </h2>
            <p className="text-[#7A6A57] text-base leading-relaxed mb-8 max-w-md">
              {body}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#18120E] border-b border-[#18120E] pb-0.5 hover:text-[#C2622D] hover:border-[#C2622D] transition-colors duration-150"
            >
              {ctaText}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
