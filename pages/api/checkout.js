const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`)

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price: 'price_1HpToe4HQ2O7mN7VAtS276BD',
        quantity: 1,
      },
    ],
    success_url: `${
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    }${req.headers['x-forwarded-host'] || req.headers.host}/success`,
    cancel_url: `${
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    }${req.headers['x-forwarded-host'] || req.headers.host}/paa`,
  })

  res.json({ id: session.id })
}
