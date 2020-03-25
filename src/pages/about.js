import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => ( // usando parenteses não precisa da palavra return
    <Layout>
        <SEO title="About" />
        <h1>About Page</h1>
    </Layout>
)

export default AboutPage