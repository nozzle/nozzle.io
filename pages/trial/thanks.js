import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Head from 'components/Head'
//
import { angle } from 'utils/Styles'

import { H2, P } from 'components/Html'

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionContactUs = styled(Section)`
  ${angle('right')};
  ${tw`z-0`}
  .inner {
    ${tw`flex flex-wrap items-center mx-auto min-h-screen p-1/10 max-w-default`}
  }
  img {
    ${tw`w-full`}
  }

  &:after {
    ${tw`hidden`}
  }

  .inner {
    ${tw`block text-center`}
  }
`

export default function Thanks() {
  return (
    <>
      <Head>
        <script>fbq('track', 'Lead');</script>
      </Head>
      <SectionContactUs id="contact">
        <H2 full>Let's start your free trial!</H2>
        <P>Thanks for submitting the form. We'll be in touch shortly.</P>
      </SectionContactUs>
    </>
  )
}
