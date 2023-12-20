import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MdClear } from "react-icons/md";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TagCard from "../components/tagCard";

import "../utils/normalize.css";
import "../utils/css/screen.css";
const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const preselectedTags = parseURLTags(location);
  const posts = data.allMarkdownRemark.edges;
  const allTags = posts
    .reduce((tags, edge) => {
      const nodeTags = edge.node.frontmatter.tags;
      return tags.concat(nodeTags);
    }, [])
    .reduce((tag, curr) => (tag.includes(curr) ? tag : [...tag, curr]), []);

  const [selectedTags, setData] = React.useState(preselectedTags);

  const [query, setQuery] = React.useState("");
  const results = filterTags(allTags, selectedTags, query);

  let postCounter = 0;

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function onFocus(e) {
    setQuery(e.target.value);
  }

  function onBlur(e) {
    setQuery(null);
  }

  const toggleTagState = tag => {
    // Already included
    let updatedTags;
    if (selectedTags.includes(tag)) {
      updatedTags = selectedTags.filter(t => t !== tag);
    } else {
      updatedTags = selectedTags.concat([tag]);
    }
    setData(updatedTags);
  };

  return (
    <Layout location={"tags"} title={siteTitle}>
      <SEO title="Tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SearchBar
              query={query}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <div
              style={{
                color: "red",
                padding: "0 0 0 1em "
              }}
              onClick={() => {
                setData([]);
                setQuery("");
              }}
            >
              <MdClear />
            </div>
          </div>

          <ResultsList results={results} toggleTagState={toggleTagState} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <div className="post-card-tags-container">
              <div className="tags-selector">
                {allTags.map((tag, index) => {
                  const selected = selectedTags.includes(tag);
                  return (
                    //Link doesn't work without a path
                    <div
                      role="button"
                      onClick={() => toggleTagState(tag)}
                      className="noselect tag-pill-link"
                      tabIndex={0} //For tabbing
                      onKeyDown={e =>
                        e.key === "Enter" ? toggleTagState(tag) : ""
                      }
                    >
                      <div
                        key={index}
                        className={`tag-pill${selected ? "-selected" : ""}`}
                      >
                        {tag}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="post-feed">
          {posts
            .filter(post =>
              haveCommonItems(post.node.frontmatter.tags, selectedTags)
            )
            .map(({ node }) => {
              postCounter++;
              return (
                <TagCard
                  key={node.fields.slug}
                  count={postCounter}
                  node={node}
                  tags={node.frontmatter.tags}
                  postClass={`post`}
                  selectedTags={selectedTags}
                />
              );
            })}
        </div>
      </article>
    </Layout>
  );
};

function SearchBar({ query, onChange, onFocus, onBlur }) {
  return (
    <label
      style={{
        textAlign: "left",
        color: "#000"
      }}
    >
      Search:
      <input
        style={{ margin: "0 0 0 0.5em ", minWidth: "25em" }}
        placeholder={" framework, library, language, etc."}
        value={query}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      ></input>
    </label>
  );
}
function ResultsList({ results, toggleTagState }) {
  if (!results) {
    return <></>;
  }
  return (
    <div
      style={{ position: "relative", top: "0", right: "10.5em", zIndex: "70" }}
    >
      <table>
        <div style={{ position: "absolute", zIndex: "80" }}>
          <tbody>
            {results.map(tag => (
              <tr key={tag}>
                <td
                  style={{
                    zIndex: "98",
                    overflow: "clip",
                    wordWrap: "unset",
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "auto",
                    justifyContent: "stretch",
                    backgroundColor: "#fff"
                  }}
                  onMouseDown={() => {
                    toggleTagState(tag);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexGrow: "revert",
                      flexWrap: "nowrap",
                      justifyContent: "space-between",
                      minWidth: "26.5em"
                    }}
                  >{`${tag}`}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

function filterTags(allTags, selectedTags, query) {
  if (!query) {
    return [];
  }

  query = query.toLowerCase();
  return allTags
    .filter(tag => !selectedTags.includes(tag))
    .filter(tag =>
      tag.split(" ").some(word => word.toLowerCase().startsWith(query))
    );
}

function parseURLTags(location) {
  if (!location.search) {
    return [];
  }
  const urlString = location.search.substring(1);
  if (urlString.includes("+")) {
    return urlString.split("+");
  }
  return [urlString];
}

function haveCommonItems(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonItems = arr2.filter(item => set1.has(item));
  return commonItems.length > 0;
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
            tags
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
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => {
      return <TagsPage location={props.location} data={data} {...props} />;
    }}
  />
);
