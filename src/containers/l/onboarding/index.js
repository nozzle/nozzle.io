import React from 'react'
import styled from 'styled-components'
//
import Theme from '../../utils/Theme'

import HubspotForm from '../../components/HubspotForm'
import Page from '../../components/Page'
import Head from '../../components/Head'
import { Container } from '../../components/Layout'
import { H1, H4, Ol, Li, Strong } from '../../components/Html'

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

  form {
    display: inline-block;
    margin: 0 1rem;
    padding: 3rem;
    border-radius: 0.5rem;
    background: ${Theme.colors.primaryDark};
    color: white;

    @media screen and (max-width: 700px) {
      padding: 1rem;
    }
  }
`

export default () => (
  <Page>
    <Head title="Get started with your 2 week free trial!" />
    <Styles>
      <H1>Better Organic Search, Coming Right Up!</H1>
      <H4>In order to get started with your free 2 week trial:</H4>
      <Ol>
        <Li>
          Fill out this form with your <Strong>Domain</Strong>, <Strong>Competitors</Strong> and{' '}
          <Strong>Keywords</Strong> you would like to track
        </Li>
        <Li>Schedule 30 minutes when we can walk you through our software</Li>
        <Li>We'll setup your account and start pulling your data before our meeting</Li>
        <Li>Spend 2 weeks making your friends jealous of your rankings data</Li>
      </Ol>
      <HubspotForm
        formID="8e1e2c8d-2a53-492e-a8e7-583ec635494a"
        onSubmit={form => {
          global.dataLayer.push({ event: 'onboardingSubmit' })
          setTimeout(() => {
            window.Router.push('/l/onboarding/thanks')
          }, 2000)
        }}
      />
    </Styles>
  </Page>
)
