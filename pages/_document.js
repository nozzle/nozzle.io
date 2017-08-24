import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
//
import Theme from './utils/Theme'

injectGlobal`{
  html, body, body > div:first-child, #__next, [data-reactroot] {
    min-height: 100%,
    width: 100%,
  }
  html, body {
    background: ${Theme.colors.primaryDarker};
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 16px;
    font-family: "Overpass", sans-serif;
    font-weight: ${Theme.weights.regular};
    color: #3d556b;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  #nprogress .bar {
    background: white !important;
  }
  [data-name="mojs-shape"] {
    position: fixed !important;
    z-index: 99999999;
    pointer-events: none;
  }
}
`

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Kckrs</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <script src='//www.googletagmanager.com/gtm.js?id=GTM-PPH2PX' />
          <link
            href='//fonts.googleapis.com/css?family=Overpass:200,300,400,400i,600,700,800'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700'
            rel='stylesheet'
          />
          <link
            href='//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            rel='stylesheet'
          />
          <link href='/static/reset.css' rel='stylesheet' />
          <link href='/static/nprogress.css' rel='stylesheet' />
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    )
  }
}
