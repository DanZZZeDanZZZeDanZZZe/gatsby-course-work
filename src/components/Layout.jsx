import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'
import Main from './Main'
import MediaOptions from './MediaOptions'
import { MediaContextProvider } from './Media'
import Page from './Page'

export default function Layout({ children, title }) {
  const breakpoints = [
    ['lessThan', 'lg'],
    ['greaterThanOrEqual', 'lg'],
  ]
  return (
    <>
      <Helmet title={title} defer={false}/>
      <MediaContextProvider>
        <Page>
          <MediaOptions {...{breakpoints}}>
            <Header />
          </MediaOptions>
          <Main>
            {children}
          </Main>
        </Page>
      </MediaContextProvider>
    </>
  )
}
