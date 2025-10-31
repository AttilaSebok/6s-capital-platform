import { MetadataRoute } from 'next'

// All article slugs - update this when adding new articles
const articleSlugs = [
  'how-to-start-investing-in-stocks',
  'what-is-value-investing',
  'best-dividend-stocks-2025',
  'technical-analysis-101',
  'sp500-vs-nasdaq',
  'understanding-pe-ratio',
  '5-investing-mistakes-beginners',
  'how-to-build-diversified-portfolio',
  'dividend-yield-vs-growth-stocks',
  'what-is-dollar-cost-averaging',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://6s-capital-platform.vercel.app'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/markets`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/screener`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Article pages
  const articlePages = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
