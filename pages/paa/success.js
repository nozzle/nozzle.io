import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import Head from 'components/Head'
import { H1, H3, H4, P, Img, Button } from 'components/Html'

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
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding-top: 8%;
    padding-left: 10%;
    padding-right: 10%;

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

  h3 {
    width: 100%;
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
    padding-right: 1rem;

    h4 {
      margin-bottom: 2rem;
    }
  }

  ${belowMobile} {
    text-align: center;

    .right {
      img {
        width: 100%;
      }
    }
    .left {
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }
`

export default function Success() {
  const router = useRouter()
  const { free } = router.query
  const { contact } = router.query
  const { bulk } = router.query
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="Success | Nozzle"
        description="Thank you for your purchase of the PAA Expansion Deliverable"
      />
      <main>
        <SectionThanks>
          <H1 full>
            {free || contact || bulk
              ? 'Thanks for your interest in pure awesomeness!'
              : 'Thank you for your purchase!'}
          </H1>
          <P>
            {contact ? (
              <span>
                We'll be in touch shortly to discuss discounted pricing for your
                specific needs.
              </span>
            ) : bulk ? (
              <span>
                We'll reach out shortly to collect the keywords for your 10
                deliverables.
              </span>
            ) : free ? (
              <span>
                Your Free PAA Expansion Deliverable will be delivered to you
                within <u>1-2 business days</u>.
              </span>
            ) : (
              <span>
                Your PAA Expansion Deliverable will be delivered to you within{' '}
                <u>1-2 business days</u>.
              </span>
            )}{' '}
          </P>{' '}
          <P>
            {' '}
            In the meantime, learn what else you can do with Nozzle since we are
            not your average rank checker tool.
          </P>
          <P>
            In fact, we are a full SERP monitoring tool which means we have A.
            Lot. Of. Data.
          </P>
        </SectionThanks>

        <Example>
          <H3>For Example: </H3>
          <div className="left">
            <H4>
              Find which competitors own the most top 3, top 5, or top 10
              rankings for each of your keyword groups.
            </H4>
            <a
              href="https://nozzle.io/blog/finding-your-top-serp-competitors-across-all-your-keyword-groups"
              target="blank"
            >
              <Button>Learn More</Button>
            </a>
          </div>
          <div className="right">
            <a
              href="https://nozzle.io/blog/finding-your-top-serp-competitors-across-all-your-keyword-groups"
              target="blank"
            >
              <Img
                src="../img/topCompetitors.gif"
                alt="PAA deliverable list of questions"
              />
            </a>
          </div>
        </Example>
        <Example>
          <div className="left">
            <H4>
              We know who all of your competitors are and you can analyze their
              rankings just as in depth as your own.
            </H4>
            <a
              href="https://nozzle.io/blog/track-serp-rankings-for-an-unlimited-amount-of-competitors-with-nozzle"
              target="blank"
            >
              <Button>Learn More</Button>
            </a>
          </div>
          <div className="right">
            <a
              href="https://nozzle.io/blog/track-serp-rankings-for-an-unlimited-amount-of-competitors-with-nozzle"
              target="blank"
            >
              <Img
                src="../img/monitorCompetitors.gif"
                alt="PAA deliverable list of questions drilled down"
              />
            </a>
          </div>
        </Example>
        <Example>
          <div className="left">
            <H4>
              Monitor your exact position in the SERPs in terms of Pixels from
              Top in addition to keeping track of your rank.
            </H4>
            <a
              href="https://nozzle.io/blog/pixels-from-top-a-nozzle-feature"
              target="blank"
            >
              <Button>Learn More</Button>
            </a>
          </div>
          <div className="right">
            <a
              href="https://nozzle.io/blog/pixels-from-top-a-nozzle-feature"
              target="blank"
            >
              <Img
                src="../img/pixelsFromtop.png"
                alt="PAA deliverable graph of daily percentage"
              />
            </a>
          </div>
        </Example>
      </main>
    </div>
  )
}
