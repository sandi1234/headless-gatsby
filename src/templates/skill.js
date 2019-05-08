import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const SkillTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiProgrammingskill.icon}</h1>
    <h1>{data.strapiProgrammingskill.title}</h1>
    <h1>{data.strapiProgrammingskill.level}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiProgrammingskill.author.id}`}>
        {data.strapiProgrammingskill.author.username}
      </Link>
    </p>
  </Layout>
)

export default SkillTemplate

export const query = graphql`
  query SkillTemplate($id: String!) {
    strapiProgrammingskill(id: { eq: $id }) {
      icon
      title
      level
      author {
        id
        username
      }
    }
  }
`
