/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    // breakpoints
    screens: {
      'xs': {'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    },
    // transition duration
    transitionDuration: {
      'base': '4000ms'
    },
    // transition timing
    transitionTimingFunction: {
      'reveal-block-in': 'cubic-bezier(0.86, 0, 0.07, 1)'
    },
    // z-index
    zIndex: {
      '0': '0',
      '1': '1',
      '2': '2',
      'behind': '-10',
      'navbar': '200',
      'overlay': '500'
    }
  },
  variants: {},
  plugins: []
}
