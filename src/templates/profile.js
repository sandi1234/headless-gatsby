import React, { Component, Fragment } from "react"
import Img from "gatsby-image"
import Reactmarkdown from "react-markdown"

class Profile extends Component {
  render() {
    const { profile } = this.props
    return (
      <Fragment>
        <Img fixed={profile.profileImage.childImageSharp.fixed} />
        <h1>{profile.description}</h1>
        <Reactmarkdown
          source={profile.content}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
          }
        />
      </Fragment>
    )
  }
}

export default Profile
