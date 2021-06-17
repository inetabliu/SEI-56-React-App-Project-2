/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  
  return (
    <nav className="navbar inital-navbar is-danger">
      <div className="container">
        <div className="navbar-brand">
        </div>
        <div className='navbar-start'>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/characters">Go back to all characters</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar