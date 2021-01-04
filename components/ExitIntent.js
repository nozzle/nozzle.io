import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import axios from 'axios'
import { Form, Text } from 'react-form'
//
import encodeFormData from 'utils/encodeFormData'

const ExitIntentStyles = styled('div')`
  ${tw`fixed inset-0 flex items-center justify-center`}
  z-index: 99999999;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease;

  .-outer {
    ${tw`relative rounded bg-white shadow-lg `}
    width: 500px;
    max-width: 95%;
    max-height: 95%;
    transition: all 0.15s ease-out;
  }

  .-inner {
    ${tw`overflow-scroll p-5`}
  }

  .-title {
    ${tw`text-2xl leading-none text-center block mb-6 font-bold text-primary`}
  }

  .-message {
    ${tw`text-xl leading-none text-center block mb-6`}
  }

  input {
    ${tw`text-xl leading-none p-4 block w-full`}
    margin: 5px 0 20px;
    border: solid 2px rgba(0, 0, 0, 0.17);
  }

  .button {
    ${tw`block w-full bg-success text-xl leading-none p-3 rounded text-white`}

    &:hover {
      ${tw`transform-none shadow-2xl`}
    }
  }

  .close {
    ${tw`p-0 absolute top-0 right-0 w-7 h-7 rounded-xl text-base leading-none border-0 text-white shadow-2xl flex items-center justify-center cursor-pointer`}
    background: rgba(0, 0, 0, 0.7);
    transform: translate(50%, -50%);
    :hover {
      ${tw`bg-danger`}
    }
  }

  ${props =>
    !props.show &&
    css`
      ${tw`bg-transparent pointer-events-none`}

      .-outer {
        ${tw`opacity-0`}
        transform: scale(0.8);
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
