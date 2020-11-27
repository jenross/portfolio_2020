import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../images/JR_Logo-02.png";
import Profile from "../images/profile.jpg";
import Img from "gatsby-image";
import Button from "./Button.js";
import ButtonSecondary from "./ButtonSecondary.js";

const HeroStyles = styled.section`
  .hero-header {
    margin-bottom: 0.75em;
  }

  .hero-content {
    margin-bottom: 1.75em;
    font-size: 1.075rem;
  }
`;

const Hero = () => {
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
    <HeroStyles>
      <h1 className="hero-header">
        Hi, I'm <span className="purple">Jennifer Ross</span>
      </h1>
      <p className="hero-content">
        I'm a creative introvert. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras consectetur vel ante vitae lacinia. Sed et ante a
        lorem eleifend venenatis quis eu ex. Nulla commodo aliquet risus at
        pretium. Proin in sagittis metus, ut ultricies magna.
      </p>
      <Button>See my work</Button>
      <ButtonSecondary>Contact</ButtonSecondary>
    </HeroStyles>
  );
};

export default Hero;
