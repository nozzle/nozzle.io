import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from 'components/Icon'

//

const belowMobile = `@media(max-width: ${700}px)`

const FooterStyles = styled('div')`
  ${tw`relative p-4 bg-primary text-white shadow z-1`}

  ${belowMobile} {
    .container {
      ${tw`block`}
    }
  }

  .container {
    ${tw`px-4 flex mr-16 items-baseline`}
  }

  .copyright {
    ${tw`inline-block text-right text-xs self-center`}
  }
`
const FooterLinks = styled('div')`
  ${tw`flex py-4 px-4`}
  ${belowMobile} {
    ${tw`inline`}
  }
`
const Category = styled('div')`
  ${tw`pr-12`}

  li {
    ${tw`pb-4 font-thin hover:(underline)`}
  }
  .header {
    ${tw`font-semibold pb-4`}
  }

  .inline {
    li {
      ${tw`inline pr-2 `}

      a {
        ${tw`hover:(no-underline)  `}
      }
    }

    .fab {
      ${tw`pt-0.5 text-xl bg-white text-primary  h-8 w-8 rounded-full hover:(opacity-80) mb-2 `}
    }
  }

  ${belowMobile} {
    ${tw`px-4 pb-8`}
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <FooterLinks>
        <Category>
          <div className="header">Explore Nozzle:</div>
          <ul>
            <li>
              <a href="https://nozzle.io/blog/finding-your-top-serp-competitors-across-all-your-keyword-groups">
                Find Your SEO Competition
              </a>
            </li>
            <li>
              <a href="https://nozzle.io/blog/track-serp-rankings-for-an-unlimited-amount-of-competitors-with-nozzle">
                Unlimited Competitor Keyword Tracking
              </a>
            </li>
            <li>
              <a href="https://nozzle.io/paa">People Also Ask Deliverable</a>
            </li>
            <li>
              <a href="https://nozzle.io/blog/nozzles-crackerjack-calculation-of-clickthrough-rate">
                Nozzle's CTR Calculation
              </a>
            </li>
            <li>
              <a href="https://nozzle.io/blog/hourly-rank-tracking-the-when-the-why-and-the-how">
                Hourly Rank Checker Tool
              </a>
            </li>
            <li>
              <a href="https://nozzle.io/blog/the-functionality-of-side-by-side-serp-html-comparison">
                SERP Comparison Ranking Report
              </a>
            </li>
          </ul>
        </Category>
        <Category>
          <div className="header">Product</div>
          <ul>
            <li>
              <a href="https://nozzle.io/pricing">Pricing</a>
            </li>
            <li>
              <a href="https://nozzle.io/faq">FAQs</a>
            </li>
            <li>
              <a href=" https://nozzle.io/google-keyword-rank-checker-tool">
                Google Rank Checker
              </a>
            </li>
          </ul>
        </Category>
        <Category>
          <div className="header">Company</div>
          <ul>
            <li>
              <a href="https://nozzle.io/about">About Us</a>
            </li>
            <li>
              <a href="https://nozzle.io/blog">Blog</a>
            </li>
            <li>
              <a href=" https://nozzle.io/testimonials">Testimonials</a>
            </li>
          </ul>
        </Category>
        <Category>
          <div className="header">Other</div>
          <ul>
            <li>
              <a href="https://nozzle.io/blog/seo-jokes">SEO Jokes</a>
            </li>
            <li>
              <a href="https://nozzle.io/blog/is-seo-dead">Is SEO Dead</a>
            </li>
            <li>
              <a href=" https://nozzle.io/blog/the-best-tools-for-unstoppable-competitive-analysis">
                Competitor Analysis Tools
              </a>
            </li>
          </ul>
        </Category>

        <Category>
          <div className="header">Follow Us</div>
          <ul class="inline">
            <li>
              <a href="https://twitter.com/nozzleio">
                <Icon i="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC6vTEcp-zzbgN2mJijLx6TA">
                <Icon i="youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/nozzleio/">
                <Icon i="facebookLetter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/nozzle/">
                <Icon i="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/nozzleio/_saved/">
                <Icon i="pinterest" />
              </a>
            </li>
          </ul>
        </Category>
      </FooterLinks>
      <div className="container">
        <div className="copyright">
          &copy; {`20${new Date().getYear() - 100}`} Nozzle Corp.
        </div>
      </div>
    </FooterStyles>
  )
}
