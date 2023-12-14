/**
 * Headline component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Rotator from "./rotator";

function Headline({ roles }) {
  return (
    <StaticQuery
      query={headlineQuery}
      render={data => {
        return <Rotator items={shuffle(roles)} />;
      }}
    />
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

const headlineQuery = graphql`
  query headlineQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Headline;
