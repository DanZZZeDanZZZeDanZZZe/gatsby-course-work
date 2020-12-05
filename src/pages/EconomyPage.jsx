import React from 'react'
import Section from '../components/header/Section'

import Layout from '../components/Layout'
import '../styles/pages/economyPage.css'

export default function EconomyPage({data}) {
  const {
    pageTitle,
    title1,
    text1,
    title2,
    text2,
    title3,
    text3,
    title4,
    text4,
  } = data.file.childDataYaml

  return (
    <Layout title={pageTitle} pageName="economy">
      <Section index="1" text={text1} title={title1}/>
      <Section index="2" text={text2} title={title2}/>
      <Section index="3" text={text3} title={title3}/>
      <Section index="4" text={text4} title={title4}/>
    </Layout>
  )
}

export const query = graphql`
  query EconomyPageQuery {
    file(base: {eq: "economyPage.yaml"}) {
      childDataYaml {
        pageTitle,
        title1,
        text1,
        title2,
        text2,
        title3,
        text3,
        title4,
        text4,
      }
    }
  }
`