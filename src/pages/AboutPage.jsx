import React from 'react'
import { graphql } from "gatsby"

import '../styles/pages/aboutPage.css'
import Layout from '../components/Layout'

export default function HomePage({data}) {
  const {
    header,
    mainTitle,
    topicTitle,
    learner,
    teacher,
    footer,
  } = data.file.childDataYaml

  return (
    <Layout title="Об авторе" pageName="about">
      <div className="about-text about-header">{header}</div>
      <div className="about-text about-main-title">{mainTitle}</div>
      <div className="about-text about-topic-title">{topicTitle}</div>
      <div className="about-text about-learner">{learner}</div>
      <div className="about-text about-teacher">{teacher}</div>
      <div className="about-text about-footer">{footer}</div>
    </Layout>
  )
}

export const query = graphql`
  query AboutPageQuery {
    file(base: {eq: "aboutPage.yaml"}) {
      childDataYaml {
        header,
        mainTitle,
        topicTitle,
        learner,
        teacher,
        footer,
      }
    }
  }
`