/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f4e4bc',
          DEFAULT: '#d4af37',
          dark: '#aa8c2c',
        },
        rose: {
          light: '#fbcfe8',
          DEFAULT: '#ec4899',
          dark: '#be185d',
        },
        dark: {
          bg: '#000000',
          card: '#0c0c0c',
          border: '#1c1c1c',
        },
        spaBlue: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
        montserrat: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle, transparent 20%, #000000 80%)',
      }
    },
  },
  plugins: [],
}
