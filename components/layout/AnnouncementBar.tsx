'use client';

const messages = [
  'FREE Delivery on Every Order',
  '7-Day Return & Exchange Policy',
  'COD Available Across Pakistan',
  '100% Breathable Cotton Fabric',
  'Fits for Men, Women & Children',
];

export default function AnnouncementBar() {
  const repeated = [...messages, ...messages]; // duplicate for seamless loop

  return (
    <div className="bg-brand-charcoal text-white text-xs py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span key={i} className="flex items-center mx-6 shrink-0">
            {msg}
            <span className="mx-6 opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
