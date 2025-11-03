'use client'

import { useState, useRef, useEffect } from 'react'

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  id: string
  name: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  placeholder?: string
  required?: boolean
}

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const selected = options.find(opt => opt.value === value)
    setSelectedLabel(selected ? selected.label : '')
  }, [value, options])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(!isOpen)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* Hidden native select for form submission */}
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="sr-only"
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom dropdown button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-3 bg-stone-900 border-2 border-stone-400 border-opacity-40 rounded-none text-white text-left focus:border-bronze-600 focus:bg-stone-900 hover:bg-stone-900 active:bg-stone-900 focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-800 focus:outline-none transition-all duration-200 flex items-center justify-between"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedLabel ? 'text-white' : 'text-stone-400'}>
          {selectedLabel || placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-bronze-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-stone-900 border-2 border-bronze-600 rounded-none shadow-2xl max-h-48 overflow-y-auto">
          <ul role="listbox" className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                onClick={() => handleSelect(option.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSelect(option.value)
                  }
                }}
                tabIndex={0}
                className={`px-4 py-3 cursor-pointer transition-all duration-150 ${
                  value === option.value
                    ? 'bg-bronze-600 text-white font-semibold'
                    : 'text-white hover:bg-bronze-600 hover:bg-opacity-80'
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
