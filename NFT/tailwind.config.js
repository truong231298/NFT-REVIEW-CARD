/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors: {
        'Softblue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'Verydarkblue': 'hsl(217, 54%, 11%)',
        'Very-darkblue': 'hsl(216, 50%, 16%)',
        'Very-dark-blue': 'hsl(215, 32%, 27%)',
        'White': 'hsl(0, 0%, 100%)'
      }
     
    },
  },
  plugins: [],
}