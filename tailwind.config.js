/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'brown': '#36332d',
          'gray-100': '#888',
          'white': '#fff',
          'black': '#222',
          'green': '#7cff01',
          'yellow': '#fdff52',
      }
    }
  },
  plugins: [],
}
