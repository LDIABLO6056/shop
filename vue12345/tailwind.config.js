/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif']
      },
      boxShadow: {
        custom: '0px 4px 8px 0px rgba(69, 69, 69, 0.25)'
      }
    }
  },
  plugins: []
}
