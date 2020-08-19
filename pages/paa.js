import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
//
import { angle } from 'utils/Styles'
import { Container, Center } from 'components/Layout'

import { H2, H6, Button } from 'components/Html'
import tw from 'tailwind.macro'

import HubspotForm from 'components/HubspotForm'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)
const Top = styled('section')`
  padding: 10% 10%;
  ${angle('left')};
  ${tw`text-white bg-primaryDarker`}
`
const Form = styled('div')`
  ${tw`lg:w-1/2 lg:text-right text-center`};
`
const Screenshot = styled('div')`
  ${tw`lg:w-1/2`}
  img {
    ${tw` max-w-screen-lg`}
    width: 100%;
  }
`
const Bottom = styled('div')`
  ${tw`lg:flex overflow-hidden`}
`

const SectionContactUs = styled(Section)`
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
      margin-bottom: 0rem;
    }
  }

  ${'' /* background: ${props => props.theme.colors.primaryDarker};
  color: white; */}

  ${angle('right')};

  &:after {
    display: none;
  }

  .inner {
    display: block;
    text-align: center;
  }
`

export default function Paa() {
  return (
    <>
      <Center>
        <Top>
          <H2>Know What Questions To Answer On Your Website</H2>
          <p>
            Need help finding the right questions to answer on your website?
            Well, the People Also Ask boxes in Google's results pages contain
            the jackpot. Fill out the form and we'll generate a free report that
            lists all the questions that Google serves up for 200 of your
            keywords.
          </p>
        </Top>
      </Center>
      <Bottom>
        <Form>
          <SectionContactUs id="contact">
            <HubspotForm
              id="44c49959-c2db-4936-9c35-c5899e31b6b2"
              onFormSubmitted={() => {
                if (typeof window !== 'undefined') {
                  window.dataLayer.push({ event: 'trialSubmit' })
                }
              }}
            />
          </SectionContactUs>
        </Form>
        <Screenshot>
          <img
            src="img/PaaDeliverable.JPG"
            alt="PAA deliverable list of questions"
          />
        </Screenshot>
      </Bottom>
    </>
  )
}
