import React from 'react'

import styled, { css } from 'styled-components'
import { angle } from 'utils/Styles'

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
  display: block;
`

const SectionProjects = styled(Section)`
  ${section};
  ${angle('right')};
  background: ${props => props.theme.colors.primaryDarker};
  color: white;
  .title {
    width: 100%;
    margin-bottom: 2rem;
  }
  li {
    :hover {
      text-decoration: underline;
    }
  }
`

const SectionMain = styled(Section)`
  ${section};
  ${layout};
  .right {
    img {
      max-width: 940px;
      width: 100%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
`

const SectionForm = styled(Section)`
  ${section}

  .intro {
    margin-top: 1rem;
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
