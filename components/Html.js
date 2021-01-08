import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
//
import Easing from 'utils/Easing'

const margin = css`
  margin: 0 auto 1rem;
`
const inline = css`
  ${tw`inline`}
`

export const button = props => css`
  ${tw`inline-block mb-1 border-0 outline-none rounded-sm cursor-pointer no-underline text-white text-base leading-none`}
  transition: all 0.2s ${Easing.css.easeOutBack};
  background: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};

  &:hover {
    ${tw`shadow-2xl`}
  }

  &:active {
    ${tw`shadow-none`}
    transition: all 0.05s ease-out;
  }
`

export const buttonSize = ({ size = '' }) =>
  size === 'lg'
    ? css`
        ${tw`text-lg leading-none py-4 px-6`}
      `
    : size === 'sm'
    ? css`
        ${tw`text-sm leading-none py-2 px-5`}
      `
    : css`
        ${tw`text-base leading-none py-3 px-5`}
      `

const full = ({ full }) =>
  full &&
  css`
    ${tw`w-full`}
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
  ${tw`text-base leading-5`}
`

export const Strong = styled('strong')`
  ${inline};
  ${color}
  ${tw`font-bold`}
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
  ${tw`max-w-full w-auto h-auto`}
`

export const Ul = styled('ul')`
  ${margin}
  ${tw`pl-8 list-disc text-left`}
`
export const Ol = styled('ol')`
  ${margin}
  ${tw`pl-8 list-decimal text-left`}
`
export const Li = styled('li')`
  ${color}
  ${tw`mb-2`}
`

// Button
export const Button = styled('button')`
  ${button};
  ${backgroundColor};
  ${buttonSize};
`

export const Input = styled('input')`
  ${tw`rounded-sm border-none`}
  padding: 0.3em 0.5em;
`
const TableCmp = ({ children, ...rest }) => (
  <div {...rest}>
    <table>{children}</table>
  </div>
)
export const Table = styled(TableCmp)`
  ${tw`max-w-full overflow-x-scroll`}
  border: 1px solid rgba(0, 0, 0, 0.1);

  table {
    ${tw`min-w-full border-collapse overflow-x-auto`}
  }

  th,
  td {
    ${tw`overflow-ellipsis overflow-hidden py-2 px-1`}

    &:hover {
      ${tw`overflow-visible`}
    }
  }

  thead {
    th,
    td {
      ${tw`bg-white text-darker `}
      font-weight: ${props => props.theme.weights.bold};
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
  ${tw`italic`}
`

export const Iframe = styled('iframe')`
  ${tw`w-full border-0 resize-y `}
  min-height: 50px;
  height: 500px;
`
