import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { css } from 'glamor'
import { renderStatic } from 'glamor-server'

css.global('html, body, body > div:first-child, #__next, [data-reactroot]', {
  height: '100%',
  width: '100%',
  overflow: 'hidden',
})
css.global('a', {
  color: 'inherit',
  textDecoration: 'none',
})

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
          {/* <script>
            {`dataLayer = [{
              'pageName': '{{ .Title }}'
            }]`}
          </script> */}
          <script src='//www.googletagmanager.com/gtm.js?id=GTM-PPH2PX' />
          <link
            href='https://fonts.googleapis.com/css?family=Overpass:200,300,400,400i,600,700,800'
            rel='stylesheet'
          />
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
