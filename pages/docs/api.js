import React from 'react'
import dynamic from 'next/dynamic'
//

import Head from 'components/Head'

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false })

export default function Api() {
  return (
    <div>
      <Head title="API Documentation - Nozzle - Search Engine Keyword Ranking Software" />
      <main>
        <SwaggerUI url="https://storage.googleapis.com/nozzle-api/swagger.json" />
      </main>
    </div>
  )
}
