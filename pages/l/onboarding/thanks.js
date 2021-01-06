import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//
import Head from 'components/Head'
import { Container } from 'components/Layout'
import { H1, P, Iframe } from 'components/Html'

const Styles = styled(Container)`
  ${tw`text-center`}

  h1 {
    ${tw`py-12 px-4`}
  }

  p {
    ${tw`max-w-full mb-16 px-4 w-150`}
  }

  iframe {
    ${tw`min-h-212`}
  }
`

export default () => (
  <div>
    <Head title="Thanks for signing up! | Nozzle" />
    <Styles>
      <H1>Go data robots! GO!</H1>
      <P className="congrats">
        And congratulations! We're already gathering tons of awesome information
        your keywords and URL's. Now, just pick the date and time that you would
        like us to walk you through our amazing app!
      </P>

      <Iframe src="https://calendly.com/annabergevin/onboarding" />
    </Styles>
  </div>
)
