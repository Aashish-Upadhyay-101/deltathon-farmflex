import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js'
import Banner from '../../components/Banner/Banner.js'
import "./Homepage.css"
import Feature from '../../components/Features/Feature.js'
import Review from '../../components/Review/ReviewHome.js'
import Faq from '../../components/FAQ/Faq.js'
import Contact  from '../../components/Contact/Contact.js'
const Homepage = () => {
  return (
    <>
      <div className='heropage__herosection'>
        <Navbar/>
        <Banner />
      </div>
      <Feature/>
      <Review/>
      <Faq/>
      <Contact />
    </>
  )
} 

export default Homepage