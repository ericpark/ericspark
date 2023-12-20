import React from "react";
import { StaticQuery, graphql } from "gatsby";
//import Chip from "@mui/material/Chip";
function TagSelector() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <StaticQuery
      query={tagSelectorQuery}
      render={data => {
        return (
          <div className="post-content-body" style={{ padding: "15vw 0" }}>
            <div className="row">
              <div className="col-12" style={{ textAlign: "center" }}>
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    margin: "0vw 10vw",
                    width: "80%"
                  }}
                >
                  <Chip
                    color="primary"
                    onDelete={() => {}}
                    onClick={handleClick}
                  />

                  <Chip label="success" color="success" onClick={handleClick} />
                  <Chip
                    label="primary"
                    color="primary"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="success"
                    color="success"
                    variant="outlined"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

const tagSelectorQuery = graphql`
  query TagSelectorQuery {
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

export default TagSelector;
