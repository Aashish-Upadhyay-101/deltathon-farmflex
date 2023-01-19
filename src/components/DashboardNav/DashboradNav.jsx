import React from 'react'
import "./DashboardNav.css"
import image from "../../images/safe-part-2-svgrepo-com.svg"
import {CgProfile} from "react-icons/cg"
import { Link } from 'react-router-dom'
const DashboradNav = () => {
  return (
    <div className='dashboardnav_container'>
        <div className='dashboardnav_logo'>
            <h1>FarmFlex</h1>
            <img src={image} />
        </div>
        <div className='dashboardnav_main_link'>
            <div className='dashboardnav_link_profile'>
                <CgProfile className='dashboardnav_link_profile_icon'/>
                <h2>Dipen Pandit</h2>
            </div>
                <div className='dashboardnav_link'>
                    <h2>Order Management</h2>
                    <h2 className='select_link'>Get Storage</h2>
                    <div className='dashboardnav_link'>
                        
                        <Link to="/bookstorage"><h2 className='select_link'>Book Storage</h2></Link>
                        <Link to="/mystorage"><h2>My Storage</h2></Link>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default DashboradNav