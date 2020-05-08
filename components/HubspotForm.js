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

function loadForm(formId, elementId, options = {}) {
  if (window.hbspt) {
    window.hbspt.forms.create({
      ...options,
      portalId: '2030303',
      formId: formId,
      target: `#${elementId}`,
    })
  }
}

export default function HubspotForm({ id, onFormSubmitted }) {
  const elementRef = React.useRef()

  React.useEffect(() => {
    elementRef.current.id = `HubspotForm_${Date.now()}`

    const load = () =>
      loadForm(id, elementRef.current.id, {
        onFormSubmitted,
      })

    if (!document.getElementById(hubspotSrc)) {
      const script = document.createElement('script')
      script.id = hubspotSrc
      script.src = hubspotSrc
      document.body.appendChild(script)
      script.addEventListener('load', () => load())
    } else {
      load()
    }
  }, [elementRef])

  return <Styles ref={elementRef} />
}
