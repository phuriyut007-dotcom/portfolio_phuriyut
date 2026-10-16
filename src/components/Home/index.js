import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import EngineeringMark from './Logo'
import './index.scss'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <p className="home-eyebrow">SYSTEMS / HARDWARE / SOFTWARE</p>
          <h1>Portfolio</h1>
          <h2>Computer Engineering</h2>
          <div className="home-actions">
            <Link to="/portfolio" className="flat-button">
              View Projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <EngineeringMark />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
