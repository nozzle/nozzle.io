import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
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
  ${tw`z-0`}
  .inner {
    ${tw`mx-auto flex flex-wrap items-center`}
    max-width: ${props => props.theme.maxWidth}px;
    padding: 5% 10%;
  }
  img {
    ${tw`w-full`}
  }

  ${belowMobile} {
    .left,
    .right {
      ${tw`mx-0`}
      flex: 1 1 100%;
    }
    .left {
      ${tw`mb-8`}
    }
  }
`

const layout = css`
  .left {
    ${tw`mr-10`}
    flex: 1 1 300px;
  }
  .right {
    flex: 1 1 300px;
  }
`

const SectionThanks = styled(Section)`
  ${tw`z-0`}
  .inner {
    ${tw`mx-auto flex flex-wrap items-center`}
    max-width: ${props => props.theme.maxWidth}px;
    padding-top: 8%;
    padding-left: 10%;
    padding-right: 10%;
  }

  ${belowMobile} {
    .left,
    .right {
      ${tw`mx-0`}
      flex: 1 1 100%;
    }
    .left {
      ${tw`mb-8`}
    }
  }

  .inner {
    ${tw`block text-center`}
  }
`

const Example = styled(Section)`
  ${section};
  ${layout};

  h3 {
    ${tw`w-full`}
  }

  .right {
    img {
      ${tw`opacity-100 rounded shadow-2xl max-w-4xl`}
      width: 110%;
    }
  }
  .left {
    ${tw`pr-4`}

    h4 {
      ${tw`mb-8`}
    }
  }

  ${belowMobile} {
    ${tw`text-center`}

    .right {
      img {
        ${tw`w-full`}
      }
    }
    .left {
      ${tw`mx-auto mb-8`}
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
