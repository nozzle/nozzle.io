import { Component } from 'react'
//

export default class ClickOutside extends Component {
  componentDidMount () {
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handle, true)
  }

  getContainer = ref => {
    this.container = ref
  }

  handle = e => {
    const { onClickOutside } = this.props
    const el = this.container
    if (!el.contains(e.target)) {
      onClickOutside(e)
    }
  }

  render () {
    const { children } = this.props
    return children(this.getContainer)
  }
}
