import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import Curriculo from '../../assets/Sherzodcv.pdf'
export function Header() {
  const [isactive, setactive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setactive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>Q.</span>
          <span>Sherzod</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isactive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#aboutme" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#skills" onClick={closeMenu}>
            Skills
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Curriculo} download className="button">
            CV
          </a>
        </nav>

        <div
          aria-expanded={isactive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isactive ? 'Fechar menu' : 'Abrir menu'}
          className={isactive ? 'menu active' : 'menu'}
          onClick={() => {
            setactive(!isactive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
