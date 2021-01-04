import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

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
  ${tw`flex mx-auto mb-4 max-w-3xl`}
`
const PlanFilter = styled('div')`
  ${tw`flex-1`}
  button {
    ${tw`border-2 border-solid border-primary mr-1`}
  }
  .on {
    ${tw`bg-primary`}
  }

  .off {
    ${tw`bg-white text-primary`}
  }
`

const PlansContainer = styled('div')`
  ${tw`relative`}
`
const Plans = styled('div')`
  ${tw`flex flex-row flex-wrap px-8 mt-7 `}
`
const Plan = styled('div')`
  ${tw`flex flex-col justify-between text-white text-center shadow-2xl overflow-hidden self-center`}
  transition: all 0.4s ease-out;

  button {
    ${tw`text-center text-lg leading-none m-0 p-4 w-full rounded-none`}
    transition: all 0.15s ease-out !important;
    :hover {
      ${tw`transform-none shadow-none`}
    }
  }
  :first-child {
    ${tw`bg-primaryDark rounded-l`}
    flex: 1 1 24%;
    min-height: 430px;
    z-index: 2;
  }
  :nth-child(2) {
    ${tw`bg-primaryDarker rounded`}
    flex: 1 1 27%;
    min-height: 470px;
    z-index: 3;
  }
  :nth-child(3) {
    ${tw`bg-primaryDark rounded-r`}
    flex: 1 1 24%;
    min-height: 430px;
    z-index: 2;
  }
  :nth-child(4) {
    ${tw`bg-primary rounded-r`}
    flex: 1 1 22%;
    min-height: 390px;
    z-index: 1;
  }
  .plan-inner {
    ${tw`flex p-5 justify-between flex-col text-sm leading-none `}
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 900px) {
    ${tw`rounded`}
    flex: 1 1 48% !important;
    min-height: auto !important;
    margin: 0 1% 10px;
  }

  @media screen and (max-width: 500px) {
    flex: 1 1 100% !important;
    margin: 0 0 10px;
  }

  @media screen and (min-width: 900px) {
    :hover button {
      ${tw`py-5`}
    }
  }
`
const Title = styled(H4)`
  ${tw`font-bold`}
  padding: 0 20px;
  margin: 2rem 1rem;
`
const Price = styled('div')`
  ${tw`text-xs leading-none p-2.5`}
`
const PriceNumber = styled(Span)`
  ${tw`text-3xl leading-none`}
`
const Small = styled('small')`
  ${tw`opacity-60 mt-2.5 block text-sm leading-none`}
`
const SmallBold = styled('small')`
  ${tw`opacity-70 font-bold mt-2.5 block text-sm leading-none`}
`

const BackButton = styled('div')`
  ${tw`cursor-pointer absolute text-gray-500 text-2xl leading-none`}
  z-index: 9;
  top: 45%;
  transition: 0.2s ease;

  :hover {
    transform: scale(1.1);
  }

  ${belowTablet} {
    ${tw`hidden`}
  }
`
const NextButton = styled('div')`
  ${tw`right-0 cursor-pointer absolute text-gray-500 text-2xl leading-none`}
  z-index: 9;
  top: 45%;
  transition: 0.2s ease;

  :hover {
    transform: scale(1.1);
  }

  ${belowTablet} {
    ${tw`hidden`}
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
