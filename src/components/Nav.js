import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../images/JR_Logo-02.png";
import Img from "gatsby-image";

const HeaderStyles = styled.header`
  margin-bottom: 1.5em;
`

const NavStyles = styled.nav`

  display: flex; 
  justify-content: space-between;
  .hero-logo {
    left: -1.5em;
  }

  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; 
    align-self: center;
    font-size: 1.075rem;
  }

  .nav-links li:first-child {
    padding-right: 1.5em;
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
    <HeaderStyles>
      <NavStyles>
        <Img
          className="hero-logo gatsby-image-wrapper"
          fixed={data.logo.childImageSharp.fixed}
          alt="Jennifer Ross logo"
        />

        <ul className="nav-links">
          <li className="each-nav-link">Portfolio</li>
          <li className="each-nav-link">Contact</li>
        </ul>
      </NavStyles>
    </HeaderStyles>
  );
};

export default Nav;
