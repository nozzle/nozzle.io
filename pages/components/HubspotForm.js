import React, { Component } from 'react'
import glamorous from 'glamorous'
//
import Theme from '../utils/Theme'

import { button } from './Html'

let uid = 0

const Styles = glamorous.div({
  '& fieldset': {
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
  },
  '& .field': {
    margin: '0 0 1rem 0',
    textAlign: 'left',
  },
  '& label': {
    display: 'inline-block',
    marginBottom: '.2rem',
  },
  '& input': {
    borderRadius: 3,
    border: 0,
    padding: '10px 15px',
    outline: 'none',
    maxWidth: '100%',
    '&[type="text"], &[type="email"], &[type="tel"]': {
      width: '100% !important',
    },
  },
  '& [type="submit"]': {
    ...button,
    backgroundColor: Theme.colors.success,
  },
})

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
    const script = document.createElement('script')

    script.src = 'https://js.hsforms.net/forms/v2.js'
    script.async = true

    document.body.appendChild(script)
  }
  componentDidMount () {
    const { formID, onSubmit } = this.props
    const { formElementID } = this.state
    const interval = window.setInterval(() => {
      if (!window.hbspt || !window.hbspt.forms) {
        return
      }
      window.clearInterval(interval)
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