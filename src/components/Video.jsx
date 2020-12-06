import React from 'react'

export default function Video({src}) {
  return (
    <div className="video">
       <iframe width="100%" height="100%" src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
  )
}