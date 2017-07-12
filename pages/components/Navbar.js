import React, { Component } from 'react'
import glamorous from 'glamorous'
//
import Link from './Link'

import Theme from '../utils/Theme'

const NavbarStyles = glamorous.div({
  background: `linear-gradient(to left, ${Theme.colors.primary}, ${Theme.colors
    .primaryLight})`,
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
  },

  '& .logo': {
    width: 120,
    height: 40,
    margin: '5px 10px',
    'background-image': 'url(/static/img/logo.svg)',
    'background-repeat': 'no-repeat',
    'background-size': 'contain',
    'background-position': 'left center',
    transition: 'all .3s ease',
  },

  '& .links': {
    display: 'flex',
    alignItems: 'center',
  },

  '& .link': {
    color: 'white',
    position: 'relative',
    perspective: 1000,
    transition: 'all .1s ease-out',

    ':hover': {
      '& .links-nested': {
        opacity: 1,
        transform: `translateY(0)`,
      },
    },

    '> a': {
      display: 'block',
      padding: '15px 10px',
    },
  },

  '& .links-nested': {
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
    transition: 'all .15s ease-out',
    transform: `translateY(10px)`,
    overflow: 'hidden',

    '& .link': {
      ':hover': {
        background: Theme.colors.primary,
      },

      '> a': {
        borderBottom: `1px solid ${Theme.colors.primary}`,
        padding: '10px 10px',
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
  },
})

const links = [
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
        path: '/features#schedling',
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
  {
    name: 'About',
    path: '/about',
  },
]

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
  componentDidMount () {
    console.log('Navbar Mounted')
  }
  render () {
    return (
      <NavbarStyles>
        <div className='inner'>
          <Link className='logo' to='/' />
          <div className='links'>
            {links.map(LinkItem)}
            <Link className='trial' to='/#contact'>
              Start Trial
            </Link>
          </div>
        </div>
      </NavbarStyles>
    )
  }
}
