export function loadScript(src, attrs = {}) {
  return new Promise(resolve => {
    if (typeof document !== 'undefined') {
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      Object.keys(attrs).forEach(attr => script.setAttribute(attr, attrs[attr]))
      script.src = src
      script.onload = () => resolve()
      document.body.appendChild(script)
    }
  })
}
