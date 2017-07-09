import React from 'react'
import glamorous from 'glamorous'
//
import Link from 'components/Link'

import Colors from 'utils/colors'

const NavbarStyled = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  background: Colors.primary,
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
export default props =>
  (<NavbarStyled>
    {links.map((link, i) =>
      (<Link key={i} to={link.path}>
        <NavarLinkStyled>
          {link.name}
        </NavarLinkStyled>
      </Link>)
    )}
  </NavbarStyled>)
