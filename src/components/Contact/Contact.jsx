import React from 'react'
import Image from "../../images/safe-part-2-svgrepo-com.svg"
import "./Contact.css"
export const Contact = () => {
  return (
    <div className='contact_container'>
        <div className='contact_container_primary'>
            <div className='footer_logo_container'>
                <h1>FarmFlex</h1>
            </div>
            <div className='footer_sociallogo_container'>
            <img src={Image} />
            <img src={Image} />
            <img src={Image} />
            <img src={Image} />
            </div>
        </div>
        <div className='contact_container_secondary'>
            <ul className='footer_link_one'>
                <li>Home</li>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Cold Storage</li>
            </ul>
        </div>
        <div className='contact_container_tertiary'>
        <ul className='footer_link_one'>
                <li>Carrers</li>
                <li>Commuinity</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </div>
  )
}
