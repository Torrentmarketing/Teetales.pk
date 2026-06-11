'use client';

const anchors = [
  { label: 'Our Story',   href: '#story' },
  { label: 'Fabric',      href: '#fabric' },
  { label: 'Fit Guide',   href: '#fit' },
  { label: 'Packs',       href: '#packs' },
  { label: 'Palette',     href: '#palette' },
  { label: 'Reviews',     href: '#reviews' },
];

export default function SubNav() {
  return (
    <nav className="bg-brand-charcoal sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-2">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="shrink-0 text-xs text-neutral-300 hover:text-white
                         px-4 py-1.5 rounded-full hover:bg-white/10
                         transition-all duration-150 whitespace-nowrap"
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
