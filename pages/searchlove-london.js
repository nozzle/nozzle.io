/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import axios from 'axios'
import { Form, Text } from 'react-form'
import Head from '../components/Head'
import HubspotForm from '../components/HubspotForm'
//
import encodeFormData from 'utils/encodeFormData'
import { Button } from 'components/Html'
import tw from 'twin.macro'

function Matrix({ speed = 100, size = 18, ...rest }) {
  const ref = React.useRef()

  React.useEffect(() => {
    const ctx = ref.current.getContext('2d')

    //chinese characters - taken from the unicode charset
    //converting the string into an array of single characters
    let chinese =
      '田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑'.split(
        ''
      )

    const { width, height } = ref.current.getBoundingClientRect()

    ref.current.width = width
    ref.current.height = height

    const font_size = size
    const columns = width / font_size //number of columns for the rain
    //an array of drops - one per column
    const drops = []
    const first = []
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) drops[x] = 1

    //drawing the characters
    function draw() {
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = '#00131920'
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = '#4bdfff' //green text
      ctx.font = font_size + 'px arial'
      //looping over drops
      for (let i = 0; i < drops.length; i++) {
        if (!first[i] && Math.random() < 0.99) {
          continue
        }
        first[i] = true
        //a random chinese character to print
        const text = chinese[Math.floor(Math.random() * chinese.length)]
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size)

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > height && Math.random() > 0.975) drops[i] = 0

        //incrementing Y coordinate
        drops[i]++
      }
    }

    const interval = setInterval(draw, speed)

    return () => {
      clearInterval(interval)
    }
  }, [size, speed])

  return <canvas ref={ref} {...rest} />
}

export default function Trial() {
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <>
      <Head
        title="SMX page for Nozzle - Keyword Rank Tracker Tool - Google SEO Rank Tracker - Online Website Enterprise Keyword Rank Checker"
        description="SMX page for Nozzle - A keyword rank tracker offering you more enterprise level SERP data than ever before."
      />
      <div
        css={`
          position: relative;
          background: #001319;
          min-height: 150vh;
          color: white;
          padding-bottom: 3rem;
        `}
      >
        <Matrix
          css={`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80vh;
            z-index: 0;
            opacity: 0.7;
          `}
        />
        <div
          css={`
            position: absolute;
            top: 50vh;
            left: 0;
            width: 100%;
            height: 30vh;
            background: linear-gradient(to bottom, transparent, #001319);
            z-index: 1;
          `}
        />
        <div
          css={`
            position: relative;
            z-index: 2;
          `}
        >
          <div
            css={`
              display: flex;
              position: relative;
            `}
          >
            <div
              css={`
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 6rem 0;
              `}
            >
              <img
                src={require('public/img/red-pill.png')}
                css={`
                  width: 80%;
                  max-width: 300px;
                  background: rgba(0, 0, 0, 0.6);
                  border-radius: 100rem;
                `}
              />
            </div>
            <div
              css={`
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 6rem 0;
              `}
            >
              <img
                src={require('public/img/blue-pill.png')}
                css={`
                  width: 80%;
                  max-width: 300px;
                  background: rgba(0, 0, 0, 0.6);
                  border-radius: 100rem;
                `}
              />
            </div>
          </div>
          <div
            css={`
              font-size: 0.8rem;
              text-align: center;
              opacity: 0.15;
              margin: -5rem auto 5rem;
              max-width: 80%;
            `}
          >
            * any reversal of pill coloring is strictly for branding purposes
          </div>
          <div />
          <div>
            <div
              css={`
                text-align: center;
                font-size: 6vw;
                line-height: 8vw;
              `}
            >
              <div
                css={`
                  font-weight: lighter;
                `}
              >
                Google is evolving.
              </div>
              <div
                css={`
                  font-weight: lighter;
                `}
              >
                SERPS are changing.
              </div>
              <div
                css={`
                  font-weight: bolder;
                `}
              >
                So should your rank tracker.
              </div>
            </div>
          </div>
          <div
            css={`
              margin: 5vw auto 0;
              font-size: 1.8rem;
              line-height: 2.6rem;
              width: 600px;
              text-align: center;
              max-width: 90%;
              font-weight: lighter;
              padding-bottom: 2.5vw;
            `}
          >
            SearchLove London attendees who fill out the form below will get 50% off the first year with Nozzle!*
          </div>
          <div
            css={`
              margin: 1vw auto 0;
              font-size: 1rem;
              line-height: 1.6rem;
              width: 600px;
              text-align: center;
              max-width: 80%;
              font-weight: lighter;
            `}
          >
            *Discount will be applied when you sign up before November 30th, 2022.
            <HubspotForm id="79560591-52a7-455f-a2fb-d3ced96a38b4" />
          </div>
          <div
            css={tw`px-10`}>
          <div
            css={tw`text-center text-2xl mt-20 mb-8
            lg:(text-4xl)
            `}
          >
            What can you do with Nozzle data?
          </div>
          <ul
            css={tw`list-disc pl-4 text-xl leading-normal font-bold max-w-full w-[550px] mx-auto mb-12
            space-y-4
            lg:(text-2xl space-y-8)
            `}
          >
            {[
              <a
                href="https://nozzle.io/paa"
                css={`
                  color: ${props => props.theme.colors.primaryLighter};
                  text-decoration: underline;
                  font-size: 1.1rem;
                  line-height: 1.3rem;
                `}
              >
                Generate a list of all the questions that appear in the People
                Also Ask box for all your target keywords
              </a>,
              <a
                href="https://nozzle.io/blog/featured-snippet-competitor-analysis"
                css={`
                  color: ${props => props.theme.colors.primaryLighter};
                  text-decoration: underline;
                  font-size: 1.1rem;
                  line-height: 1.3rem;
                `}
              >
                See how many featured snippets each of your competitors own
              </a>,
              <a
                href="https://nozzle.io/blog/finding-your-top-serp-competitors-across-all-your-keyword-groups"
                css={`
                  color: ${props => props.theme.colors.primaryLighter};
                  text-decoration: underline;
                  font-size: 1.1rem;
                  line-height: 1.3rem;
                `}
              >
                Discover how many top ten rankings each of your competitors own
              </a>,
            ].map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>

          {/*
          <div
            css={`
              margin: 3vw auto 0;
              padding: 8rem 0;
              font-size: 4vw;
              line-height: 5vw;
              width: 600px;
              text-align: center;
              max-width: 80%;
              font-weight: bolder;
              background-image: url('/img/bose-headphones.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              text-shadow: 0 3px 5px black;
            `}
          >
            BOSE QuietComfort 35 Wireless Headphones II
          </div>
  
          <div
            css={`
              margin: 0 auto;
              font-size: 1rem;
              opacity: 0.5;
              line-height: 1.6rem;
              width: 600px;
              text-align: center;
              max-width: 80%;
              font-weight: lighter;
            `}
          >
            Announced on 5/31/2019 - Ends on 6/5/2019
          </div>
          
          {!submitted ? (
            <Form
              onSubmit={async values => {
                window.dataLayer.push({ event: 'smxSubmit' })
                try {
                  await axios.post(
                    'https://nozzle.io/',
                    encodeFormData({
                      'form-name': 'smx2019',
                      ...values,
                    }),
                    {
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
                    }
                  )
                  setSubmitted(true)
                } catch (err) {
                  window.alert(
                    'There was a problem submitting your form! Try again or reload the page :)'
                  )
                  setSubmitted(true)
                }
              }}
            >
              {({ submitForm }) => (
                <form
                  name="smx2019"
                  data-netlify="true"
                  onSubmit={submitForm}
                  css={`
                    width: 400px;
                    max-width: 80%;
                    margin: 5rem auto 0;
                  `}
                >
                  <Text
                    field="name"
                    name="name"
                    placeholder="Name..."
                    css={`
                      margin: 1rem auto 0;
                      width: 100%;
                      font-size: 1.4rem;
                      background: rgba(255, 255, 255, 0.05);
                      border: solid 2px rgba(255, 255, 255, 0.2);
                      border-radius: 0.3rem;
                      padding: 1rem;
                      color: white;
                    `}
                  />
                  <Text
                    field="email"
                    name="email"
                    placeholder="Email address..."
                    css={`
                      margin: 1rem auto 0;
                      width: 100%;
                      font-size: 1.4rem;
                      background: rgba(255, 255, 255, 0.05);
                      border: solid 2px rgba(255, 255, 255, 0.2);
                      border-radius: 0.3rem;
                      padding: 1rem;
                      color: white;
                    `}
                  />
                  <Text
                    field="twitter"
                    name="twitter"
                    placeholder="Twitter handle..."
                    css={`
                      margin: 1rem auto 0;
                      width: 100%;
                      font-size: 1.4rem;
                      background: rgba(255, 255, 255, 0.05);
                      border: solid 2px rgba(255, 255, 255, 0.2);
                      border-radius: 0.3rem;
                      padding: 1rem;
                      color: white;
                    `}
                  />
                  <Button
                    type="submit"
                    css={`
                    color: white;
                    appearance: none;
                    border-radius: 0.4rem;
                    font-size: 1.6rem;
                    padding: 1rem 1.5rem;
                    margin: 1rem auto 0
                    width: 100%;
                    display: block;
                    text-align: center;
                  `}
                  >
                    Submit!
                  </Button>
                </form>
              )}
            </Form>
          ) : (
            <div
              css={`
                margin: 2rem auto;
                font-size: 4vw;
                line-height: 3.4vw;
                width: 600px;
                text-align: center;
                max-width: 80%;
              `}
            >
              Thank you for submitting!
            </div>
          )}
          */}
        </div>
      </div>
    </>
  )
}
