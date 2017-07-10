import React, { Component } from 'react'
import glamorous from 'glamorous'
//
import Link from './Link'

import Theme from '../utils/Theme'

const NavbarStyled = glamorous.nav({
  width: '100%',
  zIndex: 1000,
  flex: '1 0 auto',
  display: 'flex',
  alignItems: 'center',
  background: Theme.colors.primary,
})

const NavbarLinksStyled = glamorous.nav({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
})

const NavarLinkStyled = glamorous.div({
  padding: 10,
  color: 'white',
})

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Stuff 1',
    path: '/about',
  },
  {
    name: 'Stuff 2',
    path: '/about',
  },
  {
    name: 'Stuff 3',
    path: '/about',
  },
  {
    name: 'Stuff 4',
    path: '/about',
  },
]

const NavbarLink = (link, i) =>
  (<div>
    <Link key={i} to={link.path}>
      <NavarLinkStyled>
        {link.name}
      </NavarLinkStyled>
    </Link>
    {link.links &&
      <div>
        {link.links.map(NavbarLink)}
      </div>}
  </div>)

export default class Navbar extends Component {
  componentDidMount () {
    console.log('Navbar Mounted')
  }
  render () {
    return (
      <NavbarStyled>
        <div className='logos' />
        <div className='show-menu'>
          <div className='show-menu-bar-wrap'>
            <div className='show-menu-bar' />
            <div className='show-menu-bar' />
            <div className='show-menu-bar' />
          </div>
        </div>
        <NavbarLinksStyled>
          {links.map(NavbarLink)}
        </NavbarLinksStyled>
        <div className='start-trial'>
          <a href='/#contact'>Start Trial</a>
        </div>
      </NavbarStyled>
    )
  }
}
