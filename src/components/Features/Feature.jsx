import React from 'react'
import "./Feature.css"
import Real from "../../images/real.svg";
import dollar from "../../images/dollar.svg";
import cart from "../../images/cart.svg";
import search from "../../images/search.svg"
const Feature = () => {
  return (
    <div className='feature_container'>
        <div className='feature_primary_container'>
            <h1 className='feature_primary'>Feature</h1>
        </div>
        <div className='feature_secondary_container'>
            <div className='feature_secondary_first_container'>
                <h2 className='feature_secondary_first_container_primary'>What can we provide  you ...</h2>
            </div>
            <div className='feature_secondary_second_container'>
                <div className='feature_secondary_sub_container'>
                    <div className='feature_logo_container'>
                        <img src={search} alt='search' />
                    </div>
                        <h2>Search Nearby Inventories</h2>
                        <p>Farners can search nearby cold storage near their farms to store their crops.</p>
                </div>
                <div className='feature_secondary_sub_container'>
                <div className='feature_logo_container'>
                        <img src={cart} alt='imag' />
                    </div>
                        <h2>Online Booking and Reservation</h2>
                        <p>Farmers can easily book and reserve cold storage space for their crops, including the ability to view avialable dates and capacity.</p>
                </div>
                <div className='feature_secondary_sub_container'>
                <div className='feature_logo_container'>
                        <img src={dollar} alt='imag' />
                    </div>
                        <h2>Easy Payment</h2>
                        <p>Integrated payment system for making payment easy for farmers.</p>
                </div>
                <div className='feature_secondary_sub_container'>
                <div className='feature_logo_container'>
                        <img src={Real} alt='imag' />
                    </div>
                        <h2>Real-time tracking and monitoring</h2>
                        <p>Farmers can get updates on the status of their produce, such as temperature and humidity white it is stored.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature