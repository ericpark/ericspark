/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Headline from "./headline";

function Bio() {
  let allRoles = `
  entrepreneur. dry cleaner. climber. dog trainer. campaign staff member. implementation consultant. system architect. flutter developer. 
  solutions consultant. front end developer. caterer. iOS developer. IT consultant. head volunteer.
  fried chicken restaurant server. G51 venture scholar. md circuit court intern.  bbq restaurant server. 
  published medical journal author. smoothie maker. backend engineer. neuroscience lab volunteer.  connect 4 pro. food service manager.  
  alumni call center representative. pizza tosser/almost-dropper. volunteer hospital ambassador. 
  how i met your mother enthusiast. ex-bostonian. automator. cto.`;

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        return (
          <div className="post-content-body" style={{ padding: "15vw 0" }}>
            <div className="row">
              <div className="col-12" style={{ textAlign: "center" }}>
                <div
                  style={{
                    textAlign: "center",
                    margin: "2 2 2 2",
                    padding: "1rem 2rem 0rem 2rem"
                  }}
                >
                  <div className="post-content-body">
                    Eric the
                    <div
                      style={{
                        padding: "1rem 0",
                        textAlign: "center",
                        margin: "0vw 10vw"
                      }}
                    >
                      <Headline
                        roles={allRoles
                          .split(".")
                          .map(role => ({ text: role.trim(), workName: "" }))}
                      />
                      <p>{allRoles}</p>
                      <p>let's add some more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
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

export default Bio;
