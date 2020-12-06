import React from 'react'

import Layout from '../components/Layout'
import Video from '../components/Video'
import '../styles/pages/videoPage.css'

export default function VideoPage({data}) {
  const {
    title,
    pageTitle,
    videos
    
  } = data.file.childDataYaml
  console.log("🚀 ~ file: VideoPage.jsx ~ line 11 ~ VideoPage ~ videos", videos)
  return (
    <Layout title={pageTitle} pageName="video">
      <h2>{title}</h2>
      {videos.map(src => <Video src={src}/>)}
    </Layout>
  )
}

export const query = graphql`
  query VideoPageQuery {
    file(base: {eq: "videoPage.yaml"}) {
      childDataYaml {
        title,
        pageTitle,
        videos
      }
    }
  }
`