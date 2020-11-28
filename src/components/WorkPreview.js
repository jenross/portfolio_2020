import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import WorkImg from "./WorkImg";

const WorkPreviewStyles = styled.div`
  .work-header {
    line-height: 1.3em;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1.7rem;
    font-weight: semi-bold;
  }

  .work-description {
    font-size: 1rem;
  }

  .work-link {
    font-size: 0.9rem;
    text-transform: uppercase; 
    text-decoration: none; 
    color: var(--black);
    font-weight: semi-bold; 
  }

  .work-link:hover {
    color: var(--purple);
    border-bottom: 1px solid var(--purple);
  }

  .work-img {
    border-radius: 4px;
    box-shadow: 0 0 10px #ddd;
    margin-top: 2.5em;
  }
`;

const WorkPreview = ({ heading, description, link, img, alt }) => {
  return (
    <WorkPreviewStyles>
      <WorkImg filename={`${img}`} alt={`${alt}`} />
      <h3 className="work-header">{heading}</h3>
      <p className="work-description">{description}</p>
      <a href={`${link}`} className="work-link" target="_blank" rel="noreferrer">
        View live &rarr;
      </a>
    </WorkPreviewStyles>
  );
};

export default WorkPreview;
