import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from 'components/Icon'
import { loadStripe } from '@stripe/stripe-js'
//

import { H2, P } from 'components/Html'

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

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)
export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.NODE_ENV === 'development' ? 'http://' : 'https://'}${
      ctx.req.headers.host
    }/api/bulkCheckout`
  )

  const json = await res.json()
  return {
    props: {
      session: json.id,
    },
  }
}
export default function BulkCheckoutForm({ session }) {
  const [error, setError] = React.useState('')

  const handleClick = async () => {
    const stripe = await stripePromise

    const { error } = await stripe.redirectToCheckout({
      sessionId: session,
    })
    if (error) setError(error.message)
  }
  return (
    <SectionContactUs id="contact">
      <H2 full>Let's get you your 10 PAA Expansion Deliverables!</H2>
      <P>
        After you fill out the form, we'll be in touch shortly to collect your
        keywords for your 10 deliverables.
      </P>
      <Link href="/paa">
        <a className="back">
          <Icon i="arrow-left" /> Back
        </a>
      </Link>

      <HubspotForm
        id="6b446152-15d2-4c19-a6c8-fc7c66dcc413"
        onFormSubmitted={handleClick}
      />
    </SectionContactUs>
  )
}
