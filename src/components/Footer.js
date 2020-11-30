import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../images/JR_Logo-02.png";
// import Img from "gatsby-image";
import email from "../../static/email.svg";
import github from "../../static/github.svg";
import linkedin from "../../static/linkedin.svg";
import twitter from "../../static/twitter.svg";
import instagram from "../../static/instagram.svg";

const FooterStyles = styled.footer`
  margin-top: 4.5em;

  p {
    color: var(--black);
  }

  .social-icons {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  .social-icons {
    padding-top: 4.5em;
  }

  .social-icons li {
    padding-right: 1.5em;
  }

  .social-icons li:last-child {
    padding-right: 0;
  }

  .social-icons img {
    width: 36px;
    height: 36px; 
  }
`;

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     email: file(relativePath: { eq: "email.png" }) {
  //       childImageSharp {
  //         fixed(width: 36, height: 36) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     github: file(relativePath: { eq: "github.png" }) {
  //       childImageSharp {
  //         fixed(width: 36, height: 36) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     twitter: file(relativePath: { eq: "twitter.png" }) {
  //       childImageSharp {
  //         fixed(width: 36, height: 36) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     instagram: file(relativePath: { eq: "instagram.png" }) {
  //       childImageSharp {
  //         fixed(width: 36, height: 36) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     linkedin: file(relativePath: { eq: "linkedin.png" }) {
  //       childImageSharp {
  //         fixed(width: 36, height: 36) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <FooterStyles>
      <ul className="social-icons">
        <li>
          <a
            href="mailto:hey@jenniferross.tech"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="each-social gatsby-image-wrapper"
              src={email}
              alt="Jennifer Ross' email hey@jenniferross.tech"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/jenross" target="_blank" rel="noreferrer">
            <img
              className="each-social gatsby-image-wrapper"
              src={github}
              alt="Jennifer Ross' Github profile"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jennifer-ross-221490121/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="each-social gatsby-image-wrapper"
              src={linkedin}
              alt="Jennifer Ross' LinkedIn profile"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/itsjenniferross"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="each-social gatsby-image-wrapper"
              src={twitter}
              alt="Jennifer Ross' Twitter profile"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jen_codes/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="each-social gatsby-image-wrapper"
              src={instagram}
              alt="Jennifer Ross' Instagram profile"
            />
          </a>
        </li>
      </ul>

      <p className="footer-copyright center">&copy; 2020 Jennifer Ross</p>
    </FooterStyles>
  );
};

export default Footer;
