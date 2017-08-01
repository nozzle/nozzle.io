import React from 'react'
import glamorous from 'glamorous'
//
import Easing from '../utils/Easing'
import Theme from '../utils/Theme'

let mo
if (typeof window !== 'undefined') {
  mo = require('mo-js')
}

const margin = { margin: `0 auto 1rem` }
const inline = { display: 'inline' }
export const button = {
  display: 'inline-block',
  marginBottom: '5px',
  border: '0',
  outline: '0',
  borderRadius: '2px',
  transition: `all .2s ${Easing.css.easeOutBack}`,
  cursor: 'pointer',
  textDecoration: 'none',
  background: Theme.colors.primary,
  color: 'white',
  ':hover': {
    transform: `scale(1.1) translateY(5%)`,
    boxShadow: `0 10px 20px 0 rgba(0,0,0, .2)`,
  },
  ':active': {
    transition: `all .05s ease-out`,
    transform: `scale(0.9)`,
    boxShadow: `none`,
  },
}
export const buttonSize = ({ size = '' }) =>
  size === 'lg'
    ? {
      fontSize: '1.2rem',
      padding: '1rem 1.4rem',
    }
    : size === 'sm'
      ? {
        fontSize: '.8rem',
        padding: '.6rem 1rem',
      }
      : {
        fontSize: '1rem',
        padding: '.8rem 1.2rem',
      }
const full = ({ full }) => ({
  width: full && '100%',
})
const backgroundColor = ({ color }) => ({
  background: Theme.colors[color] || color,
  color: color === 'white' && Theme.colors.text,
})
export const color = ({ color }) => ({
  color: Theme.colors[color] || color,
})
const weight = ({ weight }) => ({
  fontWeight: Theme.weights[weight] || weight,
})

const text = [color, weight]

// Components

export const H1 = glamorous.h1(margin, full, text, {
  fontSize: `${Theme.sizes.h1}rem`,
  lineHeight: `${Theme.sizes.h1 * 1.2}rem`,
})
export const H2 = glamorous.h2(margin, full, text, {
  fontSize: `${Theme.sizes.h2}rem`,
  lineHeight: `${Theme.sizes.h2 * 1.2}rem`,
})
export const H3 = glamorous.h3(margin, full, text, {
  fontSize: `${Theme.sizes.h3}rem`,
  lineHeight: `${Theme.sizes.h3 * 1.2}rem`,
})
export const H4 = glamorous.h4(margin, full, text, {
  fontSize: `${Theme.sizes.h4}rem`,
  lineHeight: `${Theme.sizes.h4 * 1.2}rem`,
})
export const H5 = glamorous.h5(margin, full, text, {
  fontSize: `${Theme.sizes.h5}rem`,
  lineHeight: `${Theme.sizes.h5 * 1.2}rem`,
})
export const H6 = glamorous.h6(margin, full, text, {
  fontSize: `${Theme.sizes.h6}rem`,
  lineHeight: `${Theme.sizes.h6 * 1.2}rem`,
})
export const P = glamorous.p(margin, color, weight, {
  fontSize: `1rem`,
  lineHeight: `1.2rem`,
})
export const Strong = glamorous.strong(inline, color, weight)
export const Span = glamorous.span(inline, color, weight)
export const Div = glamorous.div(margin, full, color, weight)
export const Img = glamorous.img({
  maxWidth: '100%',
})
export const Ul = glamorous.ul(margin, {
  paddingLeft: 20,
  listStyleType: 'disc',
  textAlign: 'left',
})
export const Li = glamorous.li(color, {
  marginBottom: 5,
})

// Button
const ButtonStyled = glamorous.button(button, backgroundColor, buttonSize)
export class Button extends React.Component {
  componentDidMount () {
    window.buttonBurst =
      window.buttonBurst ||
      new mo.Burst({
        left: 0,
        top: 0,
        radius: { 40: 80 },
        count: 15,

        children: {
          shape: ['circle'],
          duration: 800,
          radius: 'rand(5, 12)',
          pathScale: 'rand(.5, 1)',
          opacity: { 1: 0.5 },
          easing: 'quint.out',
          fill: [
            Theme.colors.primaryLighter,
            Theme.colors.danger,
            Theme.colors.success,
            Theme.colors.warning,
          ],
          degreeShift: 'rand(-360, 360)',
        },
      })
  }
  render () {
    const { burst, onMouseDown, ...rest } = this.props
    const handler = e => {
      window.buttonBurst
        .tune({
          x: e.clientX,
          y: e.clientY,
          degreeShift: 'rand(-360, 360)',
        })
        .generate()
        .replay()
      onMouseDown && onMouseDown(e)
    }
    return burst
      ? <ButtonStyled {...rest} onClick={handler} />
      : <ButtonStyled {...rest} />
  }
}
export const Input = glamorous.input({
  borderRadius: 3,
  border: 'none',
  padding: '0.3em 0.5em',
})

export const Table = glamorous(({ children, ...rest }) =>
  (<div {...rest}>
    <table>
      {children}
    </table>
  </div>)
)({
  maxWidth: '100%',
  overflowX: 'scroll',
  border: '1px solid rgba(0,0,0, .1)',

  '& table': {
    minWidth: '100%',
    borderCollapse: 'collapse',
    overflowX: 'auto',
  },

  '& th, & td': {
    textOverflow: 'ellipsis',
    padding: '7px 5px',
    overflow: 'hidden',

    ':hover': {
      overflow: 'visible',
    },
  },

  '& thead': {
    '& th, & td': {
      background: 'white',
      fontWeight: Theme.weights.bold,
      color: Theme.colors.darker,
      borderRight: '1px solid rgba(0,0,0, .05)',
    },

    '& + tbody': {
      '& tr:first-child td': {
        boxShadow: 'inset 0 20px 20px -20px rgba(0,0,0, .2)',
      },
    },
  },

  '& tbody': {
    '& tr': {
      borderBottom: 'solid 1px rgba(0,0,0, .05)',
      '&:last-child': {
        borderBottom: '0',
      },
    },

    '& td': {
      borderRight: '1px solid rgba(0,0,0, .02)',
    },
  },

  '&.-striped': {
    '& tbody tr:nth-child(even)': {
      background: 'rgba(0,0,0, .03)',
    },
  },

  '&.-highlight': {
    '& tbody tr:hover': {
      background: 'rgba(0,0,0, .05)',
    },
  },
})
