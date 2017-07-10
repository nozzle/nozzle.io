import React, { Component } from 'react'
//
import Head from './components/Head'
import Content from './components/Content'

export default class About extends Component {
  render () {
    return (
      <Content>
        <Head>
          <title>About Us</title>
        </Head>
        This is about us!
      </Content>
    )
  }
}
