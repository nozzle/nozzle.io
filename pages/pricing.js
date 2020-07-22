import React from 'react'
import styled, { css } from 'styled-components'
//
import { angle } from 'utils/Styles'
import { number } from 'utils/Format'

import Head from 'components/Head'

import Link from 'next/link'
import { Button, H1, H2, H3, H4, H5, P, Span, Input } from 'components/Html'
import { Container, Center } from 'components/Layout'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import tw from 'tailwind.macro'

const plans = [
  { label: 'Spray As You Go', value: 'spray' },
  { label: 'Garden Hose', value: 'garden-hose' },
  { label: 'Pressure Washer', value: 'pressure-washer' },
  { label: 'Fire Hose', value: 'fire-hose' },
  { label: 'Jet Stream', value: 'jet-stream' },
]

const frequencyOptions = [
  {
    value: 'hourly',
    label: 'Hourly',
  },
  {
    value: 'daily',
    label: 'Daily',
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'monthly',
    label: 'Monthly',
  },
  {
    value: 'onetime',
    label: 'One-Time Pull',
  },
]

const faqs = [
  {
    q: `What is a credit?`,
    a: `A credit is used whenever we retrieve data for a keyword-engine-language-device-location combination. This combination is commonly referred to as a SERP (Search Engine Results Page). We pull data for the first 100 results. One credit = top 100 results for each unique search. `,
  },
  {
    q: `How many credits do I need?`,
    a: `The number of credits you’ll need depends on how many keywords you track & how frequently you refresh the data, as well as the number of devices, locations and engines you want to monitor. The pricing plans above give general estimates for the number of credits needed for tracking a single engine and location. Use the calculator on this page to get an idea on how many credits you need.`,
  },
  {
    q: `How long are credits good for?`,
    a: `Credits purchased on the ‘Spray-as-you-go’ plan never expire. Credits purchased on other plans expire at the end of the month.`,
  },
  {
    q: `Do I have to sign a contract?`,
    a: `No. Nozzle plans can be changed or cancelled at any time, effective the next billing period. But, fair warning, access to unprecedented amounts of data is highly addictive. `,
  },
  {
    q: `How frequently can I adjust my plan?`,
    a: `Plan upgrades or downgrades can be made at any time. Upgrades take effect immediately, while downgrades take effect the following billing period. `,
  },
  {
    q: `Is there an extra charge for API access?`,
    a: `No. API access is included. You can also access the data in BigQuery or MySQL.`,
  },
  {
    q: `Are there any other charges I should be aware of?`,
    a: `There are no setup fees, charges for API access, or charges for additional users. The only exception to the one credit = one SERP pricing is for expedited data. SERPs requested under the regular pricing structure are fulfilled by the end of day, but some of our customers need data populated more rapidly. For example, some of our customers need data fulfilled hourly or they place last minute one-time pull data requests that they need as soon as possible. These priority requests are billed at 5 credits per SERP.  `,
  },
  {
    q: `Does Nozzle offer custom plans?`,
    a: `We’re happy to work with you to create a custom plan if what you need doesn’t fall within the standard packages. Give us a call to discuss.`,
  },
]

const section = css`
  padding: 1rem 1.5rem;
`

const SectionIntroCmp = props => (
  <section {...props}>
    <Container>
      <Center>
        <H1>Pricing</H1>
        <P>
          Only pay <strong>once</strong> for keywords. Gain{' '}
          <strong>unlimited</strong> competitors and views
        </P>
        <P>
          <AnchorLink href="#faq">
            <Button size="sm" burst>
              Read More
            </Button>
          </AnchorLink>
        </P>
      </Center>
    </Container>
  </section>
)

const SectionIntro = styled(SectionIntroCmp)`
  padding: 8rem 1.5rem 1rem;
`

const SectionPlansCmp = props => (
  <section {...props}>
    <Container>
      <div className="plans">
        <div className="plan" id={plans[1].value}>
          <H4 className="title">Garden Hose</H4>
          <div className="price">
            <H5>
              <Span className="price-number">$250</Span> / mo
            </H5>
            <small className="billed-yearly">billed yearly</small>
            <small className="billed-monthly">or $313 / mo</small>
          </div>
          <div className="plan-inner">
            <div className="row credits">
              <H5>18,000 credits</H5>
            </div>
            <div className="row percredit">
              <P>1.8¢ / credit</P>
            </div>
            <div className="keywords">Keywords</div>
            <div className="count">600 daily</div>
            <div className="count">4,500 weekly</div>
            <div className="count">18,000 monthly</div>
          </div>
          <Link href="/trial">
            <a>
              <Button color="primaryDarker" burst>
                Start Trial
              </Button>
            </a>
          </Link>
        </div>
        <div className="plan" id={plans[2].value}>
          <H4 className="title">Pressure Washer</H4>
          <div className="price">
            <H5>
              <Span className="price-number">$500</Span> / mo
            </H5>
            <small className="billed-yearly">billed yearly</small>
            <small className="billed-monthly">or $625 / mo</small>
          </div>
          <div className="plan-inner">
            <div className="row credits">
              <H5>40,000 credits</H5>
            </div>
            <div className="row percredit">
              <P>1.6¢ / credit</P>
            </div>
            <div className="keywords">Keywords</div>
            <div className="count">1,300 daily</div>
            <div className="count">9,500 weekly</div>
            <div className="count">40,000 monthly</div>
          </div>
          <Link href="/trial">
            <a>
              <Button color="success" burst>
                Start Trial
              </Button>
            </a>
          </Link>
        </div>
        <div className="plan" id={plans[3].value}>
          <H4 className="title">Fire Hose</H4>
          <div className="price">
            <H5>
              <Span className="price-number">$2,000</Span> / mo
            </H5>
            <small className="billed-yearly">billed yearly</small>
            <small className="billed-monthly">or $2,500 / mo</small>
          </div>
          <div className="plan-inner">
            <div className="row credits">
              <H5>200,000 credits</H5>
            </div>
            <div className="row percredit">
              <P>1.3¢ / credit</P>
            </div>
            <div className="keywords">Keywords</div>
            <div className="count">6,600 daily</div>
            <div className="count">50,000 weekly</div>
            <div className="count">200,000 monthly</div>
          </div>
          <Link href="/trial">
            <a>
              <Button color="primaryDarker" burst>
                Start Trial
              </Button>
            </a>
          </Link>
        </div>
        <div className="plan" id={plans[4].value}>
          <H4 className="title">Jet Stream</H4>
          <div className="price">
            <H5>
              <Span className="price-number">$10,000</Span> / mo
            </H5>
            <small className="billed-yearly">billed yearly</small>
            <small className="billed-monthly">or $12,500 / mo</small>
          </div>
          <div className="plan-inner">
            <div className="row credits">
              <H5>1,250,000 credits</H5>
            </div>
            <div className="row percredit">
              <P>1¢ / credit</P>
            </div>
            <div className="keywords">Keywords</div>
            <div className="count">41,600 daily</div>
            <div className="count">312,500 weekly</div>
            <div className="count">1,250,000 monthly</div>
          </div>
          <Link href="/trial">
            <a>
              <Button color="primaryDark" burst>
                Start Trial
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  </section>
)

const SectionPlans = styled(SectionPlansCmp)`
  ${section}

  .plans {
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .plan {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-align: center;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.4s ease-out;
    align-self: center;
    h4 {
      margin: 2rem 1rem;
    }
    button {
      text-align: center;
      font-size: 1.2em;
      margin: 0;
      padding: 1rem;
      width: 100%;
      border-radius: 0;
      transition: all 0.15s ease-out !important;
      :hover {
        transform: none;
        box-shadow: none;
      }
    }
    :first-child {
      flex: 1 1 24%;
      min-height: 530px;
      border-radius: 3px 0 0 3px;
      z-index: 2;
      background: ${props => props.theme.colors.primaryDark};
    }
    :nth-child(2) {
      flex: 1 1 27%;
      border-radius: 3px;
      background: ${props => props.theme.colors.primaryDarker};
      min-height: 570px;
      z-index: 3;
    }
    :nth-child(3) {
      flex: 1 1 24%;
      min-height: 530px;
      border-radius: 0 3px 3px 0;
      z-index: 2;
      background: ${props => props.theme.colors.primaryDark};
    }
    :nth-child(4) {
      flex: 1 1 22%;
      min-height: 490px;
      background: ${props => props.theme.colors.primary};
      border-radius: 0 3px 3px 0;
      z-index: 1;
    }
    .plan-inner {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      font-size: 0.9em;
      transition: all 0.3s ease-out;
      h5, p: ;
        margin: 0;
      }
    }
    .title {
      padding: 0 20px;
      font-weight: bold;
    }
    .row {
      padding: 7px 0;
      border-bottom: solid 2px rgba(255, 255, 255, 0.07);
      :last-child {
        border-bottom: none;
      }
    }
    .percredit {
      font-size: 16px;
    }
    .price {
      font-size: 12px;
      padding: 10px;
    }
    .price-number {
      font-size: 30px;
    }
    .keywords {
      font-weight: bold;
      padding: 15px;
    }
    .count {
      padding-bottom: 10px;
    }
    small {
      opacity: 0.6;
      margin-top: 10px;
      display: block;
      font-size: 14px;
    }
    .billed-yearly {
      margin: 5px;
    }
    .billed-monthly {
      opacity: 0.7;
      font-weight: bold;
    }
    .strike {
      opacity: 0.6;
    }
  }
  @media screen and (max-width: 900px) {
    .plan {
      flex: 1 1 48% !important;
      min-height: auto !important;
      border-radius: 5px;
      margin: 0 1% 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .plan {
      flex: 1 1 100% !important;
      margin: 0 0 10px;
    }
  }
  @media screen and (min-width: 900px) {
    .plan:hover button {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  }

`

const SectionSprayCmp = props => (
  <section {...props}>
    <Container>
      <Center>
        <H5 className="title">Having commitment issues?</H5>
        <div className="inner">
          <H3>Spray As You Go</H3>
          <div className="price">$20 (1,000 credits) at a time</div>
          <div className="credit">2¢ / credit - never expires</div>
          <div>
            <Link href="/trial">
              <a>
                <Button color="white" burst>
                  Start Trial
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </Center>
    </Container>
  </section>
)

const SectionSpray = styled(SectionSprayCmp)`
  margin: 5% auto;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.primaryDark}
  );
  display: block;
  width: 500px;
  max-width: 95%;
  color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  margin-top: 60px;
  h3 {
    margin: 10px 0;
  }
  .price {
    padding: 5px;
  }
  .credit {
    padding: 5px;
    margin-bottom: 10px;
  }
`

const SectionFaqCmp = props => (
  <section {...props}>
    <Container>
      <Center>
        <H3 className="title">Frequently Answered Questions</H3>
      </Center>
      <div className="inner">
        {faqs.map(({ q, a }) => (
          <>
            <H5>{q}</H5>
            <P>{a}</P>
            <br />
          </>
        ))}
      </div>
    </Container>
  </section>
)

const SectionFaq = styled(SectionFaqCmp)`
  padding: 5% 20px;
  .inner {
    background: rgba(0, 0, 0, 0.1);
    padding: 40px;
  }
`

function SectionCalculatorCmp(props) {
  const [{ keywords, engines, devices, locations }, setState] = React.useState({
    keywords: {
      weekly: 1000,
    },
    engines: 1,
    devices: 1,
    locations: 1,
  })

  let totalKeywords = 0

  totalKeywords += (keywords.hourly || 0) * 30 * 24 * 5
  totalKeywords += (keywords.daily || 0) * 30
  totalKeywords += (keywords.weekly || 0) * 4
  totalKeywords += keywords.monthly || 0
  totalKeywords += keywords.onetime || 0

  let totalCredits = totalKeywords * engines * devices * locations

  let suggestedPlan

  if (totalCredits > 200000) {
    suggestedPlan = plans[4]
  } else if (totalCredits > 40000) {
    suggestedPlan = plans[3]
  } else if (totalCredits > 18000) {
    suggestedPlan = plans[2]
  } else if (totalCredits > 5000) {
    suggestedPlan = plans[1]
  } else {
    suggestedPlan = plans[0]
  }

  return (
    <section {...props}>
      <Container>
        <H3 className="title">How many credits do I need per month?</H3>
        <div className="inner">
          <div className="left">
            {frequencyOptions.map(option => (
              <div className="row keywords" key={option.value}>
                <label>{option.label} Keywords</label>
                <div>
                  <Input
                    type="number"
                    min="0"
                    value={keywords[option.value] || ''}
                    onChange={e => {
                      let value = parseInt(e.target.value)
                      value = value || ''
                      setState(old => ({
                        ...old,
                        keywords: {
                          ...old.keywords,
                          [option.value]: value,
                        },
                      }))
                    }}
                    css={{
                      border: !keywords && '2px solid red',
                    }}
                  />
                </div>
              </div>
            ))}
            <hr />
            <div className="row engines">
              <label>Engines</label>
              <div>
                <Input
                  type="number"
                  min="1"
                  max="3"
                  value={engines}
                  onChange={e => {
                    let value = parseInt(e.target.value)
                    setState(old => ({
                      ...old,
                      engines: value,
                    }))
                  }}
                  css={{
                    border: !engines && '2px solid red',
                  }}
                />
              </div>
            </div>
            <div className="row devices">
              <label>Devices</label>
              <div>
                <Input
                  type="number"
                  min="1"
                  max="5"
                  value={devices}
                  onChange={e => {
                    let value = parseInt(e.target.value)
                    setState(old => ({
                      ...old,
                      devices: value,
                    }))
                  }}
                  css={{
                    border: !devices && '2px solid red',
                  }}
                />
              </div>
            </div>
            <div className="row locations">
              <label>Locations</label>
              <div>
                <Input
                  type="number"
                  min="1"
                  value={locations}
                  onChange={e => {
                    let value = parseInt(e.target.value)
                    setState(old => ({
                      ...old,
                      locations: value,
                    }))
                  }}
                  css={{
                    border: !locations && '2px solid red',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="right">
            {suggestedPlan ? (
              <>
                <div className="amount">{number(totalCredits)}</div>
                <div
                  css={`
                    ${tw`p-2 mb-4 text-2xl`}
                  `}
                >
                  credits
                </div>
                <div className="suggested">Suggested Plan:</div>
                <div className="suggested-plan">
                  <Link href={`/pricing#${suggestedPlan.value}`}>
                    <a>{suggestedPlan.label}</a>
                  </Link>
                </div>
              </>
            ) : (
              <span>Enter your requirements to see a suggested plan</span>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

const SectionCalculator = styled(SectionCalculatorCmp)`
  ${angle('right')};
  padding: 5% 1rem 10%;
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
  .inner {
    display: flex;
    flex-wrap: wrap;
  }
  .left {
    flex: 0 1 450px;
    padding: 0 20px;
    font-size: 1.2em;
    line-height: 2.4em;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      label {
        flex: 1 0 250px;
        text-align: right;
        padding-right: 1rem;
      }
      div {
        flex: 1 0 72px;
      }
    }
    input[type='number'] {
      font-size: 1em;
      width: 100%;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    }
    .frequency {
      align-self: flex-start;
    }
    .radios {
      font-size: 0.8em;
      line-height: 1.5em;
      margin-top: 17px;
      margin-bottom: 1rem;
    }
    label {
      display: block;
    }
  }
  .right {
    flex: 1;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e7e7e7;
    border-radius: 5px;
    padding: 20px;
    .amount {
      font-size: 3.8em;
      font-weight: 900;
    }
    .suggested {
      padding: 20px 20px 5px;
      font-size: 20px;
    }
    .suggested-plan {
      text-align: center;
      padding: 10px;
      font-size: 2.5rem;
      font-weight: bold;
      color: ${props => props.theme.colors.primaryDark};
    }
  }
`

const SectionContactUsCmp = props => (
  <section {...props}>
    <Container
      css={`
        ${tw`py-40 px-0`}
      `}
    >
      <H2 full>Let's start your free trial!</H2>
      <Link href="/trial">
        <a>
          <Button
            color="success"
            css={`
              ${tw`text-2xl rounded p-6`}
            `}
          >
            Get started!
          </Button>
        </a>
      </Link>
    </Container>
  </section>
)

const SectionContactUs = styled(SectionContactUsCmp)`
  ${section};
  ${angle('right')};

  background: ${props => props.theme.colors.primaryDarker};
  color: white;

  :after {
    display: none;
  }
  display: block;
  text-align: center;
`

export default function Features() {
  return (
    <div>
      <Head
        title="Pricing | Nozzle"
        description="Only pay once per keyword SERP listing. We offer customized scheduling so you can track more phrases without breaking the bank."
      />
      <main>
        <SectionIntro />
        <SectionPlans id="plans" />
        <SectionSpray id={plans[0].value} />
        <SectionFaq id="faq" />
        <SectionCalculator id="calculator" />
        <SectionContactUs id="trial" />
      </main>
    </div>
  )
}
