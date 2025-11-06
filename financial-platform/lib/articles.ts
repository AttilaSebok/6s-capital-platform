// Central Article Registry
// When you create a new article, add its metadata here

export interface Article {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  publishDate: string
  tags: string[]
  featured?: boolean
}

export const articles: Article[] = [
  // Existing Articles (Articles #1-20)
  {
    slug: 'how-to-start-investing-in-stocks',
    title: 'How to Start Investing in Stocks: Complete 2025 Guide',
    description: 'Everything you need to know to start your investing journey, from opening your first brokerage account to making your first investment.',
    category: 'Beginner Guides',
    readTime: '12 min read',
    publishDate: 'October 29, 2025',
    tags: ['beginner', 'stocks', 'getting-started', 'brokerage'],
    featured: true,
  },
  {
    slug: 'what-is-value-investing',
    title: 'What is Value Investing? Warren Buffett\'s Strategy Explained',
    description: 'Learn the principles of value investing and how legends like Warren Buffett and Benjamin Graham built fortunes with this timeless strategy.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'October 29, 2025',
    tags: ['value-investing', 'warren-buffett', 'strategy', 'fundamentals'],
    featured: true,
  },
  {
    slug: 'best-dividend-stocks-2025',
    title: '10 Best Dividend Stocks for Passive Income in 2025',
    description: 'Discover reliable dividend stocks that can generate consistent passive income while preserving and growing your capital.',
    category: 'Stock Analysis',
    readTime: '11 min read',
    publishDate: 'October 29, 2025',
    tags: ['dividends', 'passive-income', 'stocks', 'income-investing'],
    featured: true,
  },
  {
    slug: 'technical-analysis-101',
    title: 'Technical Analysis 101: Reading Stock Charts for Beginners',
    description: 'Master the basics of technical analysis, chart patterns, and indicators to time your trades more effectively.',
    category: 'Technical Analysis',
    readTime: '10 min read',
    publishDate: 'October 29, 2025',
    tags: ['technical-analysis', 'charts', 'indicators', 'trading'],
  },
  {
    slug: 'sp500-vs-nasdaq',
    title: 'S&P 500 vs NASDAQ: Which Index is Better for You?',
    description: 'A comprehensive comparison of the two most popular stock market indexes and which one fits your investment goals.',
    category: 'Market Analysis',
    readTime: '9 min read',
    publishDate: 'October 29, 2025',
    tags: ['sp500', 'nasdaq', 'index-funds', 'etf'],
  },
  {
    slug: 'understanding-pe-ratio',
    title: 'Understanding P/E Ratio: Is a Stock Cheap or Expensive?',
    description: 'Learn how to use the Price-to-Earnings ratio to evaluate stocks and avoid overpaying for investments.',
    category: 'Fundamental Analysis',
    readTime: '8 min read',
    publishDate: 'January 15, 2025',
    tags: ['pe-ratio', 'valuation', 'fundamentals', 'stock-analysis'],
  },
  {
    slug: '5-investing-mistakes-beginners',
    title: '5 Investing Mistakes That Cost Beginners Thousands',
    description: 'Learn the most common investing mistakes new investors make and how to avoid them before they damage your portfolio.',
    category: 'Beginner Guides',
    readTime: '10 min read',
    publishDate: 'January 16, 2025',
    tags: ['mistakes', 'beginner', 'lessons', 'portfolio-management'],
  },
  {
    slug: 'how-to-build-diversified-portfolio',
    title: 'How to Build a Diversified Portfolio: Step-by-Step',
    description: 'Learn how to construct a properly diversified investment portfolio that balances risk and reward for long-term wealth building.',
    category: 'Portfolio Strategy',
    readTime: '12 min read',
    publishDate: 'January 17, 2025',
    tags: ['diversification', 'portfolio', 'asset-allocation', 'risk-management'],
  },
  {
    slug: 'dividend-yield-vs-growth-stocks',
    title: 'Dividend Yield vs Growth: Which Strategy is Better?',
    description: 'Compare dividend income investing vs. growth investing strategies to find which approach fits your financial goals and timeline.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'January 18, 2025',
    tags: ['dividends', 'growth-stocks', 'strategy', 'income-investing'],
  },
  {
    slug: 'what-is-dollar-cost-averaging',
    title: 'What is Dollar-Cost Averaging? (With Real Examples)',
    description: 'Learn how dollar-cost averaging removes emotion from investing and why consistent investing beats trying to time the market.',
    category: 'Beginner Guides',
    readTime: '9 min read',
    publishDate: 'January 19, 2025',
    tags: ['dca', 'dollar-cost-averaging', 'investing-strategy', 'market-timing'],
  },
  {
    slug: 'how-to-read-financial-statements',
    title: 'How to Read Financial Statements: Complete Beginner\'s Guide',
    description: 'Learn to read income statements, balance sheets, and cash flow statements. Master financial analysis with real examples and step-by-step guidance.',
    category: 'Fundamental Analysis',
    readTime: '12 min read',
    publishDate: 'January 20, 2025',
    tags: ['financial-statements', 'income-statement', 'balance-sheet', 'cash-flow'],
  },
  {
    slug: 'etfs-vs-mutual-funds',
    title: 'ETFs vs Mutual Funds: Complete Comparison Guide',
    description: 'Detailed comparison of ETFs and mutual funds. Learn differences in fees, tax efficiency, trading, and which is better for your investment strategy.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'January 21, 2025',
    tags: ['etf', 'mutual-funds', 'expense-ratio', 'tax-efficiency'],
  },
  {
    slug: 'retirement-accounts-guide',
    title: 'Retirement Accounts Guide: 401k, IRA, and Roth IRA Explained',
    description: 'Complete guide to retirement accounts. Learn the differences between 401k, Traditional IRA, and Roth IRA, plus contribution limits and tax strategies.',
    category: 'Tax & Retirement',
    readTime: '11 min read',
    publishDate: 'January 22, 2025',
    tags: ['401k', 'ira', 'roth-ira', 'retirement', 'tax-strategy'],
  },
  {
    slug: 'stock-valuation-methods',
    title: 'Stock Valuation Methods: DCF, Comps, and Precedents',
    description: 'Learn professional stock valuation techniques including discounted cash flow (DCF), comparable companies, and precedent transactions with real examples.',
    category: 'Fundamental Analysis',
    readTime: '13 min read',
    publishDate: 'January 23, 2025',
    tags: ['valuation', 'dcf', 'comps', 'fundamental-analysis'],
  },
  {
    slug: 'market-cycles-economic-indicators',
    title: 'Understanding Market Cycles and Economic Indicators',
    description: 'Master the four stages of market cycles and key economic indicators like GDP, unemployment, yield curve, and VIX to position your portfolio strategically.',
    category: 'Market Analysis',
    readTime: '11 min read',
    publishDate: 'January 24, 2025',
    tags: ['market-cycles', 'economic-indicators', 'gdp', 'yield-curve', 'vix'],
  },
  {
    slug: 'options-trading-101',
    title: 'Options Trading 101: Calls, Puts, and Beginner Strategies',
    description: 'Learn options trading basics including calls vs puts, covered calls, cash-secured puts, and essential risk management strategies for beginners.',
    category: 'Investment Strategies',
    readTime: '12 min read',
    publishDate: 'January 25, 2025',
    tags: ['options', 'calls', 'puts', 'covered-calls', 'trading'],
  },
  {
    slug: 'real-estate-vs-stocks',
    title: 'Real Estate vs Stocks: Which Investment is Better?',
    description: 'Compare real estate and stock investments across returns, liquidity, leverage, taxes, and time commitment. Includes REITs as a hybrid option.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'January 26, 2025',
    tags: ['real-estate', 'stocks', 'reits', 'investment-comparison'],
  },
  {
    slug: 'tax-loss-harvesting',
    title: 'Tax-Loss Harvesting: Save Thousands in Taxes',
    description: 'Learn how tax-loss harvesting works, avoid wash-sale violations, and use this strategy to offset capital gains and reduce your tax bill.',
    category: 'Tax & Retirement',
    readTime: '9 min read',
    publishDate: 'January 27, 2025',
    tags: ['tax-loss-harvesting', 'taxes', 'capital-gains', 'wash-sale'],
  },
  {
    slug: 'how-to-analyze-earnings-reports',
    title: 'How to Analyze Quarterly Earnings Reports (10-Q Guide)',
    description: 'Learn to analyze earnings reports like a pro. Understand EPS, revenue growth, forward guidance, and earnings call red flags with real examples.',
    category: 'Fundamental Analysis',
    readTime: '11 min read',
    publishDate: 'January 28, 2025',
    tags: ['earnings-report', '10-q', 'eps', 'forward-guidance'],
  },
  {
    slug: 'emerging-markets-guide',
    title: 'International Investing: Emerging Markets Complete Guide',
    description: 'Learn about emerging market investing. Understand opportunities, risks, top countries, and best ETFs (VWO, IEMG) for portfolio diversification.',
    category: 'Portfolio Strategy',
    readTime: '10 min read',
    publishDate: 'January 29, 2025',
    tags: ['emerging-markets', 'international', 'vwo', 'iemg', 'diversification'],
  },

  // New Articles (Articles #21-25) - November 2025
  {
    slug: 'how-to-open-brokerage-account',
    title: 'How to Open Your First Brokerage Account: Step-by-Step Guide',
    description: 'Complete beginner\'s guide to opening a brokerage account. Compare brokers, learn the process, and start investing in 30 minutes or less.',
    category: 'Beginner Guides',
    readTime: '10 min read',
    publishDate: 'November 6, 2025',
    tags: ['brokerage', 'beginner', 'getting-started', 'fidelity', 'schwab'],
    featured: true,
  },
  {
    slug: 'what-is-compound-interest',
    title: 'What is Compound Interest? The 8th Wonder of the World Explained',
    description: 'Discover how compound interest turns small investments into massive wealth. Real examples, calculators, and strategies to harness the power of compounding.',
    category: 'Beginner Guides',
    readTime: '9 min read',
    publishDate: 'November 6, 2025',
    tags: ['compound-interest', 'compounding', 'wealth-building', 'beginner'],
    featured: true,
  },
  {
    slug: 'asset-allocation-101',
    title: 'Asset Allocation 101: Stocks, Bonds, and Cash Explained',
    description: 'Master asset allocation strategies for optimal portfolio balance. Learn how to allocate between stocks, bonds, and cash based on your age, goals, and risk tolerance.',
    category: 'Beginner Guides',
    readTime: '11 min read',
    publishDate: 'November 6, 2025',
    tags: ['asset-allocation', 'diversification', 'portfolio', 'risk-management'],
    featured: true,
  },
  {
    slug: 'how-much-money-to-start-investing',
    title: 'How Much Money Do You Need to Start Investing?',
    description: 'You can start investing with $1 thanks to fractional shares. Learn realistic starting amounts, what to prioritize first, and how small investments grow into wealth.',
    category: 'Beginner Guides',
    readTime: '9 min read',
    publishDate: 'November 6, 2025',
    tags: ['beginner', 'fractional-shares', 'getting-started', 'minimum-investment'],
  },
  {
    slug: 'index-funds-explained',
    title: 'Index Funds Explained: The Simplest Path to Wealth',
    description: 'Discover why index funds beat 90% of actively managed funds. Learn how to invest in low-cost index funds, compare S&P 500 options, and build wealth automatically.',
    category: 'Beginner Guides',
    readTime: '11 min read',
    publishDate: 'November 6, 2025',
    tags: ['index-funds', 'voo', 'vti', 'sp500', 'passive-investing'],
    featured: true,
  },
]

// Helper functions
export function getAllArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return articles
  return articles.filter(article => article.category === category)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured === true)
}

export function getCategories(): string[] {
  const uniqueCategories = Array.from(new Set(articles.map(a => a.category))).sort()
  return ['All', ...uniqueCategories]
}
