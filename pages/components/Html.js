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
export const button = {
  display: 'inline-block',
  padding: '15px 20px',
  marginBottom: '5px',
  border: '0',
  fontSize: '15px',
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
    transition: `all .08s ${Easing.css.easeOutBack}`,
    transform: `scale(0.9)`,
    boxShadow: `none`,
  },
}
const full = ({ full }) => ({
  width: full && '100%',
})
const backgroundColor = ({ color }) => ({
  background: Theme.colors[color] || color,
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
  fontSize: Theme.sizes.h1,
})
export const H2 = glamorous.h2(margin, full, text, {
  fontSize: Theme.sizes.h2,
})
export const H3 = glamorous.h3(margin, full, text, {
  fontSize: Theme.sizes.h3,
})
export const H4 = glamorous.h4(margin, full, text, {
  fontSize: Theme.sizes.h4,
})
export const H5 = glamorous.h5(margin, full, text, {
  fontSize: Theme.sizes.h5,
})
export const H6 = glamorous.h6(margin, full, text, {
  fontSize: Theme.sizes.h6,
})
export const P = glamorous.p(margin, color, weight)
export const Strong = glamorous.strong(color, weight)
export const Span = glamorous.span(color, weight)
export const Div = glamorous.div(margin, full, color, weight)
export const Img = glamorous.img({
  maxWidth: '100%',
})

// Button
const ButtonStyled = glamorous.button(button, backgroundColor)
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
          radius: 10,
          opacity: { 1: 0.3 },
          easing: 'quint.out',
          fill: [
            Theme.colors.primaryDark,
            Theme.colors.primary,
            // Theme.colors.success,
            'rgb(233, 233, 233)',
            'rgb(171, 171, 171)',
          ],
          degreeShift: 'rand(-360, 360)',
        },
      })
  }
  render () {
    const { burst, onMouseDown, ...rest } = this.props
    const handler = e => {
      console.log(e.pageX, e.pageY)
      window.buttonBurst
        .tune({
          x: e.pageX,
          y: e.pageY,
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
