import React from 'react'
import "./Feature.css"
import Imageone  from "../../images/safe-part-2-svgrepo-com.svg"
const Feature = () => {
  return (
    <div className='feature_container'>
        <div className='feature_primary_container'>
            <h1 className='feature_primary'>Feature</h1>
        </div>
        <div className='feature_secondary_container'>
            <div className='feature_secondary_first_container'>
                <h2 className='feature_secondary_first_container_primary'>What can we provide for you ...</h2>
            </div>
            <div className='feature_secondary_second_container'>
                <div className='feature_secondary_sub_container'>
                    <div className='feature_logo_container'>
                        <img src={Imageone} alt='imag' />
                    </div>
                        <h2>Blah Blah Blah</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='feature_secondary_sub_container'>
                <div className='feature_logo_container'>
                        <img src={Imageone} alt='imag' />
                    </div>
                        <h2>Blah Blah Blah</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='feature_secondary_sub_container'>
                <div className='feature_logo_container'>
                        <img src={Imageone} alt='imag' />
                    </div>
                        <h2>Blah Blah Blah</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='feature_secondary_sub_container'>
                <div className='feature_logo_container'>
                        <img src={Imageone} alt='imag' />
                    </div>
                        <h2>Blah Blah Blah</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature