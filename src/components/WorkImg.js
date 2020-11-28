import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Image = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

     
      return <Img className="work-img" alt={alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default Image;