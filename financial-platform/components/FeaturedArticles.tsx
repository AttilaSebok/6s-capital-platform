import Link from 'next/link'

// Sample articles - in production, this would come from your CMS or database
const articles = [
  {
    id: 1,
    title: 'The Future of Tech Stocks: AI and Cloud Computing Trends 2025',
    excerpt: 'Analyzing the latest trends in artificial intelligence and cloud computing, and what they mean for tech investors in 2025.',
    category: 'Market Analysis',
    date: '2025-01-15',
    readTime: '8 min read',
    slug: 'future-tech-stocks-ai-cloud-2025',
  },
  {
    id: 2,
    title: 'Value Investing in a High-Interest Rate Environment',
    excerpt: 'How to identify undervalued stocks and apply value investing principles when interest rates remain elevated.',
    category: 'Investment Strategy',
    date: '2025-01-12',
    readTime: '10 min read',
    slug: 'value-investing-high-interest-rates',
  },
  {
    id: 3,
    title: 'Dividend Growth Stocks: Building Passive Income',
    excerpt: 'A comprehensive guide to selecting dividend aristocrats and building a portfolio for long-term passive income.',
    category: 'Portfolio Strategy',
    date: '2025-01-10',
    readTime: '12 min read',
    slug: 'dividend-growth-passive-income',
  },
]

export default function FeaturedArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/blog/${article.slug}`}
          className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-6 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 group"
        >
          <div className="mb-4">
            <span className="inline-block bg-olive-800 bg-opacity-40 border-2 border-bronze-600 text-bronze-600 px-3 py-1 rounded-none text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
          </div>
          <h3 className="font-crimson text-xl md:text-2xl font-bold text-white mb-3 pb-2 border-b-2 border-bronze-600 group-hover:text-bronze-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center text-xs text-stone-400 uppercase tracking-wider">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
