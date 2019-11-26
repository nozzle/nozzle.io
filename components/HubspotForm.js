import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  width: 100%;
  margin: 2rem 0;

  iframe {
    width: 100% !important;
  }
`

const hubspotSrc = 'https://js.hsforms.net/forms/v2.js'

function loadForm (formId, elementId) {
  if (window.hbspt) {
    window.hbspt.forms.create({
      portalId: "2030303",
      formId: formId,
      target: `#${elementId}`
    })
  }
}

export default function HubspotForm ({
  id,
}) {
  const elementIdRef = React.useRef()
  if (!elementIdRef.current) {
    elementIdRef.current = `HubspotForm-${Date.now()}`
  }

  const elementId = elementIdRef.current

  React.useEffect(() => {
    if (!document.getElementById(hubspotSrc)) {
      const script = document.createElement('script');
      script.id = hubspotSrc
      script.src = hubspotSrc;
      document.body.appendChild(script);
      script.addEventListener('load', () => loadForm(id, elementId));
    } else {
      loadForm(id, elementId)
    }
  }, [])

  return <Styles id={elementId}/>
}