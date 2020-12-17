import React from 'react'
import styled, { css } from 'styled-components'
import * as presets from 'data/calculatorOptions'
//
import { angle } from 'utils/Styles'
import { number } from 'utils/Format'

import Head from 'components/Head'
import Icon from 'components/Icon'

import Link from 'next/link'
import { Button, H1, H2, H3, H4, H5, P, Span, Input } from 'components/Html'
import { Container, Center } from 'components/Layout'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import tw from 'tailwind.macro'

const belowTablet = `@media(max-width: ${1000}px)`
const belowMobile = `@media(max-width: ${700}px)`

const plans = [
  {
    label: 'Enterprise',
    value: 'enterprise',
    monthly: 11999,
    annually: 9999,
    monthlyOverage: 3.43,
    annualOverage: 2.86,
    pulls: 3500000,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
  {
    label: 'Basic',
    value: 'basic',
    monthly: 49,
    annually: 59,
    monthlyOverage: 5.88,
    annualOverage: 4.9,
    pulls: 10000,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
  {
    label: 'Advanced',
    value: 'advanced',
    monthly: 119,
    annually: 99,
    pulls: 21000,
    monthlyOverage: 5.66,
    annualOverage: 4.71,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
  {
    label: 'Pro',
    value: 'pro',
    monthly: 299,
    annually: 249,
    pulls: 60000,
    monthlyOverage: 4.98,
    annualOverage: 4.15,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
  {
    label: 'Pro Plus',
    value: 'pro-plus',
    monthly: 599,
    annually: 499,
    pulls: 130000,
    monthlyOverage: 4.61,
    annualOverage: 3.84,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
  {
    label: 'Business Basic',
    value: 'business-basic',
    monthly: 1199,
    annually: 999,
    pulls: 275000,
    monthlyOverage: 4.36,
    annualOverage: 3.63,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
  {
    label: 'Business Advanced',
    value: 'business-advanced',
    monthly: 2999,
    annually: 2499,
    pulls: 725000,
    monthlyOverage: 4.14,
    annualOverage: 3.45,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
  {
    label: 'Business Pro',
    value: 'business-pro',
    monthly: 5999,
    annually: 4999,
    pulls: 1500000,
    monthlyOverage: 4.0,
    annualOverage: 3.33,
    totalPrice: 0,
    totalMonthlyOverage: 0,
    totalAnnualOverage: 0,
  },
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
]

const faqs = [
  {
    q: `What is a pull?`,
    a: `A pull is used whenever we retrieve data for a keyword-engine-language-device-location combination. This combination is commonly referred to as a SERP (Search Engine Results Page). We pull data for the first 100 results. One pull = top 100 results for each unique search. `,
  },
  {
    q: `How many pulls do I need?`,
    a: `The number of pulls you’ll need depends on how many keywords you track & how frequently you refresh the data, as well as the number of devices, locations and engines you want to monitor. The pricing plans above give general estimates for the number of pulls needed for tracking a single engine and location. Use the calculator on this page to get an idea on how many pulls you need.`,
  },
  {
    q: `How long are pulls good for?`,
    a: `Pulls purchased on the Custom plan never expire. Pulls purchased on other plans expire at the end of the month.`,
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
    a: `There are no setup fees, charges for API access, or charges for additional users. The only exception to the one pull = one SERP pricing is for expedited data. SERPs requested under the regular pricing structure are fulfilled by the end of day, but some of our customers need data populated more rapidly. For example, some of our customers need data fulfilled hourly or they place last minute one-time pull data requests that they need as soon as possible. These priority requests are billed at 5 pulls per SERP.  `,
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
      </Center>
    </Container>
  </section>
)

const SectionIntro = styled(SectionIntroCmp)`
  padding: 8rem 1.5rem 1rem;
`

function SectionPlansCmp(props) {
  const [monthly, setMonthly] = React.useState(false)
  const [enterprise, setEnterprise] = React.useState(false)

  return (
    <section {...props}>
      <Container>
        <Center>
          <div className="plan-filters">
            <div className="plan-filter">
              <P>How do you want to pay?</P>
              <Button
                className={monthly ? 'on' : 'off'}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </Button>
              <Button
                className={monthly ? 'off' : 'on'}
                onClick={() => setMonthly(false)}
              >
                Annual
              </Button>
            </div>
            <div className="plan-filter">
              <P>Are you a SMB or Enterprise?</P>
              <Button
                className={enterprise ? 'off' : 'on'}
                onClick={() => setEnterprise(false)}
              >
                SMB
              </Button>
              <Button
                className={enterprise ? 'on' : 'off'}
                onClick={() => setEnterprise(true)}
              >
                Enterprise
              </Button>
            </div>
          </div>
        </Center>
        {enterprise ? (
          <div className="container">
            <div className="plans">
              <div className="plan" id={plans[1].value}>
                <H4 className="title">Business Basic</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">$1,199</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">$999</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    275,000 Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${monthly ? 4.36 : 3.63} Per Thousand Pulls
                  </small>
                  <small className="billed-monthly">
                    $7.27 Per Thousand Priority Pulls
                  </small>
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
                <H4 className="title">Business Advanced</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">$2,999</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">$2,499</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}

                  <small className="billed-monthly">
                    725,000 Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${monthly ? 4.14 : 3.45} Per Thousand Pulls
                  </small>
                  <small className="billed-monthly">
                    $7.14 Per Thousand Priority Pulls
                  </small>
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
                <H4 className="title">Business Pro</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">$5,999</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">$4,999</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    1,500,000 Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${monthly ? '4.00' : 3.33} Per Thousand Pulls
                  </small>
                  <small className="billed-monthly">
                    $6.67 Per Thousand Priority Pulls
                  </small>
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
                <H4 className="title">Enterprise</H4>
                <div className="price">
                  <H5>Need a custom plan?</H5>
                </div>
                <div className="plan-inner">
                  {' '}
                  <small className="billed-monthly">
                    Contact Us For A Quote
                  </small>
                </div>
                <Link href="/trial">
                  <a>
                    <Button color="primaryDark" burst>
                      Request a Quote
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="arrow-button prev">
              <Icon
                i="chevron-circle-left"
                size="large"
                onClick={() => setEnterprise(false)}
              />
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="plans">
              <div className="plan" id={plans[1].value}>
                <H4 className="title"> Basic</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">$59</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">$49</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    10,000 Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${monthly ? 5.88 : '4.90'} Per Thousand Pulls
                  </small>
                  <small className="billed-monthly">
                    $9.80 Per Thousand Priority Pulls
                  </small>
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
                <H4 className="title">Advanced</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">$119</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">$99</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    21,000 Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${monthly ? 5.66 : 4.71} Per Thousand Pulls
                  </small>
                  <small className="billed-monthly">
                    $9.00 Per Thousand Priority Pulls
                  </small>
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
                <H4 className="title">Pro</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">$299</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">$249</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}{' '}
                  <small className="billed-monthly">
                    60,000 Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${monthly ? 4.98 : 4.15} Per Thousand Pulls
                  </small>
                  <small className="billed-monthly">
                    $8.30 Per Thousand Priority Pulls
                  </small>
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
                <H4 className="title">Pro Plus</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">$599</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">$499</Span> / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    130,000 Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${monthly ? 4.61 : 3.84} Per Thousand Pulls
                  </small>
                  <small className="billed-monthly">
                    $7.68 Per Thousand Priority Pulls
                  </small>
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
            <div className="arrow-button next">
              <Icon
                i="chevron-circle-right"
                size="large"
                onClick={() => setEnterprise(true)}
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

const SectionPlans = styled(SectionPlansCmp)`
  ${section}

  .plans {
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 2.05rem;
    padding-right: 2.05rem;
  }

  .container{
    position: relative;
  }

  .arrow-button{
    z-index: 9;
    cursor: pointer;
    position: absolute;
    top: 45%;
    color: gray;
    font-size: 25px;
    transition: 0.2s ease;
    
    :hover{
      transform: scale(1.1);
    }

    ${belowTablet}{
        display: none;
      }
    }

    .next{
      right: 0;
    }

    .prev{
      left:0;
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
      min-height: 430px;
      border-radius: 3px 0 0 3px;
      z-index: 2;
      background: ${props => props.theme.colors.primaryDark};
    }
    :nth-child(2) {
      flex: 1 1 27%;
      border-radius: 3px;
      background: ${props => props.theme.colors.primaryDarker};
      min-height: 470px;
      z-index: 3;
    }
    :nth-child(3) {
      flex: 1 1 24%;
      min-height: 430px;
      border-radius: 0 3px 3px 0;
      z-index: 2;
      background: ${props => props.theme.colors.primaryDark};
    }
    :nth-child(4) {
      flex: 1 1 22%;
      min-height: 390px;
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

     .next-button {
      color: gray;
      
    }

    .plan-filters {
      display: flex;
      max-width: 50rem;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    .plan-filter {
      flex: 1;
      button{
          border: solid 2px ${props => props.theme.colors.primary};
          margin-right:.25rem;
      }
      
        .on{
          background: ${props => props.theme.colors.primary};
        }

        .off{
          background: white;
          color: ${props => props.theme.colors.primary}; 
        }
    }

    .row {
      padding: 7px 0;
      border-bottom: solid 2px rgba(255, 255, 255, 0.07);
      :last-child {
        border-bottom: none;
      }
    }
    .perPull {
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

const SectionFaqCmp = props => (
  <section {...props}>
    <Container>
      <Center>
        <H3 className="title">Frequently Answered Questions</H3>
      </Center>
      <div className="inner">
        {faqs.map(({ q, a }) => (
          <div key={q}>
            <H5>{q}</H5>
            <P>{a}</P>
            <br />
          </div>
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
  const [rows, setRows] = React.useState(presets.reset)
  const [dirty, setDirty] = React.useState(false)

  React.useEffect(() => {
    if (rows == presets.reset) {
      setDirty(false)
    } else {
      setDirty(true)
    }
  }, [setDirty, rows])

  const handleChange = index => e => {
    const { dataset, name, value } = e.target
    const changedRows = [...rows]

    dataset.nested === 'nested'
      ? (changedRows[index] = {
          ...changedRows[index],
          keywords: {
            ...changedRows[index].keywords,
            [name]: value,
          },
        })
      : (changedRows[index] = {
          ...changedRows[index],
          [name]: value,
        })
    setRows([...changedRows])
  }

  const addRow = () => {
    const item = {
      name: '',
      keywords: {
        hourly: '',
        daily: '',
        weekly: '',
        monthly: '',
      },
      devices: 1,
      locations: 1,
    }
    setRows([...rows, item])
  }

  const deleteRow = index => () => {
    const rowsArray = [...rows]
    const newRows = rowsArray.filter((row, i) => i !== index)
    setRows(newRows)
  }

  let totalHourly = 0
  let totalDaily = 0
  let totalWeekly = 0
  let totalMonthly = 0
  let totalDevices = 0
  let totalLocations = 0
  let totalPulls = 0

  rows.forEach(row => {
    let keywords = 0
    totalHourly += parseInt(row.keywords.hourly || 0)
    totalDaily += parseInt(row.keywords.daily || 0)
    totalWeekly += parseInt(row.keywords.weekly || 0)
    totalMonthly += parseInt(row.keywords.monthly || 0)
    totalDevices += parseInt(row.devices)
    totalLocations += parseInt(row.locations)
    keywords += parseInt(row.keywords.hourly || 0) * 30 * 24 * 5
    keywords += parseInt(row.keywords.daily || 0) * 30
    keywords += parseInt(row.keywords.weekly || 0) * 4
    keywords += parseInt(row.keywords.monthly || 0)
    totalPulls += keywords * parseInt(row.devices) * parseInt(row.locations)
  })

  plans.forEach((plan, i) => {
    plan.totalPrice = plan.monthly
    plan.totalMonthlyOverage = 0
    plan.totalAnnualOverage = 0

    if (totalPulls > plan.pulls) {
      plan.totalMonthlyOverage = (totalPulls - plan.pulls) * plan.monthlyOverage
      plan.totalAnnualOverage = (totalPulls - plan.pulls) * plan.annualOverage
      plan.totalPrice += plan.totalMonthlyOverage
    }
  })
  let suggestedPlan = plans.reduce((res, obj) => {
    return obj.totalPrice < res.totalPrice ? obj : res
  })

  return (
    <section {...props}>
      <Container>
        <H3 className="title">How many pulls do I need per month?</H3>
        <P className="title">
          Not sure where to start? Try using one of our preset options to find
          the right plan for you.
        </P>
        <div className="inner">
          <div className="presets">
            {dirty ? (
              <Button color="gray" onClick={() => setRows(presets.reset)}>
                <Icon i="undo" /> Reset
              </Button>
            ) : (
              ''
            )}

            <Button onClick={() => setRows(presets.smallSMBAgency)}>
              Small SMB Agency
            </Button>
            <Button onClick={() => setRows(presets.largerAgency)}>
              Larger Agency
            </Button>
            <Button onClick={() => setRows(presets.largeSiteMultipleLocations)}>
              Large Site Tracking Multiple Locations
            </Button>
            <Button onClick={() => setRows(presets.largerSite)}>
              Larger Site
            </Button>
          </div>
          <div className="top">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Team/Project</th>
                  <th>Hourly Keywords</th>
                  <th>Daily Keywords</th>
                  <th>Weekly Keywords</th>
                  <th>Monthly Keywords</th>
                  <th>Devices</th>
                  <th>Locations</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {rows.length > 1 ? (
                        <Icon
                          i="x"
                          onClick={deleteRow(index)}
                          className="delete"
                        />
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      <Input
                        type="text"
                        name="name"
                        value={rows[index].name}
                        onChange={handleChange(index)}
                      />
                    </td>
                    {frequencyOptions.map(option => (
                      <td className="row keywords" key={option.value}>
                        <Input
                          name={option.value}
                          type="number"
                          value={rows[index].keywords[option.value]}
                          min="0"
                          data-nested="nested"
                          onChange={handleChange(index)}
                        />
                      </td>
                    ))}
                    <td>
                      <Input
                        type="number"
                        name="devices"
                        value={rows[index].devices}
                        min="1"
                        max="5"
                        onChange={handleChange(index)}
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        name="locations"
                        value={rows[index].locations}
                        min="1"
                        onChange={handleChange(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td className="center">
                    <Icon i="plus" onClick={addRow} className="add" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <th>Totals</th>
                  <td>{totalHourly || ''}</td>
                  <td>{totalDaily || ''}</td>
                  <td>{totalWeekly || ''}</td>
                  <td>{totalMonthly || ''}</td>
                  <td>{totalDevices || ''}</td>
                  <td>{totalLocations || ''}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="bottom">
            {suggestedPlan ? (
              <>
                <div className="amount">{number(totalPulls)}</div>

                <div
                  css={`
                    ${tw`p-2 mb-4 text-2xl`}
                  `}
                >
                  pulls
                </div>
                <div className="suggested">Suggested Plan:</div>
                <div className="suggested-plan">
                  <AnchorLink href={'#intro'}>{suggestedPlan.label}</AnchorLink>
                </div>
                {suggestedPlan == plans[0] ? (
                  <>
                    <div className="pricing">Call us for a quote</div>
                  </>
                ) : (
                  <>
                    <div className="pricing">
                      ${suggestedPlan.annually}/mo Billed Annually{' '}
                      {suggestedPlan.totalAnnualOverage > 0
                        ? `+ ${suggestedPlan.totalAnnualOverage.toFixed(
                            2
                          )} in Overage Charges`
                        : ''}
                    </div>
                    <div className="pricing">
                      ${suggestedPlan.monthly}/mo Billed Monthly
                      {suggestedPlan.totalMonthlyOverage > 0
                        ? `+ ${suggestedPlan.totalMonthlyOverage.toFixed(
                            2
                          )} in Overage Charges`
                        : ''}
                    </div>
                  </>
                )}
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
    margin-bottom: 20px;
  }
  .inner {
    display: flex;
    flex-wrap: wrap;
  }
  .presets {
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align: center;
    button {
      margin: 1rem;
    }
  }

  th,
  td {
    padding: 0.75rem;
    :nth-child(2) {
      border-right: 2px solid ${props => props.theme.colors.primary};
    }
    :nth-child(6) {
      border-right: 2px solid ${props => props.theme.colors.primary};
    }
    :nth-child(7) {
      border-right: 2px solid ${props => props.theme.colors.primary};
    }
    :last-child {
      width: 2rem;
    }
  }

  tfoot {
    font-weight: bold;
    font-size: 1.25rem;
    tr {
      :last-child {
        border-top: 2px solid ${props => props.theme.colors.primary};
      }
    }
  }

  .center {
    text-align: center;
  }

  .add {
    text-align: center;
    color: ${props => props.theme.colors.success};
    :hover {
      transform: scale(1.1);
    }
  }

  .delete {
    color: ${props => props.theme.colors.danger};
    :hover {
      transform: scale(1.1);
    }
  }
  .top {
    margin: 0 auto;
    margin-bottom: 3rem;

    input[type='number'],
    input[type='text'] {
      font-size: 1em;
      width: 100%;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    }
    ${belowMobile} {
      table,
      thead,
      tbody,
      tfoot,
      th,
      td,
      tr {
        display: block;
      }
      th,
      td {
        border-right: none;
        :last-child {
          width: auto;
        }
      }

      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }

      tbody {
        tr {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        td:nth-of-type(2):before {
          content: 'Team/Project';
        }
        td:nth-of-type(3):before {
          content: 'Hourly Keywords';
        }
        td:nth-of-type(4):before {
          content: 'Daily Keywords';
        }
        td:nth-of-type(5):before {
          content: 'Weekly Keywords';
        }
        td:nth-of-type(6):before {
          content: 'Monthly Keywords';
        }
        td:nth-of-type(7):before {
          content: 'Devices';
        }
        td:nth-of-type(8):before {
          content: 'Locations';
        }
      }
      tfoot {
        text-align: center;
        tr:nth-of-type(1) {
          td:nth-of-type(3) {
            display: none;
          }
          td:nth-of-type(4) {
            display: none;
          }
          td:nth-of-type(5) {
            display: none;
          }
          td:nth-of-type(6) {
            display: none;
          }
          td:nth-of-type(7) {
            display: none;
          }
        }
        tr:nth-of-type(2) {
          td:nth-of-type(2):before {
            content: 'Hourly Keywords: ';
          }
          td:nth-of-type(3):before {
            content: 'Daily Keywords: ';
          }
          td:nth-of-type(4):before {
            content: 'Weekly Keywords: ';
          }
          td:nth-of-type(5):before {
            content: 'Monthly Keywords: ';
          }
          td:nth-of-type(6):before {
            content: 'Devices: ';
          }
          td:nth-of-type(7):before {
            content: 'Locations: ';
          }
        }
      }
    }
  }
  .bottom {
    margin: 0 auto;
    flex: 1;
    padding: 0 20px;
    display: flex;
    min-height: 20rem;
    max-width: 60rem;
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

    .pricing {
      margin: 0.25rem;
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
        <SectionIntro id="intro" />
        <SectionPlans id="plans" />
        <SectionCalculator id="calculator" />
        <SectionFaq id="faq" />
        <SectionContactUs id="trial" />
      </main>
    </div>
  )
}
