import React from 'react'
import HubspotForm from 'components/HubspotForm'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import Head from 'components/Head'

import {
  H1,
  H2,
  H3,
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
    ${tw`mx-auto flex flex-wrap max-w-default py-5/100 px-1/10`}
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
    ${tw`mr-12 flex-300`}
  }
  .right {
    ${tw`flex-300`}
  }
`

const SectionTitle = styled(Section)`
  ${section};
  ${tw`bg-primaryDarker text-white`}

  :after {
    ${tw`hidden block text-center`}
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

export default function TechSeoBoost() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="TechSEO Boost Rocks! Give Nozzle A Test Run"
        description="Find the right questions to answer on your website"
      />
      <main>
        <SectionTitle>
          <Container>
            <Center>
              <H1>Nozzle: The Full SERP Monitoring Tool</H1>
            </Center>
          </Container>
        </SectionTitle>
        <SectionKnowWhatQuestions>
          <div className="left">
            <H3>Come Give Nozzle A Test Run</H3>
            <P>
              Nozzle extracts and stores <span tw="underline">ALL</span> the
              data from each SERP that you’re tracking, allowing you to get your
              hands deep into some geeky detail.
            </P>
            <P>Let’s take a look at three data analysis examples.</P>
            <H3>PAA Expansion Deliverable</H3>
            <P tw="mb-6">
              Content teams will love our PAA expansion deliverable. {' '} <Link href="https://datastudio.google.com/reporting/c603c6cc-2137-49b7-a161-735bf238f46d">In one
              example</Link> of 500 camping related keywords, we extracted 419 unique
              questions from the People Also Ask boxes. 

              In another example, we looked at 49,000 SEO related keywords and 
              found 276,000 unique SEO related questions. If you want to peruse 
              this document, go to{' '} <Link href="https://nozzle.io/seo-paa-questions">
                https://nozzle.io/seo-paa-questions
              </Link>
              .
            </P>
            <Img
              src={require('public/img/PAAExpansionDeliverable500keywords.jpg')}
              tw="mb-12"
            />

            <H3>Nozzle Vision</H3>
            <P tw="mb-6">
              We recently launched Nozzle Vision, an awesome new featured tool
              that allows you to analyze the SERPs in a more visual manner. We
              rerender the SERP HTML for every keyword that you are tracking and
              then overlay Nozzle Vision on top of that to better help you
              report on, and understand more fully, Nozzle's metrics like Pixels
              from Top, SERP %, Above the Fold %, CTR, Rank, etc. Nozzle Vision
              also allows you to compare SERPS from different dates, side by
              side.
            </P>
            <Img src={require('public/img/NozzleVision.gif')} tw="mb-12" />

            <H3>Share of Voice Dashboard</H3>
            <P tw="mb-6">
              The Share of Voice Dashboard allows you to analyze your
              competition in many different ways. Find out which domains or
              URL’s own the most featured snippets, top 10 rankings, top 3
              rankings or even which companies show up the most in local pack
              results. This is great for reporting on your SEO results over time
              compared to the competition and for creating a competitive
              analysis that can guide your SEO strategy.
            </P>
            <Img
              src={require('public/img/ShareOfVoiceDashboard.png')}
              tw="mb-12"
            />

            <P>
              To sign up for a free trial with Nozzle, fill out the form to the
              right and we will get you set up with a workspace for your
              company.
            </P>
          </div>
          <div className="right">
            <H2 tw="text-center ">Let's start your free trial!</H2>
            <HubspotForm id="55cbcbd8-a0ab-4ff8-ad20-c33669bdab2c" />
          </div>
        </SectionKnowWhatQuestions>
      </main>
    </div>
  )
}
