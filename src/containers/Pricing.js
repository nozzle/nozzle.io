import React, { Component } from 'react'
import styled, { css } from 'styled-components'
//
import Theme from 'utils/Theme'
import { angle } from 'utils/Styles'
import { number } from 'utils/Format'

import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import Link from 'components/Link'
import TrialForm from 'components/TrialForm'
import { Button, H1, H2, H3, H4, H5, H6, P, Span, Input } from 'components/Html'
import { Container, Center } from 'components/Layout'

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

const section = css`
  padding: 1rem 1.5rem;
`

const SectionIntroCmp = props =>
  (<section {...props}>
    <Container>
      <Center>
        <H1>Pricing</H1>
        <P>
          Only pay <strong>once</strong> for keywords. Gain <strong>unlimited</strong> competitors
          and views
        </P>
        <P>
          <Link to="/pricing#faq">
            <Button size="sm" burst>
              Read More
            </Button>
          </Link>
        </P>
      </Center>
    </Container>
  </section>)

const SectionIntro = styled(SectionIntroCmp)`
  padding: 8rem 1.5rem 1rem;
`

const SectionPlansCmp = props =>
  (<section {...props}>
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
          <Link to="/pricing#trial">
            <Button color="primaryDarker" burst>
              Start Trial
            </Button>
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
          <Link to="/pricing#trial">
            <Button color="success" burst>
              Start Trial
            </Button>
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
          <Link to="/pricing#trial">
            <Button color="primaryDarker" burst>
              Start Trial
            </Button>
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
          <Link to="/pricing#trial">
            <Button color="primaryDark" burst>
              Start Trial
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  </section>)

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
      background: ${Theme.colors.primaryDark};
    }
    :nth-child(2) {
      flex: 1 1 27%;
      border-radius: 3px;
      background: ${Theme.colors.primaryDarker};
      min-height: 570px;
      z-index: 3;
    }
    :nth-child(3) {
      flex: 1 1 24%;
      min-height: 530px;
      border-radius: 0 3px 3px 0;
      z-index: 2;
      background: ${Theme.colors.primaryDark};
    }
    :nth-child(4) {
      flex: 1 1 22%;
      min-height: 490px;
      background: ${Theme.colors.primary};
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

const SectionSprayCmp = props =>
  (<section {...props}>
    <Container>
      <Center>
        <H5 className="title">Having commitment issues?</H5>
        <div className="inner">
          <H3>Spray As You Go</H3>
          <div className="price">$20 (1,000 credits) at a time</div>
          <div className="credit">2¢ / credit - never expires</div>
          <div>
            <Link to="/pricing#trial">
              <Button color="white" burst>
                Start Trial
              </Button>
            </Link>
          </div>
        </div>
      </Center>
    </Container>
  </section>)

const SectionSpray = styled(SectionSprayCmp)`
  margin: 5% auto;
  background: linear-gradient(to right, ${Theme.colors.primary}, ${Theme.colors.primaryDark});
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

const SectionFaqCmp = props =>
  (<section {...props}>
    <Container>
      <Center>
        <H3 className="title">Frequently Answered Questions</H3>
      </Center>
      <div className="inner">
        <H5>What is a credit?</H5>
        <P>
          A credit is used whenever we retrieve data for a keyword-engine-language-device-location
          combination. This combination is commonly referred to as a SERP, or, Search Engine Results
          Page.
        </P>
        <br />
        <H5>Will I ever get charged twice for the same keyword?</H5>
        <P>
          Never. Once data for a keyword is retrieved, you can use that data however you please, as
          many times as you want, forever. This includes unlimited competitors, views, and even
          reanalyzing past keywords for more insights.
        </P>
      </div>
    </Container>
  </section>)

const SectionFaq = styled(SectionFaqCmp)`
  padding: 5% 20px;
  .inner {
    background: rgba(0, 0, 0, 0.1);
    padding: 40px;
  }
`

class SectionCalculatorCmp extends Component {
  constructor () {
    super()
    this.state = {
      keywords: 10000,
      engines: 2,
      devices: 2,
      languages: 1,
      locations: 1,
      frequency: 'monthly',
    }
  }
  render () {
    const props = this.props
    const { keywords, engines, devices, languages, locations, frequency } = this.state

    let totalCredits = keywords * engines * devices * languages * locations
    switch (frequency[0].value) {
      case 'hourly':
        totalCredits *= 30 * 24 * 5
        break
      case 'daily':
        totalCredits *= 30
        break
      case 'weekly':
        totalCredits *= 4
        break
      default:
        break
    }

    let suggestedPlan = plans[4]

    if (totalCredits <= 9000) {
      suggestedPlan = plans[0]
    } else if (totalCredits <= 18000) {
      suggestedPlan = plans[1]
    } else if (totalCredits <= 40000) {
      suggestedPlan = plans[2]
    } else if (totalCredits <= 200000) {
      suggestedPlan = plans[3]
    }

    return (
      <section {...props}>
        <Container>
          <H3 className="title">How many credits do I need per month?</H3>
          <div className="inner">
            <div className="left">
              <div className="row keywords">
                <label>Keywords</label>
                <div>
                  <Input
                    type="number"
                    value={keywords}
                    onChange={e =>
                      this.setState({
                        keywords: e.target.value,
                      })}
                    css={{
                      border: !keywords && '2px solid red',
                    }}
                  />
                </div>
              </div>
              <div className="row engines">
                <label>Engines</label>
                <div>
                  <Input
                    type="number"
                    min="1"
                    max="3"
                    value={engines}
                    onChange={e =>
                      this.setState({
                        engines: e.target.value,
                      })}
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
                    onChange={e =>
                      this.setState({
                        devices: e.target.value,
                      })}
                    css={{
                      border: !devices && '2px solid red',
                    }}
                  />
                </div>
              </div>
              <div className="row languages">
                <label>Languages</label>
                <div>
                  <Input
                    type="number"
                    min="1"
                    value={languages}
                    onChange={e =>
                      this.setState({
                        languages: e.target.value,
                      })}
                    css={{
                      border: !languages && '2px solid red',
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
                    onChange={e =>
                      this.setState({
                        locations: e.target.value,
                      })}
                    css={{
                      border: !locations && '2px solid red',
                    }}
                  />
                </div>
              </div>
              <div className="row frequency">
                <div className="label">Frequency</div>
                <div className="radios">
                  <radiogroup>
                    {frequencyOptions.map((option, i) =>
                      (<label key={i}>
                        <input
                          type="radio"
                          name={option.value}
                          onChange={() =>
                            this.setState({
                              frequency: option.value,
                            })}
                          checked={frequency === option.value}
                        />{' '}
                        {option.label}
                      </label>),
                    )}
                  </radiogroup>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="amount">
                {number(totalCredits)}
              </div>
              <div className="suggested">Suggested Plan:</div>
              <div className="suggested-plan">
                <Link to={`#${suggestedPlan.value}`}>
                  {suggestedPlan.label}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }
}

const SectionCalculator = styled(SectionCalculatorCmp)`
  ${angle('right')}

  padding: 5% 1rem 10%;
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
  .inner {
    display: flex;
    flex-wrap: wrap;
  }
  .left, .right {
    flex: 1 1 400px;
    padding: 0 20px;
  }
  .left {
    font-size: 1.8em;
    line-height: 2.4em;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        flex: 0 0 50%;
        width: 50%;
      }
    }
    input[type="number"] {
      font-size: 1em;
      width: 100%;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    }
    .frequency  {
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
      padding: 10px;
      font-size: 25px;
      font-weight: bold;
      color: ${Theme.colors.primaryDark};
    }
  }
`

const SectionContactUsCmp = props =>
  (<section {...props}>
    <Container>
      <H2 full>Let's start your free trial!</H2>
      <TrialForm />
      <H6 full>or</H6>
      <Link to={'tel:1855NOZZLE1'}>
        <Button color="primaryDark" burst>
          Call 1-855-NOZZLE1
        </Button>
      </Link>
    </Container>
  </section>)

const SectionContactUs = styled(SectionContactUsCmp)`
  ${angle('right')}

  padding: 10% 2rem;
  background: ${Theme.colors.primaryDarker};
  color: white;
  &:after {
    display: none;
  }
  display: block;
  text-align: center;
`

export default class Features extends Component {
  render () {
    return (
      <Page>
        <Head>
          <title>Nozzle Features</title>
        </Head>
        <Main>
          <SectionIntro />
          <SectionPlans id="plans" />
          <SectionSpray id={plans[0].value} />
          <SectionFaq id="faq" />
          <SectionCalculator id="calculator" />
          <SectionContactUs id="trial" />
        </Main>
      </Page>
    )
  }
}
