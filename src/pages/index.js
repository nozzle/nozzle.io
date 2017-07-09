import React, { Component } from 'react'
//
import Head from 'components/Head'
import Page from 'components/Page'
import Navbar from 'components/Navbar'

export default class Index extends Component {
  render () {
    return (
      <Page>
        <Head>
          <title>Welcome!</title>
        </Head>
        <Navbar />
        You're home!
      </Page>
    )
  }
}
