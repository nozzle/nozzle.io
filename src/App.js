import React from "react";
import { Root, Routes } from "react-static";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
//
import Theme from "utils/Theme";

import NavWrapper from "components/NavWrapper";

const GlobalStyles = createGlobalStyle`
  ${reset};
  html, body, body, [data-reactroot] {
    min-height: 100%;
    width: 100%;
  }
  html, body {
    background: ${Theme.colors.primaryDarker};
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 16px;
    font-family: "Overpass", "Helvetica", "Georgia", sans-serif;
    font-weight: ${Theme.weights.regular};
    color: #3d556b;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [data-name="mojs-shape"] {
    position: fixed !important;
    z-index: 99999999;
    pointer-events: none;
  }
`;

export default () => (
  <GlobalStyles>
    <Root>
      <NavWrapper>
        <Routes />
      </NavWrapper>
    </Root>
  </GlobalStyles>
);
