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
          50:  '#fdf4f7',
          100: '#fbe9ef',
          200: '#f8d4e2',
          300: '#f2b0c7',
          400: '#e87da6',
          500: '#d94e83',
          600: '#bf2d64',
          700: '#9e1e50',
          800: '#831a44',
          900: '#6f1a3c',
          950: '#3d0a20',
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
