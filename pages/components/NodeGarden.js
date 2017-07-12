import React, { Component } from 'react'
//
import Color from '../utils/Color'
import HyperResponsive from './HyperResponsive'

class NodeGarden extends Component {
  constructor () {
    super()
    this.update = this.update.bind(this)
  }
  componentDidMount () {
    this.update()
  }
  componentDidUpdate () {
    this.update()
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  update () {
    const { width, height, color } = this.props
    const canvas = this.el
    const context = canvas.getContext('2d')

    let nodes
    const NUM_NODES = width * height / 20000
    const MIN_DIST = 150
    const speed = 0.0000001

    nodes = createNodes()
    context.lineWidth = 1.5
    for (let i = 0; i < NUM_NODES; i++) {
      nodes[i].draw()
    }
    if (this.interval) {
      window.clearInterval(this.interval)
    }
    this.interval = window.setInterval(nodesLoop, 1000 / 30)

    function createNodes () {
      const nodes = []
      for (let i = 0; i < NUM_NODES; i++) {
        const node = {
          radius: 2,
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
        nodes.push(node)
      }
      return nodes
    }

    function nodesLoop () {
      context.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < NUM_NODES; i++) {
        nodes[i].update()
        nodes[i].draw()

        const node1 = nodes[i]
        for (let j = i + 1; j < NUM_NODES; j++) {
          const node2 = nodes[j]

          const dx = node1.x - node2.x
          const dy = node1.y - node2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MIN_DIST) {
            context.beginPath()
            context.strokeStyle = Color(color)
              .setAlpha(Color(color).getAlpha() * (1 - dist / MIN_DIST))
              .toString()
            context.moveTo(node1.x, node1.y)
            context.lineTo(node2.x, node2.y)
            context.stroke()
            context.closePath()

            const ax = dx * speed
            const ay = dy * speed
            node1.vx += ax
            node1.vy += ay
            node2.vx -= ax
            node2.vy -= ay
          }
        }
      }
    }
  }
  render () {
    const { width, height } = this.props
    return (
      <canvas
        ref={el => {
          this.el = el
        }}
        width={width}
        height={height}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    )
  }
}

export default HyperResponsive(NodeGarden)
