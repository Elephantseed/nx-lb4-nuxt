const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        overwrittenGreen: colors.green, // Use this to overwrite arbitrary properties like a 'color'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
