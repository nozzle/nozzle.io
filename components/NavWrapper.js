import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//
import Navbar from './Navbar'
import Footer from './Footer'
// import ExitIntent from './ExitIntent'

const PageStyles = styled('div')`
  ${tw`min-h-full`}
`

const ContentStyled = styled('div')`
  ${tw`flex flex-col items-stretch min-h-screen text-text`}
  background: #f9f9f9;
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
