'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome to Voices United'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Amplifying Voices for Change'
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative bg-primary-600 overflow-hidden pt-32 pb-24">
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-accent-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-primary-400 rounded-3xl opacity-25 animate-bounce" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      <div className="absolute top-20 right-1/3 w-20 h-20 bg-accent-300 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-2xl opacity-10 animate-bounce" style={{ animationDuration: '9s', animationDelay: '3s' }} />
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-primary-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '7.5s', animationDelay: '1.5s' }} />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80&fit=crop)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-2 bg-accent-400/20 text-accent-200 rounded-full text-sm font-semibold mb-6 border border-accent-400/30">
          Voices United - Advocacy for Change
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-primary-100 mb-6 max-w-3xl mx-auto font-medium">
            {subtitle}
          </p>
        )}
        {description && (
          <div className="text-lg text-primary-200 max-w-2xl mx-auto mb-8" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <a
            href="/campaigns"
            className="px-8 py-4 bg-accent-400 text-primary-900 rounded-2xl font-bold text-lg hover:bg-accent-300 transition-colors duration-200 shadow-lg shadow-accent-400/30"
          >
            Join a Campaign
          </a>
          <a
            href="/issues"
            className="px-8 py-4 bg-white/20 text-white rounded-2xl font-bold text-lg border-2 border-white/40 hover:bg-white/30 transition-colors duration-200"
          >
            Explore Issues
          </a>
        </div>
      </div>
    </section>
  )
}
