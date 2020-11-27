import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
// import Logo from "../images/JR_Logo-02.png";
// import Profile from "../images/profile.jpg";
import Img from "gatsby-image";

const FooterStyles = styled.footer``;

const Footer = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       logo: file(relativePath: { eq: "JR_Logo-02.png" }) {
  //         childImageSharp {
  //           fixed(width: 100, height: 100) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   `);
  return (
    <FooterStyles>
      <p className="footer-copyright">&copy; 2020 Jennifer Ross</p>
    </FooterStyles>
  );
};

export default Footer;
