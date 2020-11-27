import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Profile from "../images/profile.jpg";
import Img from "gatsby-image";
import Button from "./Button.js";
import ButtonSecondary from "./ButtonSecondary.js";

const HeroStyles = styled.section`
  .hero-header {
    margin-bottom: 0.75em;
    line-height: 1.3em;
  }

  .hero-content {
    margin-bottom: 1.75em;
    font-size: 1.075rem;
  }

  .hero-profile {
    margin-top: 0.75em;
    margin-bottom: 1.3em;
    border-radius: 4px; 
    box-shadow: 0 0 10px #ddd;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            src
            sizes
            srcSet
          }
        }
      }
    }
  `);
  return (
    <HeroStyles>
      <h1 className="hero-header">
        <span className="inline-block">Hi, I'm Jennifer Ross.</span>
        <span className="inline-block">Full Stack <span className="purple">Developer</span></span>
        <span className="inline-block">& UI <span className="purple">Designer</span>.</span>
        {/* <span className="inline-block">& Web Accessibility Specialist.</span> */}
      </h1>

      {/* <Button>See my work</Button>
      <ButtonSecondary>Contact me</ButtonSecondary> */}

      <Img  
        className="hero-profile gatsby-image-wrapper"
        fluid={data.profile.childImageSharp.fluid}
        alt="Jennifer Ross profile"
        />
      <p className="hero-content">
        I'm a creative introvert. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras consectetur vel ante vitae lacinia. Sed et ante a. 
      </p>
      <p className="hero-content">
        Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut ultricies magna. Lorem eleifend venenatis quis eu ex.
      </p>
       <p className="hero-content">
        Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut ultricies magna. Lorem eleifend venenatis quis eu ex.
      </p>
 
    </HeroStyles>
  );
};

export default Hero;
