import { useState } from 'react'
import logo from '../assets/logo.png'
import { navigation } from '../data/content'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    const nextTheme = darkMode ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setDarkMode(!darkMode)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Conecta UTSH, inicio">
          <img className="brand__logo" src={logo} alt="" />
          <span className="brand__name">conecta<span>.</span></span>
        </a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Cambiar a tema ${darkMode ? 'claro' : 'oscuro'}`}
            title={`Cambiar a tema ${darkMode ? 'claro' : 'oscuro'}`}
          >
            {darkMode ? '☀' : '☾'}
          </button>
          <a className="button button--primary navbar__download" href="#download" onClick={closeMenu}>
            Descargar
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
