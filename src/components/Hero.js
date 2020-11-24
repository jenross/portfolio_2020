import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/JR_Logo-02.png';


const HeroStyles = styled.nav`

    .hero-header {

    }
`

export default function Hero() {
    return (
      <>
        
         <h1 className="hero-header">Hi, I'm <span className="purple">Jennifer Ross</span></h1>

      </>
    );
  }