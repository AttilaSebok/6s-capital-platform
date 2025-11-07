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
  const [scriptLoaded, setScriptLoaded] = useState(false)

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

  // Load TradingView script only once globally
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if script is already loaded
    if (window.TradingView) {
      setScriptLoaded(true)
      return
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector(
      'script[src*="tradingview.com/external-embedding"]'
    )

    if (existingScript) {
      existingScript.addEventListener('load', () => setScriptLoaded(true))
      return
    }

    // Load script only once
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.onload = () => setScriptLoaded(true)
    document.head.appendChild(script)
  }, [])

  // Initialize widget only when visible and script loaded
  useEffect(() => {
    if (!container.current || !isVisible || !scriptLoaded) return

    const widgetContainer = container.current.querySelector('.tradingview-widget-container__widget')
    if (!widgetContainer) return

    // Clear previous content
    widgetContainer.innerHTML = ''

    const script = document.createElement('script')
    script.type = 'text/javascript'
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

    widgetContainer.appendChild(script)

    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = ''
      }
    }
  }, [symbol, interval, theme, isVisible, scriptLoaded])

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

      <div className="tradingview-widget-container__widget h-full"></div>
    </div>
  )
}
