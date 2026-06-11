export default function AnnouncementBar() {
  const items = [
    'FREE Delivery on Every Order',
    '7-Day Return & Exchange Policy',
    'COD Available',
  ];

  return (
    <div className="bg-[#18120E] text-[#F6F2EB] text-xs tracking-widest uppercase py-2.5 px-4 text-center">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            {item}
            {i < items.length - 1 && (
              <span className="text-[#C2622D] text-base leading-none">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
