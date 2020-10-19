import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Slider from '../components/Slider'
import '../styles/pages/homePage.css'

export default function HomePage({data}) {
  const {
    topArticleText,
    bottomArticleText,
    imagesForSlider
  } = data.file.childDataYaml
  console.log('HomePage -> imagesForSlider', imagesForSlider)
  return (
    <Layout title="Главная">
      <div className="slider-holder">
      <Slider/>
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
        imagesForSlider
      }
    }
  }
`