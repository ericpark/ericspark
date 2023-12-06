import React from "react"
import {Link} from "gatsby"

export default (props) => (
  <article
    className={`post-card ${props.count%3===0&& `post-card-large`} ${props.postClass} ${
      props.node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
        margin: '1px 1px 1px 1px',
        /*boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 8px 20px 0 rgba(0, 0, 0, 0.19)',*/
      }
    }
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content" >
        <h2 className="post-card-title">{props.node.frontmatter.title || props.node.fields.slug}</h2>
      </div>
      
    </Link>
  </article>
)
