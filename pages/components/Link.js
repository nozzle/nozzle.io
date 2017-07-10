import React from 'react'
import Link from 'next/link'

export default ({ to, children, ...rest }) =>
  (<Link href={to}>
    <a {...rest}>
      {children}
    </a>
  </Link>)
