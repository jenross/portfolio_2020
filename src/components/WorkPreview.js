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
    margin-bottom: 2em;
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
    margin-bottom: 1.7em;
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0px 2px 4px rgba(79, 79, 79, 0.25);
    }
  }

  .work-testimonial,
  .work-attribution {
    font-style: italic;
    color: var(--black);
    font-weight: bold;
  }
  .work-testimonial {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .work-attribution {
    margin-top: 0;
    padding-top: 0.5em;
    margin-bottom: 3.5em;
  }
`;

const WorkPreview = ({
  heading,
  description,
  link,
  img,
  alt,
  testimonial,
  attribution,
}) => {
  return (
    <WorkPreviewStyles>
      <a
        href={`${link}`}
        className="work-link"
        target="_blank"
        rel="noreferrer"
      >
        <WorkImg filename={`${img}`} alt={`${alt}`} />
      </a>
      <h3 className="work-header">{heading}</h3>
      <p className="work-description">{description}</p>

      {testimonial && (
        <p className="work-description work-testimonial">{testimonial}</p>
      )}
      {attribution && (
        <p className="work-description work-attribution">{attribution}</p>
      )}
    </WorkPreviewStyles>
  );
};

export default WorkPreview;
