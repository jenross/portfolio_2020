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
      {/* <p className="recent-work-description">
        Take a look at the websites I've designed and built for small
        businesses and local political candidates.{" "}
      </p> */}
      {/* <Link to="/portfolio" className="see-all-link">
        See all work &rarr;
      </Link> */}
      <div className="recent-work-container">
      <WorkPreview
          heading="Under the Cherry Blossoms"
          description="E-commerce store setup on Shopify, theme customization, copywriting, and email marketing."
          testimonial='"Jennifer is exactly who I needed to get the job done! Having worked on my own websites in years past I knew I could create my new site, but man I did not want to. Jennifer allowed me to jointly work on my new Shopify site with her. She is so organized, professional, knowledgeable and has excellent communication while also being down to earth, fun to work with and so timely with projects. She even speaks my language and can be majorly techy without losing me in conversation. Not only did we organize 1000s of items into easy to follow categories bringing my small gift shop to a whole new level she is now helping me with my email marketing, teaching me about apps and different software options to help streamline my business and all at a very reasonable price. I highly recommend Jennifer and have already referred multiple people to her for their website needs.  A++++"'
          attribution="-Lynn Wisniewski"
          link="https://underthecherryblossoms.com"
          img="ucb_mockup_cropped.png"
          alt="Under the Cherry Blossoms website"
        />
        <WorkPreview
          id="last-attribution"
          heading="Barrel of Books and Games"
          description="E-commerce website migration to Shopify, including end-to-end store setup, copywriting, and theme customization."
          testimonial='"Transitioning my website to Shopify with Jen couldn’t have been more flawless. She was available every step of the way and even redesigned my logo and created all new marketing materials. There are so many options available within Shopify to make the customer’s shopping experience easy and convenient and Jen is an expert with all of them. She made great suggestions while still doing exactly what I wanted."'
          attribution="-Crissy Stile"
          link="https://barrelofbooksandgames.com"
          img="bbg_portfolio_mockup.png"
          alt="Barrel of Books and Games website"
        />

<WorkPreview
 
          heading="Crissy Stile for Mount Dora Mayor"
          description="Squarespace website design & build, email marketing with Mailchimp, copywriting, and PayPal donation integration."
          testimonial='"I would recommend Jen for all of your web hosting, design, and social media needs. Jen listened to what I wanted and kept me in the loop through her entire creative process. She made great suggestions without being pushy and ultimately created exactly the website I wanted."'
          attribution="-Crissy Stile"
          link="https://crissyformountdora.com"
          img="stile_mayor_mockup_cropped.png"
          alt="Crissy Stile for Mount Dora Mayor website"
        />

        {/* <WorkPreview
          heading="Crissy Stile"
          description="Custom website redesign for Crissy Stile, a 2020 candidate for Florida House District 31. The site currently displays a placeholder landing page and will be updated by fall of 2021."
          testimonial='"I would recommend Jen for all of your web hosting, design and social media needs. Jen listened to what I wanted and kept me in the loop through her entire creative process. She made great suggestions without being pushy and ultimately created exactly the website I wanted."'
          attribution="-Crissy Stile"
          link="https://crissyforflorida.com"
          img="Crissy_Portfolio_Rect.png"
          alt="Crissy Stile's website landing page on a laptop"
        /> */}
        <WorkPreview
          heading="Mollie Cunningham"
          description="A custom Gatsby site for Lake County School Board District 4 candidate Mollie Cunningham. I integrated Anedot for campaign donations, handled copywriting and web design/development, and also assisted Mrs. Cunningham with her social media marketing campaigns."
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
      </div>
    </RecentWorkStyles>
  );
};

export default RecentWork;
