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
    max-width: 1140px;
  }

  /* .see-all-link {
    font-size: 1.075rem;
    margin-bottom: 3em;
    font-weight: semi-bold;
  } */

  @media (min-width: 992px) {
    .recent-work-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .work-section {
      flex-basis: 45%;
    }
  }
`;

const RecentWork = () => {
  return (
    <RecentWorkStyles id="work">
      <h2 className="sub-header">Recent Work</h2>
      <p className="recent-work-description">
        Take a look at the websites I've recently designed and built for small
        businesses and local political candidates. Click on the images to view
        the live sites.{" "}
      </p>
      {/* <Link to="/portfolio" className="see-all-link">
        See all work &rarr;
      </Link> */}
      <div className="recent-work-container">
        <WorkPreview
          id="last-attribution"
          heading="Bowen & Schroth, P.A."
          description="A custom WordPress theme for prominent Eustis law firm Bowen & Schroth, P.A. I started with the barebones Underscores starter theme and created a more modern and accessibility-focused site for their 2020 redesign."
          testimonial='"Jennifer Ross surpassed our firm’s high expectations for our new website. She is thorough and creative. We highly recommend her."'
          attribution="-Derek Schroth"
          link="https://bowenschroth.com"
          img="Schroth_Portfolio_Rect.png"
          alt="Bowen & Schroth's website desktop and tablet landing page"
        />

        <WorkPreview
          heading="Crissy Stile"
          description="Custom website redesign for Crissy Stile, a 2020 candidate for Florida House District 31. The site currently displays a placeholder landing page and will be updated by fall of 2021."
          testimonial='"I would recommend Jen for all of your web hosting, design and social media needs. Jen listened to what I wanted and kept me in the loop through her entire creative process. She made great suggestions without being pushy and ultimately created exactly the website I wanted."'
          attribution="-Crissy Stile"
          link="https://crissyforflorida.com"
          img="Crissy_Portfolio_Rect.png"
          alt="Crissy Stile's website landing page on a laptop"
        />
        <WorkPreview
          heading="Mollie Cunningham"
          description="A custom Gatsby site for Lake County School Board District 4 candidate Mollie Cunningham. I integrated Anedot for campaign donations and also assisted Mrs. Cunningham with her social media marketing campaigns."
          testimonial='"It is with great confidence and pleasure that I write this recommendation for Mercury Jane Media. I met Jennifer several years ago when she began her career as an educator. I watched her do an amazing job educating young people and recently I needed media help with my political campaign and she literally put my campaign on the right track.  She and Patrick are an awesome team! Between the two of them, they took care of everything. This included my website, social media, logo, business cards and it was done quickly, efficiently and professionally. I will continue to use Mercury Jane Media in the future for all my media needs. I highly recommend them without reservation."'
          attribution="-Mollie Cunningham"
          link="https://molliecunningham.com"
          img="Mollie_Portfolio_Rect.png"
          alt="Mollie Cunningham's tablet and mobile landing page"
        />

        <WorkPreview
          heading="Envision Wellness"
          description="A custom Gatsby site for Lake County personal trainer Nikki Van Culin. In addition to the site, I created her Google forms (for intake, waivers, and weekly booking) and a weekly email newsletter with integrated branding."
          testimonial='"Jen Ross went above and beyond my expectations! She built my small business a website that is easy to use and helps my current and potential customers get a good feel for me and the services I offer. She was very professional, with great attention to detail. I highly recommend her, especially if you expect fast and personalized customer service!"'
          attribution="-Nikki Van Culin"
          link="https://trainwithnikki.net"
          img="EW_Portfolio.png"
          alt="Envision Wellness website desktop, tablet, and mobile landing page"
        />
      </div>
    </RecentWorkStyles>
  );
};

export default RecentWork;
