import { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  category?: string
  keywords?: string[]
}

const SITE_URL = 'https://money365.market'
const SITE_NAME = 'money365.market'
const DEFAULT_IMAGE = '/og-image.jpg'
const TWITTER_HANDLE = '@money365market'

export function generateSEOMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'money365.market Research Team',
  category,
  keywords = [],
}: PageMetadata): Metadata {
  const fullTitle = title.includes('money365.market') ? title : `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],

    // Canonical URL
    alternates: {
      canonical: url,
    },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: type,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },

    // Additional meta
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  // Add article-specific metadata
  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: [author],
      section: category,
      tags: keywords,
    }
  }

  return metadata
}

// Helper for article pages
export function generateArticleMetadata({
  title,
  description,
  slug,
  category,
  publishDate,
  readTime,
  keywords = [],
}: {
  title: string
  description: string
  slug: string
  category: string
  publishDate: string
  readTime: string
  keywords?: string[]
}): Metadata {
  return generateSEOMetadata({
    title,
    description,
    path: `/articles/${slug}`,
    type: 'article',
    publishedTime: publishDate,
    category,
    keywords: [
      ...keywords,
      'investing',
      'stock market',
      'financial analysis',
      category.toLowerCase(),
    ],
  })
}

// JSON-LD Schema.org structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Professional investment analysis platform providing real-time market data, stock screening tools, and expert financial insights.',
    sameAs: [
      'https://twitter.com/money365market',
      'https://linkedin.com/company/money365market',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@money365.market',
    },
  }
}

export function generateArticleSchema({
  title,
  description,
  slug,
  publishDate,
  modifiedDate,
  author = 'money365.market Research Team',
  category,
  image = DEFAULT_IMAGE,
}: {
  title: string
  description: string
  slug: string
  publishDate: string
  modifiedDate?: string
  author?: string
  category: string
  image?: string
}) {
  const url = `${SITE_URL}/articles/${slug}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    inLanguage: 'en-US',
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function generateWebPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  }
}
