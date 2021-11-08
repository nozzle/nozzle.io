import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { number } from 'utils/Format'

import { Container, Center } from 'components/Layout'
import { Button, H4, H5, H6, Span } from 'components/Html'
import Icon from 'components/Icon'

const belowTablet = `@media(max-width: ${1000}px)`

const StyledPlans = styled('div')`
  ${tw`py-4 px-6`}
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
    ${tw`text-center text-lg leading-none m-0 p-4 w-full rounded-none hover:(transform-none shadow-none)`}
    transition: all 0.15s ease-out !important;
  }
  :first-child {
    ${tw`bg-primaryDark rounded-l`}
    flex: 1 1 24%;
    min-height: 430px;
    z-index: 2;

    .trialButton {
      color: ${tw`bg-primaryDarker`};
    }
  }
  :nth-child(2) {
    ${tw`bg-primaryDarker rounded`}
    flex: 1 1 27%;
    min-height: 470px;
    z-index: 3;

    .trialButton {
      color: ${tw`bg-success `};
    }
  }
  :nth-child(3) {
    ${tw`bg-primaryDark rounded-r`}
    flex: 1 1 24%;
    min-height: 430px;
    z-index: 2;

    .trialButton {
      color: ${tw`bg-primaryDarker`};
    }
  }
  :nth-child(4) {
    ${tw`bg-primary rounded-r z-1`}
    flex: 1 1 22%;
    min-height: 390px;
    .trialButton {
      color: ${tw`bg-primaryDark`};
    }
  }
  .plan-inner {
    ${tw`flex p-5 justify-between flex-col text-sm leading-none `}
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 900px) {
    ${tw`rounded mt-0 mx-1/100 mb-2.5`}
    flex: 1 1 48% !important;
    min-height: auto !important;
  }

  @media screen and (max-width: 500px) {
    ${tw`flex-100! mt-0 mx-0 mb-2.5`}
  }

  @media screen and (min-width: 900px) {
    :hover button {
      ${tw`py-5`}
    }
  }
`
const Title = styled(H4)`
  ${tw`font-bold my-8 mx-4 py-0 px-5`}
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
  deal,
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
              {plans.map((plan, i) =>
                i > 4 ? (
                  <Plan id={plans[i].value} key={plans[i].value}>
                    <Title>{plans[i].label}</Title>
                    <Price>
                      {monthly ? (
                        <>
                          {deal ? (
                            <>
                              <H5>
                                {' '}
                                <PriceNumber tw="line-through">
                                  ${number(plans[i].monthly)}
                                </PriceNumber>{' '}
                                / mo{' '}
                              </H5>
                              <H6>
                                <div>
                                  Year 1: ${number(plans[i].monthly * 0.5)} / mo
                                </div>
                                Year 2: $
                                {deal == 'RankMath'
                                  ? number(plans[i].monthly * 0.5)
                                  : number(plans[i].monthly * 0.75)}{' '}
                                / mo
                              </H6>{' '}
                            </>
                          ) : (
                            <H5>
                              {' '}
                              <PriceNumber>
                                ${number(plans[i].monthly)}
                              </PriceNumber>{' '}
                              / mo{' '}
                            </H5>
                          )}
                          <Small>billed monthly</Small>
                        </>
                      ) : (
                        <>
                          {deal ? (
                            <>
                              <H5>
                                {' '}
                                <PriceNumber tw="line-through">
                                  ${number(plans[i].annually)}
                                </PriceNumber>{' '}
                                / mo{' '}
                              </H5>
                              <H6>
                                <div>
                                  Year 1: ${number(plans[i].annually * 0.5)} /
                                  mo
                                </div>
                                Year 2: $
                                {deal == 'RankMath'
                                  ? number(plans[i].annually * 0.5)
                                  : number(plans[i].annually * 0.75)}{' '}
                                / mo
                              </H6>{' '}
                            </>
                          ) : (
                            <H5>
                              {' '}
                              <PriceNumber>
                                ${number(plans[i].annually)}
                              </PriceNumber>{' '}
                              / mo{' '}
                            </H5>
                          )}
                          <Small>billed yearly</Small>
                        </>
                      )}
                      <SmallBold>
                        {number(plans[i].pulls)} Pulls Included
                      </SmallBold>
                    </Price>
                    <div className="plan-inner">
                      <Small>Overage Pricing:</Small>
                      <SmallBold>${plans[i].overage} Per 1,000 Pulls</SmallBold>
                    </div>
                    <div tw="text-sm">
                      <Icon i="check" tw="text-green-500" /> All features
                      included
                    </div>
                    <a href="https://app.nozzle.io/sign-up">
                      <Button className="trialButton" burst>
                        Start Trial
                      </Button>
                    </a>
                  </Plan>
                ) : null
              )}
              <Plan id={plans[0].value}>
                <Title>{plans[0].label}</Title>
                <Price>
                  <H5>Need a custom plan?</H5>
                </Price>
                <div className="plan-inner">
                  {' '}
                  <SmallBold>Contact Us For A Quote</SmallBold>
                </div>
                <div tw="text-sm">
                  <Icon i="check" tw="text-green-500" /> All features included
                </div>
                <a href="https://app.nozzle.io/sign-up">
                  <Button color="primaryDark" burst>
                    Request a Quote
                  </Button>
                </a>
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
              {plans.map((plan, i) =>
                i > 0 && i < 5 ? (
                  <Plan id={plans[i].value} key={plans[i].value}>
                    <Title>{plans[i].label}</Title>
                    <Price>
                      {monthly ? (
                        <>
                          {deal ? (
                            <>
                              <H5>
                                {' '}
                                <PriceNumber tw="line-through">
                                  ${number(plans[i].monthly)}
                                </PriceNumber>{' '}
                                / mo{' '}
                              </H5>
                              <H6>
                                <div>
                                  Year 1: ${number(plans[i].monthly * 0.5)} / mo
                                </div>
                                Year 2: $
                                {deal == 'RankMath'
                                  ? number(plans[i].monthly * 0.5)
                                  : number(plans[i].monthly * 0.75)}{' '}
                                / mo
                              </H6>{' '}
                            </>
                          ) : (
                            <H5>
                              {' '}
                              <PriceNumber>
                                ${number(plans[i].monthly)}
                              </PriceNumber>{' '}
                              / mo{' '}
                            </H5>
                          )}
                          <Small>billed monthly</Small>
                        </>
                      ) : (
                        <>
                          {deal ? (
                            <>
                              <H5>
                                {' '}
                                <PriceNumber tw="line-through">
                                  ${number(plans[i].annually)}
                                </PriceNumber>{' '}
                                / mo{' '}
                              </H5>
                              <H6>
                                <div>
                                  Year 1: ${number(plans[i].annually * 0.5)} /
                                  mo
                                </div>
                                Year 2: $
                                {deal == 'RankMath'
                                  ? number(plans[i].annually * 0.5)
                                  : number(plans[i].annually * 0.75)}{' '}
                                / mo
                              </H6>{' '}
                            </>
                          ) : (
                            <H5>
                              {' '}
                              <PriceNumber>
                                ${number(plans[i].annually)}
                              </PriceNumber>{' '}
                              / mo{' '}
                            </H5>
                          )}
                          <Small>billed yearly</Small>
                        </>
                      )}
                      <SmallBold>
                        {number(plans[i].pulls)} Pulls Included
                      </SmallBold>
                    </Price>
                    <div className="plan-inner">
                      <Small>Overage Pricing:</Small>
                      <SmallBold>${plans[i].overage} Per 1,000 Pulls</SmallBold>
                    </div>
                    <div tw="text-sm">
                      <Icon i="check" tw="text-green-500" /> All features
                      included
                    </div>
                    <a href="https://app.nozzle.io/sign-up">
                      <Button className="trialButton" burst>
                        Start Trial
                      </Button>
                    </a>
                  </Plan>
                ) : null
              )}
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
