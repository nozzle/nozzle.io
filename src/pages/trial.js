import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
//
import Theme from 'utils/Theme'
import { angle } from 'utils/Styles'

import { H2, H6, Button } from 'components/Html'

import TrialForm from 'components/TrialForm'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionContactUs = styled(Section)`
  z-index: 0;
  .inner {
    max-width: ${Theme.maxWidth}px;
    margin: 0 auto;
    padding: 10% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
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
      margin-bottom: 2rem;
    }
  }

  background: ${Theme.colors.primaryDarker};
  color: white;

  ${angle('right')};

  &:after {
    display: none;
  }

  .inner {
    display: block;
    text-align: center;
  }
`

export default function Trial() {
  return (
    <SectionContactUs id="contact">
      <H2 full>Let's start your free trial!</H2>
      <TrialForm />
      <H6 full>or</H6>
      <Link to="tel:1855NOZZLE1">
        <Button color="primaryDark" burst>
          Call 1-855-NOZZLE1
        </Button>
      </Link>
    </SectionContactUs>
  )
}
