import React from 'react'
import { Prefetch } from 'react-static'
import { HashNavLink } from './HashLink'

export default ({ href, to = href, ...rest }) => {
  if (to.charAt(0) !== '/') {
    return (
      <a href={to} target="_blank" {...rest}>
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
