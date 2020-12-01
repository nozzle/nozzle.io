import React from 'react'
import styled, { css } from 'styled-components'
import { fetchPaaTestimonials } from '../../contentful'
import { loadStripe } from '@stripe/stripe-js'
//
import { angle } from 'utils/Styles'
import Head from 'components/Head'

import Link from 'next/link'
import { H1, H2, H6, P, Img, Button } from 'components/Html'
import { Container, Center } from 'components/Layout'

const belowMobile = `@media(max-width: ${700}px)`
const belowTablet = `@media(max-width: ${1000}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const section = css`
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 5% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  img {
    width: 100%;
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
`

const layout = css`
  .left {
    flex: 1 1 300px;
    margin-right: 40px;
  }
  .right {
    flex: 1 1 300px;
  }
`

const SectionTitle = styled(Section)`
  ${section};

  background: ${props => props.theme.colors.primaryDarker};
  color: white;

  :after {
    display: none;
  }
  display: block;
  text-align: center;
`
const SectionTestimonials = styled(Section)`
  ${section};
  ${angle('right')};
  text-align: center;
  background: ${props => props.theme.colors.primaryDarker};
  color: white;
  .title {
    width: 100%;
    margin-bottom: 4rem;
  }

  .testimonial {
    flex: 1 1 30%;
  }

  .company {
    font-style: italic;
    margin-bottom: 1rem;
  }

  img {
    width: 150px;
    max-width: 100%;
    border-radius: 9999px;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  ${belowTablet} {
    .testimonial {
      flex: 1 1 100%;
      margin-bottom: 3rem;
    }
  }
`

const SectionKnowWhatQuestions = styled(Section)`
  ${section};
  ${layout};
  .right {
    img {
      opacity: 1;
      max-width: 940px;
      width: 110%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }

  ${belowMobile} {
    .right {
      img {
        width: 100%;
      }
    }
  }
`

const SectionFreeTrial = styled(Section)`
  ${section};
  display: block;
  text-align: center;
  margin-top: 2rem;
`

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)
export async function getServerSideProps(ctx) {
  const testimonials = await fetchPaaTestimonials()
  const res = await fetch(
    `${process.env.NODE_ENV === 'development' ? 'http://' : 'https://'}${
      ctx.req.headers.host
    }/api/checkout`
  )

  const json = await res.json()
  return {
    props: {
      session: json.id,
      testimonials: testimonials.testimonial,
    },
  }
}

export default function PaaDashBoard({ session, testimonials }) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const buyButtonValue = loading ? (
    <i className="fas fa-spinner fa-spin"></i>
  ) : (
    'Buy Now'
  )

  const handleClick = async () => {
    setLoading(true)

    const stripe = await stripePromise

    const { error } = await stripe.redirectToCheckout({
      sessionId: session,
    })
    if (error) setError(error.message)
    setLoading(false)
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="PAA Dashboard | Nozzle"
        description="Find the right questions to answer on your website"
      />
      <main>
        <SectionTitle>
          <Container>
            <Center>
              <H1>PAA Expansion Deliverable</H1>
              <P>It's something you want, that only Nozzle has.</P>
            </Center>
          </Container>
        </SectionTitle>
        <SectionKnowWhatQuestions>
          <div className="left">
            <H2 color="primaryDark">
              Know What Questions To Ask On Your Website
            </H2>
            <P>
              Need help finding the right questions to answer on your website?
              Well, the People Also Ask boxes in Google's results pages contain
              the jackpot. Fill out the form and we'll generate a report that
              lists all the questions that Google serves up for up to 500 of
              your keywords.
            </P>
            <P>
              All we need from you is the keywords that you want to track. Then
              the Nozzle magic happens. We give you a report of all the
              questions that that Google serves up in the People Also Ask boxes.
              We will also show you how many times each questioned appeared
              across your whole keyword set.
            </P>
            <br />
            <Button onClick={handleClick}>{buyButtonValue}</Button>
          </div>
          <div className="right">
            <Img
              src="img/PAA_Deliverable.JPG"
              alt="PAA deliverable list of questions"
            />
            <Img
              src="img/PAA_DeliverableDrillDown.jpg"
              alt="PAA deliverable list of questions drilled down"
            />
            <Img
              src="img/PAA_DeliverableDailyPercentage.jpg"
              alt="PAA deliverable graph of daily percentage"
            />
          </div>
        </SectionKnowWhatQuestions>

        <SectionTestimonials>
          <H2 className="title">What People Are Saying</H2>

          {testimonials.map(testimonial => {
            return (
              <div className="testimonial" key={testimonial.fields.name}>
                <Img
                  src={
                    testimonial.fields.image
                      ? testimonial.fields.image.fields.file.url
                      : 'img/blankPerson.png'
                  }
                  alt={testimonial.fields.name}
                />
                <H6>{testimonial.fields.name}</H6>
                <div className="company">{testimonial.fields.companyName}</div>
                <P>"{testimonial.fields.testimonial}"</P>
              </div>
            )
          })}
        </SectionTestimonials>
        <SectionFreeTrial>
          <Container>
            <Center>
              <H2>Not Quite Ready For All That Power?</H2>
              <H6>
                Try our free report that will show you the top 10 questions that
                Google serves up for your list of 500 keywords!
              </H6>
              <Link href="paa/trial">
                <Button color="success" burst>
                  Try it out!
                </Button>
              </Link>
            </Center>
          </Container>
        </SectionFreeTrial>
      </main>
    </div>
  )
}
