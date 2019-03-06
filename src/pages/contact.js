import React from "react";
import styled from "styled-components";
//
import Link from "components/Link";

const Styles = styled("div")`
  color: rgba(0, 0, 0, 0.5);

  .title {
    text-align: center;
    font-size: 5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .outerBody {
    position: absolute;
    top: 25%;
    bottom: 0;
    width: 100%;
    background-color: #063444;
  }
  .innerBody {
    text-align: center;
    font-size: 2rem;
    padding: 2rem;
    color: white;
  }
`;

export default () => (
  <Styles>
    <div className="title">Contact Us</div>
    <div className="outerBody">
      <div className="innerBody">Send us a message</div>
    </div>
  </Styles>
);
