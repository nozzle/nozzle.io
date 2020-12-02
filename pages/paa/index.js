import React from 'react'
import styled, { css } from 'styled-components'
import { fetchPaaTestimonials } from '../../contentful'
//
import { angle } from 'utils/Styles'
import Head from 'components/Head'

import Link from 'next/link'
import { H1, H2, H4, H5, H6, P, Span, Img, Button } from 'components/Html'
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
  .link {
    color: ${props => props.theme.colors.primaryLighter};
    text-decoration: underline;
  }

  ${belowMobile} {
    .right {
      img {
        width: 100%;
      }
    }
  }
`

const SectionAction = styled(Section)`
   ${section}

  .plans {
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }
  .plan {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-align: center;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.4s ease-out;
    align-self: center;
    h4 {
      margin: 2rem 1rem;
    }
    button {
      text-align: center;
      font-size: 1.2em;
      margin: 0;
      padding: 1rem;
      width: 100%;
      border-radius: 0;
      transition: all 0.15s ease-out !important;
      :hover {
        transform: none;
        box-shadow: none;
      }
    }
    :first-child {
      flex: 1 1 24%;
      min-height: 300px;
      border-radius: 3px 0 0 3px;
      z-index: 2;
      background: ${props => props.theme.colors.primaryDark};
    }
    :nth-child(2) {
      flex: 1 1 27%;
      border-radius: 3px;
      background: ${props => props.theme.colors.primaryDarker};
      min-height: 400px;
      z-index: 3;
    }
   
    .plan-inner {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      font-size: 0.9em;
      transition: all 0.3s ease-out;
      h5, p: ;
        margin: 0;
      }
    }
    .title {
      padding: 0 20px;
      font-weight: bold;
    }
    .row {
      padding: 7px 0;
      border-bottom: solid 2px rgba(255, 255, 255, 0.07);
      :last-child {
        border-bottom: none;
      }
    }
    
    .price {
      font-size: 12px;
      
    }
    .price-number {
      font-size: 30px;
    }
   
  }
  @media screen and (max-width: 900px) {
    .plan {
      flex: 1 1 48% !important;
      min-height: auto !important;
      border-radius: 5px;
      margin: 0 1% 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .plan {
      flex: 1 1 100% !important;
      margin: 0 0 10px;
    }
  }
  @media screen and (min-width: 900px) {
    .plan:hover button {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  }

  }
`

export async function getServerSideProps(ctx) {
  const testimonials = await fetchPaaTestimonials()

  return {
    props: {
      testimonials: testimonials.testimonial,
    },
  }
}

export default function PaaDashBoard({ testimonials }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="PAA Expansion Deliverable | Nozzle"
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
              The People Also Ask boxes can provide just as much value as a
              golden egg laying goose. Nozzle can extract all that golden
              goodness using the PAA Expansion Method and deliver a list of all
              the most important questions that you should answer on your
              website.
            </P>
            <P>
              Play around with this{' '}
              <a
                href="https://datastudio.google.com/u/0/reporting/81e73d89-0a3d-49d6-a726-69ad97d76383/page/T6hmB"
                target="blank"
              >
                <span className="link">PAA Expansion Deliverable example </span>
              </a>{' '}
              to get a feel for what golden eggs lay in store for you.
            </P>
            <P>
              Make sure to choose different keyword groups from the dropdown to
              see each topic's golden egg.
            </P>
            <P>
              {' '}
              You can expect to obtain a list of 200-800 unique questions in
              your PAA Expansion Deliverable depending on what industry you are
              in. The list will be sorted from most to least SERP appearances
              helping you to know which questions Google thinks your target
              audience is asking the most.
            </P>
            <br />
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
        <SectionAction>
          <Container>
            <div className="plans">
              <div className="plan">
                <H4 className="title">Not Quite Ready For All That?</H4>
                <div className="price">
                  <H5>
                    <Span className="price-number">Free</Span>
                  </H5>
                </div>
                <div className="plan-inner">
                  <div className="row ">
                    <H5>
                      {' '}
                      Try our free report that will show you the top 10
                      questions that Google serves up for your list of 500
                      keywords!
                    </H5>
                  </div>
                </div>
                <Link href="paa/trial">
                  <Button color="primaryDarker" burst>
                    Try it out!
                  </Button>
                </Link>
              </div>
              <div className="plan">
                <H4 className="title">Let's Get You Started!</H4>
                <div className="price">
                  <H5>
                    <Span className="price-number">$200</Span>
                  </H5>
                </div>
                <div className="plan-inner">
                  <div className="row">
                    <H5>
                      Purchase a list of 200-800 unique questions that your
                      customers are asking! Start changing the way you see your
                      customers and their concerns today!
                    </H5>
                  </div>
                </div>
                <Link href="paa/checkout">
                  <Button color="success" burst>
                    Buy Now!
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </SectionAction>
      </main>
    </div>
  )
}
