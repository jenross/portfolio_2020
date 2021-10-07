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
    transition: all 0.2s ease;
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
           <span className="purple">Copywriter</span>,&nbsp;
        </span>
        <span className="inline-block">
          Full Stack <span className="purple">Developer</span>,&nbsp;
        </span>
        <span id="inline" className="inline-block">
          & UX/UI <span className="purple">Designer</span>.
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
        <p className="hero-content">I've always been a writer.</p> 

        <p className="hero-content">When I was a kid, I would pop the Encyclopedia Britannica CD-ROM into our computer's hard drive, pick a country, learn more about it, build a fort/writing cave/magical ship that could "transport" me there, and write story after story about my epic adventures.</p> 

        <p className="hero-content">As I grew older, I began writing more about music, pop culture, and politics. I double-majored in journalism and political science at the University of Central Florida and moved to Atlanta immediately after graduation to work at      <a
              href="https://www.pastemagazine.com/"
              target="_blank"
              rel="noreferrer"
            >Paste magazine</a>. At the time I thought, "This is it. I've made it. Dream job, check!"</p>

        <p className="hero-content">Unfortunately, I quickly realized that having a viable career as a journalist, especially a magazine feature writer, is about as elusive as getting a Paul Hollywood handshake on "The Great British Baking Show" . Sure, it can happen, but it'll take a magical combination of the perfect assignment, expertise, timing, and luck.</p> 

        <p className="hero-content">So, in 2010, I came back to the Orlando area and started teaching reading and language arts at an elementary school. That experience was transformative. I became more patient, organized, empathetic, and developed effective communication strategies for a variety of learning styles. And, I relived my writing fort days by writing with my students and doing everything I could to spark creativity and imagination.</p> 

        <p className="hero-content">After six years in the classroom, I decided to transition into tech. I learned how to write code and went back to my alma mater to complete a rigorous, six-month <a   href="https://bootcamp.ce.ucf.edu/coding/"
              target="_blank"
              rel="noreferrer"
            >"bootcamp" program</a> for web development. I learned the "full stack", which encompasses frontend and backend development. Along the way, I also discovered a passion for design and realized the web is just another canvas for great storytelling.</p> 

        <p className="hero-content">As people in my network began asking me to create websites, everything started clicking into place. I learned how to utilize market research and analytics to develop effective SEO and content strategies (journalism), write clear, compelling copy (journalism), manage complex projects efficiently (education), and empathize with users to create intuitive UX and accessible UI designs (education).</p> 

        <p className="hero-content">I founded <a   href="https://mercuryjane.com"
              target="_blank"
              rel="noreferrer"
            >Mercury Jane Media</a> in 2020 along with my husband, Patch, a graphic designer. We offer brand strategy and identity design, web design and development, and email marketing services to clients representing a variety of industries. I've loved combining all of my professional experience and skills to help these organizations thrive.</p> 

        <p className="hero-content">We've helped retailers triple their online sales, developed marketing strategies and collateral for political campaigns that have won elections, and generated thousands of dollars in additional revenue for small businesses through effective, consistent email marketing campaigns.</p> 

        <p className="hero-content">It all starts with putting a pen to paper, mind open, ready for an adventure.</p>
          {/* <p className="hero-content">
            I’m a full stack web developer and designer currently living in
            Mount Dora, FL.
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
            If you have a project you'd like to discuss,{" "}
            <a href="mailto:hey@jenniferross.tech" className="mail-link">
              don't hesitate to reach out
            </a>
            .
          </p> */}
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
