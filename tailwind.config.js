/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      screens: {
        'xs': '475px',
      },
      minHeight: {
        'touch': '44px',
      }
    } 
  },
  plugins: [],
}
