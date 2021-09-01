import React from 'react'

export const useYoutube = callback => {
  React.useEffect(() => {
    if (!window.YT) {
      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      tag.onload = callback
    } else {
      callback()
    }
  }, [])
}
