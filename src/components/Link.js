import React from 'react'
import { Prefetch } from 'react-static'
import { HashLink as Link } from 'react-router-hash-link'

export default props =>
  (<Prefetch path={props.to}>
    <Link {...props} />
  </Prefetch>)
