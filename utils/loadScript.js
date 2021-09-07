export function loadScript(src, attrs = {}) {
  return new Promise(resolve => {
    if (typeof document !== 'undefined') {
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.type = 'text/javascript'
      Object.keys(attrs).forEach(attr => script.setAttribute(attr, attrs[attr]))
      script.src = src
      script.onload = () => resolve()

      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag)
    }
  })
}
