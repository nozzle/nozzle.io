import Stripe from 'stripe'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

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
    success_url: 'https://nozzle.io/paa/success',
    cancel_url: 'https://nozzle.io/paa',
  })

  res.json({ id: session.id })
}
