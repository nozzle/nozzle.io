import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { fetchPaaTestimonials } from '../../contentful'
import HubspotForm from '../../components/HubspotForm'
//
import { angle } from 'utils/Styles'
import Head from 'components/Head'

import { H1, H2, H6, P, Ul, Li, Img, Button } from 'components/Html'
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

  .youtube-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .youtube-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  ${belowMobile} {
    .right {
      img {
        ${tw`w-0`}
      }
    }
  }
`

const SectionCallToAction = styled(Section)`
  ${section};
  text-align: center;
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
              <H1>People Also Ask (PAA) Keyword Question Tool</H1>
            </Center>
          </Container>
        </SectionTitle>
        <SectionKnowWhatQuestions>
          <div className="left">
            <H2 color="primaryDark">
              Generate Months of Content Ideas Without any Brainstorming
              Sessions
            </H2>

            <P>What you'll get:</P>
            <P>
              <Ul>
                <Li>
                  An emailed link to a Google Data Studio dashboard containing a
                  list of hundreds to thousands of People Also Ask questions
                  related to your target keyword list (depending on how many
                  keywords you input).
                </Li>
              </Ul>
            </P>

            <br />
            <P>
              {' '}
              <a
                href="https://datastudio.google.com/u/0/reporting/2fdfc264-1785-46f6-80e4-149ace7336e6/page/T6hmB"
                target="blank"
              >
                <span className="link">
                  Click to view a PAA Expansion Deliverable example in Data
                  Studio.
                </span>
              </a>{' '}
            </P>

            <br />
            <a href="https://app.nozzle.io/sign-up" tw="w-full">
              <Button
                color="success"
                css={`
                  ${tw`rounded p-4`}
                `}
              >
                Get started!
              </Button>
            </a>
          </div>
          <div className="right">
            <Img
              src="/img/paaBox.jpg"
              alt="google’s people also ask boxes help find questions related to your keywords"
              width="516"
              height="327"
            />
            <div className="youtube-responsive">
              {/*<div className="wistia_embed wistia_async_ggfgo9uxfs videoFoam=true" />*/}
              <iframe width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/EKNef5jI7QI" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
          </div>
        </SectionKnowWhatQuestions>
        {/* <div tw="w-full min-h-screen text-center">
          <iframe
            title="PAA sign up"
            src="https://dev.nozzle.io/paa"
            width="50%"
            height="1000rem"
          />
        </div> */}
        <SectionTestimonials>
          <H2 className="title">What People Are Saying</H2>

          {testimonials.map(testimonial => {
            return (
              <div className="testimonial" key={testimonial.fields.name}>
                <div css={tw`mb-8`}>
                  <Img
                    src={`https:${
                      testimonial.fields.image
                        ? testimonial.fields.image.fields.file.url
                        : 'img/blankPerson.png'
                    }`}
                    alt={testimonial.fields.name}
                    height="160"
                    width="160"
                  />
                </div>

                <H6>{testimonial.fields.name}</H6>
                <div className="company">{testimonial.fields.companyName}</div>
                <P>"{testimonial.fields.testimonial}"</P>
              </div>
            )
          })}
        </SectionTestimonials>
        <SectionCallToAction>
          <H2 full>Get Your PAA Deliverable Today!</H2>
          <div
            css={`
              ${tw`w-full `}
            `}
          >
            <a href="https://app.nozzle.io/sign-up">
              {/*<Button
                color="success"
                css={`
                  ${tw`text-2xl rounded p-6 `}
                `}
              >
                Get started!
              </Button> */}
            </a>
            <HubspotForm id="e4275bbe-094f-4443-9f3c-ec10caa772e6" />
          </div>
        </SectionCallToAction>
        {/* Hello world */}
      </main>
    </div>
  )
}
