import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// import { gsap, TweenMax, Power3 } from "gsap";
// import { TweenMax, Power3, Linear } from "gsap/all";

// function scaleUp() {
//   TweenMax.to(".work-img", 1, {
//     scale: 1.25,
//     ease: Linear.ease,
//   });
// }

// function scaleDown() {
//   TweenMax.to(".work-img", 1, {
//     scale: 0.75,
//   });
// }

const Image = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  let workItem = useRef(null);

  // useEffect(() => {
  //   TweenMax.to(".work-img", 0.8, {
  //     opacity: 1,
  //     y: -20,
  //     ease: Power3.easeOut,
  //   });
  // }, []);

  // function scaleUp() {
  //   TweenMax.to(workItem, 1, {
  //     scale: 1.25,
  //     ease: Linear.ease,
  //   });
  // }

  // function scaleDown() {
  //   TweenMax.to(workItem, 1, {
  //     scale: 0.75,
  //   });
  // }

  const image = data.images.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  return (
    <Img
      // ref={(el) => {
      //   workItem = el;
      // }}
      // onMouseEnter={scaleUp}
      // onMouseLeave={scaleDown}
      className="work-img"
      alt={alt}
      fluid={image.node.childImageSharp.fluid}
    />
  );
};

export default Image;
