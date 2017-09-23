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
          <title>Nozzle</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <script src="//www.googletagmanager.com/gtm.js?id=GTM-PPH2PX" />
        </Head>
        <Body>{newChildren}</Body>
      </Html>
    )
  }
}
