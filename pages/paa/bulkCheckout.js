import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'components/Icon'
import { loadStripe } from '@stripe/stripe-js'
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
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 10% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
  }

  ${belowMobile} {
    .left,
    .right {
      flex: 1 1 100%;
      margin-left: 0;
      margin-right: 0;
    }
    .left {
      margin-bottom: 2rem;
    }
  }

  ${
    '' /* background: ${props => props.theme.colors.primaryDarker};
  color: white; */
  }

  ${angle('right')};

  &:after {
    display: none;
  }

  .inner {
    display: block;
    text-align: center;
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
