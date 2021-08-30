import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//
import { angle } from 'utils/Styles'

import { H2, Button } from 'components/Html'

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

export default function Trial() {
  return (
    <SectionContactUs id="contact">
      <H2 full>Let's start your free trial!</H2>

      <a href="https://app.nozzle.io/sign-up">
        <Button color="primaryDarker" burst>
          Start Trial
        </Button>
      </a>
    </SectionContactUs>
  )
}
