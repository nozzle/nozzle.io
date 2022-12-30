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
  const ref = React.useRef()

  React.useEffect(() => {
    const callback = event => {
      try {
        const data = JSON.parse(event.data)
        if (data && data.type === 'nz-size') {
          ref.current.style.height = data.size + 'px'
        }
      } catch (err) {}
    }

    window.addEventListener('message', callback, false)

    return () => {
      window.removeEventListener('message', callback, false)
    }
  }, [])

  return (
    <CalculatorStyles>
      <Container>
        <Iframe
          ref={ref}
          // src="https://app.nozzle.io/usage-calculator?disableHubspot=true&showIntro=true"
          src="http://localhost:3000/usage-calculator?disableHubspot=true&showIntro=true"
          title="Pricing Calculator"
          id="pricing-calculator-embed"
        />
      </Container>
    </CalculatorStyles>
  )
}
