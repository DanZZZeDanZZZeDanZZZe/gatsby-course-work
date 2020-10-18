import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import '../styles/pages/homePage.css'

export default function HomePage({data}) {
  const {
    topArticleText,
    bottomArticleText
  } = data.file.childDataYaml

  return (
    <Layout title="Главная">
      <div className="slider-holder">
        <h1>Всем привет</h1>
      </div>
      <article className="top-article">
        {topArticleText}
      </article>

      <article className="bottom-article">
        {bottomArticleText}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    file(base: {eq: "homePage.yaml"}) {
      childDataYaml {
        topArticleText
        bottomArticleText
      }
    }
  }
`