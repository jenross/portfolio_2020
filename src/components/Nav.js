import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../images/JR_Logo-02.png";
import Img from "gatsby-image";

const NavStyles = styled.nav`
  margin-bottom: 1em;
  .hero-logo {
    left: -1.25em;
  }
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "JR_Logo-02.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <NavStyles>
      <Img
        className="hero-logo gatsby-image-wrapper"
        fixed={data.logo.childImageSharp.fixed}
        alt="Jennifer Ross logo"
      />
    </NavStyles>
  );
};

export default Nav;
