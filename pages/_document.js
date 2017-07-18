import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { css } from 'glamor'
import { renderStatic } from 'glamor-server'
//
import Theme from './utils/Theme'

const globalStyles = {
  'html, body, body > div:first-child, #__next, [data-reactroot]': {
    minHeight: '100%',
    width: '100%',
  },
  'html, body': {
    background: Theme.colors.primaryDarker,
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '#nprogress .bar': {
    background: `white !important`,
  },
  '[data-name="mojs-shape"]': {
    position: 'fixed !important',
    zIndex: 99999999,
    pointerEvents: 'none',
  },
}

Object.keys(globalStyles).forEach(selector =>
  css.global(selector, globalStyles[selector])
)

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }
  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }
  render () {
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
            href='//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            rel='stylesheet'
          />
          <link href='/static/reset.css' rel='stylesheet' />
          <link href='/static/nprogress.css' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
