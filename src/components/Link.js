import React from 'react'
import { Prefetch } from 'react-static'
import { HashNavLink } from './HashLink'

export default ({ to, ...rest }) => {
  if (to.charAt(0) !== '/') {
    return (
      <a href={to} {...rest}>
        {rest.children}
      </a>
    )
  }
  return (
    <Prefetch path={to}>
      <HashNavLink to={to} {...rest} />
    </Prefetch>
  )
}
