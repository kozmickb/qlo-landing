/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      spacing: {
        '28': '7rem',
        '100': '25rem', // Optional: for large hero padding or section depth
      },
      borderRadius: {
        md: '0.375rem', // Medium rounded buttons for CTA consistency
      },
      colors: {
        primary: '#FF3F8D',
        secondary: '#AD5CFF',
        accent: '#D764D4',
      },
      boxShadow: {
        cta: '0 4px 14px 0 rgba(255, 63, 141, 0.39)', // Optional glow effect for CTAs
      },
    },
  },
  plugins: [],
}
