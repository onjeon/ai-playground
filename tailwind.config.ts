import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-noto-kr)',
          'var(--font-noto-jp)',
          'var(--font-noto-tc)',
          'var(--font-noto-thai)',
          'var(--font-noto-arabic)',
          'var(--font-noto)',
          'var(--font-inter)',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config
