import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { fetchPaaTestimonials } from '../../contentful'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HubspotForm from '../../components/HubspotForm'
//
import { angle } from 'utils/Styles'
import Head from 'components/Head'

import { H1, H2, H3, H4, H6, P, Img, Button, Ul, Li } from 'components/Html'
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

{/*const layout = css`
  .left {
    ${tw`mr-10 flex-300`}
  }
  .right {
    ${tw`flex-300`}
  }
`*/}

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

  ${tw`text-center`}

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

const SectionIncludes = styled(Section)`
  ${section};
  ${angle('right')};
  ${tw`md:(flex justify-center gap-4) bg-primaryDarker text-white text-center`}
`

const SectionCallToAction = styled(Section)`
  ${section};
  ${angle('right')};
  text-align: center;
  ${tw`text-white h-full`}
  background: rgba(2,21,28,1);
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
        title="People Also Ask Keyword Question Tool | Generate Content Ideas Using Google's PAA Boxes and Your Keywords | Nozzle"
        description="With Nozzle's People Also Ask (PAA) Keyword Question Tool, you get a Google Data Studio dashboard to help find the right questions to answer on your website."
        path="https://nozzle.io/paa"
      />
      <main>
        <SectionTitle>
          <Container>
            <Center>
              <H1>People Also Ask (PAA) Keyword Question Tool</H1>
            </Center>
          </Container>
        </SectionTitle>
        <div css={tw`h-4`} />
        <Container>
          <div css={tw` p-6 md:(flex items-center gap-12)`}>
            <div css={tw`md:(w-1/2)`}>
              <H3 color="primaryDark">
                Generate Months of Content Ideas Without any Brainstorming
                Sessions
              </H3>
              <P>
                Knowing which People Also Ask questions show up for your target
                keywords can help you optimize for People Also Ask boxes, give
                you ideas for blog posts and other content, and guide your SEO
                strategy. Try our keyword question generator today!
              </P>
            </div>
            <div css={tw`ml-auto`}>
              <Img
                src="/img/paaBox.jpg"
                alt="Nozzle's Keyword Question Tool uses Google’s People Also Ask boxes to help you find questions related to your keywords."
                width="516"
                height="327"
              />
            </div>
          </div>
          <div css={tw`h-4`} />
          <div css={tw`p-6 md:(flex items-center)`}>
            <div css={tw` md:(w-1/2) mx-auto text-left`}>
              {/*<div className="wistia_embed wistia_async_ggfgo9uxfs videoFoam=true" />*/}
              <iframe width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/EKNef5jI7QI" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                </iframe>
            </div>
            <div css={tw`md:(w-1/2  gap-20 pl-16)`}>
              <H3 color="primaryDark">What You'll Get</H3>
              <P>
                An emailed link to a Google Data Studio dashboard containing a
                list of hundreds to thousands of People Also Ask questions
                related to your target keyword list (depending on how many
                keywords you input).
              </P>
              <br />
              <P>
                {' '}
                <a
                  href="https://datastudio.google.com/u/0/reporting/2fdfc264-1785-46f6-80e4-149ace7336e6/page/T6hmB"
                  target="blank"
                >
                  <span css={tw`text-primaryLighter underline`}>
                    Click to view a PAA Content Idea Report example in Data
                    Studio.
                  </span>
                </a>{' '}
              </P>
              <br />
              <H3 color="primaryDark">How to Get Started </H3>
              <Ul>
                <Li>
                Visit the <AnchorLink href="#signup" css={tw`text-primaryLighter underline`}>form</AnchorLink> below
                </Li>
                <Li>Input your name, email address, company name and domain</Li>
                <Li>Input your target keyword list (10,000 keywords max)</Li>
                <Li>Input your location (the search origin for the keywords in your list)</Li>
              </Ul>
              <br />
              <AnchorLink href="#signup">
                <Button
                  color="success"
                  css={`
                    ${tw`rounded p-4`}
                  `}
                >
                  Get started!
                </Button>
              </AnchorLink>
            </div>
          </div>
          <div css={tw`h-16`} />
        </Container>
        <SectionIncludes>
          <div css={tw`md:(w-1/3)`}>
            <div css={tw`md:(px-6)`}>
              <H6 css={tw`font-bold`}>
                Discover the Questions Your Audience Is Asking
              </H6>
              <P css={tw`text-sm`}>
                For your content to be effective, it must answer your audience's
                questions. Our PAA Content Idea Report does the work of finding those
                questions for you.
              </P>
            </div>
          </div>
          <div css={tw`md:(w-1/3)`}>
            <div css={tw`md:(px-6)`}>
              <H6 css={tw`font-bold`}>See How Often Questions Appear</H6>
              <P css={tw`text-sm`}>
                Our PAA report shows how often questions appeared in PAA
                when people searched your keywords, guiding you to the popular
                questions you should answer first.
              </P>
              </div>
              </div>
              <div css={tw`md:(w-1/3)`}>
            <div css={tw`md:(px-6)`}>
              <H6 css={tw`font-bold`}>See PAA Frequency by Keyword Group</H6>
              <P css={tw`text-sm`}>
                If you provide keyword groups with your keyword list, our
                report will show you how often keyword groups show PAA
                boxes, letting your content team know which groups to focus on
                first.
              </P>
            </div>
          </div>
        </SectionIncludes>
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
                    alt={testimonial.fields.imageAlt}
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
        <SectionCallToAction id="signup">
          <H2>Get Your PAA Content Idea Report Today!</H2>
          <div
            css={`
              ${tw`w-full`}
            `}
          >
            <HubspotForm id="e4275bbe-094f-4443-9f3c-ec10caa772e6" />
          </div>
        </SectionCallToAction>
      </main>
    </div>
  )
}
