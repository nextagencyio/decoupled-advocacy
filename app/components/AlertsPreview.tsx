'use client'

import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'
import { GET_FEATURED_ALERTS } from '@/lib/queries'

const FEATURED_ALERTS_QUERY = gql(GET_FEATURED_ALERTS)
import { DrupalActionAlert } from '@/lib/types'
import { AlertTriangle, ArrowRight, Clock } from 'lucide-react'

interface FeaturedAlertsData {
  nodeActionAlerts: {
    nodes: DrupalActionAlert[]
  }
}

const alertLevelColors: Record<string, string> = {
  'Urgent': 'bg-red-500',
  'High': 'bg-orange-500',
  'Medium': 'bg-yellow-500',
  'Low': 'bg-blue-500',
}

function formatDeadline(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function AlertsPreview() {
  const { data, loading, error } = useQuery<FeaturedAlertsData>(FEATURED_ALERTS_QUERY)

  const alerts = data?.nodeActionAlerts?.nodes || []

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Action Alerts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 animate-pulse">
                <div className="h-6 w-16 bg-white/20 rounded mb-4" />
                <div className="h-6 bg-white/20 rounded w-3/4 mb-2" />
                <div className="h-4 bg-white/20 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || alerts.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Action Alerts</h2>
            <p className="text-lg text-primary-200 max-w-2xl">
              Urgent actions you can take right now to make a difference.
            </p>
          </div>
          <Link
            href="/action-alerts"
            className="hidden md:flex items-center text-accent-400 hover:text-accent-300 font-medium"
          >
            All Alerts
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alerts.map((alert) => {
            const levelName = alert.alertLevel?.[0]?.name || 'Medium'
            const levelColor = alertLevelColors[levelName] || alertLevelColors['Medium']

            return (
              <Link
                key={alert.id}
                href={alert.path || `/action-alerts/${alert.id}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`${levelColor} rounded-lg p-3`}>
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-accent-400 text-sm font-medium mb-1">
                      {levelName}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-400 transition-colors line-clamp-2">
                      {alert.title}
                    </h3>
                    {alert.deadline && (
                      <div className="flex items-center text-sm text-primary-200">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Deadline: {formatDeadline(alert.deadline.timestamp)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/action-alerts"
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-400 transition-colors font-bold"
          >
            View All Alerts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
