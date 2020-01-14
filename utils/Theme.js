import React from 'react'
import Color from './Color'

const primary = '#0C6A8A'

const colorOptions = {
  primary,
  primaryLight: Color(primary)
    .lighten(7)
    .toString(),
  primaryLighter: Color(primary)
    .lighten(15)
    .toString(),
  primaryDark: Color(primary)
    .darken(7)
    .toString(),
  primaryDarker: Color(primary)
    .darken(15)
    .toString(),
  primaryDarkest: Color(primary)
    .darken(20)
    .saturate(100)
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
}

export default {
  maxWidth: 1400,
  sizes: {
    h1: 3,
    h2: 2.5,
    h3: 2,
    h4: 1.6,
    h5: 1.3,
    h6: 1.2,
  },
  weights: {
    lighter: 100,
    light: 300,
    regular: 400,
    bold: 700,
    bolder: 900,
  },
  colors: {
    ...colorOptions,
    options: colorOptions,

    vendors: {
      bing: '#ffb900',
      facebook: '#3B5998',
      twitter: '#00A0D1',
      google: '#4285F4',
      pinterest: '#910101',
      linkedin: '#1884bb',
      stumbleupon: '#EB4924',
      yahoo: '#4D1AC2',
    },

    golf: [
      '#0f83ab', // (blue)
      '#60BD68', // (green)
      '#DECF3F', // (yellow)
      '#FAA43A', // (orange)
      '#fc6868', // (red)
      '#4E4E4E', // (black)
      '#929292', // (gray)
    ],

    data5: [
      '#0f83ab', // (blue)
      '#60BD68', // (green)
      '#DECF3F', // (yellow)
      '#FAA43A', // (orange)
      '#fc6868', // (red)
    ],

    data10: [
      '#0f6aab',
      '#fc6868',
      '#60BD68',
      '#DECF3F',
      '#FAA43A',
      '#c63b89',
      '#1aaabe',
      '#734fe9',
      '#1828bd',
      '#cd82ad',
    ],
  },
}

export const ThemeContext = React.createContext()
