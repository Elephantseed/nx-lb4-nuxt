const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
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
