import React from 'react'
import DashboradNav from '../../components/DashboardNav/DashboradNav.js';
import SingelProductDetail from '../../components/SingleProductDetail/SingelProductDetail.js';
import "./SingleStorePage.css"
const SingleStorePage = () => {
  return (
    <div className='SingleStorePage_container'>
    <DashboradNav />
    <SingelProductDetail />
</div>
  )
}

export default SingleStorePage