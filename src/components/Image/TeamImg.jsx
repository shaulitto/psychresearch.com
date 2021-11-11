import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";

const TeamImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`{
  images: allFile {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
}
`}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.gatsbyImageData;
      return <GatsbyImage image={imageFluid} alt={alt} style={{borderRadius:'2rem', backgroundColor:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}/>;
    }}
  />
);

TeamImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default TeamImg;
