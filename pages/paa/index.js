import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
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
  ${tw`z-0`}
  .inner {
    ${tw`mx-auto flex flex-wrap items-center max-w-default py-5/100 px-1/10`}
  }
  img {
    ${tw`w-full`}
  }
  ${belowMobile} {
    .left,
    .right {
      ${tw`mx-0 flex-100`}
    }
    .left {
      ${tw`mb-8`}
    }
  }
`

const layout = css`
  .left {
    ${tw`mr-10 flex-300`}
  }
  .right {
    ${tw`flex-300`}
  }
`

const SectionTitle = styled(Section)`
  ${section};
  ${tw`bg-primaryDarker text-white`}

  :after {
    ${tw`hidden`}
  }
  ${tw`block text-center`}
`
const SectionTestimonials = styled(Section)`
  ${section};
  ${angle('right')};
  ${tw`text-center bg-primaryDarker text-white`}

  .title {
    ${tw`w-full mb-16`}
  }

  .testimonial {
    flex: 1 1 30%;
  }

  .company {
    ${tw`italic mb-4`}
  }

  img {
    ${tw`max-w-full rounded-full mb-8 shadow-lg w-40`}
  }
  ${belowTablet} {
    .testimonial {
      ${tw`mb-12 flex-100`}
    }
  }
`

const SectionKnowWhatQuestions = styled(Section)`
  ${section};
  ${layout};
  .right {
    img {
      ${tw`opacity-100 w-full rounded shadow-2xl mb-4 max-w-4xl`}
    }
  }

  .link {
    ${tw`text-primaryLighter underline`}
  }

  ${belowMobile} {
    .right {
      img {
        ${tw`w-0`}
      }
    }
  }
`

const SectionAction = styled(Section)`
   ${section}

  .plans {
    ${tw`flex flex-row flex-wrap mt-7`}
   
  }
  .plan {
    ${tw`flex flex-col text-white text-center shadow-2xl justify-between overflow-hidden self-center`}
    transition: all 0.4s ease-out;
    h4 {
      ${tw`my-8 mx-4`}
    }
    button {
      ${tw`text-center m-0 p-4 w-full text-xl rounded-none leading-none`}

      transition: all 0.15s ease-out !important;
      :hover {
        ${tw`transform-none shadow-none`}
      }
    }
    :first-child {
      ${tw`rounded-l bg-primaryDark`}
      flex: 1 1 24%;
      min-height: 400px;
      z-index: 2;
    }
    :nth-child(2) {
      ${tw`rounded bg-primaryDarker`}
      flex: 1 1 27%;
      min-height: 450px;
      z-index: 3;
    }
    :nth-child(3) {
      ${tw`rounded-r bg-primaryDark`}
      flex: 1 1 24%;
      min-height: 400px;
      z-index: 3;
   
    .plan-inner {
      ${tw`p-5 flex justify-between flex-col text-sm`}
      transition: all 0.3s ease-out;
      h5, p: ;
        ${tw`m-0`}
      }
    }
    .title {
      ${tw`font-bold px-5`}
   
    }
    .row {
      ${tw`px-2`}
      
    }
    

    .price-number {
      ${tw`text-3xl`}
      
    }
   
  }
  @media screen and (max-width: 900px) {
    .plan {
      ${tw`rounded`}
      flex: 1 1 48% !important;
      min-height: auto !important;
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
      ${tw`py-5`}
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
        title="People Also Ask Question Generator | Find Google’s PAA Questions Based on your Keywords with our Keyword Question Tool"
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
              Knowing the PAA questions served up for your keywords can help you
              optimize for People Also Ask boxes, give you ideas for blog posts
              and other content, and guide your SEO strategy. Try our keyword
              question generator today!
            </P>
            <br />
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
            <Img
              src="img/paaBox.jpg"
              alt="google’s people also ask boxes help find questions related to your keywords"
            />
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
                <H5>
                  <Span className="price-number">Free</Span>
                </H5>
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
                <H5>
                  <Span className="price-number">$79</Span>
                </H5>
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
                <H4 className="title">Order 10 Deliverables</H4>
                <H5>
                  <Span className="price-number">$499</Span>
                </H5>
                <div className="plan-inner">
                  <div className="row">
                    <P>Discounted pricing per deliverable purchased</P>
                  </div>
                </div>
                <Link href="paa/bulkCheckout">
                  <Button color="primaryDarker" burst>
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
