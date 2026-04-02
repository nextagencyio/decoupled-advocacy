import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_REPORTS } from '@/lib/queries'
import { ReportsData } from '@/lib/types'
import Header from '../components/Header'
import ReportCard from '../components/ReportCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Reports | Voices United',
  description: 'Read our research reports and policy analyses.',
}

async function getReports() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_REPORTS, { first: 50 })
    return data?.nodeReports?.nodes || []
  } catch (error) {
    console.error('Error fetching reports:', error)
    return []
  }
}

export default async function ReportsPage() {
  const items = await getReports()

  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <section className="relative bg-primary-600 overflow-hidden text-white py-16 md:py-24">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary-500 rounded-full opacity-30" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent-400 rounded-full opacity-20" />
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-primary-400 rounded-full opacity-25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Reports
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Read our research reports and policy analyses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Reports Yet</h2>
              <p className="text-gray-500">
                Reports will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ReportCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
