let tinycolor = require('tinycolor2')

const primary = tinycolor('#0C6A8A')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary,
        primaryLight: primary.lighten(7).toString(),
        primaryLighter: primary.lighten(15).toString(),
        primaryDark: primary.darken(7).toString(),
        primaryDarker: primary.darken(15).toString(),
        primaryDarkest: primary.darken(20).saturate(100).toString(),
        text: '#2b3640',
        danger: '#F15854',
        success: '#60BD68',
        warning: '#e4b000',
        white: 'white',
        stable: tinycolor.mix(primary, 'black', 40).toString(),
        lighter: 'rgba(255, 255, 255, 0.8)',
        light: 'rgba(255, 255, 255, 0.6)',
        dark: 'rgba(0, 0, 0, 0.6)',
        darker: 'rgba(0, 0, 0, 0.8)',
        black: 'black',
      },
      spacing: {
        '600': '600px',
        '900': '900px',
      },
    },
  },
  variants: {},
  plugins: [],
}
