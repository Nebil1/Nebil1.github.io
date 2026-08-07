/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      colors: {
        navy: {
          DEFAULT: '#070c16',
          light: '#0d1526',
          lightest: '#1b2740',
        },
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lightest: '#ccd6f6',
        },
        white: '#e6f1ff',
        teal: {
          DEFAULT: '#64ffda',
          tint: 'rgba(100, 255, 218, 0.1)',
        },
        link: {
          DEFAULT: '#3ee08a',
          tint: 'rgba(62, 224, 138, 0.12)',
        },
        amber: {
          DEFAULT: '#ffb454',
          tint: 'rgba(255, 180, 84, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Calibre', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'SF Mono', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      screens: {
        'xs': '475px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      }
    } 
  },
  plugins: [],
}
