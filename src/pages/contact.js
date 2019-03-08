import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Text, TextArea } from "react-form";
//
import { Img, Button } from "components/Html";
import encodeFormData from "utils/encodeFormData";

const Styles = styled("div")`
  color: rgba(0, 0, 0, 0.5);

  .mainContainer {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  .title {
    text-align: center;
    font-size: 5rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    height: 25%;
  }
  .link {
    color: ;
  }
  .message {
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: #063444;
    z-index: 1;
    font-size: 3rem;
    padding: 2rem;
    padding-bottom: 25vh;
    color: white;

    &:before {
      background: inherit;
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: -1;
    }

    &:before {
      top: 0;
      transform: skewY(2deg);
      transform-origin: 100% 0;
    }
  }

  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.5);
  }

  textarea {
    padding: 12px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    margin-right: 1rem;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.5);
  }
  .formContainer {
    display: flex;
    width: 100%;
    justify-content: left;
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 4rem;
  }
  img {
    margin-right: 1rem;
    max-width: 200px;
    width: 40%;
    height: 35%;
    margin-top: 2rem;
    vertical-align: baseline;
  }
`;

export default () => {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async values => {
    window.dataLayer.push({ event: "contactSubmit" });
    try {
      await axios.post(
        "/",
        encodeFormData({ "form-name": "contact", ...values }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      setSubmitted(true);
    } catch (err) {
      window.alert(
        "There was a problem submitting your form! Try again or reload the page :)"
      );
      setSubmitted(true);
    }
  };

  return (
    <Styles>
      <div className="mainContainer">
        {submitted ? (
          <div>Submitted</div>
        ) : (
          <Form onSubmit={onSubmit}>
            {({ submitForm }) => (
              <form name="exitIntent" netlify="true" onSubmit={submitForm}>
                <div className="title">
                  <div>Contact Us</div>
                </div>
                <div className="message">
                  <div>Send us a message</div>
                  <div className="formContainer">
                    <div className="text">
                      <Text field="name" name="name" placeholder="Name" />
                      <Text
                        field="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <Img src="/img/logo-small.svg" />
                  </div>
                  <TextArea
                    field="message"
                    type="text"
                    placeholder="Your Message"
                  />
                  <Button type="submit" color="success" burst>
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Form>
        )}
      </div>
    </Styles>
  );
};
