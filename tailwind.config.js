/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#1a4731',
        },
        burgundy: {
          DEFAULT: '#6b1728',
          light:   '#8b1f30',
          dark:    '#4a0f1e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card':    '0 2px 8px 0 rgba(0,0,0,0.06)',
        'card-lg': '0 8px 24px 0 rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}
