/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"Manrope"', '"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f6fe',
          100: '#ddeafd',
          200: '#c2dbfc',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
          950: '#0b1329',
        },
      },
    },
  },
  plugins: [],
};
