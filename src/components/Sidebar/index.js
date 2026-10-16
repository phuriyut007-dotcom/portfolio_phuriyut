import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faHeart,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({ theme, onToggleTheme }) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        aria-label="Home"
        onClick={() => setShowNav(false)}
      >
        <span className="brand-mark" aria-hidden="true">
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
          aria-label="Home"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'about-link active' : 'about-link')}
          to="/about"
          aria-label="About"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'portfolio-link active' : 'portfolio-link')}
          to="/portfolio"
          aria-label="Projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} />
          <span>Projects</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'contact-link active' : 'contact-link')}
          to="/contact"
          aria-label="Contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact</span>
        </NavLink>
      </nav>
      <div className="nav-controls">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={theme === 'dark'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
        <FontAwesomeIcon
          onClick={() => setShowNav(!showNav)}
          icon={showNav ? faClose : faBars}
          className="hamburger-icon"
          role="button"
          aria-label={showNav ? 'Close menu' : 'Open menu'}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              setShowNav(!showNav)
            }
          }}
        />
      </div>
    </div>
  )
}

export default Sidebar
