import React, { Component } from 'react'
import styled from 'styled-components'
import Nprogress from 'nprogress'
import Router from 'next/router'
//
import Navbar from './Navbar'
import Footer from './Footer'
import Theme from '../utils/Theme'
import ScrollTo from '../utils/ScrollTo'

const PageStyles = styled.div`min-height: 100%;`

const ContentStyled = styled.div`
  padding-top: 55px;
  color: ${Theme.colors.text};
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

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
      }, 500)
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
