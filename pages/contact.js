import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//
import { angle } from 'utils/Styles'

import { H2, P } from 'components/Html'
import HubspotForm from 'components/HubspotForm'
import Head from '../components/Head'

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

export default function Contact() {
  return (
    <>
      <Head
        title="Contact Nozzle: SEO Rank Tracking & Monitoring Software - Search Engine Keyword Ranking Software"
        description="We created Nozzle, the rank tracker we couldn't live without because it didn't exist. Now that it does, come give it a test drive. Contact us to learn more."
      />
      <SectionContactUs id="contact">
        <H2 full>Contact Us</H2>
        <HubspotForm
          id="0a2ef4a8-3389-467e-88f7-fb910117cec1"
          onFormSubmitted={() => {
            if (typeof window !== 'undefined') {
              window.dataLayer.push({ event: 'contactUs' })
            }
          }}
        />
      </SectionContactUs>
    </>
  )
}
