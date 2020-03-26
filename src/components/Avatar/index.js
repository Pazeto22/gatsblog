import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

// FIXED

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-avatar.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

// FLUID

// const Avatar = () => {
//     const { avatarImage } = useStaticQuery(
//         graphql`
//             query {
//                 avatarImage: file(relativePath: { eq: "profile-avatar.jpg" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 60, maxHeight:60){
//                             ...GatsbyImageSharpFluid
//                         }
//                     }
//                 }
//             }
//         `
//     )

//     return <Img fluid={avatarImage.childImageSharp.fluid} className="Shazam" style={{ width: "60px", borderRadius: "50%" }}/>
// }

export default Avatar
