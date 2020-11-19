import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import styled from 'styled-components'

import { Button, H4 } from 'components/Html'
import { Center } from 'components/Layout'

const Form = styled('form')`
  width: 50%;
  margin: 0 auto;
`

const Row = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 15px;
  border-bottom: 1px solid lightgray;

  :last-of-type {
    border-bottom: none;
  }
`

const Group = styled('fieldset')`
  margin: 0 15px 20px;
  padding: 0;
  border-style: none;

  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`
const Label = styled('label')`
  width: 15%;
  min-width: 70px;
  padding: 11px 0;
  color: ${props => props.theme.colors.primaryDark};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Input = styled('input')`
  width: 100%;
  padding: 11px 15px 11px 0;
  ${'' /* color: ${props => props.theme.colors.primaryDark}; */}
  background-color: transparent;
  appearance: none;
  outline: none;
  border-style: none;
  text-align: right;
  :focus::placeholder {
    color: transparent;
  }
`
const Card = styled('div')`
  width: 100%;
  padding: 11px 15px 11px 0;
`

const Result = styled('div')`
  margin: 0 auto;

  .success {
    color: ${props => props.theme.colors.success};
  }
  .error {
    color: ${props => props.theme.colors.danger};
  }

  .title {
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .description {
    padding-bottom: 10%;
  }
`

export default function CheckoutForm({ paymentIntent }) {
  const stripe = useStripe()
  const elements = useElements()

  const [checkoutError, setCheckoutError] = React.useState()
  const [checkoutSuccess, setCheckoutSuccess] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const [custName, setName] = React.useState()
  const [custEmail, setEmail] = React.useState()
  const [custPhone, setPhone] = React.useState()

  const payButtonValue = loading ? (
    <i className="fas fa-spinner fa-spin"></i>
  ) : (
    'Pay $100'
  )

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const {
        error,
        paymentIntent: { status },
      } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: custName,
            email: custEmail,
            phone: custPhone,
          },
        },
      })
      if (error) throw new Error(error.message)
      if (status === 'succeeded') {
        setCheckoutSuccess(true)
      }
    } catch (err) {
      setCheckoutError(err.message)
    }
  }

  if (checkoutSuccess)
    return (
      <Result>
        <Center>
          <icon className="fas fa-check-circle fa-6x success" />

          <H4 className="title">Payment successful</H4>
          <p className="description">
            Thank you for your purchase! You will receive an email shortly
            confirming your payment.
          </p>
        </Center>
      </Result>
    )
  if (checkoutError)
    return (
      <Result>
        <Center>
          <icon className="fas fa-times-circle fa-6x error" />

          <H4 className="title">Payment Failed</H4>
          <p className="description">
            Your payment failed with with following error: {checkoutError}
            <p>If this problem persists please contact us.</p>
          </p>

          <a href="/paa/checkout">
            <Button>
              <i className="fas fa-sync-alt" /> Try again
            </Button>
          </a>
        </Center>
      </Result>
    )

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Group>
          <Row>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="John Doe"
              required
              autoComplete="name"
              onChange={e => {
                setName(e.target.value)
              }}
            />
          </Row>
          <Row>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
              required
              autoComplete="email"
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </Row>
          <Row>
            <Label>Phone</Label>
            <Input
              type="tel"
              placeholder="(123) 456-7890"
              required
              autoComplete="tel"
              onChange={e => {
                setPhone(e.target.value)
              }}
            />
          </Row>
        </Group>
        <Group>
          <Row>
            <Card>
              <CardElement />
            </Card>
          </Row>
        </Group>
        <Center>
          <Button type="submit">{payButtonValue}</Button>
        </Center>
      </Form>
      )
    </div>
  )
}
