import React from 'react'
import Error from 'next/error'
//
import Page from '../components/Page'

export default class CustomError extends React.Component {
  render () {
    return (
      <Page>
        <Error statusCode={404} />
      </Page>
    )
  }
}
