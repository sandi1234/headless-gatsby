import React, { Component, Fragment } from "react"
import Img from "gatsby-image"

class Profile extends Component {
  render() {
    const { profile } = this.props
    return (
      <Fragment>
        <Img fixed={profile.profileImage.childImageSharp.fixed} />
        <h1>{profile.description}</h1>
        <div>{profile.content}</div>
      </Fragment>
    )
  }
}

export default Profile
