import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import '../styles/footer.css'

export default function Footer({ modifier }) {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      file(base: {eq: "footer.yaml"}) {
        childDataYaml {
          author
          linkAddress
          linkText
        }
      }
    }
  `)
  const {author, linkAddress, linkText} = data.file.childDataYaml

  return (
    <footer  className={`footer ${modifier}`}>
      <span className="author">{author}</span>
      <a className="link" href={linkAddress}>{linkText}</a>
    </footer>
  )
}

