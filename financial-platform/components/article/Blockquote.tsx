import { ReactNode } from 'react'

interface BlockquoteProps {
  children: ReactNode
  author?: string
}

export default function Blockquote({ children, author }: BlockquoteProps) {
  return (
    <blockquote className="border-l-4 border-indigo-500 pl-6 my-8 italic text-xl text-gray-800 leading-relaxed hover:border-indigo-600 transition-colors duration-200">
      <p className="mb-2">{children}</p>
      {author && (
        <cite className="block mt-3 text-base not-italic font-semibold text-gray-600">
          — {author}
        </cite>
      )}
    </blockquote>
  )
}
