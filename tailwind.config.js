/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Identité Renia House : ORANGE luxe + ivoire + noir chaud + or
        orange: { DEFAULT: '#e8742e', light: '#ff9a52', deep: '#bf551a', soft: '#f6b27e' },
        ink: { DEFAULT: '#1b130d', 900: '#140d08', 800: '#241810', 700: '#33241a', 500: '#6a5746' },
        cream: { DEFAULT: '#fff8f1', 100: '#fffcf8', 200: '#fbeede', 300: '#f3ddc7' },
        gold: { DEFAULT: '#c9a14a', soft: '#e3c98c' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.32em' },
      boxShadow: {
        soft: '0 30px 70px -30px rgba(27,19,13,0.35)',
        card: '0 18px 44px -20px rgba(27,19,13,0.28)',
        glow: '0 20px 70px -18px rgba(232,116,46,0.55)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        reveal: { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
