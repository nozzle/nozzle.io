import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'components/Icon'
//
import { angle } from 'utils/Styles'

import { H2, P } from 'components/Html'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionThanks = styled(Section)`
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

  ${
    '' /* background: ${props => props.theme.colors.primaryDarker};
  color: white; */
  }

  ${angle('right')};

  &:after {
    display: none;
  }

  .inner {
    display: block;
    text-align: center;
  }
`

export default function Success() {
  return (
    <SectionThanks>
      <H2 full>Thank you for your purchase!</H2>
      <P> We will get your PAA Dashboard to you as soon as possible!</P>
      <Link href="/paa">
        <a className="back">
          <Icon i="arrow-left" /> Back
        </a>
      </Link>
    </SectionThanks>
  )
}
