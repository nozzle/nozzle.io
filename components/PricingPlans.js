import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import { number } from 'utils/Format'

import { Container, Center } from 'components/Layout'
import { Button, H4, H5, Span } from 'components/Html'
import Icon from 'components/Icon'

const belowTablet = `@media(max-width: ${1000}px)`

const StyledPlans = styled('div')`
  padding: 1rem 1.5rem;
`
const PlanFilters = styled('div')`
  display: flex;
  max-width: 50rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`
const PlanFilter = styled('div')`
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
`

const PlansContainer = styled('div')`
  position: relative;
`
const Plans = styled('div')`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 2.05rem;
  padding-right: 2.05rem;
`
const Plan = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  text-align: center;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.4s ease-out;
  align-self: center;

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
  }

  @media screen and (max-width: 900px) {
    flex: 1 1 48% !important;
    min-height: auto !important;
    border-radius: 5px;
    margin: 0 1% 10px;
  }

  @media screen and (max-width: 500px) {
    flex: 1 1 100% !important;
    margin: 0 0 10px;
  }

  @media screen and (min-width: 900px) {
    :hover button {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  }
`
const Title = styled(H4)`
  font-weight: bold;
  padding: 0 20px;
  margin: 2rem 1rem;
`
const Price = styled('div')`
  font-size: 12px;
  padding: 10px;
`
const PriceNumber = styled(Span)`
  font-size: 30px;
`
const Small = styled('small')`
  opacity: 0.6;
  margin-top: 10px;
  display: block;
  font-size: 14px;
`
const SmallBold = styled('small')`
  opacity: 0.7;
  font-weight: bold;
  margin-top: 10px;
  display: block;
  font-size: 14px;
`

const BackButton = styled('div')`
  z-index: 9;
  cursor: pointer;
  position: absolute;
  top: 45%;
  color: gray;
  font-size: 25px;
  transition: 0.2s ease;

  :hover {
    transform: scale(1.1);
  }

  ${belowTablet} {
    display: none;
  }
`
const NextButton = styled('div')`
  right: 0;
  z-index: 9;
  cursor: pointer;
  position: absolute;
  top: 45%;
  color: gray;
  font-size: 25px;
  transition: 0.2s ease;

  :hover {
    transform: scale(1.1);
  }

  ${belowTablet} {
    display: none;
  }
`

export default function PricingPlans({
  plans,
  monthly,
  setMonthly,
  enterprise,
  setEnterprise,
}) {
  return (
    <StyledPlans>
      <Container>
        <Center>
          <PlanFilters>
            <PlanFilter>
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
            </PlanFilter>
            <PlanFilter>
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
            </PlanFilter>
          </PlanFilters>
        </Center>
        {enterprise ? (
          <PlansContainer>
            <Plans>
              <Plan id={plans[5].value}>
                <Title>{plans[5].label}</Title>
                <Price>
                  {monthly ? (
                    <>
                      <H5>
                        <PriceNumber>${number(plans[5].monthly)}</PriceNumber> /
                        mo{' '}
                      </H5>
                      <Small>billed monthly</Small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <PriceNumber>
                          ${number(plans[5].annually)}
                        </PriceNumber>{' '}
                        / mo{' '}
                      </H5>
                      <Small>billed yearly</Small>
                    </>
                  )}
                  <SmallBold>{number(plans[5].pulls)} Pulls Included</SmallBold>
                </Price>
                <div className="plan-inner">
                  <Small>Overage Pricing:</Small>
                  <SmallBold>${plans[5].overage} Per 1,000 Pulls</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="primaryDarker" burst>
                    Start Trial
                  </Button>
                </Link>
              </Plan>
              <Plan id={plans[6].value}>
                <Title>{plans[6].label}</Title>
                <Price>
                  {monthly ? (
                    <>
                      <H5>
                        <PriceNumber>${number(plans[6].monthly)}</PriceNumber> /
                        mo{' '}
                      </H5>
                      <Small>billed monthly</Small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <PriceNumber>
                          ${number(plans[6].annually)}
                        </PriceNumber>{' '}
                        / mo{' '}
                      </H5>
                      <Small>billed yearly</Small>
                    </>
                  )}

                  <SmallBold>{number(plans[6].pulls)} Pulls Included</SmallBold>
                </Price>
                <div className="plan-inner">
                  <Small>Overage Pricing:</Small>
                  <SmallBold>${plans[6].overage} Per 1,000 Pulls</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="success" burst>
                    Start Trial
                  </Button>
                </Link>
              </Plan>
              <Plan id={plans[7].value}>
                <Title>{plans[7].label}</Title>
                <Price>
                  {monthly ? (
                    <>
                      <H5>
                        <PriceNumber>${number(plans[7].monthly)}</PriceNumber> /
                        mo{' '}
                      </H5>
                      <Small>billed monthly</Small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <PriceNumber>
                          ${number(plans[7].annually)}
                        </PriceNumber>{' '}
                        / mo{' '}
                      </H5>
                      <Small>billed yearly</Small>
                    </>
                  )}
                  <SmallBold>{number(plans[7].pulls)} Pulls Included</SmallBold>
                </Price>
                <div className="plan-inner">
                  <Small>Overage Pricing:</Small>
                  <SmallBold>${plans[7].overage}.00 Per 1,000 Pulls</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="primaryDarker" burst>
                    Start Trial
                  </Button>
                </Link>
              </Plan>
              <Plan id={plans[0].value}>
                <Title>{plans[0].label}</Title>
                <Price>
                  <H5>Need a custom plan?</H5>
                </Price>
                <div className="plan-inner">
                  {' '}
                  <SmallBold>Contact Us For A Quote</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="primaryDark" burst>
                    Request a Quote
                  </Button>
                </Link>
              </Plan>
            </Plans>
            <BackButton>
              <Icon
                i="chevron-circle-left"
                size="large"
                onClick={() => setEnterprise(false)}
              />
            </BackButton>
          </PlansContainer>
        ) : (
          <PlansContainer>
            <Plans>
              <Plan id={plans[1].value}>
                <Title>{plans[1].label}</Title>
                <Price>
                  {monthly ? (
                    <>
                      <H5>
                        <PriceNumber>${number(plans[1].monthly)}</PriceNumber> /
                        mo{' '}
                      </H5>
                      <Small>billed monthly</Small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <PriceNumber>
                          ${number(plans[1].annually)}
                        </PriceNumber>{' '}
                        / mo{' '}
                      </H5>
                      <Small>billed yearly</Small>
                    </>
                  )}
                  <SmallBold>{number(plans[1].pulls)} Pulls Included</SmallBold>
                </Price>
                <div className="plan-inner">
                  <Small>Overage Pricing:</Small>
                  <SmallBold>${plans[1].overage} Per 1,000 Pulls</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="primaryDarker" burst>
                    Start Trial
                  </Button>
                </Link>
              </Plan>
              <Plan id={plans[2].value}>
                <Title>{plans[2].label}</Title>
                <Price>
                  {monthly ? (
                    <>
                      <H5>
                        <PriceNumber>${number(plans[2].monthly)}</PriceNumber> /
                        mo{' '}
                      </H5>
                      <Small>billed monthly</Small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <PriceNumber>
                          ${number(plans[2].annually)}
                        </PriceNumber>{' '}
                        / mo{' '}
                      </H5>
                      <Small>billed yearly</Small>
                    </>
                  )}
                  <SmallBold>{number(plans[2].pulls)} Pulls Included</SmallBold>
                </Price>
                <div className="plan-inner">
                  <Small>Overage Pricing:</Small>
                  <SmallBold>${plans[2].overage} Per 1,000 Pulls</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="success" burst>
                    Start Trial
                  </Button>
                </Link>
              </Plan>
              <Plan id={plans[3].value}>
                <Title>{plans[3].label}</Title>
                <Price>
                  {monthly ? (
                    <>
                      <H5>
                        <PriceNumber>${number(plans[3].monthly)}</PriceNumber> /
                        mo{' '}
                      </H5>
                      <Small>billed monthly</Small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <PriceNumber>
                          ${number(plans[3].annually)}
                        </PriceNumber>{' '}
                        / mo{' '}
                      </H5>
                      <Small>billed yearly</Small>
                    </>
                  )}{' '}
                  <SmallBold>{number(plans[3].pulls)} Pulls Included</SmallBold>
                </Price>
                <div className="plan-inner">
                  <Small>Overage Pricing:</Small>
                  <SmallBold>${plans[3].overage} Per 1,000 Pulls</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="primaryDarker" burst>
                    Start Trial
                  </Button>
                </Link>
              </Plan>
              <Plan id={plans[4].value}>
                <Title>{plans[4].label}</Title>
                <Price>
                  {monthly ? (
                    <>
                      <H5>
                        <PriceNumber>${number(plans[4].monthly)}</PriceNumber> /
                        mo{' '}
                      </H5>
                      <Small>billed monthly</Small>
                    </>
                  ) : (
                    <>
                      <H5>
                        {' '}
                        <PriceNumber>
                          ${number(plans[4].annually)}
                        </PriceNumber>{' '}
                        / mo{' '}
                      </H5>
                      <Small>billed yearly</Small>
                    </>
                  )}
                  <SmallBold>{number(plans[4].pulls)} Pulls Included</SmallBold>
                </Price>
                <div className="plan-inner">
                  <Small>Overage Pricing:</Small>
                  <SmallBold>${plans[4].overage} Per 1,000 Pulls</SmallBold>
                </div>
                <Link href="/trial">
                  <Button color="primaryDark" burst>
                    Start Trial
                  </Button>
                </Link>
              </Plan>
            </Plans>
            <NextButton>
              <Icon
                i="chevron-circle-right"
                size="large"
                onClick={() => setEnterprise(true)}
              />
            </NextButton>
          </PlansContainer>
        )}
      </Container>
    </StyledPlans>
  )
}
