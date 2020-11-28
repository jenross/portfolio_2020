import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import WorkPreview from "./WorkPreview";

const RecentWorkStyles = styled.section`
  .sub-header {
    line-height: 1.3em;
    margin-top: 1.9em;
    margin-bottom: 0.5em;
    font-size: 2rem;
  }

  .recent-work-description {
    font-size: 1.075rem;
    margin-bottom: 1em;
  }

  .see-all-link {
    font-size: 1.075rem;
    margin-bottom: 3em;
    font-weight: semi-bold;
  }
`;

const RecentWork = () => {
  return (
    <RecentWorkStyles>
      <h2 className="sub-header">Recent Work</h2>
      <p className="recent-work-description">
        I'm a creative introvert. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras consectetur vel ante vitae lacinia. Sed et ante a.{" "}
      </p>
      <Link to="/portfolio" className="see-all-link">
        See all work &rarr;
      </Link>
      <WorkPreview
        heading="Envision Wellness"
        description="Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut ultricies magna. Lorem eleifend venenatis quis eu ex."
        link="envision-wellness"
        img="EW_Portfolio.png"
        alt="Envision Wellness website desktop, tablet, and mobile landing page"
      />
      <WorkPreview
        heading="Crissy Stile"
        description="Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut ultricies magna. Lorem eleifend venenatis quis eu ex."
        link="crissy-stile"
        img="Crissy_Portfolio.png"
        alt="Crissy Stile's website landing page on a laptop"
      />
      <WorkPreview
        heading="Mollie Cunningham"
        description="Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut ultricies magna. Lorem eleifend venenatis quis eu ex."
        link="mollie-cunningham"
        img="Mollie_Portfolio.png"
        alt="Mollie Cunningham's tablet and mobile landing page"
      />

      <WorkPreview
        heading="Bowen & Schroth, P.A."
        description="Nulla commodo aliquet risus at pretium. Proin in sagittis metus, ut ultricies magna. Lorem eleifend venenatis quis eu ex."
        link="bowen-schroth"
        img="Schroth_Portfolio.png"
        alt="Bowen & Schroth's website desktop and tablet landing page"
      />
    </RecentWorkStyles>
  );
};

export default RecentWork;
