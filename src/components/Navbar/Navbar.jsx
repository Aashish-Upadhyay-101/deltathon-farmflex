import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className='logo_container'>
            <h1>FarmFlex</h1>
        </div>
        <ul className='link_container'>
                <Link><li>About us</li></Link>
                <Link><li>Features</li></Link>
                <Link><li>Register</li></Link>
        </ul>
    </div>
  )
}

export default Navbar