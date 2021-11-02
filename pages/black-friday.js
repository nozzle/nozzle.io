import React from 'react'
import Head from 'components/Head'
import tw from 'twin.macro'
import { Container, Center } from 'components/Layout'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Img, Span, Ol, Li, H3 } from 'components/Html'
import PricingPlans from 'components/PricingPlans'

const belowTablet = `@media(max-width: ${1000}px)`
const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionCustomers = styled(Section)`
  ${tw`z-0`}
  .inner {
    ${tw`mx-auto flex flex-wrap items-center justify-center max-w-default py-0 px-5/100`}
  }
  .vs {
    ${tw`z-0 flex items-center justify-center text-white text-xl font-bold leading-none overflow-hidden `}
    flex: 0 0 100%;

    span {
      ${tw`relative rounded-lg pt-3 px-2.5 pb-2.5 bg-gray-600`}

      :after {
        ${tw`block absolute top-1/2 w-96 h-0.5 left-full bg-gray-300`}
        content: '';
        transform: translateY(-50%);
      }
      :before {
        ${tw`block absolute top-1/2 w-96 h-0.5 right-full bg-gray-300`}
        content: '';
        transform: translateY(-50%);
      }
    }
  }

  img {
    ${tw`w-40 m-5 opacity-60 `}
    -webkit-filter: grayscale(100%) brightness(60%) contrast(10000000%);
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .bigLogo {
    ${tw`w-24`}
    max-width: 90px;
  }

  ${belowTablet} {
    img {
      ${tw`m-1 w-24 flex-grow`}
    }
  }
`

const plans = [
  {
    label: 'Enterprise',
    value: 'enterprise',
    monthly: 11999,
    annually: 9999,
    overage: 3.43,
    pulls: 3500000,
    totalPrice: 0,
    totalOverage: 0,
  },
  {
    label: 'Basic',
    value: 'basic',
    monthly: 59,
    annually: 49,
    overage: 5.88,
    pulls: 10000,
    totalPrice: 0,
    totalOverage: 0,
  },
  {
    label: 'Advanced',
    value: 'advanced',
    monthly: 119,
    annually: 99,
    pulls: 21000,
    overage: 5.66,
    totalPrice: 0,
    totalOverage: 0,
  },
  {
    label: 'Pro',
    value: 'pro',
    monthly: 299,
    annually: 249,
    pulls: 60000,
    overage: 4.98,
    totalPrice: 0,
    totalOverage: 0,
  },
  {
    label: 'Pro Plus',
    value: 'pro-plus',
    monthly: 599,
    annually: 499,
    pulls: 130000,
    overage: 4.61,
    totalPrice: 0,
    totalOverage: 0,
  },
  {
    label: 'Business Basic',
    value: 'business-basic',
    monthly: 1199,
    annually: 999,
    pulls: 275000,
    overage: 4.36,
    totalPrice: 0,
    totalOverage: 0,
  },
  {
    label: 'Business Advanced',
    value: 'business-advanced',
    monthly: 2999,
    annually: 2499,
    pulls: 725000,
    overage: 4.14,
    totalPrice: 0,
    totalOverage: 0,
  },
  {
    label: 'Business Pro',
    value: 'business-pro',
    monthly: 5999,
    annually: 4999,
    pulls: 1500000,
    overage: 4.0,
    totalPrice: 0,
    totalOverage: 0,
  },
]

export default function BlackFriday() {
  const router = useRouter()
  const { utm_source } = router.query
  const [monthly, setMonthly] = React.useState(false)
  const [enterprise, setEnterprise] = React.useState(false)
  return (
    <div>
      <Head
        title="Black Friday | Nozzle"
        description="Nozzle Black Friday Deal"
      />
      <Center>
        <div tw="pt-1/10">
          <div tw=" flex md:(gap-4) gap-2 justify-center items-center">
            <img
              src={require('public/img/logo-blue.png')}
              alt="Enterprise Keyword Rank Tracker Tool For Your Website"
              itemProp="logo"
              tw="h-8 md:(h-24)"
            />
            <div tw="text-black font-bold text-xl md:(text-6xl) ">
              Black Friday Deal
            </div>
          </div>{' '}
          {utm_source == 'RankMath' ? (
            <div tw="md:(text-xl) mt-2">
              A deal with{' '}
              <a
                href="https://rankmath.com/"
                target="_blank"
                rel="noreferrer"
                tw="hover:(underline) text-blue-500"
              >
                Rank Math
              </a>
            </div>
          ) : null}
        </div>
      </Center>
      <Container>
        <div tw="text-center py-4/100 ">
          <div tw="mb-4 text-xl md:(text-6xl)">2 Year Discount!</div>
          <div tw="text-base md:(text-2xl) mb-12">
            Get 50% off year 1 and {utm_source == 'RankMath' ? '50%' : '25%'}{' '}
            off year 2 in this amazing deal!
          </div>
          <Container>
            <H3 tw="underline ">How to Redeem:</H3>
            <Ol>
              <Li tw="">Click the Start Trial button below</Li>
              <Li>Go to Billing page</Li>
              <Li>Enter Card</Li>
              <Li>
                Enter discount code:{' '}
                {utm_source == 'RankMath'
                  ? 'rankmath5050'
                  : 'nozzleblackfriday'}{' '}
              </Li>
            </Ol>
          </Container>
        </div>

        <PricingPlans
          plans={plans}
          deal={utm_source == 'RankMath' ? 'RankMath' : 'blackFriday'}
          monthly={monthly}
          setMonthly={value => setMonthly(value)}
          enterprise={enterprise}
          setEnterprise={value => setEnterprise(value)}
          id="plans"
        />
        <div tw="text-center mt-12 mb-24">
          *Effective from November 1 to November 30, 2021. For new users only.
        </div>
        <SectionCustomers>
          <div className="vs">
            <Span>Trusted By</Span>
          </div>
          <Img src={require('public/img/mayoClinic.png')} alt="Mayo Clinic" />
          <Img src={require('public/img/homeDepot.png')} alt="Home Depot" />
          <Img
            src={require('public/img/apartmentsdotcom.png')}
            alt="Apartments.com"
          />
          <Img
            src={require('public/img/bankrate.svg')}
            alt="Bankrate"
            className="bigLogo"
          />
          <Img
            src={require('public/img/turo.png')}
            alt="Turo"
            className="bigLogo"
          />
        </SectionCustomers>
      </Container>
    </div>
  )
}
