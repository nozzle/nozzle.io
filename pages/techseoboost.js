import React from 'react'
import styled from 'styled-components'
//
import { angle } from 'utils/Styles'

import { H2, H6, Button } from 'components/Html'

import HubspotForm from 'components/HubspotForm'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionContactUs = styled(Section)`
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
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

export default function TechSeoBoost() {
  return (
    <SectionContactUs id="contact">
      <H2 full>Let's start your free trial!</H2>
      <HubspotForm id='55cbcbd8-a0ab-4ff8-ad20-c33669bdab2c' />
    </SectionContactUs>
  )
}
