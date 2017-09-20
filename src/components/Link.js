import React from 'react'
import { Prefetch } from 'react-static'
import { HashNavLink } from './HashLink'

export default props =>
  (<Prefetch path={props.to}>
    <HashNavLink {...props} />
  </Prefetch>)
