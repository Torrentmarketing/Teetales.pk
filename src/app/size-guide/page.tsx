import type { Metadata } from 'next'
import { Button } from '@/components/ui'
import { SIZE_CHART, BRAND } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Size Guide',
  description: 'Find your perfect fit. TeeTales t-shirts are cut for Pakistani body types.',
}

export default function SizeGuidePage() {
  return (
    <div className="section-pad">
      <div className="container-site max-w-2xl">

        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow mb-3">Fit Guide</p>
          <h1 className="text-display-lg font-black text-charcoal mb-3">
            Size Guide — The Everyday Tee
          </h1>
          <p className="text-charcoal-400">
            Cut for Pakistani body types. Between sizes? Use Find My Fit on the product page.
          </p>
        </div>

        {/* Size table */}
        <div className="border border-charcoal-100 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cream-50 border-b border-charcoal-100">
                <th className="text-left px-5 py-4 font-semibold text-charcoal">Size</th>
                <th className="text-left px-5 py-4 font-semibold text-charcoal">Waist (inches)</th>
                <th className="text-left px-5 py-4 font-semibold text-charcoal">Length (inches)</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_CHART.map(({ size, waist, length }, i) => (
                <tr
                  key={size}
                  className={`border-b border-charcoal-100 last:border-0 hover:bg-cream-50 transition-colors ${
                    i % 2 === 0 ? '' : 'bg-white'
                  }`}
                >
                  <td className="px-5 py-4 font-semibold text-charcoal">{size}</td>
                  <td className="px-5 py-4 text-charcoal-400">{waist}</td>
                  <td className="px-5 py-4 text-charcoal-400">{length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to measure */}
        <div className="bg-cream-50 border border-charcoal-100 rounded-xl p-5 mb-8">
          <h3 className="text-base font-bold text-charcoal mb-4 flex items-center gap-2">
            📏 How to Measure
          </h3>
          <div className="space-y-2">
            {[
              { label: 'Chest',    desc: 'Around fullest part, under arms.' },
              { label: 'Length',   desc: 'Shoulder point to bottom hem.' },
              { label: 'Shoulder', desc: 'Seam to seam across back.' },
            ].map(({ label, desc }) => (
              <p key={label} className="text-sm text-charcoal-400">
                <span className="font-semibold text-charcoal">{label}:</span> {desc}
              </p>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" href="/packs">
            Try Find My Fit →
          </Button>
          <Button variant="primary" href="/t-shirts">
            Shop Tees
          </Button>
        </div>

        {/* Still unsure */}
        <div className="bg-cream-50 border border-charcoal-100 rounded-xl p-5">
          <h3 className="text-base font-bold text-charcoal mb-2 flex items-center gap-2">
            💡 Still unsure?
          </h3>
          <p className="text-sm text-charcoal-400 leading-relaxed">
            WhatsApp us your height + weight — we'll recommend personally.{' '}
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-brand font-semibold hover:underline"
            >
              Message us →
            </a>{' '}
            7-day exchange if it doesn't fit.
          </p>
        </div>

      </div>
    </div>
  )
}
