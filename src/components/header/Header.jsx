import { Link } from 'gatsby'
import React from 'react'

import '../../styles/header.css'
import HeaderMenu from './HeaderMenu'
import Navigation from './Navigation'

export default function Header({ modifier }) {
  return (
    <header className={`header ${modifier}`}>
      <h1 className="title">Южная Корея</h1>
      <HeaderMenu {...{ modifier }}>
        <Navigation>
          <Link to="/" className="link" activeClassName="active">
            Главная
          </Link>
          <Link to="/1" className="link" activeClassName="active">
            История
          </Link>
          <Link to="/2" className="link" activeClassName="active">
            Культура
          </Link>
          <Link to="/3" className="link" activeClassName="active">
            Плоитика
          </Link>
          <Link to="/4" className="link" activeClassName="active">
            Экономика
          </Link>
          <Link to="/5" className="link" activeClassName="active">
            Викторина
          </Link>
          <Link to="/5" className="link" activeClassName="active">
            Об авторе
          </Link>
        </Navigation>
      </HeaderMenu>
    </header>
  )
}
