'use client'

const anchors = [
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Fabric',      href: '#fabric' },
  { label: 'Fit Guide',   href: '#fit' },
  { label: 'Packs',       href: '#packs' },
  { label: 'Colors',      href: '#colors' },
  { label: 'Reviews',     href: '#reviews' },
]

export default function SubNav() {
  return (
    <nav className="bg-charcoal sticky top-16 z-40">
      <div className="container-site">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {anchors.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="flex-shrink-0 text-xs font-medium text-charcoal-200 hover:text-white 
                         px-4 py-1.5 rounded-full border border-charcoal-600 
                         hover:border-charcoal-400 transition-all duration-150 whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
