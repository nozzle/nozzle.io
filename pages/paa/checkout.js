import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Container } from 'components/Layout'

import { H2 } from 'components/Html'
import CheckoutForm from 'components/CheckoutForm'
import Icon from 'components/Icon'

import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

//

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionHeader = styled(Section)`
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding-top: 10%;
    padding-bottom: 5%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .inner {
    display: block;
    text-align: center;
  }
`

//this is only the test key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
export const getServerSideProps = async ctx => {
  //this is only the test key
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

  let paymentIntent = await stripe.paymentIntents.create({
    amount: 10000,
    currency: 'usd',
  })

  return {
    props: {
      paymentIntent,
    },
  }
}

export default function Checkout({ paymentIntent }) {
  return (
    <>
      <SectionHeader>
        <H2 full>Let's get you a PAA Dashboard!</H2>
        <Link href="/paa">
          <a className="back">
            <Icon i="arrow-left" /> Back
          </a>
        </Link>
      </SectionHeader>
      <Container>
        <Elements stripe={stripePromise}>
          <CheckoutForm paymentIntent={paymentIntent} />
        </Elements>
      </Container>
    </>
  )
}
