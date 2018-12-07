import React, { Component } from "react";

let typeform;
if (typeof document !== "undefined") {
  typeform = require("@typeform/embed");
}
//

export default class TrialForm extends Component {
  componentDidMount() {
    this.setState({
      ready: true
    });
    typeform.makeWidget(
      this.el,
      "https://annabergevin.typeform.com/to/EzND5O", // NOTE: Replace with your typeform URL
      {
        hideHeaders: true,
        hideFooter: true,
        onSubmit: () => {
          window.dataLayer.push({ event: "trialSubmit" });
        }
      }
    );
  }
  render() {
    return (
      <div
        ref={el => {
          this.el = el;
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "2rem 0"
        }}
      />
    );
  }
}
