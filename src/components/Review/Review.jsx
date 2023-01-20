import React from 'react'
import "./ReviewHome.css"
import Imageone  from "../../images/profile.svg"
const Review = () => {
  return (
    <div className='review_container'>
        <div className='review_container__primary'>
            <h1>What our customers have to say...</h1>
        </div>
        <div className='reviews_container'>
            <div className='reviews_container_sub'>
                <div className='reviews_container_first'>
                    <img src={Imageone} alt='user image'/>
                    <div className='reviews_container_second'>
                        <h1>Prashant Bhattrai</h1>
                        <p>5</p>
                        <p>Feb 14, 2022 via Trustpilot</p>
                    </div>
                </div>
                <div className='reviews_container_second'>
                <h3>I've been using this cold storage booking app for a few months now and it's been a game changer for my farming business..</h3>
                </div>
            </div>
            <div className='reviews_container_sub'>
                <div className='reviews_container_first'>
                    <img src={Imageone} alt='user image'/>
                    <div className='reviews_container_second'>
                        <h1>Dipen Pandit</h1>
                        <p>5</p>
                        <p>Feb 14, 2022 via Trustpilot</p>
                    </div>
                </div>
                <div className='reviews_container_second'>
                <h3>The online booking and reservation feature is so convenient and saves me so much time compared to having to call or visit the cold storage facility in person.</h3>
                </div>
            </div>
            <div className='reviews_container_sub'>
                <div className='reviews_container_first'>
                    <img src={Imageone} alt='user image'/>
                    <div className='reviews_container_second'>
                        <h1>Aashish upadhey</h1>
                        <p>5</p>
                        <p>Feb 14, 2022 via Trustpilot</p>
                    </div>
                </div>
                <div className='reviews_container_second'>
                <h3> I highly recommend this app to any farmer looking for an efficient and reliable cold storage solution.</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Review