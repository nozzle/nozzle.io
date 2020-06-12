import React from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'
import { Form, Text } from 'react-form'
//
import encodeFormData from 'utils/encodeFormData'

const ExitIntentStyles = styled('div')`
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
    color: ${props => props.theme.colors.primary};
  }

  .-message {
    font-size: 1.2em;
    text-align: center;
    display: block;
    margin-bottom: 25px;
  }

  input {
    font-size: 1.3rem;
    padding: 1rem;
    margin: 5px 0 20px;
    display: block;
    width: 100%;
    border: solid 2px rgba(0, 0, 0, 0.17);
  }

  .button {
    display: block;
    width: 100%;
    background-color: ${props => props.theme.colors.success};
    font-size: 1.3em;
    padding: 12px;
    border-radius: 4px;
    color: white;
    &:hover {
      transform: none;
      box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.15);
    }
  }

  .close {
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    font-size: 1rem;
    border: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(50%, -50%);
    cursor: pointer;
    :hover {
      background: ${props => props.theme.colors.danger};
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

export default function ExitIntent() {
  const [show, setShow] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      document.addEventListener('mouseleave', e => {
        if (global.localStorage.exitIntent) {
          return
        }
        if (e.clientY < 0) {
          global.localStorage.exitIntent = true
          global.dataLayer.push({ event: 'exitPopup' })
          setShow(true)
        }
      })
    }, 3000)
  }, [])

  return (
    <ExitIntentStyles show={show}>
      <div className="-outer">
        <div className="-inner">
          {submitted ? (
            <div>
              <div className="-title">Thank you!</div>
              <div className="-message">
                We'll send you your trial information as soon as possible!
              </div>
            </div>
          ) : (
            <div>
              <div className="-title">
                Wait! Our data robots are chomping at their bits to get your
                free trial started, so don't let them down!
              </div>
              <div className="-message">
                We will send you information on how to start your trial as soon
                as possible.
              </div>
              <Form
                onSubmit={async values => {
                  window.dataLayer.push({ event: 'exitSubmit' })
                  try {
                    await axios.post(
                      'https://nozzle.io/',
                      encodeFormData({
                        'form-name': 'exitIntent',
                        ...values,
                      }),
                      {
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                        },
                      }
                    )
                    setSubmitted(true)
                  } catch (err) {
                    window.alert(
                      'There was a problem submitting your form! Try again or reload the page :)'
                    )
                    setSubmitted(true)
                  }
                }}
              >
                {({ submitForm }) => (
                  <form
                    name="exitIntent"
                    data-netlify="true"
                    onSubmit={submitForm}
                  >
                    <div>
                      <label>
                        Email
                        <Text
                          field="email"
                          name="email"
                          placeholder="johndoe@gmail.com"
                        />
                      </label>
                    </div>
                    <div>
                      <button className="button" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Form>
            </div>
          )}
        </div>
        <button
          className="close"
          onClick={() => {
            global.dataLayer.push({ event: 'exitClose' })
            setShow(false)
          }}
        >
          &times;
        </button>
      </div>
    </ExitIntentStyles>
  )
}
