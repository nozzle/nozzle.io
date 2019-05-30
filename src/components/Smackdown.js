import React from 'react'
import styled from 'styled-components'
import Smackdown from 'react-smackdown'
import javascript from 'react-syntax-highlighter/dist/languages/hljs/javascript'
import bash from 'react-syntax-highlighter/dist/languages/hljs/bash'
import atomOneDark from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark'
//

import Theme from 'utils/Theme'

import Link from 'components/Link'
import { H3, H4, H5, H6 } from './Html'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript },
    { name: 'html', syntax: javascript },
    { name: 'bash', syntax: bash }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: 0.5 },
  theme: atomOneDark
}

const standardOverrides = {
  h1: H3,
  h2: H4,
  h3: H5,
  h4: H6,
  h5: H6,
  h6: H6
}

const microOverrides = {
  ...standardOverrides,
  h1: H6,
  h2: H6,
  h3: H6,
  h4: H6,
  h5: H6,
  h6: H6
}

const El = ({ micro, source = '', ...rest }) => (
  <div {...rest}>
    <Smackdown
      source={
        micro
          ? `${source
              .replace(/<iframe.*(<\/iframe>|>)/gm, '')
              .substring(0, 200)}...`
          : source
      }
      syntax={syntax}
      renderers={micro ? microOverrides : standardOverrides}
    />
  </div>
)

export default styled(El)`
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bolder;
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    font-weight: 400;
    color: ${Theme.colors.primary};
  }

  iframe {
    width: 100%;
    resize: vertical;
    border: 0 !important;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 2rem auto;
  }

  p code {
    display: inline-block;
    font-family: Monaco, Courier, monospace;
    font-size: 0.7rem;
    line-height: 0.7rem;
    padding: 0.4rem 0.5rem 0.3rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.03);
    background: #212529;
    color: rgb(202, 210, 224);
  }

  ul {
    padding-left: 2rem;
    list-style-type: disc;
    margin-bottom: 2rem;
  }

  strong {
    font-weight: bold;
  }

  blockquote * {
    font-size: 1.5rem;
    line-height: 2.2rem;
    padding: 2rem;
    font-style: italic;
    font-weight: 400;
    opacity: 0.8;
  }

  pre {
    font-family: Monaco, Courier, monospace;
    font-size: 0.8rem;
    line-height: 1.1rem;
    background: #212529 !important;
    margin: 0 auto 1rem;
    border-radius: 0.2rem;
    overflow: hidden;
  }

  .react-syntax-highlighter-line-number {
    pointer-events: none;
    user-select: none;
  }
`
