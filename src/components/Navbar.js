import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar inital-navbar is-danger">
      <div className="container">
        <div className="navbar-brand">
        </div>
        <div className='navbar-start'>
          <select className='select-dropdown'>
            <option value='all' className='drowpdown-item'>All</option>
            <option value='Dead' className='dropdown-item'>Dead</option>
            <option value='Alive' className='dropdown-item'>Alive</option>
          </select>
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