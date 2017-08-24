import React from 'react'
import styled from 'styled-components'
import Smackdown from 'react-smackdown'
import { javascript } from 'react-smackdown/lib/languages'
import { atomOneDark } from 'react-smackdown/lib/themes'
//

import { H3, H4, H5, H6, P, Strong, Img, Pre } from './Html'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript },
    { name: 'html', syntax: javascript },
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: 0.5 },
  theme: atomOneDark,
}

const standardOverrides = {
  pre: {
    component: Pre,
  },
  h1: {
    component: H3,
  },
  h2: {
    component: H4,
  },
  h3: {
    component: H5,
  },
  h4: {
    component: H6,
  },
  h5: {
    component: H6,
  },
  h6: {
    component: H6,
  },
  p: {
    component: P,
  },
  img: {
    component: Img,
  },
}

const microOverrides = {
  pre: {
    component: Pre,
  },
  h1: {
    component: P,
  },
  h2: {
    component: P,
  },
  h3: {
    component: P,
  },
  h4: {
    component: P,
  },
  h5: {
    component: P,
  },
  h6: {
    component: P,
  },
  p: {
    component: P,
  },
  img: {
    component: () => null,
  },
}

const El = ({ micro, source, ...rest }) =>
  console.log(source.replace(/<iframe.+<\/iframe>/, '')) ||
  <div {...rest}>
    <Smackdown
      syntax={syntax}
      source={micro ? source.replace(/<iframe.+(<\/iframe>|>)/, '') : source}
      overrides={micro ? microOverrides : standardOverrides}
    />
  </div>

export default styled(El)`
  iframe {
    width: 100%;
    resize: vertical;
    border: 0 !important;
  }
  img {
    display: block;
    margin: 1rem auto;
  }
  p {
    font-size: 1.2rem;
    line-height: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }
  p code {
    display: inline-block;
    font-family: Monaco, Courier, monospace;
    font-size: .7rem;
    line-height: .7rem;
    padding: .4rem .5rem .3rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .2rem;
    background: rgba(0,0,0,.03);
    background: #212529;
    color: rgb(202, 210, 224);
  }
`
