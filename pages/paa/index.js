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
      min-height: 400px;
      border-radius: 3px 0 0 3px;
      z-index: 2;
      background: ${props => props.theme.colors.primaryDark};
    }
    :nth-child(2) {
      flex: 1 1 27%;
      border-radius: 3px;
      background: ${props => props.theme.colors.primaryDarker};
      min-height: 500px;
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
              <H1>
                Generate Months of Content Ideas Without any Brainstorming Sessions
              </H1>
              <P>
                A list of the ACTUAL questions your target audience is asking.
              </P>
            </Center>
          </Container>
        </SectionTitle>
        <SectionKnowWhatQuestions>
          <div className="left">
            <H2 color="primaryDark">
              Are you ready to compile a list of all the PAA questions Google
              serves up for your industry?
            </H2>
            <P>
              The People Also Ask boxes can provide just as much value as a
              golden egg-laying goose. Your target audience is asking these
              specific questions... <u>give them the answers.</u>
            </P>
            <P>
              Nozzle can extract <u>every last industry-related question</u> from the
              SERPs using the PAA Expansion Method to give your content team all
              the ammo it needs for months on end.
            </P>
            <P>
              Play around with this{' '}
              <a
                href="https://datastudio.google.com/u/0/reporting/81e73d89-0a3d-49d6-a726-69ad97d76383/page/T6hmB"
                target="blank"
              >
                <span className="link">PAA Expansion Deliverable example</span>
              </a>{' '}
              in Data Studio for that tingley, excited feeling.
            </P>
            <P>
              For the full effect, choose different keyword groups from the drop down or type in
              certain words in the filter on the right. Also, click on a question on
              page 2 of the deliverable to see which phrases served up that
              specific question and where the demo site ranks for those phrases.
            </P>
            <P>
              {' '}
              You can expect to obtain a list of <u>200-800 unique questions</u> in
              your PAA Expansion Deliverable depending on what industry you are
              in. 
            </P>
            <P><u>Treat yo' self today</u> and click below to get either the Free or Full PAA Expansion Deliverable. 
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
                <H4 className="title">Garden Hose</H4>
                <div className="price">
                  <H5>
                    <Span className="price-number">Free</Span>
                  </H5>
                </div>
                <div className="plan-inner">
                  <div className="row ">
                    <H5>What You'll Get:</H5>
                    <Ul>
                      <Li>
                        A list of the top 10 questions related to your industry
                      </Li>
                      <Li>
                        A drill down of your ranking URLs and where they rank
                        for the phrases that generate each of those 10 questions
                      </Li>
                      <Li>
                        The total number of unique questions that your keyword
                        set returns
                      </Li>
                      <Li>
                        The percentage of time PAA boxes show up for your whole
                        keyword set and each of your keyword groups
                      </Li>
                    </Ul>
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
                    <Span className="price-number">$200</Span>
                  </H5>
                </div>
                <div className="plan-inner">
                  <div className="row">
                    <H5>What You'll Get:</H5>
                    <Ul>
                      <Li>
                        A list of ALL the questions related to your industry
                        (typically several hundred)
                      </Li>
                      <Li>
                        A drill down of your ranking URLs and where they rank
                        for the phrases that generate the PAA questions
                      </Li>
                      <Li>
                        The total number of unique questions that your keyword
                        set returns
                      </Li>
                      <Li>
                        The percentage of time PAA boxes show up for your whole
                        keyword set and each of your keyword groups
                      </Li>
                      <Li>
                        The ability to filter by phrase or keyword group to see
                        the best questions related to all your topics/categories
                      </Li>
                    </Ul>
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
