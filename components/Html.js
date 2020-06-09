import React from 'react'
import styled, { css } from 'styled-components'
//
import Easing from 'utils/Easing'

const margin = css`
  margin: 0 auto 1rem;
`
const inline = css`
  display: inline;
`

export const button = props => css`
  display: inline-block;
  margin-bottom: 5px;
  border: 0;
  outline: 0;
  border-radius: 2px;
  transition: all 0.2s ${Easing.css.easeOutBack};
  cursor: pointer;
  text-decoration: none;
  background: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  color: white;
  font-size: 1rem;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transition: all 0.05s ease-out;
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
        font-size: 0.8rem;
        padding: 0.6rem 1rem;
      `
    : css`
        font-size: 1rem;
        padding: 0.8rem 1.2rem;
      `

const full = ({ full }) =>
  full &&
  css`
    width: 100%;
  `

const backgroundColor = ({ color }) => css`
  background: ${props => props.theme.colors[color] || color};
  color: ${props => color === 'white' && props.theme.colors.text};
`

export const color = ({ color }) =>
  css`
    color: ${props => props.theme.colors[color] || color};
  `

const weight = ({ weight }) =>
  css`
    font-weight: ${props => props.theme.weights[weight] || weight};
  `

// Elements

export const H1 = styled('h1')`
  ${margin};
  ${full};
  ${color};
  ${weight};
  font-size: ${props => props.theme.sizes.h1}rem;
  line-height: ${props => props.theme.sizes.h1 * 1.2}rem;
`

export const H2 = styled('h2')`
  ${margin};
  ${full};
  ${color};
  ${weight};
  font-size: ${props => props.theme.sizes.h2}rem;
  line-height: ${props => props.theme.sizes.h2 * 1.2}rem;
`

export const H3 = styled('h3')`
  ${margin};
  ${full};
  ${color};
  ${weight};
  font-size: ${props => props.theme.sizes.h3}rem;
  line-height: ${props => props.theme.sizes.h3 * 1.2}rem;
`

export const H4 = styled('h4')`
  ${margin};
  ${full};
  ${color};
  ${weight};
  font-size: ${props => props.theme.sizes.h4}rem;
  line-height: ${props => props.theme.sizes.h4 * 1.2}rem;
`

export const H5 = styled('h5')`
  ${margin};
  ${full};
  ${color};
  ${weight};
  font-size: ${props => props.theme.sizes.h5}rem;
  line-height: ${props => props.theme.sizes.h5 * 1.2}rem;
`

export const H6 = styled('h6')`
  ${margin};
  ${full};
  ${color};
  ${weight};
  font-size: ${props => props.theme.sizes.h6}rem;
  line-height: ${props => props.theme.sizes.h6 * 1.2}rem;
`

export const P = styled('p')`
  ${margin};
  ${color};
  ${weight};
  font-size: 1rem;
  line-height: 1.2rem;
`

export const Strong = styled('strong')`
  ${inline};
  ${color} font-weight: bold;
`
export const Span = styled('span')`
  ${inline};
  ${color};
  ${weight};
`
export const Div = styled('div')`
  ${margin};
  ${full};
  ${color};
  ${weight};
`
export const Img = styled(({ children, ...rest }) => (
  <img alt="" {...rest} width="500" height="400" />
))`
  max-width: 100%;
  width: auto;
  height: auto;
`

export const Ul = styled('ul')`
  ${margin} padding-left: 2rem;
  list-style-type: disc;
  text-align: left;
`
export const Ol = styled('ol')`
  ${margin} padding-left: 2rem;
  list-style-type: decimal;
  text-align: left;
`
export const Li = styled('li')`
  ${color} margin-bottom: .5rem;
`

// Button
export const Button = styled('button')`
  ${button};
  ${backgroundColor};
  ${buttonSize};
`

export const Input = styled('input')`
  border-radius: 3;
  border: none;
  padding: 0.3em 0.5em;
`
const TableCmp = ({ children, ...rest }) => (
  <div {...rest}>
    <table>{children}</table>
  </div>
)
export const Table = styled(TableCmp)`
  max-width: 100%;
  overflow-x: scroll;
  border: 1px solid rgba(0, 0, 0, 0.1);

  table {
    min-width: 100%;
    border-collapse: collapse;
    overflow-x: auto;
  }

  th,
  td {
    text-overflow: ellipsis;
    padding: 7px 5px;
    overflow: hidden;

    &:hover {
      overflow: visible;
    }
  }

  thead {
    th,
    td {
      background: white;
      font-weight: ${props => props.theme.weights.bold};
      color: ${props => props.theme.colors.darker};
      border-right: 1px solid rgba(0, 0, 0, 0.05);
    }

    + tbody {
      tr:first-child td {
        box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.2);
      }
    }
  }

  tbody {
    tr {
      border-bottom: solid 1px rgba(0, 0, 0, 0.05);
      &:last-child {
        border-bottom: 0;
      }
    }

    td {
      border-right: 1px solid rgba(0, 0, 0, 0.02);
    }
  }

  &.-striped {
    tbody tr:nth-child(even) {
      background: rgba(0, 0, 0, 0.03);
    }
  }

  &.-highlight {
    tbody tr:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`

export const Pre = styled(({ children, ...rest }) => (
  <pre itemType="http://schema.org/Code" {...rest}>
    {children}
  </pre>
))`
  font-family: Monaco, Courier, monospace;
  font-size: 0.8rem;
  line-height: 1.1rem;
  background: #212529 !important;
  margin: 0 auto 1rem;
  border-radius: 0.2rem;
  overflow: hidden;
`

export const Em = styled('em')`
  font-style: italic;
`

export const Iframe = styled('iframe')`
  width: 100%;
  border: 0;
  resize: vertical;
  min-height: 50px;
  height: 500px;
`
