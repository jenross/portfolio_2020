import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/JR_Logo-02.png';
import Profile from '../images/profile.jpg';
import Img from "gatsby-image"

const HeroStyles = styled.section`
   

`

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
   
         <h1 className="hero-header">Hi, I'm <span className="purple">Jennifer Ross</span></h1>

      </HeroStyles>
    );
  }

  export default Hero;