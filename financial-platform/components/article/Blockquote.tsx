import { ReactNode } from 'react'

interface BlockquoteProps {
  children: ReactNode
  author?: string
}

export default function Blockquote({ children, author }: BlockquoteProps) {
  return (
    <blockquote className="border-l-4 border-bronze-600 pl-6 my-8 italic text-xl text-stone-800 leading-relaxed hover:border-bronze-700 transition-colors duration-200">
      <p className="mb-2">{children}</p>
      {author && (
        <cite className="block mt-3 text-base not-italic font-semibold text-stone-700">
          — {author}
        </cite>
      )}
    </blockquote>
  )
}
