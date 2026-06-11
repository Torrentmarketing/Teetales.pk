import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-brand-cream min-h-[88vh] flex items-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-amber/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">

          {/* Left — Text */}
          <div className="animate-fade-up">
            <p className="eyebrow mb-4">Peshawar · Pakistan</p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand-charcoal leading-[1.05] mb-6">
              Wear your<br />
              <em className="not-italic text-brand-amber">story.</em>
            </h1>

            <p className="text-brand-muted text-lg leading-relaxed max-w-md mb-8">
              100% breathable cotton tees designed for everyday life.
              Minimalist cuts, bold colours — built for men, women &amp; children.
            </p>

            {/* Value props */}
            <ul className="space-y-2 mb-10">
              {[
                '100% breathable cotton fabric',
                'Tailored fits for every body type',
                'Fair prices · Fast shipping nationwide',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                  <span className="w-4 h-4 rounded-full bg-brand-amber/20 flex items-center justify-center text-brand-amber text-[10px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/packs/pack-of-5" className="btn-primary text-base px-8 py-3.5">
                Shop Pack of 5
              </Link>
              <Link href="/packs" className="btn-outline text-base px-8 py-3.5">
                All Packs
              </Link>
            </div>
          </div>

          {/* Right — Hero visual placeholder (replace with actual model photo) */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-200 relative max-w-md mx-auto lg:ml-auto">
              {/* Replace with <Image> once photos are available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <p className="text-6xl mb-2">👕</p>
                  <p className="text-sm">Hero image here</p>
                  <p className="text-xs">Recommended: 600×800px model photo</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 text-sm">
              <p className="font-bold text-brand-charcoal">105+ orders</p>
              <p className="text-brand-muted text-xs">this month · across Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
