import Link from 'next/link'
import { getAllArticles, type Article } from '@/lib/articles'

// Get the latest article from each featured category
function getLatestByCategory(category: string): Article | null {
  const allArticles = getAllArticles()
  const categoryArticles = allArticles.filter(a => a.category === category)

  if (categoryArticles.length === 0) return null

  // Sort by date (most recent first)
  categoryArticles.sort((a, b) => {
    const dateA = new Date(a.publishDate)
    const dateB = new Date(b.publishDate)
    return dateB.getTime() - dateA.getTime()
  })

  return categoryArticles[0]
}

export default function FeaturedArticles() {
  // Featured categories for the homepage
  const featuredCategories = [
    'Beginner Guides',
    'Investment Strategies',
    'Fundamental Analysis'
  ]

  const featuredArticles = featuredCategories
    .map(category => getLatestByCategory(category))
    .filter((article): article is Article => article !== null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredArticles.map((article) => (
        <Link
          key={article.slug}
          href={`/articles/${article.slug}`}
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
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center text-xs text-stone-400 uppercase tracking-wider">
            <span>{article.publishDate}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
