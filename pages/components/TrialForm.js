import React, { Component } from 'react'
import Router from 'next/router'
//
import { Div } from './Html'
import HubspotForm from './HubspotForm'

export default class TrialForm extends Component {
  render () {
    return (
      <Div full>
        <HubspotForm
          formID='741e3900-e931-47e0-b355-a190fbb6b301'
          onSubmit={form => {
            window.dataLayer.push({ event: 'trialSubmit' })
            setTimeout(function () {
              Router.push('/onboarding/')
            }, 2000)
          }}
        />
      </Div>
    )
  }
}
