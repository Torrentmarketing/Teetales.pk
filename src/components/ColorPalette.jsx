import { useState } from 'react';

const colors = [
  { name: 'Jet Black', hex: '#1a1a1a' },
  { name: 'Off White', hex: '#F2EEE5' },
  { name: 'Charcoal', hex: '#3D3D3D' },
  { name: 'Slate Gray', hex: '#6B6B6B' },
  { name: 'Navy', hex: '#1b3a5c' },
  { name: 'Olive', hex: '#4a5240' },
  { name: 'Forest', hex: '#2d4a1e' },
  { name: 'Burgundy', hex: '#8b1a1a' },
  { name: 'Mocha', hex: '#4a3728' },
  { name: 'Dusty Rose', hex: '#c4857a' },
];

export default function ColorPalette() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#18120E] py-20" id="colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C2622D] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
            10 Colors Available
          </p>
          <h2
            className="text-[#F6F2EB]"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontFamily: "'Georgia', serif",
              fontWeight: '700',
            }}
          >
            Pick your palette.
          </h2>
        </div>

        {/* Image strip placeholder */}
        <div
          className="w-full rounded-sm bg-[#2A1F18] mb-8 flex items-center justify-center"
          style={{ aspectRatio: '21/6', minHeight: '140px' }}
        >
          <div className="flex flex-col items-center gap-2 text-[#4A3728]">
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" opacity="0.4">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span className="text-xs opacity-40">Color palette hanger photo</span>
          </div>
        </div>

        {/* Color swatches */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {colors.map((color, i) => (
            <button
              key={color.name}
              title={color.name}
              onClick={() => setActive(i)}
              className="relative group"
              aria-label={color.name}
            >
              <span
                className={`block w-8 h-8 rounded-full border-2 transition-all duration-150 ${
                  active === i
                    ? 'border-[#C2622D] scale-110 shadow-lg'
                    : 'border-[#3D3428] hover:border-[#7A6A57] hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
              />
              {active === i && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-[#C2622D] font-semibold whitespace-nowrap tracking-wide uppercase">
                  {color.name}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active color label spacer */}
        <div className="h-8" />
      </div>
    </section>
  );
}
