import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="darkred"
      category="AEHO"
      date="27 de Março de 2020"
      title="Shazam hoje, Shazam sempre"
      description="Faça um Shazam na sua vida você também"
    />
  </Layout>
)

export default IndexPage
