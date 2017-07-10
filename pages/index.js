import React, { Component } from 'react'
import { rehydrate } from 'glamor'
//
import Head from '../src/components/Head'
import Page from '../src/components/Page'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default class Index extends Component {
  render () {
    return (
      <Page>
        <Head>
          <title>Welcome!</title>
        </Head>
        You're home!
      </Page>
    )
  }
}
