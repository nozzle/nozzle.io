import React, { Component } from 'react'
//
import Head from '../src/components/Head'
import Page from '../src/components/Page'

export default class About extends Component {
  render () {
    return (
      <Page>
        <Head>
          <title>About Us</title>
        </Head>
        This is about us!
      </Page>
    )
  }
}
