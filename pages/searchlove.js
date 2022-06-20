/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import axios from 'axios'
import { Form, Text } from 'react-form'
import Head from '../components/Head'
//
import encodeFormData from 'utils/encodeFormData'
import { Button } from 'components/Html'

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
          position: relative;
          background: #001319;
          min-height: 150vh;
          color: white;
          padding-bottom: 10rem;
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
                font-size: 5vw;
                line-height: 6vw;
                margin-bottom: 2rem;
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
              width: 800px;
              font-size: 1.6rem;
              opacity: 0.9;
              line-height: 1.4;
              font-weight: lighter;
              max-width: 100%;
              padding: 0 2rem;
              margin: 0 auto 2rem;
              text-align: center;
            `}
          >
            “SearchLove attendees get 50% off your first year with Nozzle when
            you sign up before July 31st, 2022. Take the blue pill and start
            your Nozzle trial by filling out the form below.”
          </div>
          <iframe
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
          />
        </div>
      </div>
    </>
  )
}
