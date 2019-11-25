import React from 'react'
import styled from 'styled-components'

const TrialFormStyles = styled.div`
  width: 100%;
  margin: 2rem 0;

  iframe {
    width: 100% !important;

    html, body {
      font-size: 16px !important;
    }
  }
`

const hubspotSrc = 'https://js.hsforms.net/forms/v2.js'

function loadForm () {
  if (window.hbspt) {
    window.hbspt.forms.create({
      portalId: "2030303",
      formId: "45956734-db34-4a7b-ad2e-f84f9ba62a2b",
      target: '#trialForm'
    })
  }
}

export default function TrialForm () {
  React.useEffect(() => {
    if (!document.getElementById(hubspotSrc)) {
      const script = document.createElement('script');
      script.id = hubspotSrc
      script.src = hubspotSrc;
      document.body.appendChild(script);
      script.addEventListener('load', loadForm);
    } else {
      loadForm()
    }
  }, [])

  return <TrialFormStyles id='trialForm'/>
}