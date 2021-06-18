/* eslint-disable no-unused-vars */
import axios from 'axios'
import { data } from 'browserslist'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleChange = () => {
    location.reload()
  }

  
  return (
    <nav className="navbar inital-navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/characters">Go back to all characters</Link>
          </div>
        </div>
        <div className='navbar-start'>
          <div className="navbar-item">
            <Link to="/">Take Me Home</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/randomcharacter" onClick={handleChange}>Generate random character</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
