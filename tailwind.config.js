/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: '#5A0B0B', deep: '#3B0606' },
        gold: { DEFAULT: '#D4AF37' },
        cream: { DEFAULT: '#F7F1E8' },
        charcoal: { DEFAULT: '#1A1210' },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
