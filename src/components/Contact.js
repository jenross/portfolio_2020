import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ContactStyles = styled.section`
  .sub-header {
    line-height: 1.3em;
    margin-top: 1.9em;
    margin-bottom: 0.5em;
    font-size: 2rem;
  }

  .contact-paragraph {
    font-size: 1.075rem;
    margin-bottom: 1.75em;
  }

  .mail-link {
    font-size: 1.075rem;
    color: var(--black);
    text-decoration: none; 
    border-bottom: 2px solid var(--purple);
    padding-bottom: 0.2em;
  }

  .mail-link:hover {
 
    color: var(--purple);
  
    border-bottom: none;
  }
`;

const Contact = () => {
  return (
    <ContactStyles id="contact">
      <h2 className="sub-header">Contact</h2>
      <p className="contact-paragraph">
        I'm a creative introvert. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras consectetur vel ante vitae lacinia. Sed et ante a.{" "}
      </p>
      <a href="mailto:hey@jenniferross.tech" className="mail-link">
        hey@jenniferross.tech
      </a>
    </ContactStyles>
  );
};

export default Contact;
