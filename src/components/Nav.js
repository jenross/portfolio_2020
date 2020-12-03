import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../images/JR_Logo-02.png";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { motion } from "framer-motion"

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

  .nav-link:hover {
    color: var(--purple);
    border-bottom: 1px solid var(--purple);
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
   
      <motion.div
        animate={{ scale: 2 }}
        transition={{ duration: 0.5 }}
      >
             <Img
              className="hero-logo gatsby-image-wrapper"
              fixed={data.logo.childImageSharp.fixed}
              alt="Jennifer Ross logo"
          />  
        </motion.div>
  
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
