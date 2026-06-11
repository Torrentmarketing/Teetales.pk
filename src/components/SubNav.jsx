const pills = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Fabric', href: '#fabric' },
  { label: 'All Packs', href: '#packs' },
  { label: 'Colors', href: '#colors' },
  { label: 'Reviews', href: '#reviews' },
];

export default function SubNav() {
  return (
    <nav className="bg-[#18120E] overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 py-2 min-w-max">
          {pills.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              className="text-[#9E8E7A] hover:text-[#F6F2EB] text-xs font-medium tracking-wide uppercase px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-150 whitespace-nowrap"
            >
              {pill.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
