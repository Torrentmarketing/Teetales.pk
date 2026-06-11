const products = [
  { name: 'Pack of 2 Plain T-Shirts', price: 'Rs.1,499', badge: null, colors: ['#1a1a1a', '#ffffff', '#1b3a5c'] },
  { name: 'Pack of 3 Plain T-Shirts', price: 'Rs.2,099', badge: 'Best Value', colors: ['#1a1a1a', '#ffffff', '#2d4a1e', '#8b1a1a'] },
  { name: 'Pack of 7 Plain T-Shirts', price: 'Rs.4,799', badge: 'Most Popular', colors: ['#1a1a1a', '#ffffff', '#2d4a1e', '#1b3a5c', '#8b1a1a'] },
  { name: 'Pack of 10 Plain T-Shirts', price: 'Rs.6,599', badge: 'Trending', colors: ['#1a1a1a', '#ffffff', '#2d4a1e', '#1b3a5c', '#8b1a1a', '#4a3728'] },
];

const badgeStyles = {
  'Best Value': 'bg-[#C2622D] text-white',
  'Most Popular': 'bg-[#18120E] text-white',
  'Trending': 'bg-[#7A6A57] text-white',
};

function SwatchRow({ colors }) {
  const visible = colors.slice(0, 5);
  const extra = colors.length - visible.length;
  return (
    <div className="flex items-center gap-1.5 mt-3">
      {visible.map((color, i) => (
        <span
          key={i}
          className="w-6 h-6 rounded-full border-2 border-white shadow-sm ring-1 ring-[#E2DDD4] cursor-pointer hover:scale-110 transition-transform"
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
      {extra > 0 && (
        <span className="text-[10px] text-[#7A6A57] font-semibold ml-1">+{extra}</span>
      )}
    </div>
  );
}

function ProductCard({ name, price, badge, colors }) {
  return (
    <a
      href="#"
      className="group bg-[#F6F2EB] border border-[#E2DDD4] rounded-sm overflow-hidden hover:border-[#C2622D] transition-all duration-200 hover:shadow-md block"
    >
      {/* Image */}
      <div className="relative bg-[#DDD8CF] w-full" style={{ aspectRatio: '4/3' }}>
        {badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${badgeStyles[badge]}`}
          >
            {badge}
          </span>
        )}
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#7A6A57]">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" opacity="0.35">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[#18120E] text-sm font-semibold group-hover:text-[#C2622D] transition-colors">
          {name}
        </p>
        <p className="text-[#7A6A57] text-sm mt-1">{price} PKR</p>
        <SwatchRow colors={colors} />
      </div>
    </a>
  );
}

export default function ProductGrid() {
  return (
    <section className="bg-[#F0EBE1] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
