/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled, { keyframes, css } from 'styled-components'
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
  position: sticky;
  top: 0;
  background: linear-gradient(to left, ${props =>
    props.theme.colors.primary}, ${props => props.theme.colors.primaryLight});

  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
  height: 52px;

  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    perspective: 1000px;
    height: 100%;
  }

  .logo {
    flex: 0 0 auto;
    width: 120px;
    margin: 8px 0 5px 10px;
    transition: all .3s ease;
    .hide {
      display: none;
    }
    img {
      width: 100%;
      height: auto;
    }
  }

  .menuToggle {
    flex-basis: auto;
    width: auto;
    overflow: hidden;
    flex-grow: 0;
    flex-shrink: 0;
    display: none;
    padding: 10px;

    ${belowBreakpoint} {
      display: inline-block;

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
      position: relative;
      height: ${toggleSize}px;
      width: ${toggleSize * 1.5}px;
      span {
        display: block;
        position: absolute;
        height: ${toggleBarHeight}px;
        width: 100%;
        background: white;
        border-radius: ${toggleBarHeight}px;
        opacity: 1;
        left: 0;
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
    display: flex;
    align-items: center;
  }

  .links {
    display: flex;
    align-items: center;
    transition: all .3s ease;
    backface-visibility: hidden;

    ${belowBreakpoint} {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      max-height: 65vh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background: ${props => props.theme.colors.primaryDark};
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border-bottom: 5px solid ${props => props.theme.colors.primaryLight};
      pointer-events: none;
      transform: translateY(10px);
      opacity: 0;

      ${props =>
        props.isMenuOpen &&
        css`
          pointer-events: all;
          transform: translateY(0);
          opacity: 1;
        `}
    }
  }

  .link {
    color: white;
    position: relative;
    transition: all .1s ease-out;

    &:hover {
      .links-nested {
        pointer-events: all;
        opacity: 1;
        transform: translateY(0);
      }
    }

    > div {
      > a {
        display: block;
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
      position: relative;
      margin-left: 40px;
    }
    ${aboveBreakpoint} {
      position: absolute;
      top: 100%;
      left: 0;
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      font-size: .8em;
      background: ${props => props.theme.colors.primaryDark};
      box-shadow: inset 0 10px 0 -10px rgba(0,0,0,.3), 0 10px 20px 0 rgba(0,0,0,.3);
      border-radius: 0 0 3px 3px;
      opacity: 0;
      pointer-events: none;
      transition: all .15s ease-out;
      transform: translateY(10px);
      overflow: hidden;

      .link {
        &:hover {
          background: ${props => props.theme.colors.primary};
        }

        > a {
          padding: 10px 10px;
        }
      }
    }
  }

  .trial {
    margin-left: 5px;
    margin-right: 5px;
    animation: ${trialAnimation} 7s infinite;
    button {
      margin-bottom: 0;
      padding: 10px 15px;
      border-radius: 2px;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,.3);
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
      {
        name: 'Reputation Management',
        path: '/features#reputation',
      },
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
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About',
    path: '/about',
  },
]

export default function Navbar(props) {
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  const closeMenu = () => setMenuOpen(false)

  const LinkItem = (link, i) => (
    <div key={i} className="link">
      <div itemProp="name">
        <Link key={i} href={link.path}>
          <a itemProp="url" onClick={closeMenu}>
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
                alt="Google Keyword Rank Checker Tool"
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
          </div>
          <Link href="/trial">
            <a className="trial" onClick={closeMenu}>
              <Button color="success">Start Trial</Button>
            </a>
          </Link>
        </nav>
      </div>
    </NavbarStyles>
  )
}
