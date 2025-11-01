import { ReactNode } from 'react'

interface KeyTakeawayProps {
  children: ReactNode
  variant?: 'info' | 'success' | 'warning' | 'alert'
}

const variantStyles = {
  info: {
    background: 'bg-olive-100',
    border: 'border-l-4 border-bronze-600',
    icon: '💡',
    title: 'KEY TAKEAWAY',
    titleColor: 'text-bronze-700',
    textColor: 'text-deep-brown',
  },
  success: {
    background: 'bg-olive-100',
    border: 'border-l-4 border-olive-700',
    icon: '✅',
    title: 'SUCCESS TIP',
    titleColor: 'text-olive-800',
    textColor: 'text-deep-brown',
  },
  warning: {
    background: 'bg-stone-200',
    border: 'border-l-4 border-dark-gold',
    icon: '⚠️',
    title: 'IMPORTANT',
    titleColor: 'text-dark-gold',
    textColor: 'text-deep-brown',
  },
  alert: {
    background: 'bg-stone-200',
    border: 'border-l-4 border-stone-400',
    icon: '🚨',
    title: 'CRITICAL',
    titleColor: 'text-stone-700',
    textColor: 'text-deep-brown',
  },
}

export default function KeyTakeaway({ children, variant = 'info' }: KeyTakeawayProps) {
  const styles = variantStyles[variant]

  return (
    <div className={`${styles.background} ${styles.border} rounded-none border-2 border-stone-300 p-6 my-8 shadow-md`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl" role="img" aria-label={styles.title}>
          {styles.icon}
        </span>
        <span className={`text-sm font-bold uppercase tracking-wider ${styles.titleColor}`}>
          {styles.title}
        </span>
      </div>
      <div className={`${styles.textColor} text-base leading-relaxed`}>
        {children}
      </div>
    </div>
  )
}
