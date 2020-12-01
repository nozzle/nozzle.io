import Stripe from 'stripe'

const stripe = Stripe(`${process.env.TEST_STRIPE_SECRET_KEY}`)

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        //this is a test key
        price: process.env.TEST_STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],
    success_url: `${
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    }${req.headers.host}/success`,
    cancel_url: `${
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    }${req.headers.host}/paa`,
  })

  res.json({ id: session.id })
}
