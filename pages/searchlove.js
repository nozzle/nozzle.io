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
        title="Searchlove page for Nozzle - Keyword Rank Tracker Tool - Google SEO Rank Tracker - Online Website Enterprise Keyword Rank Checker"
        description="searchlove page for Nozzle - A keyword rank tracker offering you more enterprise level SERP data than ever before."
      />
      <div
        css={`
          padding: 2rem;
        `}
      >
        <div
          css={tw`text-center text-4xl leading-normal mt-8 mb-16
          lg:(text-6xl)
          `}
        >
          <div
            css={`
              font-weight: lighter;
            `}
          >
            Google is evolving.
            <br />
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
        <div>
          <div
            css={tw`text-center text-2xl mb-8
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
                  color: ${props => props.theme.colors.primary};
                  text-decoration: underline;
                `}
              >
                Generate a list of all the questions that appear in the People
                Also Ask box for all your target keywords
              </a>,
              <a
                href="https://nozzle.io/blog/featured-snippet-competitor-analysis"
                css={`
                  color: ${props => props.theme.colors.primary};
                  text-decoration: underline;
                `}
              >
                See how many featured snippets each of your competitors own
              </a>,
              <a
                href="https://nozzle.io/blog/finding-your-top-serp-competitors-across-all-your-keyword-groups"
                css={`
                  color: ${props => props.theme.colors.primary};
                  text-decoration: underline;
                `}
              >
                Discover how many top ten rankings each of your competitors own
              </a>,
            ].map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div
          css={tw`w-[600px] text-xl opacity-90 leading-normal font-light max-w-full mb-4 text-center mx-auto
        
          `}
        >
          SearchLove attendees who fill out the form below get 50% of your first
          year with Nozzle when you sign up before July 31st, 2022!
        </div>
        <div
          css={`
            width: 500px;
            max-width: 100%;
            margin: 0 auto;
          `}
        >
          <HubspotForm id="2684e92d-ba12-479b-bf0b-abedce78a608" />
        </div>
      </div>
      {/* <iframe
        src={`https://app.nozzle.io/sign-up?${new URLSearchParams({
          hubspotListId: 276,
          redirect: 'https://app.nozzle.io',
        }).toString()}`}
        title="Nozzle Signup"
        css={`
          width: 1023px;
          max-width: 100%;
          height: 5000px;
          margin: 0 auto;
          display: block;
        `}
      /> */}
    </>
  )
}
