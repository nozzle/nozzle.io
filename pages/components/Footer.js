import React, { Component } from 'react'
import styled from 'styled-components'
//
// import { H5 } from './Html'
import Theme from '../utils/Theme'

const FooterStyles = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  background: ${Theme.colors.primary};
  color: white;
  box-shadow: 0 -10px 20px -10px rgba(0, 0, 0, .3);
  .copyright {
    text-align: center;
  }
`

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
