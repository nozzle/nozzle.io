import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from 'components/Icon'
import Link from 'next/link'

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

      Link {
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
              <Link href="/blog/finding-your-top-serp-competitors-across-all-your-keyword-groups">
                Find Your SEO Competition
              </Link>
            </li>
            <li>
              <Link href="/blog/track-serp-rankings-for-an-unlimited-amount-of-competitors-with-nozzle">
                Unlimited Competitor Keyword Tracking
              </Link>
            </li>
            <li>
              <Link href="/paa">People Also Ask Deliverable</Link>
            </li>
            <li>
              <Link href="/blog/nozzles-crackerjack-calculation-of-clickthrough-rate">
                Nozzle's CTR Calculation
              </Link>
            </li>
            <li>
              <Link href="/blog/hourly-rank-tracking-the-when-the-why-and-the-how">
                Hourly Rank Checker Tool
              </Link>
            </li>
            <li>
              <Link href="/blog/the-functionality-of-side-by-side-serp-html-comparison">
                SERP Comparison Ranking Report
              </Link>
            </li>
          </ul>
        </Category>
        <Category>
          <div className="header">Product</div>
          <ul>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/google-keyword-rank-checker-tool">
                Google Rank Checker
              </Link>
            </li>
            <li>
              <Link href="/rank-tracker-comparison">
                Rank Tracking Software
              </Link>
            </li>
            <li>
              <Link href="/features">Nozzle's SERP Tracking Features</Link>
            </li>
            <li>
              <Link href="https://help.nozzle.io">Knowledge Base</Link>
            </li>
          </ul>
        </Category>
        <Category>
          <div className="header">Company</div>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </Category>
        <Category>
          <div className="header">Other</div>
          <ul>
            <li>
              <Link href="/blog/seo-jokes">SEO Jokes</Link>
            </li>
            <li>
              <Link href="/blog/is-seo-dead">Is SEO Dead</Link>
            </li>
            <li>
              <Link href="/blog/the-best-tools-for-unstoppable-competitive-analysis">
                Competitor Analysis Tools
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookie-policy">Cookies</Link>
            </li>
            <li>
              <Link href="/acceptable-use-policy">Acceptable Use</Link>
            </li>
          </ul>
        </Category>

        <Category>
          <div className="header">Follow Us</div>
          <ul className="inline">
            <li>
              <Link href="https://twitter.com/nozzleio">
                <Icon i="twitter" tw="hover:(cursor-pointer)" />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UC6vTEcp-zzbgN2mJijLx6TA">
                <Icon i="youtube" tw="hover:(cursor-pointer)" />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/nozzleio/">
                <Icon i="facebookLetter" tw="hover:(cursor-pointer)" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/nozzle/">
                <Icon i="linkedin" tw="hover:(cursor-pointer)" />
              </Link>
            </li>
            <li>
              <Link href="https://www.pinterest.com/nozzleio/_saved/">
                <Icon i="pinterest" tw="hover:(cursor-pointer)" />
              </Link>
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
