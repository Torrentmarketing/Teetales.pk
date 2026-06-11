const pillars = [
  {
    eyebrow: '190 GSM Cotton',
    title: 'Thick. Not heavy.',
    body: 'Our tees are woven from 190 GSM single-jersey cotton — substantial enough to look premium, light enough to wear in Peshawar summers.',
  },
  {
    eyebrow: 'Pakistani Fit',
    title: 'Cut for real bodies.',
    body: 'Not too boxy, not too slim. Shaped to sit right on Pakistani shoulder widths, chest, and length proportions.',
  },
  {
    eyebrow: 'Built to last',
    title: 'Wash. Wear. Repeat.',
    body: 'Pre-shrunk fabric, reinforced stitching, and colorfast dyes. Buy once, wear everywhere — for years, not weeks.',
  },
];

export default function QualityPillars() {
  return (
    <section className="bg-[#F6F2EB] py-20" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-[#18120E]"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontFamily: "'Georgia', serif",
              fontWeight: '700',
            }}
          >
            Done right, not loud.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="group">
              {/* Image */}
              <div
                className="w-full rounded-sm bg-[#DDD8CF] mb-6 overflow-hidden"
                style={{ aspectRatio: '4/3' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#7A6A57]">
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" opacity="0.35">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="text-[10px] opacity-40">{p.eyebrow}</span>
                </div>
              </div>

              {/* Text */}
              <p className="text-[#C2622D] text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                {p.eyebrow}
              </p>
              <h3
                className="text-[#18120E] text-lg font-bold mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {p.title}
              </h3>
              <p className="text-[#7A6A57] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
