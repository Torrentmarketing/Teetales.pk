import { useState } from 'react';

const reviews = [
  { name: 'Ahmed R.', location: 'Peshawar', rating: 5, pack: 'Pack of 5', text: 'Quality is genuinely impressive for the price. Fabric feels premium and the fit is spot on for Pakistani sizing.', date: '2 days ago' },
  { name: 'Bilal K.', location: 'Lahore', rating: 5, pack: 'Pack of 7', text: 'Ordered for the whole family. Delivery was fast, colors are exactly as shown, and the material is thick without being heavy.', date: '5 days ago' },
  { name: 'Hasan M.', location: 'Karachi', rating: 4, pack: 'Pack of 3', text: 'Really nice everyday tees. The olive and charcoal are my favorites. Will definitely be ordering the pack of 7 next time.', date: '1 week ago' },
  { name: 'Sana T.', location: 'Islamabad', rating: 5, pack: 'Pack of 5', text: 'Bought for my husband. He refuses to wear anything else now. Says the fit and breathability are unmatched.', date: '2 weeks ago' },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= count ? '#C2622D' : 'none'} stroke="#C2622D" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = reviews.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));
  const shown = reviews.slice(current, current + visible);

  return (
    <section className="bg-[#F0EBE1] py-20" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-3">
          <p className="text-[#C2622D] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
            Customer Reviews
          </p>
          <h2
            className="text-[#18120E]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: "'Georgia', serif", fontWeight: '700' }}
          >
            Customers are saying
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Stars count={5} />
            <span className="text-sm text-[#7A6A57]">4.9 · 120+ reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {shown.map((r) => (
            <div key={r.name} className="bg-[#F6F2EB] border border-[#E2DDD4] rounded-sm p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-[#18120E] text-sm font-semibold">{r.name}</p>
                  <p className="text-[#7A6A57] text-xs">{r.location}</p>
                </div>
                <span className="text-[10px] bg-[#E2DDD4] text-[#7A6A57] px-2 py-0.5 rounded-full font-medium">
                  {r.pack}
                </span>
              </div>
              <Stars count={r.rating} />
              <p className="text-[#18120E] text-sm leading-relaxed mt-3">{r.text}</p>
              <p className="text-[#9E8E7A] text-xs mt-4">{r.date}</p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 rounded-full border border-[#E2DDD4] flex items-center justify-center text-[#18120E] hover:border-[#C2622D] hover:text-[#C2622D] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button
            onClick={next}
            disabled={current >= max}
            className="w-9 h-9 rounded-full border border-[#E2DDD4] flex items-center justify-center text-[#18120E] hover:border-[#C2622D] hover:text-[#C2622D] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
