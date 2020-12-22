import Stripe from 'stripe'

const stripe = Stripe(`${process.env.STRIPE_SECRET_KEY}`)

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    allow_promotion_codes: true,
    line_items: [
      {
        price: `${process.env.NEXT_PUBLIC_BULK_PRICE_ID}`,
        quantity: 1,
      },
    ],
    success_url: `${
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    }${req.headers.host}/success?bulk=true`,
    cancel_url: `${
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
    }${req.headers.host}/paa`,
  })

  res.json({ id: session.id })
}
