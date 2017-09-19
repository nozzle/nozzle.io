import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class Html extends Component {
  render () {
    const { children, data = {}, scripts } = this.props
    const {
      htmlAttributes,
      bodyAttributes,
      base,
      link,
      meta,
      noscript,
      script,
      style,
      title,
      // styleTags,
    } = data

    const sheet = new ServerStyleSheet()
    const newChildren = sheet.collectStyles(children)
    const styleTags = sheet.getStyleElement()

    return (
      <html lang="en-US" {...htmlAttributes}>
        <head>
          <title>Nozzle</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {base}
          {link}
          {meta}
          {noscript}
          {script}
          {style}
          {title}
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
          {styleTags}
          <script src="//www.googletagmanager.com/gtm.js?id=GTM-PPH2PX" />
        </head>
        <body {...bodyAttributes}>
          {newChildren}
          {scripts}
        </body>
      </html>
    )
  }
}
