import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from 'components/Icon'
import { loadStripe } from '@stripe/stripe-js'
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

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)
export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.NODE_ENV === 'development' ? 'http://' : 'https://'}${
      ctx.req.headers.host
    }/api/checkout`
  )

  const json = await res.json()
  return {
    props: {
      session: json.id,
    },
  }
}
export default function CheckoutForm({ session }) {
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
      <H2 full>Let's get you your PAA Expansion Deliverable!</H2>
      <Link href="/paa">
        <a className="back">
          <Icon i="arrow-left" /> Back
        </a>
      </Link>
      <HubspotForm
        id="7fbecb66-9cbd-47f3-b2af-e21297d7e48e"
        onFormSubmitted={handleClick}
      />
    </SectionContactUs>
  )
}
