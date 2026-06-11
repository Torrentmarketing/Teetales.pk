import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EFE4',
          50:  '#FAF7F2',
          100: '#F5EFE4',
          200: '#EDE0CC',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          800: '#2C2C2C',
          600: '#4A4A4A',
          400: '#6B6B6B',
          200: '#9B9B9B',
          100: '#D4D4D4',
        },
        amber: {
          brand:   '#C4722A',
          light:   '#F0E0CC',
          muted:   '#E8C99A',
        },
        green: {
          soft: '#E8F5EC',
          text: '#2D7A4A',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        brand: '0.375rem',
      },
      animation: {
        'marquee':    'marquee 28s linear infinite',
        'fade-up':    'fadeUp 0.5s ease forwards',
        'slide-in':   'slideIn 0.4s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-12px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
