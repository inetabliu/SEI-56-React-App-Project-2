import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          {/* <span role="img" className="title">
            <Link to="/">Home</Link>
          </span> */}
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/characters">See All Characters</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar