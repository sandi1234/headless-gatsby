import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const UserTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.programmingskills.map(skill => (
        <li key={skill.id}>
          <h2>
            <Link to={`/Programskill_${skill.id}`}>{skill.title}</Link>
          </h2>
          <p>{skill.level}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      programmingskills {
        id
        icon
        title
        level
      }
    }
  }
`
