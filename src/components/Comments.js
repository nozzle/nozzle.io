import React, { Component } from 'react'
//
import Info from 'utils/Info'

const scriptSrc = '//nozzle.disqus.com/embed.js'

const update = props => {
  if (typeof window === 'undefined' || !global.DISQUS) {
    return
  }
  const { path, title } = props

  const permalink = Info.siteRoot + path

  const config = function config () {
    this.page.url = permalink
    this.page.identifier = permalink
    this.page.title = title
    this.callbacks.onNewComment = [
      () => {
        global.dataLayer.push({ event: 'commentSubmit' })
      },
    ]
  }

  global.DISQUS.reset({
    reload: true,
    config,
  })
}

export default class Comments extends Component {
  componentWillMount () {
    if (typeof document === 'undefined' || document.getElementById(scriptSrc)) {
      return
    }

    const script = document.createElement('script')

    script.id = scriptSrc
    script.src = scriptSrc
    script.async = true
    script.onload = () => update(this.props)

    document.body.appendChild(script)
  }
  componentDidMount () {
    update(this.props)
  }
  componentWillReceiveProps (props) {
    update(props)
  }
  render () {
    return <div id="disqus_thread" />
  }
}
