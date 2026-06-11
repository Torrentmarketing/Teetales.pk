export default function PricingBanner() {
  return (
    <section className="bg-[#18120E] py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-[#C2622D] text-xs tracking-widest uppercase font-semibold mb-4">
          Bundle & Save
        </p>
        <h2
          className="text-[#F6F2EB] leading-snug"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontFamily: "'Georgia', serif",
            fontWeight: '700',
          }}
        >
          The more you grab, the less each tee costs.
        </h2>
        <p className="text-[#7A6A57] mt-4 text-base">
          Packs of 2, 3, 5, 7, and 10 — fair prices, zero compromise on quality.
        </p>
      </div>
    </section>
  );
}
