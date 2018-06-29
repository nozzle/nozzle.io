import React, { Component } from 'react'

let ReactTypeform
if (typeof document !== 'undefined') {
  ReactTypeform = require('react-typeform-embed')
}
//

export default class TrialForm extends Component {
  state = {
    ready: false
  }
  componentDidMount () {
    this.setState({
      ready: true
    })
  }
  render () {
    if (this.state.ready) {
      return (
        <ReactTypeform.ReactTypeformEmbed
          url="https://annabergevin.typeform.com/to/EzND5O"
          hideHeaders
          hideFooter
          style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            borderRadius: '10px',
            overflow: 'hidden',
            margin: '2rem 0'
          }}
          onSubmit={() => {
            window.dataLayer.push({ event: 'trialSubmit' })
          }}
        />
      )
    }
    return null
  }
}
