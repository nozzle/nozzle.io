import React from 'react'
import styled from 'styled-components'
//

import HubspotForm from 'components/HubspotForm'
import Head from 'components/Head'
import { Container } from 'components/Layout'
import { H1, H4, Ol, Li, Strong } from 'components/Html'

const Styles = styled(Container)`
  text-align: center;

  h1 {
    padding: 3rem 1rem;
  }

  h4 {
    margin-bottom: 2rem;
  }

  ol {
    margin-bottom: 3rem;
  }

  .form {
    display: inline-block;
    width: 500px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`

export default () => (
  <div>
    <Head title="Get started with your 2 week free trial! | Nozzle" />
    <Styles>
      <H1>Better Organic Search, Coming Right Up!</H1>
      <H4>In order to get started with your free 2 week trial:</H4>
      <Ol>
        <Li>
          Fill out this form with your <Strong>Domain</Strong>,{' '}
          <Strong>Competitors</Strong> and <Strong>Keywords</Strong> you would
          like to track
        </Li>
        <Li>Schedule 30 minutes when we can walk you through our software</Li>
        <Li>
          We'll setup your account and start pulling your data before our
          meeting
        </Li>
        <Li>Spend 2 weeks making your friends jealous of your rankings data</Li>
      </Ol>
      <div className="form">
        <HubspotForm
          formID="8e1e2c8d-2a53-492e-a8e7-583ec635494a"
          onSubmit={() => {
            global.dataLayer.push({ event: 'onboardingSubmit' })
            setTimeout(() => {
              // history.push('/l/onboarding/thanks')
            }, 1000)
          }}
        />
      </div>
    </Styles>
  </div>
)
