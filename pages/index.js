import React, { Component } from 'react'
//
import Head from '../src/components/Head'
import Page from '../src/components/Page'

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
