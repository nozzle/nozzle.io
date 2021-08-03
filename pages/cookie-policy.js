import React from 'react'

import { H1, H3, H4, P } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled from 'styled-components'

import { Container, Center } from 'components/Layout'
import tw from 'twin.macro'

const Top = styled('section')`
  ${angle('left')};
  ${tw`text-white bg-primaryDarker py-4/100 px-5/100 mb-8`}
`
const Body = styled('div')`
  ${tw`mx-10`}

  h3,h4,p {
    ${tw`mx-0`}
  }
`

export default function CookiesPolicy() {
  return (
    <div>
      <Head
        title="Cookies Policy | Nozzle"
        description="Cookies Policy for Nozzle."
      />
      <div>
        <Center>
          <Top>
            <H1>Cookies Policy</H1>
          </Top>
        </Center>
        <Body>
          <Container>
            <P>
              We use cookies to help improve your experience of our website at{' '}
              <a tw="text-blue-500 hover:(underline)" href="https://nozzle.io">
                https://nozzle.io
              </a>
              . This cookie policy is part of Nozzle&#39;s privacy policy. It
              covers the use of cookies between your device and our site.{' '}
            </P>
            <P>
              We also provide basic information on third-party services we may
              use, who may also use cookies as part of their service. This
              policy does not cover their cookies.{' '}
            </P>
            <P>
              If you don’t wish to accept cookies from us, you should instruct
              your browser to refuse cookies from{' '}
              <a tw="text-blue-500 hover:(underline)" href="https://nozzle.io">
                https://nozzle.io
              </a>
              . In such a case, we may be unable to provide you with some of
              your desired content and services.{' '}
            </P>
            <H3>What is a cookie?</H3>
            <P>
              A cookie is a small piece of data that a website stores on your
              device when you visit. It typically contains information about the
              website itself, a unique identifier that allows the site to
              recognize your web browser when you return, additional data that
              serves the cookie’s purpose, and the lifespan of the cookie
              itself.{' '}
            </P>
            <P>
              Cookies are used to enable certain features (e.g. logging in),
              track site usage (e.g. analytics), store your user settings (e.g.
              time zone, notification preferences), and to personalize your
              content (e.g. advertising, language).{' '}
            </P>
            <P>
              Cookies set by the website you are visiting are usually referred
              to as first-party cookies. They typically only track your activity
              on that particular site.{' '}
            </P>
            <P>
              Cookies set by other sites and companies (i.e. third parties) are
              called third-party cookies They can be used to track you on other
              websites that use the same third-party service.{' '}
            </P>
            <H3>Types of cookies and how we use them</H3>
            <H4>Essential cookies</H4>
            <P>
              Essential cookies are crucial to your experience of a website,
              enabling core features like user logins, account management,
              shopping carts, and payment processing.{' '}
            </P>
            <P>
              We use essential cookies to enable certain functions on our
              website.{' '}
            </P>
            <H4>Performance cookies</H4>
            <P>
              Performance cookies track how you use a website during your visit.
              Typically, this information is anonymous and aggregated, with
              information tracked across all site users. They help companies
              understand visitor usage patterns, identify and diagnose problems
              or errors their users may encounter, and make better strategic
              decisions in improving their audience’s overall website
              experience. These cookies may be set by the website you’re
              visiting (first-party) or by third-party services. They do not
              collect personal information about you.{' '}
            </P>
            <P>We use performance cookies on our site. </P>
            <H4>Functionality cookies</H4>
            <P>
              Functionality cookies are used to collect information about your
              device and any settings you may configure on the website you’re
              visiting (like language and time zone settings). With this
              information, websites can provide you with customized, enhanced,
              or optimized content and services. These cookies may be set by the
              website you’re visiting (first-party) or by third-party services.{' '}
            </P>
            <P>
              We use functionality cookies for selected features on our site.{' '}
            </P>
            <H4>Targeting/advertising cookies</H4>
            <P>
              Targeting/advertising cookies help determine what promotional
              content is most relevant and appropriate to you and your
              interests. Websites may use them to deliver targeted advertising
              or limit the number of times you see an advertisement. This helps
              companies improve the effectiveness of their campaigns and the
              quality of content presented to you. These cookies may be set by
              the website you’re visiting (first-party) or by third-party
              services. Targeting/advertising cookies set by third-parties may
              be used to track you on other websites that use the same
              third-party service.{' '}
            </P>
            <P>We do not use this type of cookie on our site. </P>
          </Container>
        </Body>
      </div>
      )
    </div>
  )
}
