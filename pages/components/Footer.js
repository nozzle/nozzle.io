import React, { Component } from 'react'
import glamorous from 'glamorous'
//
// import { H5 } from './Html'
import Theme from '../utils/Theme'

const FooterStyles = glamorous.div({
  zIndex: 1,
  padding: 20,
  background: Theme.colors.primaryDarker,
  color: 'white',
  boxShadow: '0 -10px 20px -10px rgba(0,0,0,.3)',
  '& .copyright': {
    textAlign: 'center',
  },
})

export default class Footer extends Component {
  render () {
    return (
      <FooterStyles>
        <div className='copyright'>
          &copy; {`20${new Date().getYear() - 100}`} Nozzle Corp.
        </div>
      </FooterStyles>
    )
  }
}
