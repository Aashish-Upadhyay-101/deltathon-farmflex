import React from 'react'
import DashboardContain from '../../components/DashboardContain/DashboardContain.js';
import DashboradNav from '../../components/DashboardNav/DashboradNav.js';
import "./Storepage.css"
export const StorePage = () => {
  return (
    <div className='StorePage_container'>
        <DashboradNav />
        <DashboardContain />
    </div>
  )
}
