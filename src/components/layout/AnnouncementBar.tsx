'use client'

const messages = [
  'FREE Delivery on Every Order',
  '7-Day Return & Exchange Policy',
  'COD Available',
  '100% Breathable Cotton Fabric',
  'Tailored Fits for Men, Women & Children',
]

const marqueeItems = [...messages, ...messages]

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-white text-xs font-medium py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeItems.map((msg, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            {msg}
            <span className="text-charcoal-400 select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
