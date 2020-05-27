import React from 'react'
import styled from 'styled-components'
//

const belowMobile = `@media(max-width: ${700}px)`

const FooterStyles = styled('div')`
  position: relative;
  z-index: 1;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  box-shadow: 0 -10px 20px -10px rgba(0, 0, 0, 0.3);

  ${belowMobile} {
    .navLinks {
      padding: 1rem;
    }
    .navContainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    .container {
      display: block;
    }
  }

  .container {
    diplay: flex;
    margin-right: 4rem;
    align-items: baseline;
  }

  .copyright {
    display: inline-block;
    text-align: right;
    font-size: .75rem;
    align-self: center;
  }

  .navContainer {
    display: inline-block;
  }

  .navLinks {
    display: inline-block;
    text-align: left;
    margin-right: 1rem;

    :hover {
      color: #60bd68;
    }
  }

  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="copyright">
          &copy; {`20${new Date().getYear() - 100}`} Nozzle Corp.
        </div>
      </div>
    </FooterStyles>
  )
}
