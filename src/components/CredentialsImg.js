import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      return (
        <Img
          className="credentials-img gatsby-image-wrapper"
          alt={alt}
          fixed={image.node.childImageSharp.fixed}
        />
      );
    }}
  />
);

export default Image;
