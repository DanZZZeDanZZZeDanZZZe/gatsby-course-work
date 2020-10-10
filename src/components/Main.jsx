import React from 'react'

import '../styles/main.css'

export default function Main({ children }) {
  return (
    <main className="main">
      { children }
    </main>
  )
}