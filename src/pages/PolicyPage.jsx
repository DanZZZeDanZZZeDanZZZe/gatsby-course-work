import React from 'react'
import Section from '../components/header/Section'

import Layout from '../components/Layout'
import '../styles/pages/policyPage.css'

export default function PolicyPage({data}) {
  const {
    pageTitle,
    title,
    subTitle1,
    text1,
    subTitle2,
    text2,
    subTitle3,
    text3,
    image1,
    image2
  } = data.file.childDataYaml

  return (
    <Layout title={pageTitle} pageName="policy">
      <Section index="1" text={text1} title={subTitle1}/>
      <img className="image image-1" src={`./${image1}`} alt="image-1"/>
      <Section index="2" text={text2} title={subTitle2}/>
      <Section index="3" text={text3} title={subTitle3}/>
      <img className="image image-2" src={`./${image2}`} alt="image-2"/>

    </Layout>
  )
}

export const query = graphql`
  query PolicyPagePageQuery {
    file(base: {eq: "policyPage.yaml"}) {
      childDataYaml {
        pageTitle,
        title,
        subTitle1,
        text1,
        subTitle2,
        text2,
        subTitle3,
        text3,
        image1,
        image2
      }
    }
  }
`