import React from 'react'

import '../styles/main.css'

export default function Main({ children, modifier, pageName }) {
  return (
    <main className={`main ${modifier} main-${pageName}`}>
      { children }
    </main>
  )
}