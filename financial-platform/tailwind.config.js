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
        // Sharp & Wise color palette
        'deep-brown': '#2C1810',
        'rich-brown': '#3E2723',
        bronze: {
          600: '#8B6914',
          700: '#9C7617',
        },
        'dark-gold': '#9C7617',
        olive: {
          100: '#E8EBD8',
          300: '#B8C49B',
          700: '#3D4A1F',
          800: '#4A5D23',
        },
        slate: {
          DEFAULT: '#1E293B',
          900: '#0F1419',
        },
        stone: {
          50: '#F5F4F0',
          300: '#D4C5B9',
          400: '#8B7355',
          700: '#57534E',
          900: '#1C1917',
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
