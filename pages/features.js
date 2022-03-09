import React from 'react'
import styled, { css, keyframes } from 'styled-components'
//
import { angle } from 'utils/Styles'

import Head from 'components/Head'

import Link from 'next/link'
import Icon from 'components/Icon'
import tw from 'twin.macro'

import {
  Button,
  H2,
  H4,
  H5,
  H6,
  P,
  Strong,
  Span,
  Ul,
  Li,
  Img,
} from 'components/Html'
import { Container, Center } from 'components/Layout'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const below900 = '@media screen and (max-width: 900px)'

const FeaturesNav = props => (
  <nav {...props}>
    <div className="inner">
      <ul data-gumshoe>
        <li>
          <AnchorLink href="#brands">Brand Monitoring</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#competition">Competitive Analysis</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#scheduling">Scheduling</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#data">Data</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#agencies">Agency Tools</AnchorLink>
        </li>
        {/* <li>
          <AnchorLink href="#reputation">Reputation Management</AnchorLink>
        </li> */}
        <li>
          <AnchorLink href="#integrations">Integrations</AnchorLink>
        </li>
      </ul>
    </div>
  </nav>
)

const FeaturesNavDiv = styled(FeaturesNav)`
  ${tw`sticky w-full left-0 p-0 text-center overflow-hidden bg-subNav top-13`}
  z-index: 999;

  .inner {
    ${tw`relative overflow-hidden`}
    height: 200%;
  }
  ul {
    ${tw`m-0 p-0 inline-block`}
  }
  li {
    ${tw`inline-block`}
    a {
      ${tw`block opacity-100 text-white transition-all py-4 px-2.5`}
    }
  }
  + * {
    ${tw`pt-12`}
  }

  ${below900} {
    ${tw`h-12`}
    &:after {
      ${tw`absolute top-0 left-0 w-full h-full pointer-events-none`}
      content: '';
      background: linear-gradient(
        to right; transparent; transparent 60%; rgba(0; 0; 0; 0.7)
      );
    }
    .inner {
      ${tw`overflow-scroll`}
      height: 200%;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        ${tw`hidden`}
      }
    }
    ul {
      ${tw`whitespace-nowrap`}
    }
  }

  @media screen and (min-width: 1300px) {
    .subNav {
      ${tw`px-1/10`}
    }
  }
`

const section = css`
  ${tw`py-1/10 px-5`}
`

const imageSwapAnimation = keyframes`
  0%, 40% {
    ${tw`opacity-0`}
    
  }
  60%, 100% {
    ${tw`opacity-100`}
  }
`

const SectionBrandsCmp = props => (
  <section {...props}>
    <Container>
      <H2 className="badge">
        <Strong>
          <Span>Brand</Span>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
          <div className="line4" />
        </Strong>
        <Span>Tracking &amp; Monitoring</Span>
      </H2>
      <div className="images">
        <div className="domain-wrap">
          <H4>Other Search Engine Position Trackers</H4>
          <div className="domain">
            <div className="img">
              <img
                src={require('public/img/domainEdit.png')}
                alt="SERP listing for CNN other position trackers"
              />
              <img
                src={require('public/img/cnn-small.png')}
                alt="SERP listing for CNN other position trackers"
              />
            </div>
          </div>
        </div>
        <div className="vs">
          <Span>VS</Span>
        </div>
        <div className="brand-wrap">
          <img src={require('public/img/logo-blue.png')} alt="nozzle logo" />
          <div className="brand">
            <div className="img">
              <img
                src={require('public/img/brandEdit.png')}
                alt="SERP result for CNN nozzle tracking"
              />
              <img
                src={require('public/img/cnn.png')}
                alt="SERP result for CNN nozzle tracking"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="one">
        <H4>100% SERP Visibility</H4>
        <P>
          With other SERP tracking tools, you are tied to a single domain, but
          with Nozzle,{' '}
          <Strong>
            you can track as many search engine rank positions as you want.
          </Strong>{' '}
          We make this easy by using Brands, Properties, and URLs instead of
          single domains. If that's not enough, we even let you build custom
          rules to get as specific as you want! These features allow Nozzle to
          perform powerful competitive analysis between other brands, individual
          properties, and even URLs.
        </P>
      </div>
      <div className="two">
        <H4>Use Cases</H4>
        <Ul>
          <Li>
            Track{' '}
            <Strong>
              external blogs, PR releases, guest posts on external domains,
              Quora results
            </Strong>
          </Li>
          <Li>
            Track <Strong>using Custom Rules</Strong>
          </Li>
          <Li>Automatic &amp; Dynamic Competitive Views</Li>
        </Ul>
      </div>
      <Center>
        <a href="https://app.nozzle.io/sign-up">
          <a>
            <Button color="success" burst>
              Start tracking today!
            </Button>
          </a>
        </a>
      </Center>
    </Container>
  </section>
)

const SectionBrands = styled(SectionBrandsCmp)`
  ${section};
  ${tw`pt-60`}

  .badge {
    > strong,
    > span {
      ${tw`inline-block`}
    }
    > span {
      ${tw`flex text-left pt-3`}
    }

    > strong {
      ${tw`float-left relative text-white shadow-xl bg-primaryDark rounded pt-2.5 px-3 pb-16 mx-1`}

      div {
        ${tw`absolute h-2.5 left-2.5 rounded z-1`}

        &.line1 {
          ${tw`top-14 w-4/5 bg-primaryLight`}
        }
        &.line2 {
          ${tw`w-2/5 bg-success`}
          top: 69px;
        }
        &.line3 {
          ${tw`w-2/3 bg-danger`}
          top: 82px;
        }
        &.line4 {
          ${tw`w-1/5 bg-warning`}
          top: 95px;
        }
      }
    }
  }
  .images {
    ${tw`pt-14 flex flex-row justify-between flex-wrap items-center mb-14`}
  }
  .domain-wrap,
  .brand-wrap {
    ${tw`mx-auto w-full block max-w-xl z-1 flex-100`}
  }
  .domain-wrap .domain,
  .brand-wrap .domain,
  .domain-wrap .brand,
  .brand-wrap .brand,
  .domain-wrap .img,
  .brand-wrap .img {
    ${tw`relative`}
  }
  .domain-wrap .img img,
  .brand-wrap .img img {
    ${tw`absolute top-0 left-0 w-full shadow-xl rounded-lg`}
  }
  .domain-wrap .img img:last-child,
  .brand-wrap .img img:last-child {
    animation: ${imageSwapAnimation} 4s linear infinite alternate;
  }
  .domain-wrap h4 {
    ${tw`text-center mb-4 text-gray-500`}
  }
  .domain:after {
    content: '';
    padding-top: 18.69%;
    ${tw`block`}
  }
  .vs {
    ${tw`z-0 flex items-center justify-center text-white text-xl font-bold leading-none my-12`}
    flex: 0 0 100%;

    span {
      ${tw`relative rounded-lg pt-3 px-2.5 pb-2.5 bg-gray-600`}

      :after {
        ${tw`block absolute top-1/2 w-36 h-0.5 left-full bg-gray-300`}
        content: '';
        transform: translateY(-50%);
      }
      :before {
        ${tw`block absolute top-1/2 w-36 h-0.5 right-full bg-gray-300`}
        content: '';
        transform: translateY(-50%);
      }
    }
  }
  .brand-wrap > img {
    ${tw`block w-48 mx-auto mb-5`}
  }
  .brand:after {
    ${tw`block`}
    content: '';
    padding-top: 76.16%;
  }
  .one {
    ${tw`block mx-auto max-w-full text-center mb-8`}
    width: 700px;
  }
  .two {
    ${tw`block mx-auto max-w-full text-center mb-8`}
    width: 500px;
    h4 {
      ${tw`mb-5`}
    }
  }
  @media screen and (min-width: 900px) {
    > h2 {
      ${tw`mb-14`}

      strong {
        ${tw`inline-block mx-2.5`}
      }
      span {
        ${tw`inline-block`}
      }
    }
    .images {
      ${tw`flex-row`}
      .domain-wrap,
      .brand-wrap {
        flex: 1 1 40%;
      }
      .vs {
        ${tw`mt-24`}
        flex: 1 1 10%;
      }
    }
  }
`

const SectionCompetitionCmp = props => (
  <section {...props}>
    <Container>
      <H2>
        <Img
          src={require('public/img/competitorWaves.png')}
          width="256"
          height="45"
        />
        <div>Competitive Analysis</div>
      </H2>
      <div className="one">
        <div className="left">
          <Img
            src={require('public/img/brands.png')}
            alt="SERP tracking tool detailed competitors analysis"
            width="611"
            height="335"
          />
        </div>
        <div className="right">
          <H4>Unlimited competitors for free.</H4>
          <P>
            As opposed to tracking individual domains, tracking brands makes it
            easy to monitor their every move. You can do this by{' '}
            <Strong>brand, property or even URL</Strong> to get aggregated or
            detailed comparisons as needed.
          </P>
        </div>
      </div>
      <div className="two">
        <div className="left">
          <Img
            src={require('public/img/domains.png')}
            alt="Unknown competitors analysis with historical data rewriting"
            width="611"
            height="335"
          />
        </div>
        <div className="right">
          <H4>Share of Voice &amp; Rewriting History</H4>
          <P>
            Don't know who your competitors are? Just take a look at our
            share-of-voice dashboard to immediately detect unknown competitors
            by <Strong>Domain, Subdomain, and URL</Strong>. If you like what you
            see, add them as a named competitor and we will{' '}
            <Strong>rewrite all of your historical data</Strong> to include your
            newfound competition! It's like having a time machine!
          </P>
        </div>
      </div>
      <Center>
        <a href="https://app.nozzle.io/sign-up">
          <Button color="success" burst>
            Show My Competitors
          </Button>
        </a>
      </Center>
    </Container>
  </section>
)

const SectionCompetition = styled(SectionCompetitionCmp)`
  ${section};
  ${angle('right')};
  ${tw`bg-primaryDarker text-white`}
  h2 {
    ${tw`text-center pb-12`}

    img {
      ${tw`w-64 mb-5`}
    }
  }
  strong {
    ${tw`text-primaryLighter`}
  }
  .one,
  .two {
    ${tw`flex flex-row flex-wrap items-center justify-center text-center mb-10`}
    flex: 1 0 auto;
  }
  .one > div,
  .two > div {
    ${tw`p-5 flex-100`}
  }
  .one img,
  .two img {
    ${tw`shadow-2xl rounded`}
  }
  @media screen and (min-width: 900px) {
    .one,
    .two {
      ${tw`flex-row`}
      flex: 1 0 auto;
    }
    .one > div,
    .two > div {
      flex: 0 0 50%;
    }
    .one .right {
      ${tw`text-left`}
    }
    .one .left {
      ${tw`text-right`}
    }
    .two {
      ${tw`text-right`}
      > .right {
        ${tw`order-first`}
      }
    }
    .two .left {
      ${tw`text-left`}
    }
  }
`

const SectionSchedulingCmp = props => (
  <section {...props}>
    <Container>
      <Center>
        <Img
          src={require('public/img/scheduleDots.png')}
          width="256"
          height="23"
        />
        <H2>Flexible Scheduling</H2>
        <H6>
          Not all keywords are created equal. Thankfully, Nozzle is{' '}
          <Strong>
            the first and only search engine position tool to offer flexible and
            real-time schedules
          </Strong>
          . Instead of forcing you to pay the same price to track your long-tail
          keywords as your head terms, Nozzle lets you split your keywords into
          as many different scheduling buckets as you want.{' '}
        </H6>
        <Img
          src={require('public/img/schedules.png')}
          className="scheduleImg"
          alt="Monitor keyword rankings with customized scheduling feature"
          width="750"
          height="409"
        />
        <P>
          This way, you can{' '}
          <Strong>closely monitor your most important keywords</Strong> daily,
          hourly or even every 5 minutes, but still{' '}
          <Strong>keep an eye on thousands more</Strong> by scheduling them
          weekly or monthly without breaking the bank.
        </P>
        <a href="https://app.nozzle.io/sign-up">
          <Button color="success" burst>
            Try Flexible Scheduling
          </Button>
        </a>
      </Center>
    </Container>
  </section>
)
const SectionScheduling = styled(SectionSchedulingCmp)`
  ${section};

  img {
    ${tw`block w-64 mx-auto mb-5`}
  }
  h2 {
    ${tw`text-center mb-12`}
  }
  h6 {
    ${tw`max-w-full`}
    width: 800px;
  }
  .scheduleImg {
    width: 750px;
  }
  p {
    ${tw`max-w-full`}
    width: 600px;
  }
`

const SectionDataCmp = props => (
  <section {...props}>
    <Container>
      <div className="-header">
        <H2 className="-one">Serp</H2>
        <img src={require('public/img/serp.png')} alt="serp funnel" />
        <H2 className="-two">Data</H2>
      </div>
      <Center>
        <H6 className="description">
          Out of the box, Nozzle can show you data you've probably only imagined
          in your wildest dreams.{' '}
          <Strong>Ad-adjusted rank, pixel height,</Strong> and even{' '}
          <Strong> click-to-call phone numbers</Strong> are just a few examples
          of the immense detail we give you on the SERP. Honestly, we can't wait
          to see what you can do with it!
        </H6>
      </Center>
      <div className="boxes">
        <div className="box -metrics">
          <H4>
            <Icon i="gauge" /> Metrics
          </H4>
          <div className="-image">
            <Img
              src={require('public/img/metrics.png')}
              width="408"
              height="191"
            />
          </div>
          <div className="content">
            <ul>
              <li>Estimated Traffic</li>
              <li>PPC Value</li>
              <li>Search Volume</li>
            </ul>
            <P>
              Advanced metrics that go above and beyond to help identify and{' '}
              <Strong>assign dollar amounts and revenue to your SEO</Strong>
            </P>
          </div>
        </div>
        <div className="box -data">
          <H4>
            <Icon i="trophy" /> Rank
          </H4>
          <div className="-image">
            <Img
              src={require('public/img/rank-wide.png')}
              width="408"
              height="191"
            />
          </div>
          <div className="content">
            <ul>
              <li>Pixels from Top</li>
              <li>Ad-adjusted Rank</li>
              <li>Blended Rank</li>
            </ul>
            <P>
              Blended Rank is expected from any rank tracker, but at Nozzle we
              don't think that's enough. <Strong>Ad-adjusted Rank</Strong> and{' '}
              <Strong>Pixels from Top of page</Strong> are new and powerful
              metrics unique to Nozzle, and will surely put your rank tracking
              above your competitors.
            </P>
          </div>
        </div>
        <div className="box -keywordGroups">
          <H4>
            <Icon i="bullseye" /> Keyword Groups
          </H4>
          <div className="-image">
            <Img
              src={require('public/img/keywordGroups.png')}
              width="408"
              height="191"
            />
          </div>
          <div className="content">
            <ul>
              <li>Group-level Scheduling</li>
              <li>Pay Once, Use Anywhere</li>
              <li>Bulk-Keyword Management</li>
            </ul>
            <div>
              <P>
                Nozzle takes keyword groups to a whole new level with{' '}
                <Strong>
                  group-driven performance dashboards, drill-through, and
                  comparison
                </Strong>
                . If that wasn't cool enough, you can place keywords in{' '}
                <Strong>as many groups as you want</Strong>, and only pay{' '}
                <Strong>once</Strong>
              </P>
            </div>
          </div>
        </div>
        <div className="box -globalLocal">
          <H4>
            <Icon i="marker" /> Global &amp; Local
          </H4>
          <div className="-image">
            <Img
              src={require('public/img/location.png')}
              width="408"
              height="191"
            />
          </div>
          <div className="content">
            <ul>
              <li>Any Engine</li>
              <li>Any Country</li>
              <li>Any Location</li>
            </ul>
            <P>
              To <Strong>understand your audience</Strong>, you need to search
              like your audience. Want the results from a mobile Google search
              at that famous coffee shop in downtown London? We've got them.
            </P>
          </div>
        </div>
        <div className="box -mozSocial">
          <H4>
            <Icon i="mobile" /> Devices &amp; OS
          </H4>
          <div className="-image">
            <Img
              src={require('public/img/devices.png')}
              width="408"
              height="191"
            />
          </div>
          <div className="content">
            <ul>
              <li>Desktop, Tablet, Mobile</li>
              <li>Windows, MacOS, iOS, Android</li>
              <li>App Store, Play Store</li>
            </ul>
            <P>
              Track your rankings at the deepest level of user engagement with
              Nozzle's powerful <Strong>device, OS, and platform</Strong>{' '}
              options. Uncover untapped marketing opportunities and beat the
              competition from every angle.
            </P>
          </div>
        </div>
        <div className="box -ads">
          <H4>
            <Icon i="dollar" /> Ads
          </H4>
          <div className="-image">
            <Img src={require('public/img/abs.png')} width="408" height="191" />
          </div>
          <div className="content">
            <ul>
              <li>AdWords</li>
              <li>Ad Extensions</li>
              <li>Product Listing Ads (PLA)</li>
            </ul>
            <P>
              Get up close and personal with paid results and{' '}
              <Strong>discover how they affect</Strong> your results day to day.
            </P>
          </div>
        </div>
      </div>
      <Center>
        <a href="https://app.nozzle.io/sign-up">
          <Button color="success" burst>
            Get the Datas!
          </Button>
        </a>
      </Center>
    </Container>
  </section>
)

const SectionData = styled(SectionDataCmp)`
  ${section};
  ${angle('right')};
  ${tw`bg-primaryDarker text-white`}

  .-header {
    h2,
    img {
      ${tw`mx-auto block text-center`}
    }

    img {
      ${tw`w-56`}
    }
  }
  .description {
    ${tw`max-w-2xl mx-auto mb-10`}
  }
  .boxes {
    ${tw`flex flex-wrap`}
  }
  .box {
    ${tw`mb-5 bg-white rounded flex flex-col flex-wrap flex-100`}
    color: initial;

    h4 {
      ${tw`p-2.5 font-bold text-center text-gray-700 border-b border-solid border-gray-200 mt-2.5 mx-0 mb-0`}

      i {
        ${tw`mr-2`}

        :before {
          ${tw`inline-block`}
          transform: scale(1.3);
        }
      }
    }
    .-metrics {
      i {
        ${tw`text-success`}
      }
      li:before {
        ${tw`bg-success`}
      }
    }
    .-data {
      i {
        ${tw`text-danger`}
      }
      li:before {
        ${tw`bg-danger`}
      }
    }
    .-keywordGroups {
      i {
        ${tw`text-primaryLight`}
      }
      li:before {
        ${tw`bg-primaryLight`}
      }
    }
    .-globalLocal {
      i {
        color: #f76f00;
      }
      li:before {
        background-color: #f76f00;
      }
    }
    .-mozSocial {
      i {
        color: #c300a4;
      }
      li:before {
        background-color: #c300a4;
      }
    }
    .-ads {
      i {
        ${tw`text-bing`}
      }
      li:before {
        ${tw`bg-bing`}
      }
    }
    .-image {
      ${tw`relative w-full`}

      :before {
        content: '';
        ${tw`absolute inset-0 z-1`}
        boxshadow: inset 0 40px 40px -40px rgba(0, 0, 0, 0.3),
          inset 0 -40px 40px -40px rgba(0, 0, 0, 0.3);
      }
      img {
        ${tw`block mx-auto z-0`}
      }
    }
    .content {
      ${tw`flex flex-row flex-wrap items-start py-5 px-2.5`}
      justify-content: stretch;
      > * {
        flex: 1 1 50%;
      }
    }
    p {
      ${tw`m-0 pt-2.5 pr-2.5`}
    }
    ul {
      ${tw`text-lg font-semibold text-text`}
    }
    li {
      ${tw`relative pt-2.5 px-2.5 pb-7`}

      :before {
        content: '';
        ${tw`absolute w-3 h-3 left-3 top-1/2 rounded`}
        transform: translateY(-50%);
      }
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
      flex: 1 1 31%;
    }
  }
`

const SectionAgenciesCmp = props => (
  <section {...props}>
    <Container>
      <img src={require('public/img/agency.png')} alt="Agency Tools" />
      <H2>Agency Tools</H2>
      <div className="wrap">
        <div className="one">
          <Img
            src={require('public/img/teams.png')}
            alt="Bulk serp tracker for agency management"
            width="384"
            height="288"
          />
        </div>
        <div className="two">
          <H4>Manage your agency like a boss.</H4>
          <Ul className="list">
            <Li>Segment Projects &amp; Clients</Li>
            <Li>Aggregated views and bulk keyword management</Li>
            <Li>Unlimited users at no extra charge</Li>
          </Ul>
          <br />
          <br />
          <a href="https://app.nozzle.io/sign-up">
            <Button color="success" burst>
              Try it out!
            </Button>
          </a>
        </div>
      </div>
    </Container>
  </section>
)

const SectionAgencies = styled(SectionAgenciesCmp)`
  ${section};
  img {
    ${tw`block w-52 mx-auto mb-5`}
  }
  h2 {
    ${tw`text-center`}
    margin: 0 0 70px;
  }
  .wrap {
    ${tw`flex flex-col items-center justify-center`}
  }
  .one {
    ${tw`text-center`}
    margin: 0 0 70px;
    img {
      ${tw`w-96 shadow-2xl rounded`}
    }
  }
  .two {
    ${tw`text-xl text-center`}

    h4 {
      ${tw`mb-5`}
    }
    ul {
      ${tw`inline-block text-left`}
    }
  }
  @media screen and (min-width: 900px) {
    .wrap {
      ${tw`flex-row`}

      .one,
      .two {
        flex: 1 1 50%;
      }
      .one {
        ${tw`m-0`}
      }
      .two {
        ${tw`text-left p-5`}
      }
    }
  }
`

const SectionReputationCmp = props => (
  <section {...props}>
    <Container>
      <Img src={require('public/img/reputation.png')} />
      <H2>Reputation Management</H2>
      <div className="wrap">
        <div className="one">
          <H4>Keep the "you know what" from hitting the fan.</H4>
          <div>
            <Ul>
              <Li>Track and discover both positive and negative domains</Li>
              <Li>Get notified when they enter or exit any page or position</Li>
              <Li>Preventative - Catch negative sites before they rank high</Li>
            </Ul>
          </div>
          <a href="https://app.nozzle.io/sign-up">
            <Button color="success" burst>
              Show My Trends
            </Button>
          </a>
        </div>
        <div className="two">
          <Img
            src={require('public/img/reputationChange.png')}
            alt="SERP monitoring for reputation management"
          />
        </div>
      </div>
    </Container>
  </section>
)

const SectionReputation = styled(SectionReputationCmp)`
  ${section};
  ${angle('right')};
  ${tw`bg-primaryDarker text-white`}

  img {
    ${tw`block w-80 mx-auto mb-5`}
  }
  h2 {
    ${tw`text-center`}
    margin: 0 0 70px;
  }
  .wrap {
    ${tw`flex flex-col items-center justify-center`}
  }
  .one {
    ${tw`text-center`}
    margin: 0 0 70px;
    h4 {
      ${tw`mb-7`}
    }
    ul {
      ${tw`inline-block`}
    }
  }
  .two {
    ${tw`text-center`}
    img {
      ${tw`w-96 shadow-2xl rounded`}
    }
  }
  @media screen and (min-width: 900px) {
    .wrap {
      ${tw`flex-row`}
      .one,
      .two {
        flex: 1 1 50%;
      }
      .one {
        ${tw`p-5 text-right`}
      }
      .two {
        ${tw`m-0`}
      }
    }
  }
`
const SectionIntegrationsCmp = props => (
  <section {...props}>
    <Container>
      <img
        src={require('public/img/integrations.png')}
        alt="Integrations & Export"
      />
      <H2>Integrations &amp; Export</H2>
      <P>
        We've made sure that all of the data you pay for is truly yours to
        command. Every data point is ultra-portable and accessible through a
        variety of providers and exportable data types.
      </P>
      <div className="-boxes">
        <div className="-box">
          <H5>Business Intelligence</H5>
          <ul>
            <li>
              <a
                href="http://www.tableau.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tableau
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/analytics/data-studio/"
                target="_blank"
                rel="noreferrer"
              >
                Google Data Studio
              </a>
            </li>
            <li>
              <a href="https://www.domo.com/" target="_blank" rel="noreferrer">
                Domo
              </a>
            </li>
          </ul>
        </div>
        <div className="-box">
          <H5>Marketing</H5>
          <ul>
            <li>
              <a href="http://datarama.com/" target="_blank" rel="noreferrer">
                Datarama
              </a>
            </li>
            <li>
              <a
                href="https://reportgarden.com/"
                target="_blank"
                rel="noreferrer"
              >
                Report Garden
              </a>
            </li>
          </ul>
        </div>
        <div className="-box">
          <H5>Data</H5>
          <ul>
            <li>API</li>
            <li>Big Query</li>
            <li>CSV</li>
          </ul>
        </div>
      </div>
      <Center>
        <a href="https://app.nozzle.io/sign-up">
          <Button color="success" burst>
            Try it out!
          </Button>
        </a>
      </Center>
    </Container>
  </section>
)

const SectionIntegrations = styled(SectionIntegrationsCmp)`
  ${section};
  ${angle('right')};

  img {
    ${tw`block w-36 mt-0 mx-auto mb-5`}
  }
  h2 {
    ${tw`text-center mt-0 mx-0 mb-7`}
  }
  p {
    ${tw`block text-lg max-w-full leading-none text-center mt-0 mx-auto mb-10`}
    width: 800px;
  }
  .-boxes {
    ${tw`flex flex-row flex-wrap text-xl`}
  }
  .-box {
    ${tw`bg-white shadow-2xl p-5 text-center flex-100 mt-0 mx-0 mb-5`}

    h5 {
      ${tw`text-primaryDarker pb-2.5 border-b-2 border-solid border-gray-200 mt-0 mx-0 mb-5`}
    }
    ul {
      ${tw`inline-block`}
    }
    li {
      ${tw`mb-2 font-semibold`}
    }
    a {
      ${tw`text-primaryLight`}
    }
  }
  @media screen and (min-width: 600px) {
    .-box {
      ${tw`flex-300 mt-0 mx-1/100 mb-5`}
    }
  }
`

const SectionContactUsCmp = props => (
  <section {...props}>
    <Container>
      <H2 full>Let's start your free trial!</H2>
      <a href="https://app.nozzle.io/sign-up">
        <Button
          color="success"
          css={`
            ${tw`text-2xl rounded p-6`}
          `}
        >
          Get started!
        </Button>
      </a>
    </Container>
  </section>
)

const SectionContactUs = styled(SectionContactUsCmp)`
  ${section};
  ${angle('right')};
  ${tw`bg-primaryDarker text-white block text-center`}

  :after {
    ${tw`hidden`}
  }
`

export default function Features() {
  return (
    <div>
      <Head
        title="Search Engine Rank Position Tracker Tool - Search Ranking Tools - SERP Monitoring Keyword Tracking - Search Engine Position Analysis"
        description="A search engine position tracker with customized scheduling options and unlimited keyword & competitor monitoring. View your SERP position data in your own BI dashboard if that brings you more peace. "
      />
      <main>
        <FeaturesNavDiv />
        <SectionBrands id="brands" />
        <SectionCompetition id="competition" />
        <SectionScheduling id="scheduling" />
        <SectionData id="data" />
        <SectionAgencies id="agencies" />
        {/* <SectionReputation id="reputation" /> */}
        <SectionIntegrations id="integrations" />
        <SectionContactUs id="trial" />
      </main>
    </div>
  )
}
