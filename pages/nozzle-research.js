import React from 'react'

import styled, { css } from 'styled-components'
import { angle } from 'utils/Styles'
import tw from 'twin.macro'

import Head from 'components/Head'
import { H1, H2, H3, P, Ul, Li, Img } from 'components/Html'
import { Container, Center } from 'components/Layout'
import HubspotForm from 'components/HubspotForm'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const section = css`
  ${tw`z-0`}
  .inner {
    ${tw`max-w-default py-5/100 px-1/10 mx-auto flex flex-wrap items-center`}
  }
  img {
    ${tw`w-full`}
  }
  ${belowMobile} {
    .left,
    .right {
      ${tw`ml-0 mr-0 flex-100`}
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
  ${tw`bg-primaryDarker text-white block`}
`

const SectionProjects = styled(Section)`
  ${section};
  ${angle('right')};
  ${tw`bg-primaryDarker text-white`}
  .title {
    ${tw`w-full text-center mb-8`}
  }
  li {
    ${tw`hover:(underline)`}
  }
`

const SectionMain = styled(Section)`
  ${section};
  ${layout};
  .right {
    img {
      ${tw`w-full max-w-4xl rounded shadow-2xl`}
    }
  }
`

const SectionForm = styled(Section)`
  ${section}

  .intro {
    ${tw`mt-4`}
  }
`

export default function Research() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="Research | Nozzle"
        description="Use Nozzle data to do amazing research."
      />
      <main>
        <SectionTitle>
          <Container>
            <Center>
              <H1>Research Using Nozzle Data</H1>
              <P>
                Use Nozzle’s SERP data to create your own in depth SERP research
                projects.
              </P>
            </Center>
          </Container>
        </SectionTitle>
        <SectionMain>
          <div className="left">
            <H3 color="primaryDark">
              We are happy to provide data to SEO publishers writing articles on
              SERP data.
            </H3>
            <P>
              Nozzle extracts all the data from Google’s SERPs for any keyword
              input into our system. Here are some of the things you can analyze
              with our data across tens of thousands (or more) of keywords:
            </P>
            <Ul>
              <Li>Domains and URLs of all search results</Li>
              <Li>Sitelinks</Li>
              <Li>Faq schema</Li>
              <Li>Video carousels and each video listed</Li>
              <Li>News carousels</Li>
              <Li>Featured snippet data</Li>
              <Li>People Also Ask data</Li>
              <Li>Related Searches data</Li>
              <Li>People Also Search for data</Li>
              <Li>Ads data</Li>
              <Li>Pixels from Top of Google for each result</Li>
              <Li>
                Pixel coverage and percentage of SERP real estate each type of
                listing takes up
              </Li>
              <Li>Etc.</Li>
            </Ul>
            <br />
          </div>
          <div className="right">
            <Img src="img/research.png" />
          </div>
        </SectionMain>
        <SectionProjects>
          <H2 className="title">Research projects that used Nozzle data:</H2>

          <Ul>
            <Li>
              <a href="https://searchengineland.com/brand-reputation-and-the-impact-of-google-serp-selections-345005">
                Brand reputation and the impact of Google SERP selections by JR
                Oakes
              </a>
            </Li>

            <Li>
              <a href="https://www.kevin-indig.com/blog/internal-link-optimization-with-tipr/">
                Internal Link Optimization with TIPR by Kevin Indig
              </a>
            </Li>
          </Ul>
        </SectionProjects>
        <SectionForm>
          <P className="intro">
            To set up your own Nozzle Research Workspace, fill out the form
            below. You’ll be able to add in any keywords that you want to track
            for your research projects and you’ll be able to view that data
            either within Nozzle’s UI or you can send the data that we store in
            BigQuery to any BI tool of your choice.
          </P>
          <HubspotForm
            id="403bcf79-b291-48f5-81af-7196c9935268"
            onFormSubmitted={() => {
              if (typeof window !== 'undefined') {
                window.dataLayer.push({ event: 'trialSubmit' })
              }
            }}
          />
        </SectionForm>
      </main>
    </div>
  )
}
