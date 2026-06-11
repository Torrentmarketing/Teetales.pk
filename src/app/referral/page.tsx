'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'

const STEPS = [
  {
    n: 1,
    title: 'Get Your Link',
    desc: 'Sign up. Link ready instantly.',
  },
  {
    n: 2,
    title: 'Share With Friends',
    desc: 'WhatsApp, IG, text — any way.',
  },
  {
    n: 3,
    title: 'You Both Save',
    desc: 'Rs.200 off each. Stack it up.',
  },
]

export default function ReferralPage() {
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState<string | null>(null)

  function handleGetLink() {
    setLoading(true)
    setTimeout(() => {
      setLink('https://teetales.pk/ref/YOURCODE')
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="section-pad">
      <div className="container-site max-w-lg">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="eyebrow mb-4">Refer & Earn</p>
          <h1 className="text-display-lg font-black text-charcoal mb-4">
            Give Rs.200. Get Rs.200.
          </h1>
          <p className="text-charcoal-400 text-base leading-relaxed">
            Share your link. Friend gets Rs.200 off. You earn Rs.200 credit. No limit.
          </p>
        </div>

        {/* Reward card */}
        <div className="bg-cream-100 border border-cream-200 rounded-2xl p-10 text-center mb-10">
          <p className="text-6xl font-black text-amber-brand mb-2">Rs.200</p>
          <p className="text-sm font-semibold text-charcoal">For You & Them</p>
        </div>

        {/* Steps */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-charcoal mb-5">How It Works:</p>
          <ol className="space-y-5">
            {STEPS.map(({ n, title, desc }) => (
              <li key={n} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {n}
                </span>
                <div>
                  <p className="text-sm font-bold text-charcoal">{title}</p>
                  <p className="text-sm text-charcoal-400">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        {link ? (
          <div className="bg-green-soft border border-green-text/20 rounded-xl p-5 text-center">
            <p className="text-sm font-semibold text-green-text mb-3">🎉 Your referral link is ready!</p>
            <div className="flex items-center gap-2 bg-white border border-charcoal-100 rounded-brand px-4 py-3">
              <span className="text-sm text-charcoal flex-1 truncate">{link}</span>
              <button
                onClick={() => navigator.clipboard.writeText(link)}
                className="text-xs font-semibold text-amber-brand hover:underline flex-shrink-0"
              >
                Copy
              </button>
            </div>
          </div>
        ) : (
          <Button
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={handleGetLink}
            disabled={loading}
          >
            {loading ? 'Generating link...' : 'Get My Referral Link'}
          </Button>
        )}

      </div>
    </div>
  )
}
