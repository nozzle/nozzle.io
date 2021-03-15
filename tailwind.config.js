let Color = require('tinycolor2')

const primary = '#0C6A8A'

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary,
        primaryLight: Color(primary).lighten(7).toString(),
        primaryLighter: Color(primary).lighten(15).toString(),
        primaryDark: Color(primary).darken(7).toString(),
        primaryDarker: Color(primary).darken(15).toString(),
        primaryDarkest: Color(primary).darken(20).saturate(100).toString(),
        subNav: Color(primary)
          .darken(20)
          .saturate(100)
          .setAlpha(0.9)
          .toString(),
        text: '#2b3640',
        danger: '#F15854',
        success: '#60BD68',
        warning: '#e4b000',
        white: 'white',
        stable: Color.mix(primary, 'black', 40).toString(),
        lighter: 'rgba(255, 255, 255, 0.8)',
        light: 'rgba(255, 255, 255, 0.6)',
        dark: 'rgba(0, 0, 0, 0.6)',
        darker: 'rgba(0, 0, 0, 0.8)',
        black: 'black',
        bing: '#ffb900',
        facebook: '#3B5998',
        twitter: '#00A0D1',
        google: '#4285F4',
        pinterest: '#910101',
        linkedin: '#1884bb',
        stumbleupon: '#EB4924',
        yahoo: '#4D1AC2',
      },
      spacing: {
        300: '300px',
        325: '325px',
        400: '400px',
        500: '500px',
        600: '600px',
        900: '900px',
      },
      padding: {
        '4/100': '4%',
        '5/100': '5%',
        '8/100': '8%',
        '1/10': '10%',
        '3/20': '15%',
        '1/5': '20%',
        '3/10': '30%',
        '2/5': '40%',
        '1/2': '50%',
      },
      margin: {
        '1/100': '1%',
        '3/100': '3%',
      },
      minHeight: {
        212: '53rem',
      },
      maxWidth: {
        default: '1400px',
      },
      zIndex: {
        1: 1,
      },
      borderWidth: {
        50: '50px',
      },
      flex: {
        100: '1 1 100%',
        300: '1 1 300px',
      },
      width: {
        125: '31.25rem',
        150: '37.5rem',
        162: '40.5rem',
        200: '50rem',
        225: '56.25rem',
        '3/10': '30%',
        '14/10': '140%',
        '16/10': '160%',
        double: '200%',
      },
      height: {
        13: '3.25rem',
      },
      inset: {
        13: '3.25rem',
        100: '25rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
