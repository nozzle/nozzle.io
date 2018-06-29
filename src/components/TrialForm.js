import React, { Component } from 'react'
import { withRouter } from 'react-static'
import { ReactTypeformEmbed } from 'react-typeform-embed'
//

class TrialForm extends Component {
  render () {
    return typeof document !== 'undefined' ? (
      <ReactTypeformEmbed
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
    ) : null
  }
}

export default withRouter(TrialForm)
