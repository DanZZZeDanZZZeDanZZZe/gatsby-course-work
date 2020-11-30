import React from 'react'

export default function Section({ index, text, title }) {
  return (
    <section className={`section section-${index}`}>
        <h3 className={`title title-${index}`}>{title}</h3>
        <p className={`text text-${index}`}>{text}</p>
    </section>
  )
}
