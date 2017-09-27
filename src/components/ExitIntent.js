import React, { Component } from 'react'
import styled, { css } from 'styled-components'
//
// import { H5 } from './Html'
import Theme from 'utils/Theme'
import HubspotForm from 'components/HubspotForm'

const ExitIntentStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease;

  .-outer {
    position: relative;
    width: 500px;
    max-width: 95%;
    max-height: 95%;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.15s ease-out;
  }

  .-inner {
    overflow: scroll;
    padding: 20px;
  }

  .-title {
    font-size: 1.7em;
    text-align: center;
    display: block;
    margin-bottom: 25px;
    font-weight: 700;
    color: ${Theme.colors.primary};
  }

  .-message {
    font-size: 1.2em;
    text-align: center;
    display: block;
    margin-bottom: 25px;
  }

  .hs_email {
    margin-bottom: 20px;
    label {
      margin-bottom: 5px;
      display: block;
      font-weight: 600;
    }
  }

  input[type='email'] {
    display: block;
    width: 100%;
    border: solid 2px rgba(0, 0, 0, 0.17);
  }

  .hs-error-msgs {
    margin: 5px 0 10px;
  }

  .hs-button {
    display: block;
    width: 100%;
    background-color: ${Theme.colors.success};
    font-size: 1.3em;
    padding: 12px;
    border-radius: 4px;
    &:hover {
      transform: none;
      box-shadow: 0 20px 30px 0 alpha(black, 0.15);
    }
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    font-size: 1rem;
    border: 0;
    background: alpha(black, 0.7);
    color: white;
    box-shadow: 0 3px 10px 0 alpha(black, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(50%, -50%);
    cursor: pointer;
    &:hover {
      background: ${Theme.colors.danger};
    }
  }

  ${props =>
    !props.show &&
    css`
      background: transparent;
      pointer-events: none;

      .-outer {
        transform: scale(0.8);
        opacity: 0;
      }
    `};
`

export default class Footer extends Component {
  state = {
    show: false,
  }
  componentWillMount () {
    onExitIntent(() => {
      global.dataLayer.push({ event: 'exitPopup' })
      this.setState({
        show: true,
      })
    })
  }
  render () {
    return (
      <ExitIntentStyles show={this.state.show}>
        <div className="-outer">
          <div className="-inner">
            <div className="-title">
              Wait! Our data robots are chomping at their bits to get your free trial started, so
              don't let them down!
            </div>
            <div className="-message">
              Enter your email below to save them from their electronic sorrow and start your trial!
            </div>
            <HubspotForm
              formID="e336b72f-5a4f-43dc-b4d1-d8c3bbac2067"
              onSubmit={() => {
                window.dataLayer.push({ event: 'exitSubmit' })
                this.setState({
                  show: false,
                })
                setTimeout(() => {
                  window.Router.push('/onboarding/')
                }, 2000)
              }}
            />
          </div>
          <button
            className="close"
            onClick={() => {
              global.dataLayer.push({ event: 'exitClose' })
              this.setState({ show: false })
            }}
          >
            &times;
          </button>
        </div>
      </ExitIntentStyles>
    )
  }
}

function onExitIntent (cb) {
  if (typeof document === 'undefined') {
    return
  }
  if (global.localStorage.exitIntent) {
    return
  }
  setTimeout(() => {
    document.addEventListener('mouseleave', e => {
      if (e.pageY < 0) {
        global.localStorage.exitIntent = true
        cb(e)
      }
    })
  }, 3000)
}
