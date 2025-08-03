/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lighthover:'#fcf4ff',
        darkhover:'#2a004a',
        darktheme:'#11001f'
      },
      fontFamily:{
        Outfit:["outfit", "sans-serif"],
      ovo: ['var(--font-ovo)', 'serif'],
      }
    },
  },
  plugins: [],
}

