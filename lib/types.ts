// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredCampaignsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Campaign
export interface DrupalCampaign extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  issueArea?: DrupalTerm[]
  campaignType?: DrupalTerm[]
  goal?: string
  startDate?: {
    timestamp: number
  }
  image?: DrupalImage
}

export interface CampaignsData {
  nodeCampaigns: {
    nodes: DrupalCampaign[]
  }
}

// Issue
export interface DrupalIssue extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  issueArea?: DrupalTerm[]
  keyFacts?: {
    processed: string
  }
  image?: DrupalImage
}

export interface IssuesData {
  nodeIssues: {
    nodes: DrupalIssue[]
  }
}

// Action Alert
export interface DrupalActionAlert extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  alertLevel?: DrupalTerm[]
  issueArea?: DrupalTerm[]
  actionUrl?: string
  deadline?: {
    timestamp: number
  }
  image?: DrupalImage
}

export interface ActionAlertsData {
  nodeActionAlerts: {
    nodes: DrupalActionAlert[]
  }
}

// Report
export interface DrupalReport extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  reportType?: DrupalTerm[]
  publicationDate?: {
    timestamp: number
  }
  fileUrl?: string
  image?: DrupalImage
}

export interface ReportsData {
  nodeReports: {
    nodes: DrupalReport[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Legacy compatibility
export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  tags?: DrupalTerm[]
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
