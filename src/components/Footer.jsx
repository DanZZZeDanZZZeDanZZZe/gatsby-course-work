import React from 'react'

import '../styles/footer.css'

export default function Footer({ modifier }) {
  return (
    <footer  className={`footer ${modifier}`}>
      <span className="author">Выполни: Гранкин А.Н.</span>
      <a className="link" href="https://vk.com/esli_prochital_eto_tu_molodech">Страница VK</a>
    </footer>
  )
}