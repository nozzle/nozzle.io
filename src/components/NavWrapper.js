import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
//
import Theme from 'utils/Theme'
import ScrollTo from 'utils/ScrollTo'
import Navbar from './Navbar'
import Footer from './Footer'

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

const checkScroll = (prev, next) => {
  if (!prev || next.location.pathname !== prev.location.pathname) {
    setTimeout(() => window.scrollTo(0, 0), 1)
  }
}

class Page extends Component {
  componentDidMount () {
    this.interval =
      this.interval ||
      window.setInterval(() => {
        const els = Array.from(document.querySelectorAll('[id]'))
        els.forEach(el => {
          el.scrollIntoView = () => ScrollTo(el)
        })
      }, 500)
    checkScroll()
  }
  componentDidUpdate (prevProps) {
    checkScroll(prevProps, this.props)
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

export default withRouter(Page)
