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
    font-size: 1rem;
    margin-bottom: 2em;
  }

  .work-img {
    border-radius: 4px;
    box-shadow: 0 0 10px #ddd;
  }
`;

const WorkPreview = ({ heading, description, link, img, alt }) => {
  return (
    <WorkPreviewStyles>
      <WorkImg filename={`${img}`} alt={`${alt}`} />
      <h3 className="work-header">{heading}</h3>
      <p className="work-description">{description}</p>
      <Link to={`/${link}`} className="work-link">
        Learn more &rarr;
      </Link>
    </WorkPreviewStyles>
  );
};

export default WorkPreview;
