import { ReactNode } from 'react'

interface ExampleBoxProps {
  children: ReactNode
  title?: string
  icon?: string
}

export default function ExampleBox({ children, title = 'REAL EXAMPLE', icon = '📊' }: ExampleBoxProps) {
  return (
    <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 my-8 shadow-md hover:shadow-lg hover:border-indigo-300 transition-all duration-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl" role="img" aria-label={title}>
          {icon}
        </span>
        <span className="text-sm font-bold uppercase tracking-wider text-indigo-700">
          {title}
        </span>
      </div>
      <div className="text-gray-800">
        {children}
      </div>
    </div>
  )
}
