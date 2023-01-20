import React from 'react'
import "./Banner.css"
const Banner = () => {
  return (
    <div className='banner_container'>
        <div className='banner_container_content'>
        <h1 className='banner_primary'>Your go to vegetables and fruits store</h1>
        <p className='banner_secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className='banner_button_container'>
            <button className='banner_button'>Get Started </button>
        </div>
        </div>
        <div className='banner_container_video'>
        {/* <video className='banner_video' width="750" height="540" controls >
        <source src="https://www.youtube.com/embed/vc7909PRQAE"  />
        </video> */}
        <iframe className='banner_video' width="750" height="540" src="https://www.youtube.com/embed/6K2xOi1Xkx0?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Banner