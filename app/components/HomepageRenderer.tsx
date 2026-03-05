'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { MessageSquare, Users, Heart, Globe, Scale, Shield, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const communityItems = [
  { icon: MessageSquare, label: 'Advocacy', color: 'bg-primary-500', description: 'Amplify your voice' },
  { icon: Users, label: 'Community', color: 'bg-primary-600', description: 'Stronger together' },
  { icon: Heart, label: 'Compassion', color: 'bg-accent-500', description: 'Lead with empathy' },
  { icon: Globe, label: 'Global Reach', color: 'bg-primary-400', description: 'Worldwide impact' },
  { icon: Scale, label: 'Justice', color: 'bg-accent-600', description: 'Fairness for all' },
  { icon: Shield, label: 'Protection', color: 'bg-primary-700', description: 'Defend human rights' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop', alt: 'Community members united' },
  { src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80&fit=crop', alt: 'Group collaboration and advocacy' },
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80&fit=crop', alt: 'People marching for justice' },
  { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80&fit=crop', alt: 'Volunteers making a difference' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Content Preview */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Featured
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Campaigns
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our active campaigns and help drive meaningful change in communities around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Clean Water Initiative', desc: 'Ensuring access to safe drinking water for every community. Join the movement for clean water rights.', color: 'shadow-primary-200/50' },
              { title: 'Education Equity', desc: 'Fighting for equal educational opportunities regardless of zip code. Every child deserves quality education.', color: 'shadow-accent-200/50' },
              { title: 'Climate Justice Now', desc: 'Advocating for bold climate action that centers the most vulnerable communities. The time to act is now.', color: 'shadow-fuchsia-200/50' },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`bg-white rounded-2xl p-8 shadow-lg ${card.color} hover:-translate-y-1 transition-all duration-300 relative`}
                style={{ transform: i === 1 ? 'translateY(-8px)' : undefined }}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${i === 0 ? 'bg-primary-100' : i === 1 ? 'bg-accent-100' : 'bg-fuchsia-100'}`}>
                  <Heart className={`w-6 h-6 ${i === 0 ? 'text-primary-600' : i === 1 ? 'text-accent-600' : 'text-fuchsia-600'}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                <a href="/campaigns" className="inline-flex items-center mt-4 text-primary-600 font-semibold text-sm hover:text-primary-700">
                  Learn more &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Icons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our core values guide everything we do, from grassroots organizing to policy advocacy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {communityItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Gallery
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Community in Action
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See the faces and moments behind our advocacy work across communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl aspect-square group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Large Footer */}
      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-accent-300" />
                </div>
                <span className="text-2xl font-extrabold font-display text-white">
                  Voices United
                </span>
              </div>
              <p className="text-primary-300 mb-6 max-w-md leading-relaxed">
                Amplifying voices for justice, equality, and human rights since 2015. Together, we build a more just and compassionate world for all.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5 text-primary-200" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Campaigns', href: '/campaigns' },
                  { label: 'Issues', href: '/issues' },
                  { label: 'Action Alerts', href: '/action-alerts' },
                  { label: 'Reports', href: '/reports' },
                  { label: 'Contact', href: '/campaigns' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-primary-300 hover:text-accent-400 transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg mb-5">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-300">742 Unity Boulevard<br />Washington, DC 20001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-300">(202) 555-0189</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-300">hello@voicesunited.org</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-400 text-sm">
              &copy; {new Date().getFullYear()} Voices United. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-400">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
