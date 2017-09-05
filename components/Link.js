import React from 'react'
import { Link } from '../routes'

import Info from '../utils/Info'

export default ({ to, children, ...rest }) => {
  const href = to.substring(0, 1) === '/' ? `${Info.siteRoot}${to}` : to

  return (
    <Link to={to}>
      <a href={`${href}`} {...rest}>
        {children}
      </a>
    </Link>
  )
}
