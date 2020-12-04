import React from 'react'
import styled, { css } from 'styled-components'

import Head from 'components/Head'
import { H2, H4, P, Img } from 'components/Html'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const section = css`
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 5% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  img {
    width: 100%;
  }
  h4 {
    :hover {
      transform: scale(1.15);
    }
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
`

const layout = css`
  .left {
    flex: 1 1 300px;
    margin-right: 40px;
  }
  .right {
    flex: 1 1 300px;
  }
`

const SectionThanks = styled(Section)`
  ${section};

  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 8% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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

  .inner {
    display: block;
    text-align: center;
  }
`

const Example = styled(Section)`
  ${section};
  ${layout};
  :nth-child(2n) {
    ${
      '' /* background: ${props => props.theme.colors.primaryDark};
    color: white; */
    }
  }

  .right {
    img {
      opacity: 1;
      max-width: 940px;
      width: 110%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .left {
    text-align: center;
    padding-right: 1rem;
  }

  ${belowMobile} {
    .right {
      img {
        width: 100%;
      }
    }
    .left {
      text-align: center;
      padding-right: 0;
    }
  }
`

export default function Success() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="Payment Successful | Nozzle"
        description="Thank you for your purchase of the PAA Expansion Deliverable"
      />
      <main>
        <SectionThanks>
          <H2 full>Thank you for your purchase!</H2>
          <P>
            {' '}
            Your PAA Expansion Deliverable will be delivered to you within 1-2
            business days. In the meantime, learn what else you can do with
            Nozzle since we are not your average rank checker. In fact, we are a
            full SERP monitoring tool which means we have A. Lot. Of. Data. For
            example:
          </P>
        </SectionThanks>

        <Example>
          <div className="left">
            <H4>
              <a
                href="https://nozzle.io/blog/finding-your-top-serp-competitors-across-all-your-keyword-groups"
                target="blank"
              >
                Find which competitors own the most top 3, top 5, or top 10
                rankings for each of your keyword groups.
              </a>
            </H4>
          </div>
          <div className="right">
            <Img
              src="../img/topCompetitors.gif"
              alt="PAA deliverable list of questions"
            />
          </div>
        </Example>
        <Example>
          <div className="left">
            <H4>
              <a
                href="https://nozzle.io/blog/track-serp-rankings-for-an-unlimited-amount-of-competitors-with-nozzle"
                target="blank"
              >
                We know who all of your competitors are and you can analyze
                their rankings just as in depth as your own.
              </a>
            </H4>
          </div>
          <div className="right">
            <Img
              src="../img/monitorCompetitors.gif"
              alt="PAA deliverable list of questions drilled down"
            />
          </div>
        </Example>
        <Example>
          <div className="left">
            <H4>
              <a
                href="https://nozzle.io/blog/pixels-from-top-a-nozzle-feature"
                target="blank"
              >
                Monitor your exact position in the SERPs in terms of Pixels from
                Top in addition to keeping track of your rank.
              </a>
            </H4>
          </div>
          <div className="right">
            <Img
              src="../img/pixelsFromtop.png"
              alt="PAA deliverable graph of daily percentage"
            />
          </div>
        </Example>
      </main>
    </div>
  )
}
