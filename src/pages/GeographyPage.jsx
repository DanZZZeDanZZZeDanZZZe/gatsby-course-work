import React from 'react'
import Section from '../components/header/Section'

import Layout from '../components/Layout'
import '../styles/pages/geographyPage.css'

export default function GeographyPage({data}) {
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
    image2,
    image3,
    image4,
  } = data.file.childDataYaml

  return (
    <Layout title={pageTitle} pageName="geography">
      <h2 className="main-title">{title}</h2>
      <div className="gallery">
        <img className="image" src={`./${image1}`}/>
        <img className="image" src={`./${image2}`}/>
        <img className="image" src={`./${image3}`}/>
        <img className="image" src={`./${image4}`}/>
      </div>
      <Section index="1" text={text1} title={subTitle1}/>
      <Section index="2" text={text2} title={subTitle2}/>
      <Section index="3" text={text3} title={subTitle3}/>
    </Layout>
  )
}

export const query = graphql`
  query GeographyPageQuery {
    file(base: {eq: "geographyPage.yaml"}) {
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
        image2,
        image3,
        image4,
      }
    }
  }
`