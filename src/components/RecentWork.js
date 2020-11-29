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
    /* margin-bottom: 1em; */
    margin-bottom: 3em;
  }

  .see-all-link {
    font-size: 1.075rem;
    margin-bottom: 3em;
    font-weight: semi-bold;
  }
`;

const RecentWork = () => {
  return (
    <RecentWorkStyles id="work">
      <h2 className="sub-header">Recent Work</h2>
      <p className="recent-work-description">
        It's been an honor and privilege to design and build these websites for
        local clients this year. Click on the images to view the live sites.{" "}
      </p>
      {/* <Link to="/portfolio" className="see-all-link">
        See all work &rarr;
      </Link> */}
      <WorkPreview
        heading="Envision Wellness"
        description="A custom Gatsby site for Lake County personal trainer Nikki Van Culin. In addition to the site, I created her Google forms (for intake, waivers, and weekly booking) and a weekly email newsletter with integrated branding."
        testimonial='"I would recommend Jen for all of your web hosting, design and social media needs. Jen listened to what I wanted and kept me in the loop through her entire creative process. She made great suggestions without being pushy and ultimately created exactly the website I wanted."'
        attribution="-Nikki Van Culin"
        link="https://trainwithnikki.net"
        img="EW_Portfolio.png"
        alt="Envision Wellness website desktop, tablet, and mobile landing page"
      />
      <WorkPreview
        heading="Crissy Stile"
        description="Custom website redesign for Crissy Stile, a 2020 candidate for Florida House District 31. The site currently shows a temporary placeholder landing page and will be updated again next year."
        testimonial='"I would recommend Jen for all of your web hosting, design and social media needs. Jen listened to what I wanted and kept me in the loop through her entire creative process. She made great suggestions without being pushy and ultimately created exactly the website I wanted."'
        attribution="-Crissy Stile"
        link="https://crissyforflorida.com"
        img="Crissy_Portfolio.png"
        alt="Crissy Stile's website landing page on a laptop"
      />
      <WorkPreview
        heading="Mollie Cunningham"
        description="A custom Gatsby site for Lake County School Board District 4 candidate Mollie Cunningham. The volunteer and contact form submissions are handled by Netlify Forms and integrated with Zapier to go straight to the candidate's email. I also set up and integrated Anedot for campaign donations and helped run Mrs. Cunningham's social media marketing campaigns."
        testimonial='"I would recommend Jen for all of your web hosting, design and social media needs. Jen listened to what I wanted and kept me in the loop through her entire creative process. She made great suggestions without being pushy and ultimately created exactly the website I wanted."'
        attribution="-Mollie Cunningham"
        link="https://molliecunningham.com"
        img="Mollie_Portfolio.png"
        alt="Mollie Cunningham's tablet and mobile landing page"
      />

      <WorkPreview
        heading="Bowen & Schroth, P.A."
        description="A custom WordPress theme for prominent Eustis law firm Bowen & Schroth, P.A. I started with the barebones Underscores starter theme and created a more modern and accessibility-focused site tailored to the firm's needs."
        testimonial='"Jennifer Ross surpassed our firm’s high expectations for our new website. She is thorough and creative. We highly recommend her."'
        attribution="-Derek Schroth"
        link="https://bowenschroth.com"
        img="Schroth_Portfolio.png"
        alt="Bowen & Schroth's website desktop and tablet landing page"
      />
    </RecentWorkStyles>
  );
};

export default RecentWork;
