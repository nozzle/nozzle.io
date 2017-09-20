import React from 'react'
import { Prefetch } from 'react-static'
import { HashNavLink } from './HashLink'

export default props => {
  if (props.to.charAt(0) !== '/') {
    return (
      <a href={props.to} {...props}>
        {props.children}
      </a>
    )
  }
  return (
    <Prefetch path={props.to}>
      <HashNavLink {...props} />
    </Prefetch>
  )
}
