import React, { Component } from "react";
import raf from "raf";
import onResize from "utils/detectElementResize";
//

export default function HyperResponsive(WrappedComponent) {
  return class HyperResponsive extends Component {
    constructor() {
      super();
      this.state = {
        ready: false,
        width: 0,
        height: 0
      };
      this.resize = this.resize.bind(this);
      this.update = this.update.bind(this);
    }
    componentDidMount() {
      if (!this.stopListener) {
        this.stopListener = onResize(this.el, this.resize);
      }
      this.resize();
    }
    componentWillUnmount() {
      raf.cancel(this.raffed);
      if (this.stopListener) {
        this.stopListener();
      }
    }
    resize() {
      this.raffed = raf(this.update);
    }
    update() {
      if (!this.el) {
        return;
      }
      this.setState({
        ready: true,
        width: parseInt(window.getComputedStyle(this.el).width),
        height: parseInt(window.getComputedStyle(this.el).height)
      });
    }
    render() {
      const { style, ...rest } = this.props;
      const { ready, width, height } = this.state;
      return (
        <div
          className="ResponsiveWrapper"
          ref={el => {
            this.el = el;
          }}
          style={{
            width: "100%",
            height: "100%",
            ...style
          }}
        >
          {ready && (
            <WrappedComponent width={width} height={height} {...rest} />
          )}
        </div>
      );
    }
  };
}
