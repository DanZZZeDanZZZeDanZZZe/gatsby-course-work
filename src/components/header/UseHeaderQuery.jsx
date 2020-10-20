import { graphql, useStaticQuery } from 'gatsby'

export default function UseHeaderQuery() {
  return useStaticQuery(graphql`
    query HeaderQuery {
      file(base: {eq: "header.yaml"}) {
        childDataYaml {
          title
          pages {
            title
            file
          }
        }
      }
    }
  `)
}