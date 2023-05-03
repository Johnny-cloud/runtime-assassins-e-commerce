import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/watches">Watches </Link>
        <Link to="/belts">Belts</Link>
        <Link to="/handbags">Handbags </Link>
        <Link to="/bracelets">Bracelets</Link>
        <Link to="/cart">My cart</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
  )
}

export default NavBar