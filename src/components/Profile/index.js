// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'

// const Profile = () => (
//     <StaticQuery
//         query={graphql`
//         query MySiteMetadata {
//             site {
//                 siteMetadata {
//                     title
//                     author
//                     description
//                     position
//                 }
//             }
//         }
//         `}
//         render={({ site: { siteMetadata: { title, author, position, description } } }) => (
//             <div className="Profile-wrapper">
//                 <h1>{title}</h1>
//                 <h2>{author}</h2>
//                 <h3>{position}</h3>
//                 <p>
//                     {description}
//                 </p>
//             </div>
//         )}
//     />
// );

// export default Profile

//useStaticQuery

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Profile = () => {
    //Primeiro de tudo pegar os dados
    const {
        site: {
            siteMetadata: { title, author, position, description },
        },
    } = useStaticQuery(graphql`
    query MySiteMetadata {
        site {
            siteMetadata {
                title
                author
                description
                position
            }
        }
    }
    `)
    return (
        <div className="Profile-wrapper">
            <h1>{title}</h1>
            <h2>{author}</h2>
            <h3>{position}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Profile