import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
//
import Color from 'utils/Color'
import { angle } from 'utils/Styles'

import Head from 'components/Head'

import Link from 'next/link'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  Ul,
  Li,
  Img,
  Div,
  Button,
  Strong,
} from 'components/Html'

const belowMobile = `@media(max-width: ${700}px)`
const belowTablet = `@media(max-width: ${1000}px)`

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

const layoutRight = css`
  .left {
    flex: 3 1 300px;
  }
  .right {
    ${tw`ml-10`}
    flex: 2 1 200px;
  }
`

const layoutLeftHalf = css`
  .left {
    ${tw`mr-10 flex-300`}
  }
  .right {
    ${tw`flex-300`}
  }
`

const layoutDark = css`
  ${tw`bg-primaryDarker text-white`}
`

const Centered = styled('div')`
  ${tw`text-center w-full`}
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
  }
`
const SectionTrackAllTheThings = styled(Section)`
  ${section};
  ${layoutDark};
  ${layoutRight};
  ${tw`relative`}

  .right {
    ${tw`z-0`}
  }

  img {
    ${tw`opacity-100 rounded shadow-2xl`}
  }

  .allthethings {
    ${tw`absolute right-0 -bottom-1 opacity-20 z-0 w-96`}
  }
`
const SectionRankData = styled(Section)`
  ${section};
  ${layoutLeftHalf};

  .left {
    p {
      strong {
        ${tw`text-primaryLighter`}
      }
    }
  }
`
const SectionCompetitors = styled(Section)`
  ${section};
  ${layoutLeft};
  ${layoutDark};
  ${angle('right')};

  .left {
    direction: rtl;
    img {
      ${tw`opacity-100 max-w-4xl rounded shadow-2xl`}
      width: 160%;
    }
  }
  .right {
    p {
      strong {
        ${tw`text-primaryLighter`}
      }
    }
  }
`
const SectionDataJunkie = styled(Section)`
  ${section};
  ${layoutRight};
  ${tw`text-center`}

  .csv,
  .sql {
    flex: 1 1 30%;
  }
  .main {
    ${tw`mx-3/100`}
    flex: 1 1 34%;
  }
  img {
    ${tw`w-64 max-w-full`}
  }
  ${belowTablet} {
    .csv,
    .sql,
    .main {
      ${tw`flex-100 mb-12`}
    }
  }
`
const SectionCustomers = styled(Section)`
  ${tw`z-0`}
  .inner {
    ${tw`mx-auto flex gap-10 flex-wrap items-center justify-center max-w-default py-2 px-5/100`}
  }

  img {
    ${tw`opacity-60 `}

    -webkit-filter: grayscale(100%) brightness(60%) contrast(10000000%);
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .bigLogo {
    ${tw`w-24`}
    max-width: 90px;
  }

  ${belowTablet} {
    img {
      ${tw`m-1 w-24 flex-grow`}
    }
  }
`
const SectionSchedules = styled(Section)`
  ${section};
  ${layoutDark};
  ${angle('right')};

  ${tw`items-center text-center`}

  p {
    ${tw`max-w-4xl mx-auto`}
  }

  img {
    ${tw`max-w-full rounded shadow-2xl`}
    width: 900px;
  }
`
const SectionCantAfford = styled(Section)`
  ${section};
  ${layoutRight};
`

export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="SEO Enterprise Rank Tracker - A Keyword Rank Tracking Tool Like No Other - Nozzle.io"
        description="A keyword rank tracker offering you more enterprise level SERP data than ever before. If you want an SEO rank tracker with all the data, give Nozzle a test drive today."
      />
      <main>
        <SectionKnowEverything>
          <Left>
            <H1>Know everything Google knows</H1>
            <H4>And deal with it.</H4>
            <P>
              If you want access to more enterprise level SERP data than any
              tool has ever offered, you've come to the right place. SEO data
              nerds drool over our Google keyword rank tracker tool.
            </P>
            <a href="https://app.nozzle.io/sign-up">
              <Button color="success" burst>
                I'd like a demo!
              </Button>
            </a>
          </Left>
          <Right>
            <div css={tw`block w-[200%] max-w-[1500px] `}>
              <Img
                src={require('public/img/dashboard.png')}
                alt="Enterprise Keyword Rank Tracker Tool Dashboard"
                layout="responsive"
                width="1280"
                height="778"
                priority={true}
              />
            </div>
          </Right>
        </SectionKnowEverything>
        <SectionCustomers>
          <Img
            src={require('public/img/mayoClinic.png')}
            alt="Mayo Clinic"
            width="160"
            height="160"
          />

          <Img
            src={require('public/img/homeDepot.png')}
            alt="Home Depot"
            width="160"
            height="34"
          />

          <Img
            src={require('public/img/apartmentsdotcom.png')}
            alt="Apartments.com"
            width="160"
            height="24"
          />

          <Img
            src={require('public/img/bankrate.svg')}
            alt="Bankrate"
            className="bigLogo"
            width="90"
            height="90"
          />

          <Img
            src={require('public/img/turo.png')}
            alt="Turo"
            className="bigLogo"
            width="90"
            height="46"
          />
          <Img
            src={require('public/img/locomotiveAgency.png')}
            className="bigLogo"
            alt="Locomotive Agency"
            width="90"
            height="80"
          />
        </SectionCustomers>
        <SectionTrackAllTheThings>
          <div css={tw`absolute bottom-0 right-0`}>
            <Img
              className="allthethings"
              src={require('public/img/allthethings-white.png')}
              alt="cheering seo guy"
              width="384"
              height="380"
            />
          </div>
          <Left>
            <Centered>
              <H4>Don't just track the top result.</H4>
            </Centered>
            <Div>
              <Img
                src={require('public/img/the-matrix-organic-result-listing.JPG')}
                alt="Online SERP listing for The Matrix - Online SEO rank tracker tool"
                width="600"
                height="100"
              />
            </Div>
            <Div>
              <Centered>
                <H4>Get unlimited access to the entire SERP</H4>
              </Centered>
            </Div>
            <LiteYouTubeEmbed id="Yz1hrFUF1gM" poster="maxresdefault" params="enablejsapi=1" />
          </Left>
          <Right>
            <H2>Track all the things!</H2>
            <P>
              Most SEO keyword rank tracker tools just tell you the top ranking
              page on your website. We monitor your entire brand, including
              social media profiles and unlimited domain matches. There's a
              difference between knowing you're ranking #1 and owning the entire
              first page!
            </P>
            <P>
              Unlimited access doesn't just refer to today's SERP. We keep all
              your data FOREVER, so 3 years from now, you'll be able to look
              back and see what was ranking for "The Last Dance" in 2020.
            </P>
            <a href="https://app.nozzle.io/sign-up">
              <Button color="success" burst>
                Start tracking today!
              </Button>
            </a>{' '}
            <Link href="/features" prefetch={false}>
              <Button color="primary" burst>
                How does it work?
              </Button>
            </Link>
          </Right>
        </SectionTrackAllTheThings>
        <SectionRankData>
          <Left>
            <H2 color="primaryDark">Rank data you can only find at Nozzle</H2>
            <H5 weight="regular">
              In addition to <Strong>Rank</Strong>, track results by{' '}
              <Strong>Pixels from Top, Above the Fold %, SERP %</Strong> and
              more!
            </H5>
            <P>
              With up to 4 ads and new SERP features showing up at the top,
              ranking #1 doesn’t mean what it used to. Nozzle won’t just tell
              you your keyword position down the search result page, we’ll tell
              you your ad adjusted rank, how many pixels down the page you are,
              whether a knowledge graph appeared and even what your prospective
              customer ate for breakfast.
            </P>
            <P>
              We include <Strong>over 400+ data points</Strong> for{' '}
              <Strong>every result on the serp</Strong> - no extra cost!
            </P>
            <Ul>
              <Li>search volume</Li>
              <Li>estimated traffic</Li>
              <Li>social shares</Li>
              <Li>video publisher name</Li>
              <Li>inbound links</Li>
              <Li>product ad pricing</Li>
              <Li>sitelinks</Li>
              <Li>star ratings</Li>
              <Li>but wait, there's more...</Li>
            </Ul>
            <p />
            <Link href="/features/#data">
              <Button burst>See the complete list</Button>
            </Link>{' '}
            <a href="https://app.nozzle.io/sign-up">
              <Button color="success" burst>
                Get the datas!
              </Button>
            </a>
          </Left>
          <Right>
            <div
              css={tw`w-[140%] block opacity-100 rounded shadow-2xl max-w-4xl`}
            >
              <Img
                src={require('/public/img/RankData.png')}
                alt="Google Website SEO Keyword Rank Tracker that lists rank, ad adjusted rank, and pixel height"
                layout="responsive"
                width="580"
                height="470"
              />
            </div>
          </Right>
        </SectionRankData>
        <SectionCompetitors>
          <Left>
            <div css={tw`block w-[160%]  opacity-100 rounded shadow-2xl`}>
              <Img
                src={require('/public/img/groupby.png')}
                alt="Enterprise Online SEO Keyword Rank Tracker Tool Dashboard"
                layout="responsive"
                width="680"
                height="400"
              />
            </div>
          </Left>
          <Right>
            <H3>
              Squash your competitors... even the ones you don't know about yet
            </H3>
            <H5 weight="regular">
              See share of voice by{' '}
              <Strong color="primaryLighter">
                Domain, Subdomain, URL, and Brand
              </Strong>
            </H5>
            <P>
              Nozzle is a full{' '}
              <Link href="/features">serp monitoring tool</Link> that lets you
              track <Strong>unlimited competitors</Strong>, no questions asked.
              Heck, we'll let you track as much as you can handle. The SERP is
              yours to command!
            </P>
            <P>
              If you find a new competitor you haven't been tracking, add them
              and we'll even rewrite history for you. It'll be like you were
              monitoring them from the start!
            </P>
            <a href="https://app.nozzle.io/sign-up">
              <Button color="success" burst>
                Show me my competitors!
              </Button>
            </a>{' '}
            <Link href="/features/#competition">
              <Button color="primary" burst>
                How does it work?
              </Button>
            </Link>
          </Right>
        </SectionCompetitors>
        <SectionDataJunkie>
          <div className="csv">
            <Img
              src={require('public/img/csv.png')}
              alt="Download online SEO keywords position data to CSV"
              width="250"
              height="215"
            />
          </div>
          <div className="main">
            <H3>A Data Junkie's Paradise</H3>
            <H5>CSV, SQL, API and BigQuery</H5>
            <P>
              Whether your thing is pivot tables or SQL JOIN's, you can access
              your data the way you're used to. Even better, we keep all your
              data forever, including the raw html. Consider it necessary
              tooling when dealing with millions of keywords. Nozzle truly is an
              online keyword rank tracker tool built for the ages.
            </P>
            <a href="https://app.nozzle.io/sign-up">
              <Button color="success" burst>
                Fix me up with 1,000 keywords!
              </Button>
            </a>{' '}
            <Link href="/features/#integration">
              <Button color="primary" burst>
                Show all integrations
              </Button>
            </Link>
          </div>
          <div className="sql">
            <Img
              src={require('public/img/sql.png')}
              alt="Access your Google SEO keyword rank tracker data with SQL"
              width={250}
              height={215}
            />
          </div>
        </SectionDataJunkie>
        <SectionSchedules>
          <H2 full>
            Get rankings on <em>your</em> schedule
          </H2>
          <P>
            Not all keywords are created equal. You're probably paying too much
            to track your long-tail keywords daily or you're only getting weekly
            data for your money making head terms. Say goodbye to those tools
            and say hello to the online keyword rank tracker tool that will
            become your new best friend. Track your most important keywords
            daily, hourly or even every 5 minutes. Keep an eye on thousands more
            by scheduling them weekly or monthly without breaking the bank.
          </P>
          <Centered>
            <Div>
              <Img
                src={require('public/img/schedules.png')}
                alt="SEO keyword rank tracker with customized scheduling feature"
                width="835"
                height="456"
              />
            </Div>
          </Centered>
          <Centered>
            <a href="https://app.nozzle.io/sign-up">
              <Button color="success" burst>
                Give me flexibility, stat!
              </Button>
            </a>{' '}
            <Link href="/features/#scheduling">
              <Button color="primary" burst>
                Why does it matter?
              </Button>
            </Link>
          </Centered>
        </SectionSchedules>
        <SectionCantAfford>
          <Left>
            <H2>You can't afford to not try Nozzle</H2>
            <H5>
              An{' '}
              <a href="https://nozzle.io/google-keyword-rank-checker-tool">
                SEO rank checker
              </a>{' '}
              with no minimum spend, no qualification calls, customized
              scheduling options, ALL the SERP data, & batteries included.
            </H5>
            <Link href="/pricing">
              <Button burst>See Our Plans & Pricing</Button>
            </Link>{' '}
            <a href="https://app.nozzle.io/sign-up">
              <Button color="success" burst>
                Try it out!
              </Button>
            </a>
          </Left>
        </SectionCantAfford>
      </main>
    </div>
  )
}
