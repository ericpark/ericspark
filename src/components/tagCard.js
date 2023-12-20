import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export default props => (
  <article
    className={`post-card-horizontal ${props.count % 3 === 0 &&
      `post-card-large`} ${props.postClass} ${
      props.node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
        margin: "1px 1px 1px 1px"
      }
    }
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
      </div>
    </Link>

    <div className="post-card-tag-content">
      <TagCardTags tags={props.tags} selectedTags={props.selectedTags} />
    </div>
  </article>
);

const TagCardTags = ({ tags, selectedTags }) => {
  if (!tags) {
    return <></>;
  }
  return (
    <div className="post-card-tags-container">
      <div className="post-card-tags">
        {tags.map((tag, index) => {
          const selected = selectedTags.includes(tag);
          const className = selected ? "tag-pill-selected" : "tag-pill";
          return (
            <div key={`${tag}${index}`} className="tag-pill-link">
              <div key={index} className={className}>
                {tag}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TagCardTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};
