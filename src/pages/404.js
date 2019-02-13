import React from "react";
import styled from "styled-components";
//
import Link from "components/Link";

const Container = styled("div")`
  margin-top: 17%;
`;

const Oops = styled("div")`
  margin-top: 3rem;
  font-size: 5rem;
  text-align: center;
`;

const Styles = styled("div")`
  margin: auto;
  margin-top: 2rem;
  font-size: 2rem;
  width: 70%;
  color: rgba(0, 0, 0, 0.5);
`;

const LinkStyle = styled("div")`
  display: inline-block;
  color: #0f83ab;

  :hover {
    color: #60bd68;
  }
`;

export default () => (
  <Container>
    <Oops>Uh-Oh!!</Oops>
    <Styles>
      You seem to have escaped through a leaky pipe. We can't find this page.
      Let's get you out of this puddle, head back to our{" "}
      <LinkStyle>
        <Link to="/">Home Page.</Link>
      </LinkStyle>
    </Styles>
  </Container>
);
