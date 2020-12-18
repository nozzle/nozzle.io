import React from 'react'
import styled, { css } from 'styled-components'
import { fetchPaaTestimonials } from '../../contentful'
//
import { angle } from 'utils/Styles'
import Head from 'components/Head'

import Link from 'next/link'
import {
  H1,
  H2,
  H4,
  H5,
  H6,
  P,
  Ul,
  Li,
  Span,
  Img,
  Button,
} from 'components/Html'
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
    flex-wrap: wrap;
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
      min-height: 400px;
      border-radius: 3px 0 0 3px;
      z-index: 2;
      background: ${props => props.theme.colors.primaryDark};
    }
    :nth-child(2) {
      flex: 1 1 27%;
      border-radius: 3px;
      background: ${props => props.theme.colors.primaryDarker};
      min-height: 450px;
      z-index: 3;
    }
    :nth-child(3) {
      flex: 1 1 24%;
      min-height: 400px;
      border-radius: 0 3px 3px 0;
      z-index: 3;
      background: ${props => props.theme.colors.primaryDark};
   
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
      padding: 0px 8px;
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
  React.useEffect(() => {
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')

    script1.src = 'https://fast.wistia.com/embed/medias/ggfgo9uxfs.jsonp'
    script1.async = true

    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js'
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }, [])

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
              <H1>
                Generate Months of Content Ideas Without any Brainstorming
                Sessions
              </H1>
              <P>
                A huge list of the ACTUAL questions your target audience is
                asking.
              </P>
            </Center>
          </Container>
        </SectionTitle>
        <SectionKnowWhatQuestions>
          <div className="left">
            <H2 color="primaryDark">
              Are you ready to compile a list of all the People Also Ask (PAA)
              questions Google serves up for your unique keyword list?
            </H2>
            <P>Get a free or paid version of this deliverable below.</P>
            <P>What you'll get:</P>
            <P>
              <Ul>
                <Li>
                  200-800 questions from the People Also Ask boxes related to
                  your specific keyword list
                </Li>
                <Li>The ability to filter by keyword group</Li>
                <Li>
                  A drill down of your ranking URLs and where they rank for the
                  phrases that generated the questions
                </Li>
                <Li>
                  The percentage of time PAA boxes show up for your whole
                  keyword set and each of your keyword groups
                </Li>
              </Ul>
            </P>

            <P>
              {' '}
              <a
                href="https://datastudio.google.com/u/1/reporting/c603c6cc-2137-49b7-a161-735bf238f46d/page/T6hmB"
                target="blank"
              >
                <span className="link">
                  Click to view a PAA Expansion Deliverable example in Data
                  Studio.
                </span>
              </a>{' '}
            </P>

            <br />
          </div>
          <div className="right">
            <div>
              <div className="wistia_embed wistia_async_ggfgo9uxfs videoFoam=true" />
            </div>
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
                <H4 className="title">Garden Hose</H4>
                <div className="price">
                  <H5>
                    <Span className="price-number">Free</Span>
                  </H5>
                </div>
                <div className="plan-inner">
                  <div className="row ">
                    <P>
                      Give us up to 500 keywords and we'll send you your
                      deliverable highlighting the top 10 questions for your
                      keyword list
                    </P>
                  </div>
                </div>
                <Link href="paa/trial">
                  <Button color="primaryDarker" burst>
                    Try it out!
                  </Button>
                </Link>
              </div>
              <div className="plan">
                <H4 className="title">Fire Hose</H4>
                <div className="price">
                  <H5>
                    <Span className="price-number">$79</Span>
                  </H5>
                </div>
                <div className="plan-inner">
                  <div className="row">
                    <P>
                      Give us up to 500 keywords and we'll send you your
                      deliverable with ALL the questions that your list
                      generated in the SERPs (typically several hundred)
                    </P>
                  </div>
                </div>
                <Link href="paa/checkout">
                  <Button color="success" burst>
                    Buy Now!
                  </Button>
                </Link>
              </div>
              <div className="plan">
                <H4 className="title">Jet Stream (Bulk Orders)</H4>
                <div className="price">
                  <H5>
                    <Span className="price-number">Custom Pricing</Span>
                  </H5>
                </div>
                <div className="plan-inner">
                  <div className="row">
                    <P>Discounted pricing per deliverable purchased</P>
                  </div>
                </div>
                <Link href="paa/contact">
                  <Button color="primaryDarker" burst>
                    Contact Us
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
