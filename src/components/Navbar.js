/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  //Reloads the random character page
  const handleClickRandom = () => {
    location.assign('/randomcharacter')
  }

  //Go back to the character page
  const handleClickCharacters = () => {
    location.assign('/characters')
  }
  
  return (
    <nav className="navbar inital-navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/characters" onClick={handleClickCharacters}>Go back to all characters</Link>
          </div>
        </div>
        <div className='navbar-start'>
          <div className="navbar-item">
            <Link to="/">Take Me Home</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/randomcharacter" onClick={handleClickRandom}>Generate random character</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
