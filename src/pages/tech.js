import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  DiJsBadge,
  DiPython,
  DiDart,
  DiSwift,
  DiGoogleDrive,
  DiGoogleCloudPlatform,
  DiGithubBadge,
  DiVisualstudio,
  DiTerminal,
  DiDjango,
  DiReact,
  DiDocker,
  DiGoogleAnalytics
} from "react-icons/di";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdDashboard,
  MdCloudQueue,
  MdOutlineAutoGraph
} from "react-icons/md";
import {
  SiTableau,
  SiAmazonaws,
  SiDbt,
  SiAwslambda,
  SiTypescript,
  SiFlask,
  SiFirebase,
  SiFlutter,
  SiSwift,
  SiGoogledatastudio,
  SiGooglebigquery,
  SiGoogleappsscript,
  SiPostgresql,
  SiAsana,
  SiFigma,
  SiGithubactions,
  SiSelenium,
  Si1Password
} from "react-icons/si";
import { RiRobot2Line, RiFileExcel2Line, RiFlowChart } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";

import {
  TbApi,
  TbSql,
  TbBrandReactNative,
  TbBrandGatsby,
  TbDatabaseCog
} from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const languages = [
  { icon: <DiPython />, name: "Python", stars: 5 },
  { icon: <TbSql />, name: "SQL", stars: 4 },
  { icon: <DiJsBadge />, name: "Javascript", stars: 4 },
  { icon: <SiTypescript />, name: "Typescript", stars: 3 },
  { icon: <DiDart />, name: "Dart", stars: 4 },
  { icon: <DiSwift />, name: "Swift", stars: 2 }
];

const dataAndAnalytics = [
  { icon: <MdDashboard />, name: "Adverity (ETL & Dashboard)", stars: 5 },
  { icon: <SiGoogledatastudio />, name: "Google Data Studio (GDS)", stars: 4 },
  { icon: <SiTableau />, name: "Tableau", stars: 3 },
  { icon: <SiGooglebigquery />, name: "Google BigQuery (GBQ)", stars: 5 },
  { icon: <DiGoogleAnalytics />, name: "Google Analytics (GA4)", stars: 3 },
  { icon: <SiDbt />, name: "DBT", stars: 1 }
];

const frameworks = [
  { icon: <DiDjango />, name: "Django", stars: 3 },
  { icon: <SiFlask />, name: "Flask", stars: 3 },
  { icon: <DiReact />, name: "ReactJS", stars: 2 },
  { icon: <TbBrandGatsby />, name: "GatsbyJS", stars: 2 }
];

const cloud = [
  {
    icon: <DiGoogleCloudPlatform />,
    name: "Google Cloud Platform (GCP)",
    stars: 4
  },
  { icon: <SiAmazonaws />, name: "Amazon Web Services (AWS)", stars: 4 },
  { icon: <DiDocker />, name: "Docker", stars: 3 },
  { icon: <SiAwslambda />, name: "AWS Lambda", stars: 4 },
  { icon: <MdCloudQueue />, name: "GCP Cloud Functions", stars: 4 },
  { icon: <SiFirebase />, name: "Firebase", stars: 5 },
  { icon: <SiGithubactions />, name: "Github Actions", stars: 3 },
  { icon: <SiSelenium />, name: "Selenium", stars: 1 }
];

const mobile = [
  { icon: <SiFlutter />, name: "Flutter (Hybrid)", stars: 4 },
  { icon: <SiSwift />, name: "Swift (iOS Native)", stars: 3 },
  { icon: <TbBrandReactNative />, name: "React Native (Hybrid)", stars: 3 }
];

const tools = [
  { icon: <DiGithubBadge />, name: "Github/Git", stars: 4 },
  { icon: <DiVisualstudio />, name: "VSCode", stars: 4 },
  { icon: <RiFileExcel2Line />, name: "Excel", stars: 5 },
  { icon: <DiGoogleDrive />, name: "Google Drive", stars: 5 },
  { icon: <SiGoogleappsscript />, name: "Google Apps Script", stars: 5 },
  { icon: <DiTerminal />, name: "Terminal", stars: 4 },
  { icon: <RiRobot2Line />, name: "Robotic Process Automation", stars: 4 },
  { icon: <CiBoxList />, name: "Monday.com", stars: 4 },
  { icon: <SiAsana />, name: "Asana", stars: 4 },
  { icon: <SiFigma />, name: "Figma", stars: 3 },
  { icon: <Si1Password />, name: "1Password", stars: 4 }
];

const other = [
  { icon: <TbApi />, name: "REST API", stars: 5 },
  { icon: <GrGraphQl />, name: "GraphQL", stars: 3 },
  { icon: <SiPostgresql />, name: "PostgreSQL", stars: 4 },
  { icon: <RiFlowChart />, name: "Business Process Management", stars: 4 },
  { icon: <MdOutlineAutoGraph />, name: "Data Analysis", stars: 4 },
  { icon: <TbDatabaseCog />, name: "Data Processing", stars: 4 }
];

const TechPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={"tech"} title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Languages
        </h2>
        {languages.map(row => (
          <TechRow icon={row.icon} name={row.name} stars={row.stars}></TechRow>
        ))}

        <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Frameworks
        </h2>
        {frameworks.map(row => (
          <TechRow icon={row.icon} name={row.name} stars={row.stars}></TechRow>
        ))}

        <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Data & Analytics
        </h2>
        {dataAndAnalytics.map(row => (
          <TechRow icon={row.icon} name={row.name} stars={row.stars}></TechRow>
        ))}

        <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Mobile Development
        </h2>
        {mobile.map(row => (
          <TechRow icon={row.icon} name={row.name} stars={row.stars}></TechRow>
        ))}

        <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Cloud
        </h2>
        {cloud.map(row => (
          <TechRow icon={row.icon} name={row.name} stars={row.stars}></TechRow>
        ))}

        <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Tools
        </h2>
        {tools.map(row => (
          <TechRow icon={row.icon} name={row.name} stars={row.stars}></TechRow>
        ))}

        <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Other
        </h2>
        {other.map(row => (
          <TechRow icon={row.icon} name={row.name} stars={row.stars}></TechRow>
        ))}
      </article>
    </Layout>
  );
};

function TechRow({ icon, name, stars }) {
  return (
    <div
      style={{
        fontSize: "2.5rem",
        textAlign: "left",
        margin: "2 2 2 2",
        padding: "2 2 2 2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <span>
        {icon} {name}{" "}
      </span>
      <div style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {[...Array(stars)].map((e, i) => (
          <MdOutlineStar />
        ))}
        {[...Array(5 - stars)].map((e, i) => (
          <MdOutlineStarBorder />
        ))}
      </div>
    </div>
  );
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
