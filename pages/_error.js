import React from 'react'
import Error from 'next/error'
//
import Content from './components/Content'

export default class Page extends React.Component {
  render () {
    return (
      <Content>
        <Error statusCode={404} />
      </Content>
    )
  }
}
