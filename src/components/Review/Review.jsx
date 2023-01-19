import React from 'react'
import "./ReviewHome.css"
import Imageone  from "../../images/safe-part-2-svgrepo-com.svg"
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
                        <h1>Richard Tee</h1>
                        <p>5</p>
                        <p>Feb 14, 2022 via Trustpilot</p>
                    </div>
                </div>
                <div className='reviews_container_second'>
                <h2>A Solid product with good support</h2>
                <h3>I’ve been using another well-established accounting software which has worked well but the Covid took a major toll on my business and I’ve needed to cut my costs which included looking at another accounting solution. After a little searching, I came across Invoice crowd, and again after performing a little due diligence, I could see that they were a relatively new company.</h3>
                </div>
            </div>
            <div className='reviews_container_sub'>
                <div className='reviews_container_first'>
                    <img src={Imageone} alt='user image'/>
                    <div className='reviews_container_second'>
                        <h1>Richard Tee</h1>
                        <p>5</p>
                        <p>Feb 14, 2022 via Trustpilot</p>
                    </div>
                </div>
                <div className='reviews_container_second'>
                <h2>A Solid product with good support</h2>
                <h3>I’ve been using another well-established accounting software which has worked well but the Covid took a major toll on my business and I’ve needed to cut my costs which included looking at another accounting solution. After a little searching, I came across Invoice crowd, and again after performing a little due diligence, I could see that they were a relatively new company</h3>
                </div>
            </div>
            <div className='reviews_container_sub'>
                <div className='reviews_container_first'>
                    <img src={Imageone} alt='user image'/>
                    <div className='reviews_container_second'>
                        <h1>Richard Tee</h1>
                        <p>5</p>
                        <p>Feb 14, 2022 via Trustpilot</p>
                    </div>
                </div>
                <div className='reviews_container_second'>
                <h2>A Solid product with good support</h2>
                <h3>I’ve been using another well-established accounting software which has worked well but the Covid took a major toll on my business and I’ve needed to cut my costs which included looking at another accounting solution. After a little searching, I came across Invoice crowd, and again after performing a little due diligence, I could see that they were a relatively new company</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Review