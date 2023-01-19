import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js'
import Banner from '../../components/Banner/Banner.js'
import "./Homepage.css"
const Homepage = () => {
  return (
    <>
      <div className='heropage__herosection'>
        <Navbar/>
        <Banner />
        </div>
    </>
  )
}

export default Homepage