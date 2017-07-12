import React, { Component } from 'react'
import raf from 'raf'
//
if (typeof window !== 'undefined') {
  require('javascript-detect-element-resize')
}

export default function HyperResponsive (WrappedComponent) {
  return class HyperResponsive extends Component {
    constructor () {
      super()
      this.state = {
        ready: false,
        width: 0,
        height: 0,
      }
      this.resize = this.resize.bind(this)
      this.update = this.update.bind(this)
    }
    componentDidMount () {
      if (!this.resizeListener) {
        this.resizeListener = window.addResizeListener(this.el, this.resize)
      }
      this.update()
    }
    componentWillUnmount () {
      this.resizeListener && window.removeResizeListener(this.el, this.resize)
    }
    resize () {
      raf(this.update)
    }
    update (e) {
      this.setState({
        ready: true,
        width: parseInt(window.getComputedStyle(this.el).width),
        height: parseInt(window.getComputedStyle(this.el).height),
      })
    }
    render () {
      const { style, ...rest } = this.props
      const { ready, width, height } = this.state
      return (
        <div
          className='ResponsiveWrapper'
          ref={el => {
            this.el = el
          }}
          style={{
            width: '100%',
            height: '100%',
            ...style,
          }}
        >
          {ready &&
            <WrappedComponent width={width} height={height} {...rest} />}
        </div>
      )
    }
  }
}
