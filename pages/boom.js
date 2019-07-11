import React from 'react'
// import dynamic from 'next/dynamic'
// import styled from 'styled-components'
// import Link from 'next/link'
import 'swagger-ui-react/swagger-ui.css'
//

import Head from 'components/Head'

import { H1, H2, H3, H4, H6, P, Img, Button } from 'components/Html'

// const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false })

export default function Api() {
  return (
    <div>
      <Head title="API Documentation - Nozzle - Search Engine Keyword Ranking Software" />
      <main>{/* <SwaggerUI url="/static/api.swagger.json" /> */}</main>
    </div>
  )
}
