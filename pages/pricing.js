import React from 'react'
import styled, { css } from 'styled-components'
//
import { angle } from 'utils/Styles'

import Head from 'components/Head'
import PricingCalculator from 'components/PricingCalculator'
import PricingPlans from 'components/PricingPlans'

import Link from 'next/link'
import { Button, H1, H2, H3, H5, P } from 'components/Html'
import { Container, Center } from 'components/Layout'
import tw from 'tailwind.macro'

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

const faqs = [
  {
    q: `What is a pull?`,
    a: `A pull is used whenever we retrieve data for a keyword-engine-language-device-location combination. This combination is commonly referred to as a SERP (Search Engine Results Page). We pull data for the first 100 results. One pull = top 100 results for each unique search. `,
  },
  {
    q: `How many pulls do I need?`,
    a: `The number of pulls you’ll need depends on how many keywords you track & how frequently you refresh the data, as well as the number of devices, and locations you want to monitor. Use the calculator above to figure out how many pulls you will need for your specific situation.`,
  },
  {
    q: `How long are pulls good for?`,
    a: `Pulls expire at the end of the month.`,
  },
  {
    q: `What are overage charges and when are they billed?`,
    a: `Each plan comes with a total number of pulls included each month. Overage charges are accrued when you exceed your plan’s monthly limit. If you exceed your number of pulls in a given month, we charge you for those in arrears.`,
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
    a: `No. API access is included. You can also access the data in BigQuery.`,
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
      </Center>
    </Container>
  </section>
)

const SectionIntro = styled(SectionIntroCmp)`
  padding: 6rem 1.5rem 1rem;
`

const SectionFaqCmp = props => (
  <section {...props}>
    <Container>
      <Center>
        <H3 className="title">Frequently Asked Questions</H3>
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

export default function Pricing() {
  const [monthly, setMonthly] = React.useState(false)
  const [enterprise, setEnterprise] = React.useState(false)
  return (
    <div>
      <Head
        title="Pricing | Nozzle"
        description="We offer customized scheduling so you can track more phrases without breaking the bank. Access BigQuery for free. Track unlimited keywords and unlimited competitors."
      />
      <main>
        <SectionIntro id="intro" />
        <PricingPlans
          plans={plans}
          monthly={monthly}
          setMonthly={value => setMonthly(value)}
          enterprise={enterprise}
          setEnterprise={value => setEnterprise(value)}
          id="plans"
        />
        <PricingCalculator plans={plans} monthly={monthly} id="calculator" />
        <SectionFaq id="faq" />
        <SectionContactUs id="trial" />
      </main>
    </div>
  )
}
