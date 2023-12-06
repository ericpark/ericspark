import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import Bio from "../components/bio"
import Img from "gatsby-image"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
        <figure className="kg-header kg-header-image">
          <Img fluid={data.smallPic.childImageSharp.fluid} className="kg-header-image" />
        </figure>
        {/*<figure className="kg-header kg-header-image">
          <Img fluid={data.smallPic.childImageSharp.fluid} className="kg-header-image" />
        </figure>
        <figure className="kg-header kg-header-image">
          <Img fluid={data.smallPic.childImageSharp.fluid} className="kg-header-image" />
        </figure>*/}

      {data.site.siteMetadata.description &&(

        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}

          </h2>
          <p className="page-head-description">ex-CTO @ <a href="https://www.orbitinteractive.com/">orbit interactive</a></p>
            <Img fluid={data.logo.childImageSharp.fluid} className="kg-logo-image" />
        </header>

      )}
      <Bio /> 
      <div className="post-feed" >
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    smallPic: file(relativePath: { eq: "headerbg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smallPicYellow: file(relativePath: { eq: "headerbg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360, duotone: {highlight: "#ffc04f", shadow: "#16f632", opacity: 50}) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
