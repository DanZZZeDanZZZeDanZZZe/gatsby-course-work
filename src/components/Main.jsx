import React from 'react'

import '../styles/main.css'

export default function Main({ children, modifier }) {
  return (
    <main className={`main ${modifier}`}>
      { children }
    </main>
  )
}