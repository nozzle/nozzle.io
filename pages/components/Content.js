import React, { Component } from 'react'
import { rehydrate } from 'glamor'
import glamorous from 'glamorous'
import Nprogress from 'nprogress'
import Router from 'next/router'
//
import 'glamor-reset'
import Navbar from './Navbar'
import Footer from './Footer'
import Theme from '../utils/Theme'
import ScrollTo from '../utils/ScrollTo'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const PageStyles = glamorous.div({
  fontFamily: '"Overpass", sans-serif',
  fontWeight: Theme.weights.regular,
  minHeight: '100%',
})

const ContentStyled = glamorous.div({
  paddingTop: 55,
  color: Theme.colors.text,
  background: 'white',
  minHeight: '100vh',
})

export default class Page extends Component {
  componentDidMount () {
    Router.onRouteChangeStart = () => Nprogress.start()
    Router.onRouteChangeComplete = () => Nprogress.done()
    Router.onRouteChangeError = () => Nprogress.done()

    this.interval =
      this.interval ||
      window.setInterval(() => {
        const els = Array.from(document.querySelectorAll('[id]'))
        els.forEach(el => {
          el.scrollIntoView = () => ScrollTo(el)
        })
      }, 300)
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  render () {
    const { children } = this.props
    return (
      <PageStyles>
        <Navbar />
        <ContentStyled>
          {children}
        </ContentStyled>
        <Footer />
      </PageStyles>
    )
  }
}
