/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#fdf7f4', 100: '#fffaf8', 200: '#f6e8e2', 300: '#eed7cd' },
        brown: { DEFAULT: '#2e2422', 700: '#3d302c', 500: '#6b574f' },
        gold: { DEFAULT: '#bd8c4c', soft: '#d8b27e', deep: '#9a6f34' },
        rose: { DEFAULT: '#c98a86', soft: '#e7c3bf' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.3em' },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(46,36,34,0.28)',
        card: '0 16px 40px -18px rgba(46,36,34,0.22)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
