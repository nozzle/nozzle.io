import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Smackdown from 'react-smackdown'
import javascript from 'react-syntax-highlighter/dist/languages/hljs/javascript'
import bash from 'react-syntax-highlighter/dist/languages/hljs/bash'
import atomOneDark from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark'
//

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
  ${tw`text-lg font-light `}
  font-family: 'Lato', sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-medium  mt-8`}
  }

  p {
    ${tw`mb-4`}
  }

  a {
    ${tw`font-normal text-primary`}
  }

  iframe {
    ${tw`w-full resize-y border-0!`}
    transform: translate3d(0, 0, 0);
  }

  img {
    ${tw`block max-w-full shadow-xl rounded`}
    margin: 2em auto 4em;
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
    ${tw`pl-8 list-disc mb-8 `}
  }

  ol {
    ${tw`pl-8 list-decimal mb-8`}
  }

  strong {
    ${tw`font-bold`}
  }

  blockquote {
    ${tw`p-4 italic font-normal opacity-80 `}
    font-size: 1.1em;
    line-height: 1.5em;
    margin: 0 0 1em;
    border-left: solid 0.3em rgba(0, 0, 0, 0.1);

    > *:last-child {
      ${tw`mb-0`}
    }
  }

  pre {
    ${tw`rounded-sm overflow-hidden`}
    font-family: Monaco, Courier, monospace;
    font-size: 0.8em;
    line-height: 1.1em;
    background: #212529 !important;
    margin: 0 auto 1em;
  }

  .react-syntax-highlighter-line-number {
    ${tw`pointer-events-none select-none`}
  }
`
