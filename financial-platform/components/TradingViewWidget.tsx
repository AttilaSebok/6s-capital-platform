'use client'

import { useEffect, useRef, useState } from 'react'

interface TradingViewWidgetProps {
  symbol: string
  interval?: string
  theme?: 'light' | 'dark'
}

export default function TradingViewWidget({
  symbol,
  interval = 'D',
  theme = 'dark'
}: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!container.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Load 50px before entering viewport
        threshold: 0.1
      }
    )

    observer.observe(container.current)

    return () => observer.disconnect()
  }, [])

  // Initialize widget when visible
  useEffect(() => {
    if (!container.current || !isVisible) return

    // Clear previous content
    container.current.innerHTML = ''

    // Create widget container
    const widgetDiv = document.createElement('div')
    widgetDiv.className = 'tradingview-widget-container__widget'

    // Create script element
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: interval,
      timezone: 'Etc/UTC',
      theme: theme,
      style: '1',
      locale: 'en',
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    })

    // Append elements
    container.current.appendChild(widgetDiv)
    container.current.appendChild(script)

  }, [symbol, interval, theme, isVisible])

  return (
    <div
      className="tradingview-widget-container w-full h-[400px] md:h-[450px] relative"
      ref={container}
    >
      {/* Loading skeleton */}
      {!isVisible && (
        <div className="absolute inset-0 bg-slate-700 animate-pulse rounded-none flex items-center justify-center">
          <div className="text-stone-400 text-sm">Loading chart...</div>
        </div>
      )}
    </div>
  )
}
