import React, { Component } from 'react'
import styled from 'styled-components'
//
// import { H5 } from './Html'
import Theme from 'utils/Theme'
import Link from 'next/link'

const belowMobile = `@media(max-width: ${700}px)`

const FooterStyles = styled('div')`
  position: relative;
  z-index: 1;
  padding: 20px;
  background: ${Theme.colors.primary};
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
    float: right;
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

export default class Footer extends Component {
  render() {
    return (
      <FooterStyles>
        <div className="container">
          <div className="navContainer">
            <div className="navLinks">
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </div>
            <div className="navLinks">
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </div>
            <div className="navLinks">
              <Link href="/features">
                <a>Features</a>
              </Link>
            </div>
            <div className="navLinks">
              <Link href="/rank-tracker-comparison">
                <a>Why Us?</a>
              </Link>
            </div>
            <div className="navLinks">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
            <div className="navLinks">
              <Link href="/devblog">
                <a>Dev Blog</a>
              </Link>
            </div>
            <div className="navLinks">
              <Link href="/docs/api">
                <a>API Docs</a>
              </Link>
            </div>
            <div className="navLinks">
              <Link href="/boom">
                <a>API Docs 1</a>
              </Link>
            </div>{' '}
            <div className="navLinks">
              <Link href="/test/test">
                <a>API Docs 2</a>
              </Link>
            </div>
          </div>
          <div className="copyright">
            &copy; {`20${new Date().getYear() - 100}`} Nozzle Corp.
          </div>
        </div>
      </FooterStyles>
    )
  }
}
