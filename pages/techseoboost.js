import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//
import { angle } from 'utils/Styles'

import { H2 } from 'components/Html'

import HubspotForm from 'components/HubspotForm'

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionContactUs = styled(Section)`
  ${angle('right')};
  ${tw`z-0`}
  .inner {
    ${tw`flex flex-wrap items-center mx-auto min-h-screen max-w-default p-1/10`}
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

export default function TechSeoBoost() {
  return (
    <SectionContactUs id="contact">
      <H2 full>Let's start your free trial!</H2>
      <HubspotForm id="55cbcbd8-a0ab-4ff8-ad20-c33669bdab2c" />
    </SectionContactUs>
  )
}
