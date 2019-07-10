import React from 'react'
import styled from 'styled-components'
//
import Theme from 'utils/Theme'
import Navbar from './Navbar'
import Footer from './Footer'
// import ExitIntent from './ExitIntent'

const PageStyles = styled('div')`
  min-height: 100%;
`

const ContentStyled = styled('div')`
  color: ${Theme.colors.text};
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export default function NavWrapper({ children }) {
  return (
    <PageStyles>
      <Navbar />
      <ContentStyled>{children}</ContentStyled>
      <Footer />
      {/* <ExitIntent /> */}
    </PageStyles>
  )
}
