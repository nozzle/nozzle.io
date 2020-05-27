import React from 'react'
//
import Info from 'utils/Info'

const scriptSrc = '//nozzle.disqus.com/embed.js'

const update = ({ path, title }) => {
  if (typeof window === 'undefined' || !global.DISQUS) {
    return
  }

  const permalink = Info.siteRoot + path

  const config = function config() {
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

export default function Comments({ path, title }) {
  React.useEffect(() => {
    if (typeof document === 'undefined' || document.getElementById(scriptSrc)) {
      return
    }

    const script = document.createElement('script')

    script.id = scriptSrc
    script.src = scriptSrc
    script.async = true
    script.onload = () => update({ path, title })

    document.body.appendChild(script)
  }, [path, title])

  return <div id="disqus_thread" />
}
