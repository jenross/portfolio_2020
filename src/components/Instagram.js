import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import useInstagram from "../hooks/use-instagram";

const InstagramStyles = styled.section`
    
    .post-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 1rem -0.5rem;
        /* padding: 0.5rem; */
    }
   

  .sub-header {
    line-height: 1.3em;
    margin-top: 1.9em;
    margin-bottom: 0.5em;
    font-size: 2rem;
  }

  .each-post {
       box-shadow: 0;
        display: block;
        margin: 0.5rem;
        max-width: calc(33% - 1rem);
        width: 120px;
        transition: 200ms box-shadow linear;

        &:focus,
        &:hover {
        box-shadow: 0 2px 14px #22222244;
        z-index: 10;
        }
  }

  .insta-paragraph {
    font-size: 1.075rem;
    margin-bottom: 1.5em;
  }

  .each-image {
      width: 100%;
      border-radius: 4px; 
        * {
            margin-top: 0;
        }
  }

    /* .see-more-link {
        font-size: 1.075rem;
    } */

      .see-more-link {
    font-size: 0.9rem;
    text-transform: uppercase; 
    text-decoration: none; 
    color: var(--black);
    font-weight: semi-bold; 
  }

  .see-more-link:hover {
    color: var(--purple);
    border-bottom: 1px solid var(--purple);
  }

`;

const Instagram = () => {

  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <InstagramStyles>
      <h2 className="sub-header">Insta Insights</h2>
      <p className="insta-paragraph">
        I'm a creative introvert. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras consectetur vel ante vitae lacinia. Sed et ante a.{" "}
      </p>
      <div className="post-container">
       {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}/`}
            className="each-post"
        >
            <Img
              fluid={photo.fluid}
              alt={photo.caption}
              className="each-image"
            />
          </a>
        ))}
        </div>
          <a className="see-more-link" href={`https://instagram.com/${username}`}>
            See more on Instagram &rarr;
        </a>
    </InstagramStyles>
  );
};

export default Instagram;
