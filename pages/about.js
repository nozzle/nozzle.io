import React from 'react'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
//

import Head from 'components/Head'

import { H1, H2, H3, H4, H6, P, Img, Button } from 'components/Html'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const densityAnimation = keyframes`
  0%, 100% {
    transform: translateY(-10px);
    opacity: 0;
  }
  10%, 40% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
    transform: translateY(150px);
    opacity: 0;
  }
`

const destinyAnimation = keyframes`
  0%, 100% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    transform: translateY(-150px);
    opacity: 0;
  }
  60%, 90% {
    transform: translateY(0px);
    opacity: 1;
  }
`

const delorianAnimation = keyframes`
  0%, 20% {
    transform: translateX(-700px);
    opacity: 0;
  }
  26% {
    transform: translateX(-50px);
    opacity: 1;
  }
  70% {
    transform: translateX(50px);
    opacity: 1;
  }
  80%, 100% {
    transform: translateX(1200px);
    opacity: 0;
  }
`

const delorianBehindAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(70px);
  }
`

const AboutUsDiv = styled('div')`
  ${tw`pt-0 bg-repeat-y bg-cover`}
  background-image: url('public/img/about/dot-background.jpg');

  .intro {
    ${tw`relative text-center flex flex-col items-center justify-center bg-cover bg-top text-white `}
    z-index: 1;
    padding: 150px 40px 250px;
    min-height: 108vh;
    background-image: url(${require('public/img/about/aboutus.jpg')});
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    text-shadow: 0 4px 20px #000;
    .-background {
      ${tw`z-0 absolute inset-0 `}
      background-color: rgba(0, 0, 0, 0.4);
    }
    .-content {
      z-index: 1;
    }
    h1 {
      margin: 0 0 10px;
    }
    p {
      ${tw`mx-auto leading-6 max-w-2xl`}
    }
    .next {
      ${tw`absolute bottom-1/4 left-1/2 w-0 h-0 `}
      animation: arrow-bounce 1s infinite;
      animation-timing-function: ease-out;
      svg {
        ${tw`w-16`}
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 2px 5px #000);
      }
    }
  }
  .timeline {
    ${tw`z-0 relative`}
    .density {
      ${tw`pt-52 pb-20 text-center font-bold text-primaryDark`}
      animation: ${densityAnimation} 6s infinite;
    }
    .delorianSide {
      ${tw`relative w-full text-center h-0`}
      z-index: 1;
      animation: ${delorianAnimation} 6s infinite linear;
      div {
        ${tw`h-0`}
      }
      img {
        ${tw`w-96`}
        transform: translateY(-50%);
      }
    }
    .destiny {
      ${tw`z-0 pt-5 mb-64`}
      animation: ${destinyAnimation} 6s infinite;

      h2 {
        ${tw`text-center font-bold text-gray-500`}
        transform: translateY(120px);
      }
    }
    .delorianBack {
      ${tw`w-full text-center mb-40`}
      animation: ${delorianBehindAnimation} 4s infinite ease-in-out;
    }
    h2.roads {
      ${tw`text-center font-bold text-primaryDark`}
      margin: 150px 0 20px;

      img {
        ${tw`w-96`}
      }
    }
    .event {
      ${tw`flex flex-wrap items-center justify-center relative text-xl max-w-6xl`}
      margin: 0 auto 150px;

      &:nth-child(odd) .connector {
        transform-origin: left;
        background: rgba(0, 0, 0, 0.4);
      }
      .left,
      .right {
        flex: 1 1 50%;
      }
      .left {
        ${tw`text-right pr-12`}

        p {
          ${tw`mr-0`}
        }
      }
      .right {
        ${tw`text-left pl-12`}

        p {
          ${tw`ml-0`}
        }
      }
      h4 {
        ${tw`m-0 font-semibold`}
      }
      p {
        ${tw`max-w-xs`}
      }
      img {
        ${tw`w-96`}
      }
    }
  }
  .team {
    ${tw`p-5 py-24 bg-primaryDark`}

    h2 {
      ${tw`text-white text-center`}
      margin: 0 0 30px;
    }
    .inner {
      ${tw`flex flex-wrap`}
    }
    .member {
      ${tw`relative text-center rounded bg-white`}
      flex: 1 1 31%;
      margin: 18% 1% 20px;
      padding: 120px 20px 20px;

      &.derek .member-image .inner {
        background-image: url(${require('public/img/about/derek.jpg')});
      }
      &.joe .member-image .inner {
        background-image: url(${require('public/img/about/joe.jpg')});
      }
      &.tanner .member-image .inner {
        background-image: url(${require('public/img/about/tanner.jpg')});
      }
      .member-image {
        ${tw`absolute left-1/2 top-16 h-0`}
        transform: translate(-50%, 0);
        width: 70%;
        .inner {
          ${tw`absolute bottom-0 w-full mx-auto rounded-full border-solid border-4 border-white bg-center bg-cover shadow-2xl`}
          &:before {
            ${tw`block w-full`}
            content: '';
            padding-top: 100%;
          }
        }
      }
      h3 {
        ${tw`text-primary`}
      }
      p {
        ${tw`leading-5`}
      }
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event .connector {
      ${tw`hidden`}
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event:nth-child(odd) .right {
      ${tw`order-first`}
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event {
      .left,
      .right {
        ${tw`p-0! text-center! transform-none!`}
        flex: 1 1 100%;
      }
      .left p,
      .right p {
        ${tw`mx-auto`}
      }
      .left img,
      .right img {
        ${tw`mb-5`}
      }
    }
  }

  @media screen and (max-width: 900px) {
    .team .member {
      ${tw`transform-none!`}
      flex: 1 1 100%;
      margin: 150px 0 20px;
    }
  }

  @media screen and (max-width: 900px) {
    .team .member .member-image {
      ${tw`top-24 w-52`}
    }
  }

  @-moz-keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }

  @-webkit-keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }

  @-o-keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }

  @keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }
`

export default function About() {
  return (
    <div>
      <Head
        title="About Nozzle: SEO Rank Tracking & Monitoring Software - Search Engine Keyword Ranking Software"
        description="We created Nozzle, the rank tracker we couldn't live without because it didn't exist. Now that it does, come give it a test drive. "
      />
      <main>
        <AboutUsDiv>
          <section className="intro">
            <div className="-background" />
            <div className="-content">
              <H1>It started with 3 guys who love SEO</H1>
              <P>
                Working at an agency, we set out to find the best tools we could
                get. We needed something that could keep up with clients from
                Dell down to Bob's Pickles, but nothing lived up to our wildest
                SEO dreams. So we created Nozzle, the rank tracker we couldn't
                live without.
              </P>
            </div>
            <AnchorLink href="#timeline">
              <a className="next">
                <svg
                  width="53px"
                  height="30px"
                  viewBox="0 0 53 30"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M3.03204743,3.40265339 L26.4497561,25.9830173 L49.8674649,3.09093941"
                      id="Path-1"
                      stroke="#FFFFFF"
                      strokeWidth="5"
                    />
                  </g>
                </svg>
              </a>
            </AnchorLink>
          </section>

          <section className="timeline" id="timeline">
            <H2 className="density">This is our density...</H2>

            <div className="delorianSide">
              <div>
                <Img src={require('public/img/about/delorianSide.png')} />
              </div>
            </div>

            <div className="destiny">
              <H2>I mean, our destiny!</H2>
            </div>

            <div className="event">
              <div className="left">
                <Img src={require('public/img/about/seo.png')} />
              </div>
              <div className="connector" />
              <div className="right">
                <H4>July 2012</H4>
                <P>
                  At SEO.com, Derek (VP of Tech) and Joe (Lead Developer) are
                  tasked with evaluating any and all rank tracking software.
                </P>
              </div>
            </div>

            <div className="event">
              <div className="left">
                <H4>June 2013</H4>
                <P>
                  We have by now tried many SEO monitoring software options
                  including Conductor, BrightEdge, SEO Clarity, and Moz, but
                  walk away unsatisfied.
                </P>
              </div>
              <div className="connector" />
              <div className="right">
                <Img src={require('public/img/about/competitors.png')} />
              </div>
            </div>

            <div className="event">
              <div className="left">
                <Img src={require('public/img/logo-blue.png')} />
              </div>
              <div className="connector" />
              <div className="right">
                <H4>April 2014</H4>
                <P>
                  Nozzle is incorporated with the goal of building the best rank
                  tracking software in the world.
                </P>
              </div>
            </div>

            <div className="event">
              <div className="left">
                <H4>May 2015</H4>
                <P>Nozzle's first customer is acquired!</P>
              </div>
              <div className="connector" />
              <div className="right">
                <Img
                  src={require('public/img/about/firstCustomer.png')}
                  style={{
                    width: '300px',
                  }}
                />
              </div>
            </div>

            <div className="event">
              <div className="left">
                <Img src={require('public/img/about/billion.png')} />
              </div>
              <div className="connector" />
              <div className="right">
                <H4>July 2015</H4>
                <P>Nozzle collects 1 billion data points in a single day</P>
              </div>
            </div>

            <div className="event">
              <div className="left">
                <H4>October 2015</H4>
                <P>
                  Nozzle launches multiple scheduling options, the first ever in
                  the industry.
                </P>
              </div>
              <div className="connector" />
              <div className="right">
                <Img src={require('public/img/about/schedulesMini.png')} />
              </div>
            </div>

            <div className="event">
              <div className="left">
                <Img src={require('public/img/about/techstars.png')} />
              </div>
              <div className="connector" />
              <div className="right">
                <H4>February 2016</H4>
                <P>
                  Nozzle participates in the Techstars Kansas City accelerator
                  program.
                </P>
              </div>
            </div>

            <div className="event">
              <div className="left">
                <H4>March 2016</H4>
                <P>
                  Nozzle releases Chart.js 2.0 and trends #1 on Github and
                  Product Hunt. Developed by our own Tanner Linsley and good
                  friend Evert Timberg, it's now faster than ever, offers 8
                  flexible chart types and is even more extensible.
                </P>
                <br />
                <a href={'https://github.com/chartjs/chart.js'}>
                  <Button size="sm">View Chart.js on Github</Button>
                </a>
              </div>
              <div className="connector" />
              <div className="right">
                <a
                  href="https://github.com/chartjs/chart.js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={require('public/img/about/chartjs.png')} />
                </a>
              </div>
            </div>

            <div className="event">
              <div className="left">
                <a
                  href="https://github.com/jumpsuit/jumpsuit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={require('public/img/about/jumpsuit.png')} />
                </a>
              </div>
              <div className="connector" />
              <div className="right">
                <H4>May 2016</H4>
                <P>
                  Jumpsuit is released and trends #1 on Github and Product Hunt.
                  Initially developed for Nozzle to utilize React and Redux, it
                  has become a popular javascript framework for building web
                  applications with minimal overhead or boilerplate.
                </P>
                <br />
                <a href={'https://github.com/jumpsuit/jumpsuit'}>
                  <Button size="sm">View Jumpsuit on Github</Button>
                </a>
              </div>
            </div>

            <div className="event">
              <div className="left">
                <H4>June 2016</H4>
                <P>Public Launch Day!</P>
              </div>
              <div className="connector" />
              <div className="right">
                <Img src={require('public/img/about/smx.png')} />
              </div>
            </div>

            <H2 className="roads">Where we're going, we don't need roads...</H2>

            <div className="delorianBack">
              <Img src={require('public/img/about/delorianBack.png')} />
            </div>
          </section>

          <section className="team">
            <H2>Meet the Team</H2>
            <div className="inner">
              <div className="member derek">
                <div className="member-image">
                  <div className="inner" />
                </div>
                <H3>Derek Perkins</H3>
                <H6>CEO</H6>
                <P>
                  Derek is a go developer. He writes a lot of backend code, but
                  also does the business side. He is an experienced
                  entrepreneur, and enjoys the startup battlefield. He enjoys
                  short walks on the beach and triple-OREO ice cream.
                </P>
              </div>
              <div className="member joe">
                <div className="member-image">
                  <div className="inner" />
                </div>
                <H3>Joe Bergevin</H3>
                <H6>VP of Backend</H6>
                <P>
                  Joe has a proven track record in designing tools that improve
                  efficiency and deliver optimal outcomes for clients and
                  companies. An innovative designer and developer, Joe has used
                  a variety of programming languages, most recently specializing
                  in Go (Golang) and PHP. Joe’s love for programming dates back
                  to his teenage years when he spent his spare time in school
                  programming games for his graphic calculator to share with his
                  friends - earning him the nickname "TI Joe".
                </P>
              </div>
              <div className="member tanner">
                <div className="member-image">
                  <div className="inner" />
                </div>
                <H3>Tanner Linsley</H3>
                <H6>VP of UI/UX</H6>
                <P>
                  Tanner is obsessive and passionate about Javascript, React,
                  UI/UX, Data Visualization, Open Source Software and all things
                  web. He loves problem solving and design, and considers Github
                  his playground. Tanner is always on the edge of the modern
                  software stack loves developing new solutions, frameworks, and
                  systems for complex problems.
                </P>
              </div>
            </div>
          </section>
        </AboutUsDiv>
      </main>
    </div>
  )
}
