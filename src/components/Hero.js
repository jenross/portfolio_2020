import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeroStyles = styled.section`
  a {
    color: var(--paragraph);
    text-decoration: none;
    border-bottom: 2px solid var(--purple);
    font-weight: bold;
    transition: all 0.5s ease;
  }

  a:hover {
    color: var(--purple);
    border-bottom: none;
  }

  .hero-header {
    margin-bottom: 0.75em;
    line-height: 1.3em;
  }

  .hero-content {
    margin-bottom: 1.75em;
    font-size: 1.075rem;
    max-width: 1140px;
  }

  .hero-content:last-child {
    margin-bottom: 0;
  }

  .hero-profile {
    margin-top: 0.75em;
    margin-bottom: 1.5em;
    border-radius: 4px;
    box-shadow: 0 0 10px #ddd;
    max-width: 629px;
    @media (min-width: 750px) {
      display: none;
    }
  }

  .hero-profile2 {
    display: none;
    @media (min-width: 750px) {
      display: block;
      border-radius: 4px;
      box-shadow: 0 0 10px #ddd;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "jen_og_square.jpg" }) {
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
      profile2: file(relativePath: { eq: "jen_landscape_1850.jpg" }) {
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
        <span className="block">Hi, I'm Jennifer Ross.</span>
        <span className="inline-block">
          Full Stack <span className="purple">Developer&nbsp;</span>
        </span>
        <span id="inline" className="inline-block">
          & UI <span className="purple">Designer</span>.
        </span>
      </h1>
      <div className="hero-flex-container">
        <Img
          className="hero-profile gatsby-image-wrapper"
          fluid={data.profile.childImageSharp.fluid}
          alt="Jennifer Ross profile"
        />
        <Img
          className="hero-profile2 gatsby-image-wrapper"
          fluid={data.profile2.childImageSharp.fluid}
          alt="Jennifer Ross profile"
        />
        <div className="hero-content-container">
          <p className="hero-content">
            I’m a full stack JavaScript developer and designer living in
            Sorrento, a small town in Central Florida 30 miles north of Orlando.</p>
          <p className="hero-content">
            I write HTML, CSS and JavaScript, and design with Figma. Right now,
            I’m focusing on React.js, AWS Lambda (serverless functions),{" "}
            <a
              href="https://jamstack.wtf/#meaning"
              target="_blank"
              rel="noreferrer"
            >
              JAMstack architecture
            </a>
            , web accessibility, GraphQL, Gatsby, and WordPress (including
            headless WordPress). I have also{" "}
            <a
              href="https://github.com/jenross/taste-buds-roulette"
              target="_blank"
              rel="noreferrer"
            >
              built projects
            </a>{" "}
            with Node, Express, SQL/MySQL, and NoSQL databases like MongoDB.
          </p>
          <p className="hero-content">
            In addition to designing and building websites for local businesses
            and political candidates, I've enjoyed using my education background
            to{" "}
            <a
              href="https://jenrosstutoring.com/"
              target="_blank"
              rel="noreferrer"
            >
              teach kids to code
            </a>{" "}
            and work with UCF Coding Boot Camp students as a part-time teaching
            assistant.
          </p>
          <p className="hero-content">
            I’m seeking a full-time role that will allow me to help a company
            achieve their goals. I'd love to{" "}
            <AnchorLink to="/#contact" title="chat more" stripHash /> about my
            experience in person or virtually.
          </p>
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
