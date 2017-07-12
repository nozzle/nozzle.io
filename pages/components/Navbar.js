import React, { Component } from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'
//
import Link from './Link'
import ClickOutside from './ClickOutside'

import links from '../utils/Links'
import Theme from '../utils/Theme'

const belowBreakpoint = `@media(max-width: ${700}px)`
const aboveBreakpoint = `@media(min-width: ${701}px)`
const toggleSize = 20
const toggleBarHeight = Math.round(toggleSize * 0.15)

const trialAnimation = css.keyframes({
  '0%, 90%, 100%': {
    transform: `rotate(0deg)`,
  },
  '93.5%': {
    transform: `rotate(5deg) scale(1.1)`,
  },
  '97%': {
    transform: `rotate(-5deg) scale(1.15)`,
  },
})

const NavbarStyles = glamorous.div(
  {
    background: `linear-gradient(to left, ${Theme.colors.primary}, ${Theme
      .colors.primaryLight})`,
    width: '100%',
    zIndex: 1000,
    flex: '1 0 auto',
    boxShadow: '0 0 20px 0 rgba(0,0,0,.3)',

    '& .inner': {
      maxWidth: Theme.maxWidth,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
    },

    '& .logo': {
      width: 120,
      height: 34,
      margin: '10px 0 9px 15px',
      backgroundImage: 'url(/static/img/logo-small.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      transition: 'all .3s ease',
    },

    '& .menuToggle': {
      flexBasis: 'auto',
      width: 'auto',
      overflow: 'hidden',
      flexGrow: 0,
      flexShrink: 0,
      display: 'none',
      padding: 10,

      [belowBreakpoint]: {
        display: 'inline-block',
      },

      '& > div': {
        position: 'relative',
        height: toggleSize,
        width: toggleSize * 1.5,
        '& span': {
          display: 'block',
          position: 'absolute',
          height: toggleBarHeight,
          width: '100%',
          background: 'white',
          borderRadius: toggleBarHeight,
          opacity: '1',
          left: '0',
          transform: 'rotate(0deg)',
          transition: '.15s ease-in-out',
        },
        '& span:nth-child(1)': {
          top: toggleSize * 0,
        },
        '& span:nth-child(2)': {
          top: toggleSize * 0.4,
        },
        '& span:nth-child(3)': {
          top: toggleSize * 0.4,
        },
        '& span:nth-child(4)': {
          top: toggleSize * 0.8,
        },
      },
    },

    '& .linkbar': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .links': {
      display: 'flex',
      alignItems: 'center',
      transition: 'all .15s ease',
      backfaceVisibility: 'hidden',

      [belowBreakpoint]: {
        position: 'absolute',
        top: '100%',
        left: '0',
        width: '100%',
        maxHeight: '65vh',
        overflowY: 'scroll',
        background: Theme.colors.primaryDark,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        borderBottom: `5px solid ${Theme.colors.primaryLight}`,
        transformOrigin: 'top',
      },
    },

    '& .link': {
      color: 'white',
      position: 'relative',
      transition: 'all .1s ease-out',

      ':hover': {
        '& .links-nested': {
          pointerEvents: 'all',
          opacity: 1,
          transform: `translateY(0)`,
        },
      },

      '> a': {
        display: 'block',
        padding: '16px 10px',
        transition: 'all .2s ease-out',

        [belowBreakpoint]: {
          borderBottom: `1px solid rgba(255,255,255,.05)`,
        },
      },
    },

    '& .links > .link:hover > a': {
      textShadow: '0 2px 20px rgba(0,0,0,.7)',
    },

    '& .links-nested': {
      [belowBreakpoint]: {
        position: 'relative',
        marginLeft: 40,
      },
      [aboveBreakpoint]: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        fontSize: '.8em',
        background: Theme.colors.primaryDark,
        boxShadow:
          'inset 0 10px 0 -10px rgba(0,0,0,.3), 0 10px 20px 0 rgba(0,0,0,.3)',
        borderRadius: '0 0 3px 3px',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'all .15s ease-out',
        transform: `translateY(10px)`,
        overflow: 'hidden',

        '& .link': {
          ':hover': {
            background: Theme.colors.primary,
          },

          '> a': {
            // borderBottom: `1px solid rgba(255,255,255,.1)`,
            padding: '10px 10px',
          },
        },
      },
    },

    '& .trial': {
      padding: '10px 15px',
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 2,
      backgroundColor: Theme.colors.success,
      color: 'white',
      boxShadow: '0 2px 10px 0 rgba(0,0,0,.3)',
      animation: `${trialAnimation} 7s infinite`,
    },
  },
  ({ isMenuOpen }) => {
    return {
      [belowBreakpoint]: {
        '& .links': {
          transform: isMenuOpen ? `scaleY(1)` : `scaleY(0)`,
        },
        '& .menuToggle': {
          '& > div': {
            ...(isMenuOpen
              ? {
                '& span:nth-child(1)': {
                  top: toggleSize * 0,
                  width: '0%',
                  left: '50%',
                },
                '& span:nth-child(2)': {
                  top: toggleSize * 0.4,
                  transform: 'rotate(45deg)',
                },
                '& span:nth-child(3)': {
                  top: toggleSize * 0.4,
                  transform: 'rotate(-45deg)',
                },
                '& span:nth-child(4)': {
                  top: toggleSize * 0.8,
                  width: '0%',
                  left: '50%',
                },
              }
              : {}),
          },
        },
      },
    }
  }
)

const LinkItem = (link, i) =>
  (<div key={i} className='link'>
    <Link key={i} to={link.path}>
      {link.name}
    </Link>
    {link.links &&
      <div className='links-nested'>
        {link.links.map(LinkItem)}
      </div>}
  </div>)

export default class Navbar extends Component {
  constructor () {
    super()
    this.state = {
      isMenuOpen: false,
    }
  }
  render () {
    const { isMenuOpen } = this.state

    const closeMenu = () =>
      this.setState({
        isMenuOpen: false,
      })

    return (
      <ClickOutside onClickOutside={closeMenu}>
        <NavbarStyles isMenuOpen={isMenuOpen}>
          <div className='inner'>
            <Link className='logo' to='/' />
            <div
              className='menuToggle'
              onClick={() =>
                this.setState({
                  isMenuOpen: !isMenuOpen,
                })}
            >
              <div>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className='linkbar'>
              <div className='links'>
                {links.map(LinkItem)}
              </div>
              <Link className='trial' to='/#contact' onClick={closeMenu}>
                Start Trial
              </Link>
            </div>
          </div>
        </NavbarStyles>
      </ClickOutside>
    )
  }
}
