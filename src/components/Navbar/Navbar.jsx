import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Image from "../../images/leafwhite.svg"
const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className='logo_container'>
            <h1>FarmFlex</h1>
            <img src={Image} />
        </div>
        <ul className='link_container'>
                <Link><li>About us</li></Link>
                <Link><li>Features</li></Link>
                <Link to={"/login"}><li>Login</li></Link>
        </ul>
    </div>
  )
}

export default Navbar