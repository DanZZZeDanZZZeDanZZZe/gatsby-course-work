import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'
import MediaOptions from './MediaOptions'
import { MediaContextProvider } from '../components/Media'

export default function Layout({ children, title }) {
  return (
    <>
      <Helmet title={title} />
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
    </>
  )
}
