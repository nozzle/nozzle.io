import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
//
import Theme from './utils/Theme'

import Link from './components/Link'
import Head from './components/Head'
import Content from './components/Content'

import { H1, H2, H3, H4, H6, P, Img } from './components/Html'

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

const AboutUsDiv = styled.div`
  padding-top: 0;
  background-image: url("/static/img/about/dot-background.jpg");
  background-repeat: repeat-y;
  background-size: 100%;
  .intro {
    z-index: 1;
    position: relative;
    text-align: center;
    padding: 150px 40px 250px;
    display: flex;
    flex-direction: column;
    min-height: 108vh;
    align-items: center;
    justify-content: center;
    background-image: url("/static/img/about/aboutus.jpg");
    background-size: cover;
    background-position: top;
    color: #fff;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    text-shadow: 0 4px 20px #000;
    .-background {
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .-content {
      z-index: 1;
    }
    h1 {
      margin: 0 0 10px;
    }
    p {
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.4em;
    }
    .next {
      position: absolute;
      bottom: 20%;
      left: 50%;
      width: 0;
      height: 0;
      animation: arrow-bounce 1s infinite;
      animation-timing-function: ease-out;
      svg {
        width: 60px;
        max-width: 60px !important;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 2px 5px #000);
      }
    }
  }
  .timeline {
    z-index: 0;
    position: relative;
    .density {
      padding-top: 200px;
      padding-bottom: 80px;
      text-align: center;
      font-weight: bold;
      color: ${Theme.colors.primaryDark};
      animation: ${densityAnimation} 6s infinite;
    }
    .delorianSide {
      position: relative;
      z-index: 1;
      width: 100%;
      text-align: center;
      height: 0;
      animation: ${delorianAnimation} 6s infinite linear;
      div {
        height: 0;
      }
      img {
        width: 400px;
        transform: translateY(-50%);
      }
    }
    .destiny {
      z-index: 0;
      padding-top: 20px;
      margin-bottom: 270px;
      animation: ${destinyAnimation} 6s infinite;

      h2 {
        text-align: center;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
        transform: translateY(120px);
      }
    }
    .delorianBack {
      width: 100%;
      text-align: center;
      margin-bottom: 10rem;
    }
    h2.roads {
      text-align: center;
      margin: 150px 0 20px;
      font-weight: bold;
      color: ${Theme.colors.primaryDark};
      img {
        width: 400px;
      }
    }
    .event {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto 150px;
      position: relative;
      font-size: 1.2em;
      &:nth-child(odd) .connector {
        transform-origin: left;
        background: rgba(0, 0, 0, 0.4);
      }
      .left,
      .right {
        flex: 1 1 50%;
      }
      .left {
        text-align: right;
        padding-right: 50px;
        p {
          margin-left: auto;
        }
      }
      .right {
        text-align: left;
        padding-left: 50px;
      }
      h4 {
        margin: 0;
        font-weight: 600;
      }
      p {
        max-width: 350px;
      }
      img {
        width: 400px;
      }
    }
  }
  .team {
    padding: 20px;
    padding-top: 100px;
    padding-bottom: 100px;
    background: ${Theme.colors.primaryDark};
    h2 {
      color: #fff;
      text-align: center;
      margin: 0 0 30px;
    }
    .inner {
      display: flex;
      flex-wrap: wrap;
    }
    .member {
      flex: 1 1 31%;
      margin: 18% 1% 20px;
      position: relative;
      padding: 120px 20px 20px;
      text-align: center;
      border-radius: 5px;
      background: #fff;
      &.derek .member-image .inner {
        background-image: url("/static/img/about/derek.jpg");
      }
      &.joe .member-image .inner {
        background-image: url("/static/img/about/joe.jpg");
      }
      &.tanner .member-image .inner {
        background-image: url("/static/img/about/tanner.jpg");
      }
      .member-image {
        position: absolute;
        left: 50%;
        top: 70px;
        transform: translate(-50%, 0);
        width: 70%;
        height: 0;
        .inner {
          position: absolute;
          bottom: 0;
          width: 100%;
          margin: 0 auto;
          border-radius: 500px;
          border: solid 5px #fff;
          background-position: center;
          background-size: cover;
          box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
          &:before {
            content: '';
            display: block;
            width: 100%;
            padding-top: 100%;
          }
        }
      }
      h3 {
        color: ${Theme.colors.primary};
      }
      p {
        line-height: 1.3em;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event .connector {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event:nth-child(odd) .right {
      order: -1;
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event {
      .left,
      .right {
        flex: 1 1 100%;
        padding: 0 !important;
        transform: none !important;
        text-align: center !important;
      }
      .left p,
      .right p {
        margin-left: auto;
        margin-right: auto;
      }
      .left img,
      .right img {
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .team .member {
      flex: 1 1 100%;
      margin: 150px 0 20px;
      transform: none !important;
    }
  }

  @media screen and (max-width: 900px) {
    .team .member .member-image {
      top: 100px;
      width: 200px;
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

export default class About extends Component {
  render () {
    return (
      <Content>
        <Head>
          <title>About Us</title>
        </Head>
        <AboutUsDiv>
          <section className='intro'>
            <div className='-background' />
            <div className='-content'>
              <H1>It started with 3 guys who love SEO</H1>
              <P>
                Working at an agency, we set out to find the best tools we could
                get. We needed something that could keep up with clients from
                Dell down to Bob's Pickles, but nothing lived up to our wildest
                SEO dreams. So we created Nozzle, the rank tracker we couldn't
                live without.
              </P>
            </div>
            <Link className='next' to='#timeline'>
              <svg
                width='53px'
                height='30px'
                viewBox='0 0 53 30'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g
                  id='Page-1'
                  stroke='none'
                  strokeWidth='1'
                  fill='none'
                  fillRule='evenodd'
                >
                  <path
                    d='M3.03204743,3.40265339 L26.4497561,25.9830173 L49.8674649,3.09093941'
                    id='Path-1'
                    stroke='#FFFFFF'
                    strokeWidth='5'
                  />
                </g>
              </svg>
            </Link>
          </section>

          <section className='timeline' id='timeline'>
            <H2 className='density'>This is our density...</H2>

            <div className='delorianSide'>
              <div>
                <Img src='/static/img/about/delorianSide.png' />
              </div>
            </div>

            <div className='destiny'>
              <H2>I mean, our destiny!</H2>
            </div>

            <div className='event'>
              <div className='left'>
                <Img src='/static/img/about/seo.png' />
              </div>
              <div className='connector' />
              <div className='right'>
                <H4>July 2012</H4>
                <P>
                  At SEO.com, Derek (VP of Tech) and Joe (Lead Developer) are
                  tasked with evaluating any and all rank tracking software.
                </P>
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <H4>June 2013</H4>
                <P>
                  We have by now tried many options including Conductor,
                  BrightEdge, SEO Clarity, and Moz, but walk away unsatisfied.
                </P>
              </div>
              <div className='connector' />
              <div className='right'>
                <Img src='/static/img/about/competitors.png' />
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <Img src='/static/img/logo-blue.png' />
              </div>
              <div className='connector' />
              <div className='right'>
                <H4>April 2014</H4>
                <P>
                  Nozzle is incorporated with the goal of building the best rank
                  tracker in the world.
                </P>
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <H4>May 2015</H4>
                <P>Nozzle's first customer is acquired!</P>
              </div>
              <div className='connector' />
              <div className='right'>
                <Img
                  src='/static/img/about/firstCustomer.png'
                  style={{
                    width: '300px',
                  }}
                />
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <Img src='/static/img/about/billion.png' />
              </div>
              <div className='connector' />
              <div className='right'>
                <H4>July 2015</H4>
                <P>Nozzle collects 1 billion data points in a single day</P>
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <H4>October 2015</H4>
                <P>
                  Nozzle launches multiple scheduling options, the first ever in
                  the industry.
                </P>
              </div>
              <div className='connector' />
              <div className='right'>
                <Img src='/static/img/about/schedulesMini.png' />
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <Img src='/static/img/about/techstars.png' />
              </div>
              <div className='connector' />
              <div className='right'>
                <H4>February 2016</H4>
                <P>
                  Nozzle participates in the Techstars Kansas City accelerator
                  program.
                </P>
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <H4>March 2016</H4>
                <P>
                  Nozzle releases Chart.js 2.0 and trends #1 on Github and
                  Product Hunt. Developed by our own Tanner Linsley and good
                  friend Evert Timberg, it's now faster than ever, offers 8
                  flexible chart types and is even more extensible.
                </P>
                <br />
                <a
                  className='github-button'
                  href='https://github.com/chartjs/chart.js'
                  aria-label='Star chartjs/chart.js on GitHub'
                >
                  Star
                </a>
              </div>
              <div className='connector' />
              <div className='right'>
                <a
                  href='https://github.com/chartjs/chart.js'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Img src='/static/img/about/chartjs.png' />
                </a>
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <a
                  href='https://github.com/jumpsuit/jumpsuit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Img src='/static/img/about/jumpsuit.png' />
                </a>
              </div>
              <div className='connector' />
              <div className='right'>
                <H4>May 2016</H4>
                <P>
                  Jumpsuit is released and trends #1 on Github and Product Hunt.
                  Initially developed for Nozzle to utilize React and Redux, it
                  has become a popular javascript framework for building web
                  applications with minimal overhead or boilerplate.
                </P>
                <br />
                <a
                  className='github-button'
                  href='https://github.com/jumpsuit/jumpsuit'
                  aria-label='Star jumpsuit/jumpsuit on GitHub'
                >
                  Star
                </a>
              </div>
            </div>

            <div className='event'>
              <div className='left'>
                <H4>June 2016</H4>
                <P>Public Launch Day!</P>
              </div>
              <div className='connector' />
              <div className='right'>
                <Img src='/static/img/about/smx.png' />
              </div>
            </div>

            <H2 className='roads'>Where we're going, we don't need roads...</H2>

            <div className='delorianBack'>
              <Img src='/static/img/about/delorianBack.png' />
            </div>
          </section>

          <section className='team'>
            <H2>Meet the Team</H2>
            <div className='inner'>
              <div className='member derek'>
                <div className='member-image'>
                  <div className='inner' />
                </div>
                <H3>Derek Perkins</H3>
                <H6>CEO</H6>
                <P>
                  Derek is a go developer. He writes a lot of backend code, but
                  also does the business side. He is an experienced
                  entrepreneur, and enjoys the startup battlefield. He enjoys
                  short walks on the beach and triple-OREO ice cream.{' '}
                </P>
              </div>
              <div className='member joe'>
                <div className='member-image'>
                  <div className='inner' />
                </div>
                <H3>Joe Bergevin</H3>
                <H6>Backend CTO</H6>
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
              <div className='member tanner'>
                <div className='member-image'>
                  <div className='inner' />
                </div>
                <H3>Tanner Linsley</H3>
                <H6>Front-End Engineer</H6>
                <P>
                  Tanner is obsessive and passionate about Javascript, React,
                  UI/UX, Data Visualization and all things web. He loves problem
                  solving and design, and considers Github his playground.
                  Tanner is always on the edge of the modern software stack
                  loves developing new solutions, frameworks, and systems for
                  complex problems. He is a core contributor to Chart.js, the
                  most popular charting library in the world, and also wrote
                  Jumpsuit.js, which was initially written for Nozzle, but now
                  it's used by thousands of people to build web apps.
                </P>
              </div>
            </div>
          </section>
        </AboutUsDiv>
      </Content>
    )
  }
}
