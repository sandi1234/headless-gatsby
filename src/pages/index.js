import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../templates/profile"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Profile profile={data.strapiProfileinformation} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiProgrammingskill.edges.map(doc => (
        <li key={doc.node.id}>
          {doc.node.icon} <Link to={`/${doc.node.id}`}>{doc.node.title}</Link>{" "}
          {doc.node.level}
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    allStrapiProgrammingskill {
      edges {
        node {
          id
          title
          level
          icon
        }
      }
    }

    strapiProfileinformation {
      id
      profileImage {
        id
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      description
      content
    }
  }
`
