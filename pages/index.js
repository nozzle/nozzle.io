import React from 'react'
import styled, { css } from 'styled-components'
//
import Color from 'utils/Color'
import { angle } from 'utils/Styles'

import Head from 'components/Head'

import Link from 'next/link'
import {
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
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 10% 10%;
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

const layoutLeft = css`
  .left {
    flex: 2 1 200px;
    text-align: right;
    margin-right: 40px;
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
    margin-left: 40px;
    flex: 2 1 200px;
  }
`

const layoutLeftHalf = css`
  .left {
    flex: 1 1 300px;
    margin-right: 40px;
  }
  .right {
    flex: 1 1 300px;
  }
`

const layoutDark = css`
  background: ${props => props.theme.colors.primaryDarker};
  color: white;
`

const Centered = styled('div')`
  text-align: center;
  width: 100%;
`

const SectionKnowEverything = styled(Section)`
  ${section};
  ${layoutLeft};

  position: relative;
  background: radial-gradient(
    circle at center,
    ${props => props.theme.colors.primaryDarker} 20%,
    ${props => Color(props.theme.colors.primaryDarker).darken(10).toString()}
  );
  color: white;

  h4 {
    color: ${props => props.theme.colors.primaryLighter};
  }

  img {
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }

  .right {
    flex: 2 1 300px;
    img {
      max-width: 1500px;
      width: 220%;
    }
  }
`
const SectionTrackAllTheThings = styled(Section)`
  ${section};
  ${layoutDark};
  ${layoutRight};
  ${angle('right')};

  position: relative;

  .right {
    z-index: 0;
  }

  img {
    opacity: 1;
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0; 0; 0; 0.2);
  }

  iframe {
    width: 100%;
    height: 400px;
  }

  .allthethings {
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 400px;
    opacity: 0.2;
    z-index: 0;
  }
`
const SectionRankData = styled(Section)`
  ${section};
  ${layoutLeftHalf};
  .right {
    img {
      opacity: 1;
      max-width: 940px;
      width: 140%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .left {
    p {
      strong {
        color: ${props => props.theme.colors.primaryLighter};
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
      opacity: 1;
      max-width: 940px;
      width: 160%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .right {
    p {
      strong {
        color: ${props => props.theme.colors.primaryLighter};
      }
    }
  }
`
const SectionDataJunkie = styled(Section)`
  ${section};
  ${layoutRight};

  text-align: center;

  .csv,
  .sql {
    flex: 1 1 30%;
  }
  .main {
    flex: 1 1 34%;
    margin: 0 3%;
  }
  img {
    width: 250px;
    max-width: 100%;
  }
  ${belowTablet} {
    .csv,
    .sql,
    .main {
      flex: 1 1 100%;
      margin-bottom: 3rem;
    }
  }
`
const SectionSchedules = styled(Section)`
  ${section};
  ${layoutDark};
  ${angle('right')};

  align-items: center;
  text-align: center;

  p {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 900px;
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }
`
const SectionCantAfford = styled(Section)`
  ${section};
  ${layoutRight};

  .right {
    img {
      opacity: 1;
      max-width: 940px;
      width: 140%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
`

export default function Home() {
  const rankDataImages = [
    require('public/img/rank.png'),
    require('public/img/adrank.png'),
    require('public/img/pixelheight.png'),
  ]

  const [rankDataImageIndex, setRankDataImageIndex] = React.useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRankDataImageIndex(rankDataImageIndex => (rankDataImageIndex + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="Keyword Rank Tracker Tool - Enterprise SEO Keyword Rank Checker - Google SERP Website Rank Checker - Nozzle"
        description=" A keyword rank tracker offering you more enterprise level SERP data than ever before. If you want a rank checker with all the data, give Nozzle a test drive today."
      />
      <main>
        <SectionKnowEverything>
          <Left>
            <H2>Know everything Google knows</H2>
            <H4>And deal with it.</H4>
            <P>
              If you want access to more enterprise level SERP data than any
              tool has ever offered, you've come to the right place. SEO data
              nerds drool over our Google keyword rank tracker tool.
            </P>
            <Link href="/trial">
              <Button color="success" burst>
                I'd like a demo!
              </Button>
            </Link>
          </Left>
          <Right>
            <Img
              src={require('public/img/dashboard.jpg')}
              alt="Enterprise Keyword Rank Tracker Tool Dashboard"
            />
          </Right>
        </SectionKnowEverything>
        <SectionTrackAllTheThings>
          <Img
            className="allthethings"
            src={require('public/img/allthethings-white.png')}
          />
          <Left>
            <Centered>
              <H4>Don't just track the top result.</H4>
            </Centered>
            <Div>
              <Img
                src={require('public/img/the-matrix-organic-result-listing.JPG')}
                alt="Online SERP listing for The Matrix - SEO keyword rank monitoring"
              />
            </Div>
            <Div>
              <Centered>
                <H4>Get unlimited access to the entire SERP</H4>
              </Centered>
            </Div>
            <iframe
              title="Get unlimited access to the entire SERP"
              src="https://www.youtube.com/embed/Yz1hrFUF1gM?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </Left>
          <Right>
            <H2>Track all the things!</H2>
            <P>
              Most keyword rank checker tools just tell you the top ranking page
              on your website. We monitor your entire brand, including social
              media profiles and unlimited domain matches. There's a difference
              between knowing you're ranking #1 and owning the entire first
              page!
            </P>
            <P>
              Unlimited access doesn't just refer to today's SERP. We keep all
              your data FOREVER, so 3 years from now, you'll be able to look
              back and see what was ranking for "The Last Dance" in 2020.
            </P>
            <Link href="/trial">
              <Button color="success" burst>
                Start tracking today!
              </Button>
            </Link>{' '}
            <Link href="/features">
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
              <Strong>Pixels from Top, Above the Fold %, SERP %</Strong> and more!
            </H5>
            <P>
              With up to 4 ads and new SERP features showing up at the top, ranking #1 doesn’t mean what
              it used to. Nozzle won’t just tell you your keyword position down
              the search result page, we’ll tell you your ad adjusted rank, how
              many pixels down the page you are, whether a knowledge graph
              appeared and even what your prospective customer ate for
              breakfast.
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
            <Link href="/trial">
              <Button color="success" burst>
                Get the datas!
              </Button>
            </Link>
          </Left>
          <Right>
            <Img
              src={rankDataImages[rankDataImageIndex]}
              alt="Google Website Keyword Rank Checker that lists rank, ad adjusted rank, and pixel height"
            />
          </Right>
        </SectionRankData>
        <SectionCompetitors>
          <Left>
            <Img
              src={require('public/img/groupby.png')}
              alt="Enterprise Keyword Rank Checker Tool Dashboard"
            />
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
              Nozzle lets you track <Strong>unlimited competitors</Strong>, no
              questions asked. Heck, we'll let you track as much as you can
              handle. The SERP is yours to command!
            </P>
            <P>
              If you find a new competitor you haven't been tracking, add them
              and we'll even rewrite history for you. It'll be like you were
              monitoring them from the start!
            </P>
            <Link href="/trial">
              <Button color="success" burst>
                Show me my competitors!
              </Button>
            </Link>{' '}
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
              alt="Download keywords position data to CSV"
            />
          </div>
          <div className="main">
            <H3>A Data Junkie's Paradise</H3>
            <H5>CSV, SQL, API and BigQuery</H5>
            <P>
              Whether your thing is pivot tables or SQL JOIN's, you can access
              your data the way you're used to. Even better, we keep all your
              data forever, including the raw html. Consider it necessary
              tooling when dealing with millions of keywords. Nozzle truly is an online keyword rank tracker tool built for the ages.
            </P>
            <Link href="/trial">
              <Button color="success" burst>
                Fix me up with 1,000 keywords!
              </Button>
            </Link>{' '}
            <Link href="/features/#integration">
              <Button color="primary" burst>
                Show all integrations
              </Button>
            </Link>
          </div>
          <div className="sql">
            <Img
              src={require('public/img/sql.png')}
              alt="Access your Google search ranking data with SQL"
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
            and say hello to the online keyword rank checker tool that will become your
            new best friend. Track your most important keywords daily, hourly or
            even every 5 minutes. Keep an eye on thousands more by scheduling
            them weekly or monthly without breaking the bank.
          </P>
          <Centered>
            <Div>
              <Img
                src={require('public/img/schedules.png')}
                alt="SEO keyword rank tracker with customized scheduling feature"
              />
            </Div>
          </Centered>
          <Centered>
            <Link href="/trial">
              <Button color="success" burst>
                Give me flexibility, stat!
              </Button>
            </Link>{' '}
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
              A website rank checker with no minimum spend, no qualification
              calls, white-glove onboarding, & batteries included.
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
