import React from 'react'
import { Container, Center } from 'components/Layout'
import { Button, H4, H5, P, Span } from 'components/Html'
import { number } from 'utils/Format'
import Link from 'next/link'
import Icon from 'components/Icon'
import styled from 'styled-components'

const belowTablet = `@media(max-width: ${1000}px)`

function SectionPlansCmp(props) {
  const plans = props.plans
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
              <div className="plan" id={plans[5].value}>
                <H4 className="title">{plans[5].label}</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">
                          ${number(plans[5].monthly)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">
                          ${number(plans[5].annually)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    {number(plans[5].pulls)} Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${plans[5].overage} Per 1,000 Pulls
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
              <div className="plan" id={plans[6].value}>
                <H4 className="title">{plans[6].label}</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">
                          ${number(plans[6].monthly)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">
                          ${number(plans[6].annually)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}

                  <small className="billed-monthly">
                    {number(plans[6].pulls)} Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${plans[6].overage} Per 1,000 Pulls
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
              <div className="plan" id={plans[7].value}>
                <H4 className="title">{plans[7].label}</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">
                          ${number(plans[7].monthly)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">
                          ${number(plans[7].annually)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    {number(plans[7].pulls)} Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${plans[7].overage}.00 Per 1,000 Pulls
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
              <div className="plan" id={plans[0].value}>
                <H4 className="title">{plans[0].label}</H4>
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
                <H4 className="title">{plans[1].label}</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">
                          ${number(plans[1].monthly)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">
                          ${number(plans[1].annually)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    {number(plans[1].pulls)} Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${plans[1].overage} Per 1,000 Pulls
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
                <H4 className="title">{plans[2].label}</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">
                          ${number(plans[2].monthly)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">
                          ${number(plans[2].annually)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    {number(plans[2].pulls)} Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${plans[2].overage} Per 1,000 Pulls
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
                <H4 className="title">{plans[3].label}</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">
                          ${number(plans[3].monthly)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">
                          ${number(plans[3].annually)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}{' '}
                  <small className="billed-monthly">
                    {number(plans[3].pulls)} Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${plans[3].overage} Per 1,000 Pulls
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
                <H4 className="title">{plans[4].label}</H4>
                <div className="price">
                  {monthly ? (
                    <>
                      <H5>
                        <Span className="price-number">
                          ${number(plans[4].monthly)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed monthly</small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <Span className="price-number">
                          ${number(plans[4].annually)}
                        </Span>{' '}
                        / mo{' '}
                      </H5>
                      <small className="billed-yearly">billed yearly</small>
                    </>
                  )}
                  <small className="billed-monthly">
                    {number(plans[4].pulls)} Pulls Included
                  </small>
                </div>
                <div className="plan-inner">
                  <small>Overage Pricing:</small>
                  <small className="billed-monthly">
                    ${plans[4].overage} Per 1,000 Pulls
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
  padding: 1rem 1.5rem;

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
export default function PricingPlans({ plans }) {
  return <SectionPlans plans={plans} />
}
