import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_CAMPAIGNS } from '@/lib/queries'
import { CampaignsData } from '@/lib/types'
import Header from '../components/Header'
import CampaignCard from '../components/CampaignCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Campaigns | Voices United',
  description: 'Browse our active campaigns for social justice and human rights.',
}

async function getCampaigns() {
  try {
    const client = getClient()
    const data = await client.raw(GET_CAMPAIGNS, { first: 50 })
    return data?.nodeCampaigns?.nodes || []
  } catch (error) {
    console.error('Error fetching campaigns:', error)
    return []
  }
}

export default async function CampaignsPage() {
  const items = await getCampaigns()

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
              Campaigns
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join our active campaigns and help drive meaningful change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Campaigns Yet</h2>
              <p className="text-gray-500">
                Campaigns will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <CampaignCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
