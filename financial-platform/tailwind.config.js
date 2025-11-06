/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        success: '#10b981',
        danger: '#ef4444',
        // New "Soft Olive & Orange" color palette
        'soft-olive': '#E8EBD8',
        'soft-olive-dark': '#D4D8C5',
        'dark-header': '#374151',
        'soft-orange': '#FF9B47',
        'soft-orange-light': '#FFB366',
        'soft-orange-dark': '#E88535',
        // Sharp & Wise color palette (kept for backward compatibility)
        'deep-brown': '#2C1810',
        'rich-brown': '#3E2723',
        bronze: {
          600: '#FF9B47', // Changed to soft orange
          700: '#E88535', // Changed to soft orange dark
        },
        'dark-gold': '#FF9B47',
        olive: {
          100: '#E8EBD8', // Changed to soft olive
          300: '#B8C49B',
          700: '#3D4A1F',
          800: '#4A5D23',
        },
        slate: {
          DEFAULT: '#1E293B',
          900: '#374151', // Changed to dark gray
        },
        stone: {
          50: '#E8EBD8', // Changed to soft olive
          300: '#D1D5DB',
          400: '#9CA3AF',
          700: '#374151', // Changed to dark gray
          900: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Crimson Pro', 'Georgia', 'serif'],
        crimson: ['var(--font-crimson)', 'Crimson Pro', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
