import React, { Component } from 'react'
//
import Info from 'utils/Info'

let uid = 0

export default class Comments extends Component {
  constructor () {
    super()
    this.state = {
      formElementID: `disqus-${uid}`,
    }
    uid += 1
  }
  componentWillMount () {
    const { path, title } = this.props

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

    if (!global.disqus_config) {
      global.disqus_config = config
    } else if (global.DISQUS) {
      global.DISQUS.reset({
        reload: true,
        config,
      })
    }
  }
  componentDidMount () {
    if (typeof document === 'undefined') {
      return
    }

    const scriptSrc = '//nozzle.disqus.com/embed.js'

    if (document.getElementById(scriptSrc)) {
      return
    }

    const script = document.createElement('script')

    script.src = scriptSrc
    script.setAttribute('data-timestamp', +new Date())
    script.async = true
    script.id = scriptSrc

    document.body.appendChild(script)
  }
  render () {
    return <div id="disqus_thread" />
  }
}
