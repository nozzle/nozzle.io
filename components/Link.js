import React from 'react'
import { Link } from '../routes'

export default ({ to, children, ...rest }) =>
  (<Link to={to}>
    <a {...rest}>
      {children}
    </a>
  </Link>)
