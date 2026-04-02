// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredCampaignsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Campaigns
export const GET_CAMPAIGNS = gql`
  query GetCampaigns($first: Int = 20) {
    nodeCampaigns(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeCampaign {
          body {
            processed
            summary
          }
          issueArea {
            ... on TermIssueArea {
              id
              name
            }
          }
          campaignType {
            ... on TermCampaignType {
              id
              name
            }
          }
          goal
          startDate {
            timestamp
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_CAMPAIGN_BY_PATH = gql`
  query GetCampaignByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCampaign {
            id
            title
            path
            body {
              processed
            }
            issueArea {
              ... on TermIssueArea {
                id
                name
              }
            }
            campaignType {
              ... on TermCampaignType {
                id
                name
              }
            }
            goal
            startDate {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Issues
export const GET_ISSUES = gql`
  query GetIssues($first: Int = 20) {
    nodeIssues(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeIssue {
          body {
            processed
            summary
          }
          issueArea {
            ... on TermIssueArea {
              id
              name
            }
          }
          keyFacts {
            processed
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ISSUE_BY_PATH = gql`
  query GetIssueByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeIssue {
            id
            title
            path
            body {
              processed
            }
            issueArea {
              ... on TermIssueArea {
                id
                name
              }
            }
            keyFacts {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Action Alerts
export const GET_ACTION_ALERTS = gql`
  query GetActionAlerts($first: Int = 20) {
    nodeActionAlerts(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeActionAlert {
          body {
            processed
            summary
          }
          alertLevel {
            ... on TermAlertLevel {
              id
              name
            }
          }
          issueArea {
            ... on TermIssueArea {
              id
              name
            }
          }
          actionUrl
          deadline {
            timestamp
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ACTION_ALERT_BY_PATH = gql`
  query GetActionAlertByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeActionAlert {
            id
            title
            path
            body {
              processed
            }
            alertLevel {
              ... on TermAlertLevel {
                id
                name
              }
            }
            issueArea {
              ... on TermIssueArea {
                id
                name
              }
            }
            actionUrl
            deadline {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Reports
export const GET_REPORTS = gql`
  query GetReports($first: Int = 20) {
    nodeReports(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeReport {
          body {
            processed
            summary
          }
          reportType {
            ... on TermReportType {
              id
              name
            }
          }
          publicationDate {
            timestamp
          }
          fileUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_REPORT_BY_PATH = gql`
  query GetReportByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeReport {
            id
            title
            path
            body {
              processed
            }
            reportType {
              ... on TermReportType {
                id
                name
              }
            }
            publicationDate {
              timestamp
            }
            fileUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Featured campaigns for homepage
export const GET_FEATURED_CAMPAIGNS = gql`
  query GetFeaturedCampaigns {
    nodeCampaigns(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeCampaign {
          issueArea {
            ... on TermIssueArea {
              id
              name
            }
          }
          goal
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured action alerts for homepage
export const GET_FEATURED_ALERTS = gql`
  query GetFeaturedAlerts {
    nodeActionAlerts(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeActionAlert {
          alertLevel {
            ... on TermAlertLevel {
              id
              name
            }
          }
          issueArea {
            ... on TermIssueArea {
              id
              name
            }
          }
          deadline {
            timestamp
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeCampaign {
            id
            title
            path
            body {
              processed
            }
            issueArea {
              ... on TermIssueArea {
                id
                name
              }
            }
            campaignType {
              ... on TermCampaignType {
                id
                name
              }
            }
            goal
            startDate {
              timestamp
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeIssue {
            id
            title
            path
            body {
              processed
            }
            issueArea {
              ... on TermIssueArea {
                id
                name
              }
            }
            keyFacts {
              processed
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeActionAlert {
            id
            title
            path
            body {
              processed
            }
            alertLevel {
              ... on TermAlertLevel {
                id
                name
              }
            }
            issueArea {
              ... on TermIssueArea {
                id
                name
              }
            }
            actionUrl
            deadline {
              timestamp
            }
          }
          ... on NodeReport {
            id
            title
            path
            body {
              processed
            }
            reportType {
              ... on TermReportType {
                id
                name
              }
            }
            publicationDate {
              timestamp
            }
            fileUrl
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredCampaignsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`
