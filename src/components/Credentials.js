import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import CredentialsImg from "./CredentialsImg";

const CredentialsStyles = styled.section`
  .sub-header {
    line-height: 1.3em;
    margin-top: 1.9em;
    margin-bottom: 0.5em;
    font-size: 2rem;
  }

  .credentials-paragraph {
    font-size: 1.075rem;
    max-width: 1140px;
  }

  .credentials-img-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .credentials-img-container a:first-child {
    margin-bottom: 2em;
  }

  .credential-links:nth-child(2) {
    text-decoration: none;
  }

  .credentials-img {
    transition: transform 0.3s;
    &:hover {
      transform: translateY(-0.5rem) scale(1);
    }
  }

  .credential-id {
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: 1.075rem;
    text-align: center;
  }

  @media (min-width: 666px) {
    .credentials-img-container {
      justify-content: space-between;
    }
    .credential-links:nth-child(2) {
      align-self: center;
    }
  }
`;

const Credentials = () => {
  return (
    <CredentialsStyles>
      <h2 className="sub-header">Credentials</h2>
      <p className="credentials-paragraph">
        I graduated from the UCF Coding Boot Camp in 2019 and recently earned
        certification from Google Digital Garage after completing their
        "Fundamentals of Digital Marketing" course.{" "}
      </p>
      <div className="credentials-img-container">
        <a
          href="https://credly.com/credit/23155235"
          target="_blank"
          rel="noreferrer"
          className="credential-links"
        >
          <CredentialsImg
            filename="credly_bootcamp.png"
            alt="Jennifer Ross' UCF Coding Boot Camp certification badge issued by Credly"
          />
        </a>
        <a
          href="https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code"
          target="_blank"
          rel="noreferrer"
          className="credential-links"
        >
          <CredentialsImg
            filename="Google-Digital-Garage.jpg"
            alt="Jennifer Ross' Google Digital Garage certification issued after completing the Fundamentals of Digital Marketing course"
          />
          <p className="credential-id">Credential ID: 8VY UTD 8F5</p>
        </a>
      </div>
    </CredentialsStyles>
  );
};

export default Credentials;
