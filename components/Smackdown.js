import React from 'react'
import styled from 'styled-components'
import Smackdown from 'react-smackdown'
import { javascript } from 'react-smackdown/lib/languages'
import { atomOneDark } from 'react-smackdown/lib/themes'
//

import { H3, H4, H5, H6, P, Img, Pre } from './Html'

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
  pre: Pre,
  h1: H3,
  h2: H4,
  h3: H5,
  h4: H6,
  h5: H6,
  h6: H6,
  p: P,
  img: Img,
}

const microOverrides = {
  pre: Pre,
  h1: P,
  h2: P,
  h3: P,
  h4: P,
  h5: P,
  h6: P,
  p: P,
  img: Img,
}

const El = ({ micro, source, ...rest }) =>
  (<div {...rest}>
    <Smackdown
      syntax={syntax}
      source={
        micro
          ? source.replace(/<iframe.*(<\/iframe>|>)/gm, '').substring(0, 400) +
            '...'
          : source
      }
      components={micro ? microOverrides : standardOverrides}
    />
  </div>)

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
