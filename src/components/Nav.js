import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeaderStyles = styled.header`
  margin-bottom: 1.5em;
  @media (min-width: 1200px) {
    margin-bottom: 2em;
  }
`;

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  .hero-logo {
    left: -1.3em;
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

  .nav-link {
    color: var(--black);
    text-decoration: none;
  }
  a {
    background: linear-gradient(
      to bottom,
      var(--purple) 0%,
      var(--purple) 100%
    );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 3px 3px;
    transition: background-size 0.3s;
    padding-left: 0.3em;
    padding-right: 0.3em;
  }

  a:hover {
    background-size: 3px 40px;
    color: var(--white);
  }

  /* .nav-link:hover {
    color: var(--purple);
    transition: ease 0.4s;
    border-bottom: 1px solid var(--purple);
  } */
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
      <NavStyles className="fill">
        <Img
          className="hero-logo gatsby-image-wrapper"
          fixed={data.logo.childImageSharp.fixed}
          alt="Jennifer Ross logo"
        />

        <ul className="nav-links">
          <li className="each-nav-link">
            <AnchorLink
              to="/#work"
              title="Work"
              stripHash
              className="nav-link"
            />
          </li>
          <li className="each-nav-link">
            <AnchorLink
              to="/#contact"
              title="Contact"
              stripHash
              className="nav-link"
            />
          </li>
        </ul>
      </NavStyles>
    </HeaderStyles>
  );
};

export default Nav;
