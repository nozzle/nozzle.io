import React, { PureComponent } from 'react'
import raf from 'raf'
//
import Color from '../utils/Color'

import HyperResponsive from './HyperResponsive'

class NodeGarden extends PureComponent {
  static defaultProps = {
    pixelRatio: (typeof window !== 'undefined' && window.devicePixelRatio) || 1,
  }
  constructor () {
    super()
    this.update = this.update.bind(this)
    this.animate = this.animate.bind(this)
    this.drawNodes = this.drawNodes.bind(this)
  }
  componentDidMount () {
    this.update()
  }
  componentDidUpdate (nextProps) {
    this.update()
  }
  componentWillUnmount () {
    this.doneAnimating = true
  }
  update () {
    let { width, height, color, pixelRatio } = this.props

    width = width * pixelRatio
    height = height * pixelRatio

    const canvas = (this.canvas = this.el)
    const context = (this.context = canvas.getContext('2d'))

    this.NUM_NODES = width * height / 20000
    this.MIN_DIST = 150
    this.speed = 0.0000001

    this.nodes = []
    for (let i = 0; i < this.NUM_NODES; i++) {
      const node = {
        radius: 4,
        x: Math.round(Math.random() * width),
        y: Math.round(Math.random() * height),
        vx: Math.random() * 6 - 3,
        vy: Math.random() * 6 - 3,
        update: function () {
          this.x += this.vx
          this.y += this.vy
          if (this.x > width) {
            this.x = 0
          } else if (this.x < 0) {
            this.x = width
          }
          if (this.y > height) {
            this.y = 0
          } else if (this.y < 0) {
            this.y = height
          }
        },
        draw: function () {
          context.fillStyle = color
          context.beginPath()
          context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
          context.closePath()
          context.fill()
        },
      }
      this.nodes.push(node)
    }

    context.lineWidth = 1.5

    if (!this.animating) {
      raf(this.animate)
    }
  }
  animate () {
    if (this.doneAnimating) {
      this.animating = false
      return
    }

    this.animating = true

    this.drawNodes()
    raf(this.animate)
  }
  drawNodes () {
    let { color } = this.props
    const nodes = this.nodes
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.NUM_NODES; i++) {
      nodes[i].update()
      nodes[i].draw()

      const node1 = nodes[i]
      for (let j = i + 1; j < this.NUM_NODES; j++) {
        const node2 = nodes[j]

        const dx = node1.x - node2.x
        const dy = node1.y - node2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < this.MIN_DIST) {
          this.context.beginPath()
          this.context.strokeStyle = Color(color)
            .setAlpha(Color(color).getAlpha() * (1 - dist / this.MIN_DIST))
            .toString()
          this.context.moveTo(node1.x, node1.y)
          this.context.lineTo(node2.x, node2.y)
          this.context.stroke()
          this.context.closePath()

          const ax = dx * this.speed
          const ay = dy * this.speed
          node1.vx += ax
          node1.vy += ay
          node2.vx -= ax
          node2.vy -= ay
        }
      }
    }
  }
  render () {
    let { width, height, pixelRatio } = this.props
    width = width * pixelRatio
    height = height * pixelRatio
    return (
      <canvas
        ref={el => {
          this.el = el
        }}
        width={width}
        height={height}
        style={{
          width: `100%`,
          height: `100%`,
        }}
      />
    )
  }
}

export default HyperResponsive(NodeGarden)
