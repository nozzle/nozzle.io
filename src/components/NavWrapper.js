import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { onLoading } from 'react-static'
import NProgress from 'nprogress'
//
import Theme from 'utils/Theme'
import Navbar from './Navbar'
import Footer from './Footer'
import ExitIntent from './ExitIntent'

const PageStyles = styled.div`min-height: 100%;`

const ContentStyled = styled.div`
  padding-top: 52px;
  color: ${Theme.colors.text};
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export default withRouter(
  class NavWrapper extends Component {
    componentDidMount () {
      onLoading(loading => {
        if (loading) {
          NProgress.start()
        } else {
          NProgress.done()
        }
      })
    }
    render () {
      const { children } = this.props
      return (
        <PageStyles>
          <Navbar />
          <ContentStyled>{children}</ContentStyled>
          <Footer />
          <ExitIntent />
        </PageStyles>
      )
    }
  }
)
