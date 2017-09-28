/* eslint-disable react/no-danger */

import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class CustomHtml extends Component {
  render () {
    const { Html, Head, Body, children } = this.props

    const sheet = new ServerStyleSheet()
    const newChildren = sheet.collectStyles(children)
    const styleTags = sheet.getStyleElement()

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PPH2PX');
              `,
            }}
          />
          <link
            href="//fonts.googleapis.com/css?family=Overpass:200,300,400,400i,600,700,800"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700"
            rel="stylesheet"
          />
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link href="/reset.css" rel="stylesheet" />
          <link href="/nprogress.css" rel="stylesheet" />
          {styleTags}
        </Head>
        <Body>
          <noscript>
            <iframe
              title="google-tag-manager"
              src="https://www.googletagmanager.com/ns.html?id=GTM-PPH2PX"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {newChildren}
        </Body>
      </Html>
    )
  }
}
