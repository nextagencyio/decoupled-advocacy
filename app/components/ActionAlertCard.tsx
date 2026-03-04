import Link from 'next/link'
import { DrupalActionAlert } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface ActionAlertCardProps {
  item: DrupalActionAlert
}

export default function ActionAlertCard({ item }: ActionAlertCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white rounded-2xl shadow-md shadow-primary-200/50 hover:shadow-xl hover:shadow-primary-300/40 transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700">
        {(item as any).image?.url ? (
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 text-white/30 text-4xl font-bold font-display">{item.title?.charAt(0)}</div>
          </div>
        )}
      </div>

      <div className="p-6">
        {(item as any).actionUrl && (
          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-semibold mb-3">
            Action Required
          </span>
        )}
        <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-600 font-bold group-hover:gap-2 transition-all">
          Take action
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
