import React, { Component } from "react";
import styled from "react-emotion";
//
import Theme from "utils/Theme";

import { button } from "./Html";

let uid = 0;

const Styles = styled("div")`
  fieldset {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .field {
    margin: 0 0 1rem 0;
    text-align: left;
  }

  label {
    display: inline-block;
    margin-bottom: 0.2rem;
  }

  input,
  textarea {
    font-size: 1rem;
    border-radius: 3px;
    border: 0;
    padding: 10px 15px;
    outline: none;
    max-width: 100%;

    &[type="text"],
    &[type="email"],
    &[type="tel"] {
      width: 100% !important;
    }

    &[type="file"] {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  textarea {
    font-size: 0.85rem;
    padding: 10px;
    min-height: 100px;
  }

  [type="submit"] {
    ${button};
    background: ${Theme.colors.success};
  }

  legend {
    font-size: 0.85rem;
    line-height: 1rem;
    padding: 0.5rem 0;
    opacity: 0.7;
    font-weight: 300;
  }
`;

export default class HubspotForm extends Component {
  constructor() {
    super();
    this.state = {
      formElementID: `hubspotForm-${(uid += 1)}`
    };
  }
  componentWillMount() {
    if (typeof document === "undefined") {
      return;
    }

    const scriptSrc = "https://js.hsforms.net/forms/v2.js";
    const jquerySrc = "https://code.jquery.com/jquery-3.2.1.slim.min.js";

    if (document.getElementById(scriptSrc)) {
      return;
    }

    const script = document.createElement("script");

    script.src = scriptSrc;
    script.async = true;
    script.id = script.src;

    document.body.appendChild(script);

    window.setTimeout(() => {
      if (document.getElementById(jquerySrc)) {
        return;
      }
      const script = document.createElement("script");

      script.src = jquerySrc;
      script.async = true;
      script.id = script.src;

      document.body.appendChild(script);
    }, 2000);
  }
  componentDidMount() {
    const { formID, onSubmit } = this.props;
    const { formElementID } = this.state;
    this.interval = window.setInterval(() => {
      if (!window.hbspt || !window.hbspt.forms) {
        return;
      }
      window.clearInterval(this.interval);
      window.hbspt.forms.create({
        target: `#${formElementID}`,
        css: "",
        portalId: "2030303",
        formId: formID,
        onFormSubmit: form => {
          onSubmit && onSubmit(form);
        }
      });
    }, 50);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    const { formElementID } = this.state;
    return <Styles id={formElementID} />;
  }
}
