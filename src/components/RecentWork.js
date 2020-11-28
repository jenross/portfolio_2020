import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import WorkPreview from "./WorkPreview";

const RecentWorkStyles = styled.section`
  .sub-header {
    line-height: 1.3em;
    margin-top: 1.9em;
    margin-bottom: 0.75em;
    font-size: 2rem;
  }

  .recent-work-description {
    font-size: 1.075rem;
    margin-bottom: 3em;
  }
`;

const RecentWork = () => {
  return (
    <RecentWorkStyles>
      <h2 className="sub-header">Recent Work</h2>
      <p className="recent-work-description">
        Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut
        ultricies magna. Lorem eleifend venenatis quis eu ex.
      </p>
      <WorkPreview
        heading="Envision Wellness"
        description="Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut ultricies magna. Lorem eleifend venenatis quis eu ex."
        link="envision-wellness"
        img="EW_Portfolio.png"
        alt="Envision Wellness website desktop, tablet, and mobile landing page"
      />
    </RecentWorkStyles>
  );
};

export default RecentWork;
