import React from 'react'
import Header from './Header'
import MediaOptions from './MediaOptions'
import { MediaContextProvider } from '../components/Media'

export default function Layout({ children }) {
  return (
    <MediaContextProvider>
      <MediaOptions
        options={[
          ['lessThan', 'lg'],
          ['greaterThanOrEqual', 'lg'],
        ]}
      >
        <Header />
      </MediaOptions>
      {children}
    </MediaContextProvider>
  )
}
