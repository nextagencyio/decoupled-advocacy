'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const cardColors = [
  'bg-primary-100 border-primary-200',
  'bg-accent-100 border-accent-200',
  'bg-purple-100 border-purple-200',
  'bg-indigo-100 border-indigo-200',
]

const textColors = [
  'text-primary-700',
  'text-accent-700',
  'text-purple-700',
  'text-indigo-700',
]

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how our community is making a real difference around the world.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat: any, i: number) => (
            <div
              key={stat.id || i}
              className={`${cardColors[i % cardColors.length]} border-2 rounded-2xl p-6 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`text-3xl md:text-4xl font-extrabold font-display ${textColors[i % textColors.length]}`}>
                {stat.value || stat.number || stat.statValue || stat.number}
              </div>
              <div className="text-gray-700 mt-2 font-medium">
                {stat.label || stat.statLabel || stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
