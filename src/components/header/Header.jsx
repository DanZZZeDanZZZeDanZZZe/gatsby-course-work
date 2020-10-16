import { Link } from 'gatsby'
import React from 'react'

import '../../styles/header.css'
import HeaderMenu from './HeaderMenu'
import Navigation from './Navigation'
import UseHeaderQuery from './UseHeaderQuery'

export default function Header({ modifier }) {
  const data = UseHeaderQuery()
  const {title, pages} = data.file.childDataYaml

  return (
    <header className={`header ${modifier}`}>
      <h1 className="title">{title}</h1>
      <HeaderMenu {...{ modifier }}>
        <Navigation>
          {pages.map(({title, file}) => {
            return (
              <Link to={`/${file}`} className="link" activeClassName="active">
                {title}
              </Link>
            )
          })}
        </Navigation>
      </HeaderMenu>
    </header>
  )
}
