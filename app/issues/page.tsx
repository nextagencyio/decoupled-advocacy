import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_ISSUES } from '@/lib/queries'
import { IssuesData } from '@/lib/types'
import Header from '../components/Header'
import IssueCard from '../components/IssueCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Issues | Voices United',
  description: 'Explore the critical issues we are fighting for.',
}

async function getIssues() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<IssuesData>({
      query: GET_ISSUES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeIssues?.nodes || []
  } catch (error) {
    console.error('Error fetching issues:', error)
    return []
  }
}

export default async function IssuesPage() {
  const items = await getIssues()

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
              Issues
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore the critical issues we are fighting for.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Issues Yet</h2>
              <p className="text-gray-500">
                Issues will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <IssueCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
