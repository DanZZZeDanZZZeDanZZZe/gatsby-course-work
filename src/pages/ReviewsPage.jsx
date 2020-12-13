import React from 'react'

import Layout from '../components/Layout'
import '../styles/pages/reviewsPage.css'

export default function ReviewsPage({data}) {
  const {
    title,
    pageTitle,
    reviews
  } = data.file.childDataYaml

  return (
    <Layout title={pageTitle} pageName="reviews">
      <h3>{title}</h3>   
      {reviews.map(({text, foto, info}, i) => (
        <div className="review" key={i}>
          <div className="person">
            <img className="foto" src={`./${foto}`} alt="foto"/>
            <span className="info">{info}</span>
          </div>
          <span className="text">{text}</span>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ReviewsPageQuery {
    file(base: {eq: "reviewsPage.yaml"}) {
      childDataYaml {
        title,
        pageTitle,
        reviews {
          foto
          info
          text
        }
      }
    }
  }
`