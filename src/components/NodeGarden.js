import React, { PureComponent } from 'react'
import raf from 'raf'
//
import Color from 'utils/Color'

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
  componentDidUpdate () {
    this.update()
  }
  componentWillUnmount () {
    this.doneAnimating = true
  }
  update () {
    const { color, pixelRatio } = this.props
    let { width, height } = this.props

    width *= pixelRatio
    height *= pixelRatio

    if (!this.canvasContext) {
      this.canvasContext = this.el.getContext('2d')
    }

    this.NUM_NODES = width * height / 20000
    this.MIN_DIST = 150
    this.speed = 0.0000001

    this.nodes = []
    for (let i = 0; i < this.NUM_NODES; i += 1) {
      const node = {
        radius: Math.round(Math.random() * 4) + 1,
        x: Math.round(Math.random() * width),
        y: Math.round(Math.random() * height),
        vx: Math.random() * 6 - 3,
        vy: Math.random() * 6 - 3,
        update: () => {
          node.x += node.vx
          node.y += node.vy
          if (node.x > width) {
            node.x = 0
          } else if (node.x < 0) {
            node.x = width
          }
          if (node.y > height) {
            node.y = 0
          } else if (node.y < 0) {
            node.y = height
          }
        },
        draw: () => {
          this.canvasContext.fillStyle = color
          this.canvasContext.beginPath()
          this.canvasContext.arc(node.x, node.y, node.radius, 0, Math.PI * 2, true)
          this.canvasContext.closePath()
          this.canvasContext.fill()
        },
      }
      this.nodes.push(node)
    }

    this.canvasContext.lineWidth = 1.5

    if (!this.animating) {
      raf(this.animate)
    }
  }
  animate () {
    if (this.doneAnimating) {
      return
    }

    this.animating = true

    this.drawNodes()
    raf(this.animate)
  }
  drawNodes () {
    const { color } = this.props

    const nodes = this.nodes
    this.canvasContext.clearRect(0, 0, this.el.width, this.el.height)

    for (let i = 0; i < this.NUM_NODES; i += 1) {
      nodes[i].update()
      nodes[i].draw()

      const node1 = nodes[i]
      for (let j = i + 1; j < this.NUM_NODES; j += 1) {
        const node2 = nodes[j]

        const dx = node1.x - node2.x
        const dy = node1.y - node2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < this.MIN_DIST) {
          this.canvasContext.beginPath()
          this.canvasContext.strokeStyle = Color(color)
            .setAlpha(Color(color).getAlpha() * (1 - dist / this.MIN_DIST))
            .toString()
          this.canvasContext.moveTo(node1.x, node1.y)
          this.canvasContext.lineTo(node2.x, node2.y)
          this.canvasContext.stroke()
          this.canvasContext.closePath()

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
    let { width, height } = this.props
    const { pixelRatio } = this.props

    width *= pixelRatio
    height *= pixelRatio
    return (
      <canvas
        ref={el => {
          this.el = el
        }}
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    )
  }
}

export default HyperResponsive(NodeGarden)
