import React from "react";
import { graphql, StaticQuery } from "gatsby";
import firebase from "gatsby-plugin-firebase";
import { doc, getDoc } from "firebase/firestore";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BounceLoader from "react-spinners/BounceLoader";

import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import * as DiReactIcons from "react-icons/di";
import * as MdReactIcons from "react-icons/md";
import * as SiReactIcons from "react-icons/si";
import * as RiReactIcons from "react-icons/ri";
import * as CiReactIcons from "react-icons/ci";
import * as TbReactIcons from "react-icons/tb";
import * as GrReactIcons from "react-icons/gr";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const TechPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  // Pull Data from Firebase and then update the section
  const [firebaseData, setData] = React.useState(null);
  React.useEffect(() => {
    if (!firebaseData) {
      getSkills().then(skills => {
        setData(skills);
      });
    }
  }, [firebaseData]);

  return (
    <Layout location={"tech"} title={siteTitle}>
      <SEO title="Tech" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template">
        {firebaseData ? (
          firebaseData["order"].map(order => (
            <TechSkillBlock
              key={order}
              sectionTitle={order}
              skills={firebaseData[order]}
            />
          ))
        ) : (
          <div
            className="col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <BounceLoader />
          </div>
        )}
      </article>
    </Layout>
  );
};

function TechSkillBlock({ sectionTitle, skills }) {
  return (
    <div>
      <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
        {sectionTitle}
      </h2>
      {skills.map((row, index) => (
        <TechSkillRow
          key={`${index}_${row.name}`}
          iconPath={row["iconPath"]}
          name={row["name"]}
          stars={row["stars"]}
        ></TechSkillRow>
      ))}
    </div>
  );
}

function TechSkillRow({ iconPath, name, stars }) {
  const rowStyle = {
    fontSize: "2.5rem",
    textAlign: "left",
    margin: "2 2 2 2",
    padding: "2 2 2 2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  };

  return (
    <div style={rowStyle}>
      <span>
        <ReactIconCombined iconPath={iconPath} /> {name}
      </span>
      <Stars rating={stars} />
    </div>
  );
}

function ReactIconCombined({ iconPath }) {
  let IconComponent = <IoCodeSlashOutline />;

  switch (String(iconPath).substring(0, 2)) {
    case "Di":
      IconComponent = DiReactIcons[iconPath];
      break;
    case "Md":
      IconComponent = MdReactIcons[iconPath];
      break;
    case "Si":
      IconComponent = SiReactIcons[iconPath];
      break;
    case "Ri":
      IconComponent = RiReactIcons[iconPath];
      break;
    case "Ci":
      IconComponent = CiReactIcons[iconPath];
      break;
    case "Tb":
      IconComponent = TbReactIcons[iconPath];
      break;
    case "Gr":
      IconComponent = GrReactIcons[iconPath];
      break;
    default:
      break;
  }

  return <IconComponent />;
}

function Stars({ rating }) {
  return (
    <div style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      {[...Array(rating)].map((e, i) => (
        <MdOutlineStar key={`rating-filled-${i}`} />
      ))}
      {[...Array(5 - rating)].map((e, i) => (
        <MdOutlineStarBorder key={`rating-unfilled-${i}`} />
      ))}
    </div>
  );
}

async function getSkills() {
  const skillsDoc = doc(firebase, "pages", "tech");

  const skillsSnapshot = await getDoc(skillsDoc);

  if (skillsSnapshot.exists()) {
    console.log(skillsSnapshot.data());
    return skillsSnapshot.data();
  } else {
    console.log("No such document!");
  }

  return null;
}

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
      <TechPage location={props.location} data={data} {...props} />
    )}
  />
);
