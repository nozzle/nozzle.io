import React from 'react'
import styled, { css } from 'styled-components'
//
import Easing from '../utils/Easing'
import Theme from '../utils/Theme'

let mo
if (typeof window !== 'undefined') {
  mo = require('mo-js')
}

const margin = css`margin: 0 0 1rem;`
const inline = css`display: inline;`

export const button = css`
  display: inline-block;
  margin-bottom: 5px;
  border: 0;
  outline: 0;
  border-radius: 2px;
  transition: all .2s ${Easing.css.easeOutBack};
  cursor: pointer;
  text-decoration: none;
  background: ${Theme.colors.primary};
  color: white;
  font-size: 1rem;
  &:hover {
    transform: scale(1.1) translateY(5%);
    box-shadow: 0 10px 20px 0 rgba(0,0,0, .2),
  }
  &:active {
    transition: all .05s ease-out;
    transform: scale(0.9);
    box-shadow: none;
  }
`
export const buttonSize = ({ size = '' }) =>
  size === 'lg'
    ? css`
      font-size: 1.2rem;
      padding: 1rem 1.4rem;
    `
    : size === 'sm'
      ? css`
        font-size: .8rem;
        padding: .6rem 1rem;
      `
      : css`
        font-size: 1rem;
        padding: .8rem 1.2rem;
      `
const full = ({ full }) =>
  full &&
  css`
  width: 100%;
`
const backgroundColor = ({ color }) => css`
  background: ${Theme.colors[color] || color};
  color: ${color === 'white' && Theme.colors.text};
`
export const color = ({ color }) => css`
  color: ${Theme.colors[color] || color};
`
const weight = ({ weight }) => css`
  font-weight: ${Theme.weights[weight] || weight};
`

// Components

export const H1 = styled.h1`
  ${margin} ${full} ${color} ${weight} font-size: ${Theme.sizes.h1}rem;
  line-height: ${Theme.sizes.h1 * 1.2}rem;
`
export const H2 = styled.h2`
  ${margin} ${full} ${color} ${weight} font-size: ${Theme.sizes.h2}rem;
  line-height: ${Theme.sizes.h2 * 1.2}rem;
`
export const H3 = styled.h3`
  ${margin} ${full} ${color} ${weight} font-size: ${Theme.sizes.h3}rem;
  line-height: ${Theme.sizes.h3 * 1.2}rem;
`
export const H4 = styled.h4`
  ${margin} ${full} ${color} ${weight} font-size: ${Theme.sizes.h4}rem;
  line-height: ${Theme.sizes.h4 * 1.2}rem;
`
export const H5 = styled.h5`
  ${margin} ${full} ${color} ${weight} font-size: ${Theme.sizes.h5}rem;
  line-height: ${Theme.sizes.h5 * 1.2}rem;
`
export const H6 = styled.h6`
  ${margin} ${full} ${color} ${weight} font-size: ${Theme.sizes.h6}rem;
  line-height: ${Theme.sizes.h6 * 1.2}rem;
`
export const P = styled.p`
  ${margin} ${color} ${weight} font-size: 1rem;
  line-height: 1.2rem;
`
export const Strong = styled.strong`${inline} ${color} ${weight};`
export const Span = styled.span`${inline} ${color} ${weight};`
export const Div = styled.div`${margin} ${full} ${color} ${weight};`
export const Img = styled.img`max-width: 100%;`
export const Ul = styled.ul`
  ${margin} padding-left: 20;
  list-style-type: disc;
  text-align: left;
`
export const Li = styled.li`${color} margin-bottom: 5;`

// Button
const ButtonStyled = styled.button`${button} ${backgroundColor} ${buttonSize};`
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
export const Input = styled.input`
  border-radius: 3;
  border: none;
  padding: 0.3em 0.5em;
`
const TableCmp = ({ children, ...rest }) =>
  (<div {...rest}>
    <table>
      {children}
    </table>
  </div>)
export const Table = styled(TableCmp)`
  max-width: 100%;
  overflow-x: scroll;
  border: 1px solid rgba(0,0,0, .1);

  table {
    min-width: 100%;
    border-collapse: collapse;
    overflow-x: auto;
  }

  th, td {
    text-overflow: ellipsis;
    padding: 7px 5px;
    overflow: hidden;

    &:hover {
      overflow: visible;
    }
  }

  thead {
    th, td {
      background: white;
      font-weight: ${Theme.weights.bold};
      color: ${Theme.colors.darker};
      border-right: 1px solid rgba(0,0,0, .05);
    }

    + tbody {
      tr:first-child td {
        box-shadow: inset 0 20px 20px -20px rgba(0,0,0, .2);
      }
    }
  }

  tbody {
    tr {
      border-bottom: solid 1px rgba(0,0,0, .05);
      &:last-child {
        border-bottom: 0;
      }
    }

    td {
      border-right: 1px solid rgba(0,0,0, .02);
    }
  }

  &.-striped {
    tbody tr:nth-child(even) {
      background: rgba(0,0,0, .03);
    }
  }

  &.-highlight {
    tbody tr:hover {
      background: rgba(0,0,0, .05);
    }
  }
`

export const Pre = styled.pre`
  font-family: Monaco, Courier, monospace;
  font-size: .8rem;
  line-height: 1.1rem;
  background: #212529 !important;
  margin: 0 auto 1rem;
  border-radius: .2rem;
  overflow: hidden;
`

export const Em = styled.em`font-style: italic;`
