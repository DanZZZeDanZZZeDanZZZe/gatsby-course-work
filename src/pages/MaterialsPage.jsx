import React from 'react'

import Layout from '../components/Layout'
import '../styles/pages/materialsPage.css'

export default function MaterialsPage({data}) {
  const {
    title,
    pageTitle,
    materials,
  } = data.file.childDataYaml

  return (
    <Layout title={pageTitle} pageName="materials">
      <h2>{title}</h2>
      <ul className="list">
        {materials.map(({href, text}, index) => {
          return <li><a key={index} href={href}>{text}</a></li>
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query materialsPageQuery {
    file(base: {eq: "materialsPage.yaml"}) {
      childDataYaml {
        title
        pageTitle
        materials {
          text
          href
        }
      }
    }
  }
`