import React, { Component } from 'react'
import { withRouter } from 'react-static'
//
import { Div } from './Html'
import HubspotForm from './HubspotForm'

window.myhistory = history

class TrialForm extends Component {
  render () {
    return (
      <Div full>
        <HubspotForm
          formID="741e3900-e931-47e0-b355-a190fbb6b301"
          onSubmit={() => {
            window.dataLayer.push({ event: 'trialSubmit' })
            setTimeout(() => {
              this.props.history.push('/l/onboarding/')
            }, 2000)
          }}
        />
      </Div>
    )
  }
}

export default withRouter(TrialForm)
