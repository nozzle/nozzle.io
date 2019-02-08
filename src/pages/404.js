import React from "react";
import styled from "styled-components";

const Styles = styled("div")`
  flex: 1 0 auto;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.5);
`;

export default () => (
  <Styles>
    You must have followed a leaky pipe somewhere! It looks like that page
    doesn't exist. Let's get you out of this puddle.{" "}
  </Styles>
);
