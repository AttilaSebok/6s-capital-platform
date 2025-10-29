import { ReactNode } from 'react'

interface KeyTakeawayProps {
  children: ReactNode
  variant?: 'info' | 'success' | 'warning' | 'alert'
}

const variantStyles = {
  info: {
    background: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    border: 'border-l-4 border-indigo-500',
    icon: '💡',
    title: 'KEY TAKEAWAY',
    titleColor: 'text-indigo-900',
  },
  success: {
    background: 'bg-gradient-to-br from-emerald-50 to-green-50',
    border: 'border-l-4 border-emerald-500',
    icon: '✅',
    title: 'SUCCESS TIP',
    titleColor: 'text-emerald-900',
  },
  warning: {
    background: 'bg-gradient-to-br from-amber-50 to-yellow-50',
    border: 'border-l-4 border-amber-500',
    icon: '⚠️',
    title: 'IMPORTANT',
    titleColor: 'text-amber-900',
  },
  alert: {
    background: 'bg-gradient-to-br from-rose-50 to-red-50',
    border: 'border-l-4 border-rose-500',
    icon: '🚨',
    title: 'CRITICAL',
    titleColor: 'text-rose-900',
  },
}

export default function KeyTakeaway({ children, variant = 'info' }: KeyTakeawayProps) {
  const styles = variantStyles[variant]

  return (
    <div className={`${styles.background} ${styles.border} rounded-lg p-6 my-8 shadow-sm`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl" role="img" aria-label={styles.title}>
          {styles.icon}
        </span>
        <span className={`text-sm font-bold uppercase tracking-wider ${styles.titleColor}`}>
          {styles.title}
        </span>
      </div>
      <div className="text-gray-800 text-base leading-relaxed">
        {children}
      </div>
    </div>
  )
}
