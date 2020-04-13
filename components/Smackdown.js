import React from 'react'
import styled from 'styled-components'
import Smackdown from 'react-smackdown'
import javascript from 'react-syntax-highlighter/dist/languages/hljs/javascript'
import bash from 'react-syntax-highlighter/dist/languages/hljs/bash'
import atomOneDark from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark'
//

import Link from 'next/link'
import { H1, H2, H3, H4, H5, H6 } from './Html'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript },
    { name: 'html', syntax: javascript },
    { name: 'bash', syntax: bash },
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: 0.5 },
  theme: atomOneDark,
}

const NoRender = () => <br />

const standardOverrides = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}

const microOverrides = {
  ...standardOverrides,
  h1: NoRender,
  h2: NoRender,
  h3: NoRender,
  h4: NoRender,
  h5: NoRender,
  h6: NoRender,
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
  font-size: 1.2em;
  line-height: 1.5em;
  font-family: 'Lato', sans-serif;
  font-weight: 300;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bolder;
    margin-top: 2em;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
  }

  iframe {
    width: 100%;
    resize: vertical;
    border: 0 !important;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 2em auto 4em;
    box-shadow: 0 0.5em 1em -0.3em rgba(0, 0, 0, 0.2);
    border-radius: 0.25em;
  }

  p code {
    display: inline-block;
    font-family: Monaco, Courier, monospace;
    font-size: 0.8em;
    line-height: 0.7em;
    padding: 0.4em 0.5em 0.3em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2em;
    background: rgba(0, 0, 0, 0.03);
    background: #212529;
    color: rgb(202, 210, 224);
  }

  ul {
    padding-left: 2em;
    list-style-type: disc;
    margin-bottom: 2em;
  }

  ol {
    padding-left: 2em;
    list-style-type: decimal;
    margin-bottom: 2em;
  }

  strong {
    font-weight: bold;
  }

  blockquote {
    font-size: 1.1em;
    line-height: 1.5em;
    padding: 1em;
    margin: 0 0 1em;
    font-style: italic;
    font-weight: 400;
    opacity: 0.8;
    border-left: solid 0.3em rgba(0, 0, 0, 0.1);

    > *:last-child {
      margin-bottom: 0;
    }
  }

  pre {
    font-family: Monaco, Courier, monospace;
    font-size: 0.8em;
    line-height: 1.1em;
    background: #212529 !important;
    margin: 0 auto 1em;
    border-radius: 0.2em;
    overflow: hidden;
  }

  .react-syntax-highlighter-line-number {
    pointer-events: none;
    user-select: none;
  }
`
