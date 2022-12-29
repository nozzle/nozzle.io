import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { angle } from 'utils/Styles'

import { Container } from 'components/Layout'
import { H3 } from 'components/Html'

const CalculatorStyles = styled('div')`
  ${angle('right')};
  ${tw`py-5/100 px-4`}
`
const Title = styled(H3)`
  ${tw`mb-5`}
`
const Iframe = styled('iframe')`
  ${tw`rounded-lg shadow-xl h-screen`}
`

export default function PricingCalculator() {
  return (
    <CalculatorStyles>
      <Container>
        <Title>How many SERPs do I need per month?</Title>
        <Iframe
          src="https://app.nozzle.io/usage-calculator?disableHubspot=true&showIntro=true"
          title="Pricing Calculator"
          id="pricing-calculator-embed"
        />
      </Container>
    </CalculatorStyles>
  )
}
