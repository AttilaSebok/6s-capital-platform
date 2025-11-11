import { NextResponse } from 'next/server'

// Force dynamic rendering - prevents static generation at build time
export const dynamic = 'force-dynamic'

// CRITICAL: Next.js Route Segment Config for CDN-level caching
// This caches the response for ALL users, preventing API spam
// News updates every 2 hours (7200 seconds) - news doesn't change as frequently as stock prices
export const revalidate = 7200; // 2 hours cache

// Sample news data fallback
const SAMPLE_NEWS = [
  {
    id: 1,
    category: 'company',
    datetime: Math.floor(Date.now() / 1000) - 3600,
    headline: 'Apple Announces Record Q4 Earnings, Stock Rises 5%',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400',
    related: 'AAPL',
    source: 'Reuters',
    summary: 'Apple Inc. reported better-than-expected quarterly earnings, driven by strong iPhone 15 sales and services growth.',
    url: 'https://www.reuters.com/technology/apple-earnings-2024',
  },
  {
    id: 2,
    category: 'company',
    datetime: Math.floor(Date.now() / 1000) - 7200,
    headline: 'Tesla Unveils New Model 3 with Enhanced Autopilot Features',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400',
    related: 'TSLA',
    source: 'Bloomberg',
    summary: 'Tesla announces significant upgrades to Model 3, including improved battery range and advanced self-driving capabilities.',
    url: 'https://www.bloomberg.com/technology/tesla-model3-2024',
  },
  {
    id: 3,
    category: 'top',
    datetime: Math.floor(Date.now() / 1000) - 10800,
    headline: 'Federal Reserve Holds Interest Rates Steady at 5.25%-5.50%',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
    related: '',
    source: 'CNBC',
    summary: 'The Fed maintains current interest rate levels, signaling a cautious approach to inflation control amid economic uncertainty.',
    url: 'https://www.cnbc.com/markets/fed-rates-2024',
  },
  {
    id: 4,
    category: 'company',
    datetime: Math.floor(Date.now() / 1000) - 14400,
    headline: 'Microsoft Azure Cloud Revenue Surges 30% Year-Over-Year',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    related: 'MSFT',
    source: 'WSJ',
    summary: 'Microsoft reports strong cloud computing growth, with Azure leading the charge in enterprise AI adoption.',
    url: 'https://www.wsj.com/technology/microsoft-azure-2024',
  },
  {
    id: 5,
    category: 'top',
    datetime: Math.floor(Date.now() / 1000) - 18000,
    headline: 'Oil Prices Rise 3% on Middle East Supply Concerns',
    image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=400',
    related: 'XOM,CVX',
    source: 'Financial Times',
    summary: 'Crude oil prices climb amid geopolitical tensions affecting supply routes in the Middle East.',
    url: 'https://www.ft.com/markets/oil-prices-2024',
  },
  {
    id: 6,
    category: 'company',
    datetime: Math.floor(Date.now() / 1000) - 21600,
    headline: 'NVIDIA Partners with Major Automakers for AI Chips',
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=400',
    related: 'NVDA',
    source: 'TechCrunch',
    summary: 'NVIDIA announces partnerships with leading automakers to supply AI processors for next-generation autonomous vehicles.',
    url: 'https://techcrunch.com/nvidia-auto-ai-2024',
  },
  {
    id: 7,
    category: 'top',
    datetime: Math.floor(Date.now() / 1000) - 25200,
    headline: 'S&P 500 Hits New All-Time High Amid Tech Rally',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
    related: '',
    source: 'MarketWatch',
    summary: 'Major stock indices reach record levels as technology sector leads market gains, with investors optimistic about earnings season.',
    url: 'https://www.marketwatch.com/sp500-record-2024',
  },
  {
    id: 8,
    category: 'company',
    datetime: Math.floor(Date.now() / 1000) - 28800,
    headline: 'Amazon Expands One-Day Delivery to 50 New Cities',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400',
    related: 'AMZN',
    source: 'Reuters',
    summary: 'Amazon continues aggressive expansion of logistics network, promising faster delivery times to compete with retail rivals.',
    url: 'https://www.reuters.com/business/amazon-delivery-2024',
  },
]

export async function GET() {
  const apiKey = process.env.FINNHUB_API_KEY

  console.log(`🔍 Market News API Key present: ${!!apiKey}`)

  if (!apiKey) {
    console.log(`❌ NO API KEY - Returning sample news data`)
    return NextResponse.json({
      news: SAMPLE_NEWS,
      note: 'Sample news data shown. Configure FINNHUB_API_KEY in .env.local for live data.',
    })
  }

  console.log(`📰 Market News API called at ${new Date().toISOString()}`)
  console.log(`📊 Fetching live market news from Finnhub...`)

  try {
    // Fetch news from multiple categories for better coverage
    // Finnhub free tier: 60 calls/min, we use 5 calls here = ~8.3% of capacity
    const categories = ['general', 'forex', 'crypto', 'merger']

    // Top stocks for company-specific news
    const topStocks = ['AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META']

    // Fetch category news
    const newsPromises = categories.map(async (category) => {
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/news?category=${category}&token=${apiKey}`,
          { next: { revalidate: 300 } }
        )

        if (!response.ok) {
          console.error(`Failed to fetch ${category} news:`, response.status)
          return []
        }

        const data = await response.json()

        // Take top 8 articles from each category
        return data.slice(0, 8).map((item: any) => ({
          category: category === 'general' ? 'top' : category,
          datetime: item.datetime,
          headline: item.headline,
          image: item.image || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
          related: item.related || '',
          source: item.source,
          summary: item.summary,
          url: item.url,
        }))
      } catch (err) {
        console.error(`Error fetching ${category} news:`, err)
        return []
      }
    })

    // Fetch company-specific news for top stocks
    // Using company news endpoint for targeted content
    const companyNewsPromise = (async () => {
      try {
        const companyNewsPromises = topStocks.map(async (symbol) => {
          const today = new Date()
          const from = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000) // 7 days ago
          const fromDate = from.toISOString().split('T')[0]
          const toDate = today.toISOString().split('T')[0]

          const response = await fetch(
            `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${apiKey}`,
            { next: { revalidate: 300 } }
          )

          if (!response.ok) return []

          const data = await response.json()

          // Take top 2 articles per company
          return data.slice(0, 2).map((item: any) => ({
            category: 'company',
            datetime: item.datetime,
            headline: item.headline,
            image: item.image || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
            related: symbol,
            source: item.source,
            summary: item.summary,
            url: item.url,
          }))
        })

        const results = await Promise.all(companyNewsPromises)
        return results.flat()
      } catch (err) {
        console.error('Error fetching company news:', err)
        return []
      }
    })()

    // Add company news promise to the array
    newsPromises.push(companyNewsPromise)

    // Wait for all category fetches to complete
    const allNewsArrays = await Promise.all(newsPromises)

    // Flatten and combine all news articles
    const allNews = allNewsArrays.flat()

    // Sort by datetime (newest first)
    allNews.sort((a, b) => b.datetime - a.datetime)

    // Add unique IDs
    const formattedNews = allNews.slice(0, 40).map((item, index) => ({
      id: index + 1,
      ...item,
    }))

    console.log(`✓ Fetched ${formattedNews.length} news articles`)
    console.log(`   - Category news: ${categories.join(', ')}`)
    console.log(`   - Company news: ${topStocks.join(', ')}`)

    return NextResponse.json(
      {
        news: formattedNews,
        note: 'Live market news from Finnhub API (cached for 5 minutes, shared across all users)',
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching market news:', error)

    // Return sample data on error
    return NextResponse.json({
      news: SAMPLE_NEWS,
      note: 'Unable to fetch live news. Showing sample data.',
    })
  }
}
