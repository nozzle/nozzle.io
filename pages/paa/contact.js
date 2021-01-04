import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from 'components/Icon'
//

import { H2 } from 'components/Html'

import HubspotForm from 'components/HubspotForm'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionContactUs = styled(Section)`
  ${tw`z-0`}
  .inner {
    ${tw`mx-auto flex flex-wrap items-center min-h-screen`}
    max-width: ${props => props.theme.maxWidth}px;
    padding: 10% 10%;
  }

  ${belowMobile} {
    .left,
    .right {
      ${tw`mx-0`}
      flex: 1 1 100%;
    }
    .left {
      ${tw`mb-8`}
    }
  }

  &:after {
    ${tw`hidden`}
  }

  .inner {
    ${tw`block text-center`}
  }
`

export default function Trial() {
  const router = useRouter()

  return (
    <SectionContactUs id="contact">
      <H2 full>Let's get you a PAA Expansion Deliverable!</H2>
      <Link href="/paa">
        <a className="back">
          <Icon i="arrow-left" /> Back
        </a>
      </Link>
      <HubspotForm
        id="6b446152-15d2-4c19-a6c8-fc7c66dcc413"
        onFormSubmitted={() => {
          if (typeof window !== 'undefined') {
            window.dataLayer.push({ event: 'paaContactUs' })
            router.push('../paa/success?contact=true')
          }
        }}
      />
    </SectionContactUs>
  )
}
