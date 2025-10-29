'use client'

import { useEffect, useRef } from 'react'

export default function EconomicCalendar() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      isTransparent: false,
      width: '100%',
      height: '600',
      locale: 'en',
      importanceFilter: '0,1',
      countryFilter: 'us,eu,gb,jp,cn',
    })

    container.current.appendChild(script)

    return () => {
      if (container.current) {
        container.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-500">
        <p>
          <strong>Note:</strong> For a fully functional economic calendar, integrate with{' '}
          <a
            href="https://www.tradingeconomics.com/api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            Trading Economics API
          </a>{' '}
          or{' '}
          <a
            href="https://www.forexfactory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            Forex Factory
          </a>
          .
        </p>
      </div>
    </div>
  )
}
