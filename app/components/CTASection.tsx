'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Ready to Make a Difference?'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Take Action Now'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="relative bg-accent-400 py-20 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-6 left-10 w-32 h-32 bg-accent-300 rounded-full opacity-50" />
      <div className="absolute bottom-6 right-16 w-24 h-24 bg-accent-500 rounded-full opacity-30" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 mb-4">
          {title}
        </h2>
        {description ? (
          <div className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of advocates who are standing up for what matters. Your voice can change the world.
          </p>
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-8 py-4 bg-primary-900 text-white rounded-2xl hover:bg-primary-800 transition-colors font-bold text-lg shadow-lg shadow-primary-900/20"
          >
            {primaryLabel}
          </a>
          <a
            href="/campaigns"
            className="px-8 py-4 border-3 border-primary-900 text-primary-900 rounded-2xl hover:bg-primary-900 hover:text-white transition-colors font-bold text-lg"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
