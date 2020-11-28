import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../images/JR_Logo-02.png";
// import Profile from "../images/profile.jpg";
import Img from "gatsby-image";

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
    /* border-top: 1px solid var(--purple); */
  }

  .social-icons li {
    padding-right: 1.5em;

  }

  .social-icons li:last-child {
    padding-right: 0; 
  }

  /* .social-icons li a img {
    width: 26px;
    height: 26px; 
  } */
`;

const Footer = () => {
    const data = useStaticQuery(graphql`
      query {
        email: file(relativePath: { eq: "email.png" }) {
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        }, 
        github: file(relativePath: { eq: "github.png" }) {
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        }, 
        twitter: file(relativePath: { eq: "twitter.png" }) {
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
      }, 
      instagram: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        },
      }
  `);
  return (
    <FooterStyles>

        <ul className="social-icons">
            <li>
            <a href="mailto:hey@jenniferross.tech" target="_blank" rel="noreferrer">
              <Img 
                  className="each-social gatsby-image-wrapper" 
                  fixed={data.email.childImageSharp.fixed}
                  alt="Jennifer Ross' email hey@jenniferross.tech"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/jenross" target="_blank" rel="noreferrer">
              <Img 
                  className="each-social gatsby-image-wrapper" 
                  fixed={data.github.childImageSharp.fixed}
                  alt="Jennifer Ross' Github profile"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/itsjenniferross" target="_blank" rel="noreferrer">
              <Img 
                  className="each-social gatsby-image-wrapper" 
                  fixed={data.twitter.childImageSharp.fixed}
                  alt="Jennifer Ross' Twitter profile"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jen_codes/" target="_blank" rel="noreferrer">
              <Img 
                  className="each-social gatsby-image-wrapper" 
                  fixed={data.instagram.childImageSharp.fixed}
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
