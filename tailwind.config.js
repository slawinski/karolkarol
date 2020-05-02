module.exports = {
  important: true,
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['"source sans pro"', '-apple-system', 'BlinkMacSystemFont'],
      'serif': ['"source serif pro"', 'Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
    },
    extend: {},
  },
  variants: {
    background: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'visited'],
  },
  plugins: [],
}
