import React from 'react'

import Layout from '../components/Layout'
import '../styles/pages/historyPage.css'

export default function HistoryPage({data}) {
  const {
    title,
    textBlock1,
    textBlock2,
    textBlock3,
    textBlock4,
    imageBlock1,
    imageBlock2
  } = data.file.childDataYaml

  return (
    <Layout title="История" pageName="history">
      <h2 className="title">{title}</h2>
      <img src={`./${imageBlock1}`} alt="history-1" className="image image-1"/>
      <section className="text-block text-block-1">
        {textBlock1}
      </section>
      <section className="text-block text-block-2">
        <img src={`./book-icon.svg`} alt="book-icon" className="icon"/>
        <section className="section-1">
          {textBlock2}
        </section>
        <section className="section-2">
          {textBlock3}
        </section>
      </section>
      <img src={`./${imageBlock2}`} alt="history-2" className="image image-2"/>
      <section className="text-block text-block-3">
        {textBlock4}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HistoryPageQuery {
    file(base: {eq: "historyPage.yaml"}) {
      childDataYaml {
        title,
        textBlock1,
        textBlock2,
        textBlock3,
        textBlock4,
        imageBlock1,
        imageBlock2
      }
    }
  }
`