/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
//

import { Button } from './Html'

import useClickOutside from '../hooks/useClickOutside'

const belowBreakpoint = `@media(max-width: ${700}px)`
const aboveBreakpoint = `@media(min-width: ${701}px)`
const toggleSize = 20
const toggleBarHeight = Math.round(toggleSize * 0.15)

const trialAnimation = keyframes`
  0%, 90%, 100% {
    transform: rotate(0deg) scale(1);
  }
  93.5% {
    transform: rotate(5deg) scale(1.1);
  }
  97% {
    transform: rotate(-5deg) scale(1.15);
  }
`

const NavbarStyles = styled('header')`
${tw`sticky top-0 w-full shadow-sm h-13`}

  background: linear-gradient(to left, ${props =>
    props.theme.colors.primary}, ${props => props.theme.colors.primaryLight});
  z-index: 1000;


  .inner {
    ${tw`mx-auto flex items-center justify-between relative h-full`}
    max-width: ${props => props.theme.maxWidth}px;
    perspective: 1000px;
  }

  .logo {
    flex: 0 0 auto;
    width: 120px;
    margin: 8px 0 5px 10px;
    transition: all .3s ease;
    .hide {
      ${tw`hidden`}
    }
    img {
      ${tw`w-full h-auto`}
    }
  }

  .menuToggle {
    ${tw`w-auto overflow-hidden flex-grow-0 flex-shrink-0 hidden p-2.5`}
  

    ${belowBreakpoint} {
      ${tw`inline-block`}

      ${({ isMenuOpen }) =>
        isMenuOpen &&
        css`
          > div {
            span:nth-child(1) {
              top: ${toggleSize * 0}px;
              width: 0%;
              left: 50%;
            }
            span:nth-child(2) {
              top: ${toggleSize * 0.4}px;
              transform: rotate(45deg);
            }
            span:nth-child(3) {
              top: ${toggleSize * 0.4}px;
              transform: rotate(-45deg);
            }
            span:nth-child(4) {
              top: ${toggleSize * 0.8}px;
              width: 0%;
              left: 50%;
            }
          }
        `}
    }

    > div {
      ${tw`relative`}
      height: ${toggleSize}px;
      width: ${toggleSize * 1.5}px;
      span {
        ${tw`block absolute w-full bg-white opacity-100 left-0`}
        height: ${toggleBarHeight}px;
        border-radius: ${toggleBarHeight}px;
        transform: rotate(0deg);
        transition: .15s ease-in-out;
      }
      span:nth-child(1) {
        top: ${toggleSize * 0}px;
      }
      span:nth-child(2) {
        top: ${toggleSize * 0.4}px;
      }
      span:nth-child(3) {
        top: ${toggleSize * 0.4}px;
      }
      span:nth-child(4) {
        top: ${toggleSize * 0.8}px;
      }
    }
  }

  .linkbar {
    ${tw`flex items-center`}
  
  }

  .links {
    ${tw`flex items-center`}
    transition: all .3s ease;
    backface-visibility: hidden;

    ${belowBreakpoint} {
      ${tw`absolute top-full left-0 w-full overflow-y-auto bg-primaryDark flex flex-col items-stretch pointer-events-none opacity-0 `}
      max-height: 65vh;
      -webkit-overflow-scrolling: touch;
      border-bottom: 5px solid ${props => props.theme.colors.primaryLight};
      transform: translateY(10px);


      ${props =>
        props.isMenuOpen &&
        css`
          ${tw`opacity-100`}
          pointer-events: all;
          transform: translateY(0);
        `}
    }
  }

  .link {
    ${tw`text-white relative`}
    transition: all .1s ease-out;

    &:hover {
      .links-nested {
        ${tw`opacity-100`}
        pointer-events: all;
        transform: translateY(0);
      }
    }

    > div {
      > a {
        ${tw`block`}
        padding: 16px 10px;
        transition: all .2s ease-out;

        &.active {
          text-shadow: 0 2px 7px black, 0 0px 50px black;
        }

        ${belowBreakpoint} {
          border-bottom: 1px solid rgba(255,255,255,.05);
          &.active {
            background: rgba(0,0,0,.2)
          }
        }
      }
    }
  }

  .links > .link:hover > a {
    text-shadow: 0 2px 20px rgba(0,0,0,.7);
  }

  .links-nested {
    ${belowBreakpoint} {
      ${tw`relative ml-10`}
    }
    ${aboveBreakpoint} {
      ${tw`absolute top-full left-0 flex flex-col items-stretch bg-primaryDark opacity-0 pointer-events-none overflow-hidden`}
      width: 200px;
      font-size: .8em;
      box-shadow: inset 0 10px 0 -10px rgba(0,0,0,.3), 0 10px 20px 0 rgba(0,0,0,.3);
      border-radius: 0 0 3px 3px;
      transition: all .15s ease-out;
      transform: translateY(10px);   

      .link {
        &:hover {
          ${tw`bg-primary`}
        }

        > a {
          padding: 10px 10px;
        }
      }
    }
  }

  .trial {
    ${tw`mx-1`}
    animation: ${trialAnimation} 7s infinite;
    button {
      ${tw`mb-0 rounded-sm shadow-lg`}
      padding: 10px 15px;
      transform-origin: right;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px 0 rgba(0,0,0, .2);
      }
      &:active {
        transition: all .05s ease-out;
        transform: scale(0.95);
        box-shadow: none;
      }
    }
  }
}
`

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Why Us?',
    path: '/rank-tracker-comparison',
  },
  {
    name: 'Features',
    path: '/features',
    links: [
      {
        name: 'Brand Monitoring',
        path: '/features#brands',
      },
      {
        name: 'Competitive Analysis',
        path: '/features#competition',
      },
      {
        name: 'Scheduling',
        path: '/features#scheduling',
      },
      {
        name: 'Data',
        path: '/features#data',
      },
      {
        name: 'Agency Tools',
        path: '/features#agencies',
      },
      // {
      //   name: 'Reputation Management',
      //   path: '/features#reputation',
      // },
      {
        name: 'Integrations',
        path: '/features#integrations',
      },
    ],
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  { name: 'Testimonials', path: '/testimonials' },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Resources',
    path: '/blog',
    links: [
      {
        name: 'Blog',
        path: '/blog',
      },

      {
        name: 'PAA Expansion Deliverable',
        path: '/paa',
      },
      {
        name: 'Research',
        path: '/nozzle-research',
      },
    ],
  },
]

export default function Navbar(props) {
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  const closeMenu = () => setMenuOpen(false)

  const LinkItem = (link, i) => (
    <div key={i} className="link">
      <div itemProp="name">
        <Link key={i} href={link.path}>
          <a
            itemProp="url"
            onClick={closeMenu}
            rel={link.name == 'Log In' ? 'nofollow' : null}
          >
            {link.name}
          </a>
        </Link>
      </div>
      {link.links && (
        <div className="links-nested">{link.links.map(LinkItem)}</div>
      )}
    </div>
  )

  const linkbarRef = React.useRef()

  useClickOutside(linkbarRef, closeMenu)

  return (
    <NavbarStyles isMenuOpen={isMenuOpen}>
      <div className="inner">
        <Link href="/">
          <a
            className="logo"
            itemScope
            itemType="http://schema.org/Organization"
            itemProp="url"
          >
            <span>
              <span className="hide">Home</span>
              <img
                src={require('public/img/logo-small.svg')}
                alt="Enterprise Keyword Rank Tracker Tool For Your Website"
                itemProp="logo"
              />
            </span>
          </a>
        </Link>
        <div
          className="menuToggle"
          onClick={() => {
            setMenuOpen(true)
          }}
          style={{ pointerEvents: isMenuOpen ? 'none' : 'all' }}
        >
          <div>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <nav className="linkbar" ref={linkbarRef}>
          <div
            className="links"
            itemScope
            itemType="http://www.schema.org/SiteNavigationElement"
          >
            {links.map(LinkItem)}
            <div className="link">
              <div itemProp="name">
                <a
                  href="https://beta.nozzle.io"
                  itemProp="url"
                  onClick={closeMenu}
                  rel="nofollow"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
          <a className="trial" href="https://app.nozzle.io/sign-up">
            <Button color="success">Start Trial</Button>
          </a>
        </nav>
      </div>
    </NavbarStyles>
  )
}
