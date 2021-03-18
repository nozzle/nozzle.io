import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
//
import Color from 'utils/Color'
import { angle } from 'utils/Styles'

import Head from 'components/Head'

import { Container } from 'components/Layout'

import Link from 'next/link'
import { H2, H4, H5, P, Ul, Li, Img, Button } from 'components/Html'

const belowMobile = `@media(max-width: ${700}px)`

const Left = props => <div className="left" {...props} />
const Right = props => <div className="right" {...props} />
const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const section = css`
  ${tw`z-0`}
  .inner {
    ${tw`mx-auto flex flex-wrap items-center p-1/10 max-w-default`}
  }
  img {
    ${tw`w-full`}
  }
  a {
    ${tw`underline text-primaryLighter font-bold`}
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

const layoutLeft = css`
  .left {
    flex: 2 1 200px;
    ${tw`text-right mr-10`}
  }
  .right {
    flex: 3 1 300px;
  }
`

const SectionKnowEverything = styled(Section)`
  ${section};
  ${layoutLeft};
  ${tw`relative text-white`}

  background: radial-gradient(
    circle at center,
    ${props => props.theme.colors.primaryDarker} 20%,
    ${props => Color(props.theme.colors.primaryDarker).darken(10).toString()}
  );

  h4 {
    ${tw`text-primaryLighter`}
  }

  img {
    ${tw`rounded shadow-2xl`}
  }

  .right {
    flex: 2 1 300px;

    img {
      ${tw`max-w-screen-2xl w-double`}
    }
  }
`

const SectionFeatures = styled(Section)`
  ${section};

  ${tw`items-center text-center`}

  p {
    ${tw`max-w-4xl mx-auto`}
  }
`

const SectionBoxes = styled(Section)`
  ${angle('right')};
  ${tw`bg-primaryDarker text-white pb-8`}

  .-header {
    ${tw`px-4/100`}
    h2 {
      ${tw`mx-auto block text-center my-12 `}
    }
  }
  .description {
    ${tw`max-w-2xl mx-auto mb-10`}
  }
  .boxes {
    ${tw`flex flex-wrap mx-4 justify-center`}
  }
  .box {
    ${tw`mb-5 bg-white rounded flex flex-col flex-wrap flex-100 max-w-md`}
    color: initial;

    h4 {
      ${tw`p-2.5 font-bold text-center text-gray-700 border-b border-solid border-gray-200 mt-2.5 mx-0 mb-0`}
    }

    .-image {
      ${tw` flex relative w-full `}

      :before {
        content: '';
        ${tw`absolute inset-0 z-1`}
        boxshadow: inset 0 40px 40px -40px rgba(0, 0, 0, 0.3),
          inset 0 -40px 40px -40px rgba(0, 0, 0, 0.3);
      }
      img {
        ${tw`block mx-auto z-0 w-full h-60`};
      }
    }
    .content {
      ${tw`text-center p-5`}
    }
  }
  @media screen and (max-width: 400px) {
    .box .content > * {
      ${tw`flex-100`}
    }
  }

  @media screen and (min-width: 700px) {
    .box {
      ${tw`mx-1/100 mb-5`}
      flex: 1 1 48%;
    }
  }

  @media screen and (min-width: 1200px) {
    .box {
      ${tw`mx-1/100 mb-5`}
      flex: 1 1 48%;
    }
  }
`
const SectionCantAfford = styled(Section)`
  ${section};

  ${tw`bg-primaryDarker text-white`}
`

export default function GoogleKeywordRankCheckerTool() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="Google Keyword Rank Checker Tool | Nozzle’s Rank Tracker and SERP Monitoring Tool"
        description="Nozzle’s Google rank tracker tool provides all the SERP data to direct your SEO strategy. Prepare to have your mind blown!"
      />
      <main>
        <SectionKnowEverything>
          <Left>
            <H2>Enterprise-level Google Rank Checker</H2>
            <P>
              The keyword tracker tool that collects all of the data from every
              SERP that is important to you
            </P>
            <Link href="/trial">
              <Button color="success" burst>
                Start Free Trial!
              </Button>
            </Link>
          </Left>
          <Right>
            <Img
              src={require('public/img/dashboard.png')}
              alt="Enterprise website keyword rank tracker tool dashboard"
            />
          </Right>
        </SectionKnowEverything>
        <SectionBoxes>
          <Container>
            <div className="-header">
              <H2>
                Nozzle provides all the SERP data to help guide your SEO
                strategy
              </H2>
            </div>
            <div className="boxes">
              <div className="box">
                <H4>Analyze the whole SERP</H4>
                <div className="-image">
                  <Img
                    src={require('public/img/wholeSerp.png')}
                    alt="Analyze the whole SERP with Nozzle's Google rank tracker tool"
                  />
                </div>
                <div className="content">
                  <P>
                    Each SERP contains loads of information that can be useful
                    in guiding SEO strategy. Nozzle will provide you with all of
                    Google’s SERP data.
                  </P>
                </div>
              </div>
              <div className="box">
                <H4>See who owns the most Featured Snippets</H4>
                <div className="-image">
                  <Img
                    src={require('public/img/featuredSnippets.jpg')}
                    alt="Track featured snippet competitors with Nozzle's Google search keyword rank checker"
                  />
                </div>

                <div className="content">
                  <P>
                    Easily find the keywords where your competitors currently
                    own the featured snippet and set your SEO strategy
                    accordingly to take over those spots.
                  </P>
                </div>
              </div>
              <div className="box">
                <H4>Extract all industry-related People Also Ask questions</H4>
                <div className="-image">
                  <Img
                    src={require('public/img/paaDashboard.jpg')}
                    alt="People Also Ask questions pulled by Nozzle's Google rank checker tool"
                  />
                </div>
                <div className="content">
                  <div>
                    <P>
                      The People Also Ask boxes contain the questions that your
                      target audience wants answers to. Find months of content
                      ideas in seconds to attract your target audience.
                    </P>
                  </div>
                </div>
              </div>
              <div className="box">
                <H4>
                  Find your top competitors across all your keyword groups
                </H4>
                <div className="-image">
                  <Img
                    src={require('public/img/competitorsAds.gif')}
                    alt="Competitor analysis using Nozzle’s Google keyword rank tracker"
                  />
                </div>

                <div className="content">
                  <P>
                    Discover which of your competitors own the most top 3, top
                    5, or top 10 positions across a huge keyword list. Only
                    spend time analyzing the competitors’ sites that are doing
                    the best in the SERPs.
                  </P>
                </div>
              </div>
            </div>
          </Container>
        </SectionBoxes>
        <SectionFeatures>
          <H2 full>Nozzle’s Rank Tracking and Reporting Features</H2>

          <Ul>
            <Li>Track unlimited competitors</Li>
            <Li>Monitor an unlimited amount of keywords</Li>
            <Li>Add keywords to as many keyword groups as you need</Li>
            <Li>
              See Pixels from Top, Above the Fold % (pixel coverage of the SERP
              page)!
            </Li>
            <Li>Convenient Data</Li>
            <Ul>
              <Li>Export your data with ease</Li>
              <Li>Stored in BigQuery</Li>
              <Li>Can be sent to any BI tool</Li>
            </Ul>
            <Li>Custom Scheduling</Li>
            <Ul>
              <Li>
                Monitor each keyword bucket depending on it’s priority (daily,
                weekly, monthly, custom)
              </Li>
            </Ul>
          </Ul>
        </SectionFeatures>
        <SectionCantAfford>
          <Left>
            <H2>Nozzle is the tool you need</H2>
            <H5>
              Take advantage of our{' '}
              <Link href="/features#data">superior, full SERP data</Link> to
              boost your Google rankings today!
            </H5>
            <Link href="/pricing">
              <Button burst>See Our Plans & Pricing</Button>
            </Link>{' '}
            <Link href="/trial">
              <Button color="success" burst>
                Try it out!
              </Button>
            </Link>
          </Left>
        </SectionCantAfford>
      </main>
    </div>
  )
}
