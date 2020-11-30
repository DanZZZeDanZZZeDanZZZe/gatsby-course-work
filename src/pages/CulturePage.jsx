import React from 'react'
import { graphql } from "gatsby"
import '../styles/pages/culturePage.css'

import Layout from '../components/Layout'
import Section from '../components/header/Section'

export default function CulturePage({data}) {
const {
  pageTitle,
  title1,
  title2,
  title3,
  text1,
  text2,
  text3,
  image1,
  image2,
  image3,
} = data.file.childDataYaml

  return (
    <Layout title={pageTitle} pageName="culture">
      <Section index="1" text={text1} title={title1}/>
      <img className="image image-1" src={`./${image1}`} alt="image-1"/>
      <Section index="2" text={text2} title={title2}/>
      <img className="image image-2" src={`./${image2}`} alt="image-2"/>
      <Section index="3" text={text3} title={title3}/>
      <img className="image image-3" src={`./${image3}`} alt="image-3"/>
    </Layout>
  )
}

export const query = graphql`
  query CulturePageQuery {
    file(base: {eq: "culturePage.yaml"}) {
      childDataYaml {
        title1,
        text1,
        image1,
        title2,
        text2,
        image2,
        title3,
        text3,
        image3,
        pageTitle
      }
    }
  }
`