import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={"about"} title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Eric the _______
          </h2>
          <div
            style={{
              textAlign: "center",
              margin: "2 2 2 2",
              padding: "2 2 2 2"
            }}
          >
            <p>
              entrepreneur. dry cleaner. climber. dog trainer. campaign staff
              member. implementation consultant. system architect. flutter
              developer. solutions consultant. front end developer. caterer. iOS
              developer. IT consultant. head volunteer. fried chicken restaurant
              server. G51 venture scholar. md circuit court intern. bbq
              restaurant server. published medical journal author. smoothie
              maker. backend engineer. neurolab volunteer. food service manager.
              alumni call center representative. pizza tosser/almost-dropper.
              volunteer hospital ambassador. how i met your mother enthusiast.
              ex-bostonian. traveler. cto.
            </p>
            <p>let's add some more.</p>
          </div>
          {/*} <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">it me</h3>
          <p>
           Eric is a system architect at Pega with the CSA and CSSA certifications. 
          </p>
          <p>
            Prior to Pega, Eric has worked as developer 
          </p>
          <p>
            
          </p>
          */}
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
