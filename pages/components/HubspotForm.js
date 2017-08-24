import React, { Component } from 'react'
import styled from 'styled-components'
//
import Theme from '../utils/Theme'

import { button, buttonSize } from './Html'

let uid = 0

const Styles = styled.div`
  fieldset {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .field {
    margin: 0 0 1rem 0;
    text-align: left;
  }

  label {
    display: inline-block;
    margin-bottom: .2rem;
  }

  input {
    border-radius: 3px;
    border: 0;
    padding: 10px 15px;
    outline: none;
    max-width: 100%;

    &[type="text"],
    &[type="email"],
    &[type="tel"] {
      width: 100% !important;
    }
  }

  [type="submit"] {
    ${button};
    background: ${Theme.colors.success};
  }
`

export default class HubspotForm extends Component {
  constructor () {
    super()
    this.state = {
      formElementID: 'hubspotForm-' + uid++,
    }
  }
  componentWillMount () {
    if (typeof document === 'undefined') {
      return
    }

    const scriptSrc = 'https://js.hsforms.net/forms/v2.js'

    if (document.getElementById(scriptSrc)) {
      return
    }

    const script = document.createElement('script')

    script.src = scriptSrc
    script.async = true
    script.id = script.src

    document.body.appendChild(script)
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  componentDidMount () {
    const { formID, onSubmit } = this.props
    const { formElementID } = this.state
    this.interval = window.setInterval(() => {
      if (!window.hbspt || !window.hbspt.forms) {
        return
      }
      window.clearInterval(this.interval)
      window.hbspt.forms.create({
        target: `#${formElementID}`,
        css: '',
        portalId: '2030303',
        formId: formID,
        onFormSubmit: e => onSubmit && onSubmit(e),
      })
    }, 50)
  }
  render () {
    const { formElementID } = this.state
    return <Styles id={formElementID} />
  }
}
