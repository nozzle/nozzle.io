import { Component } from 'react'
import withClickOutside from 'react-click-outside'
//

class ClickOutside extends Component {
  handleClickOutside () {
    this.props.onClickOutside()
  }
  render () {
    return this.props.children
  }
}

export default withClickOutside(ClickOutside)
