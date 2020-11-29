import React from 'react'
import { graphql } from "gatsby"
import '../styles/pages/culturePage.css'

import Layout from '../components/Layout'

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
      <section className="section section-1">
        <h3 className="title title-1">{title1}</h3>
        <p className="text text-1">{text1}</p>
      </section>
      <img className="image image-1" src={`./${image1}`} alt="image-1"/>

      <section className="section section-2">
        <h3 className="title title-2">{title2}</h3>
        <p className="text text-2">{text2}</p>
      </section>
      <img className="image image-2" src={`./${image2}`} alt="image-2"/>
      <section className="section section-3">
        <h3 className="title title-3">{title3}</h3>
        <p className="text text-3">{text3}</p>
      </section>
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