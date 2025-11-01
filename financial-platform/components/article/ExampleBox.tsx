import { ReactNode } from 'react'

interface ExampleBoxProps {
  children: ReactNode
  title?: string
  icon?: string
}

export default function ExampleBox({ children, title = 'REAL EXAMPLE', icon = '📊' }: ExampleBoxProps) {
  return (
    <div className="bg-white border-2 border-stone-300 rounded-none p-6 my-8 shadow-md hover:shadow-xl hover:border-bronze-600 transition-all duration-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl" role="img" aria-label={title}>
          {icon}
        </span>
        <span className="text-sm font-bold uppercase tracking-wider text-bronze-700">
          {title}
        </span>
      </div>
      <div className="text-stone-800">
        {children}
      </div>
    </div>
  )
}
