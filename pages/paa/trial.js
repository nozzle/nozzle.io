import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Icon from 'components/Icon'
import tw from 'twin.macro'
//
import { angle } from 'utils/Styles'

import { H2 } from 'components/Html'

import HubspotForm from 'components/HubspotForm'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionContactUs = styled(Section)`
  ${angle('right')};
  ${tw`z-0`}

  .inner {
    ${tw`mx-auto flex flex-wrap items-center min-h-screen max-w-default p-1/10`}
  }

  ${belowMobile} {
    .left,
    .right {
      ${tw`mx-0 flex-100`}
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
      <H2 full>Let's get you a Free PAA Expansion Deliverable!</H2>
      <Link href="/paa">
        <a className="back">
          <Icon i="arrow-left" /> Back
        </a>
      </Link>
      <HubspotForm
        id="44c49959-c2db-4936-9c35-c5899e31b6b2"
        onFormSubmitted={() => {
          if (typeof window !== 'undefined') {
            window.dataLayer.push({ event: 'trialSubmit' })
            router.push('../paa/success?free=true')
          }
        }}
      />
    </SectionContactUs>
  )
}
