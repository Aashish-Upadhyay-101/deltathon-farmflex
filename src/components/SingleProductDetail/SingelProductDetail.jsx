import React from 'react'
import "./SingelProductDetail.css"
import Image from "../../images/safe-part-2-svgrepo-com.svg";
import {BsFillCartFill, BsThermometerHalf} from "react-icons/bs";
import {WiHumidity} from "react-icons/wi"
import {ImLocation} from "react-icons/im"
import {IoIosCall} from "react-icons/io"
import {AiOutlineMail} from "react-icons/ai"

const SingelProductDetail = () => {
  const data= {
    mainName: "storage 1",
    rating: 5,
      subarray:[
        {
          id:"1",
          name:'Apple',
          kg:"1200kg",
          humidity: "30-35",
          temperature:"80-90%"
        },{
          id:"2",
          name:'Orange',
          kg:"1200kg",
          humidity: "30-35",
          temperature:"80-90%"
        },{
          id:"3",
          name:'Brocauli',
          kg:"1200kg",
          humidity: "30-35",
          temperature:"80-90%"
        },{
          id:"4",
          name:'litchi',
          kg:"1200kg",
          humidity: "30-35",
          temperature:"80-90%"
        }
      ]
  }
  return (
    <div className='SingelProductDetail_container'>
         <div className='SingelProductDetail_container_primary'>
        <h2>farmname / Get Storage / Book Storage </h2>
      </div>
      <div className='SingelProductDetail_container_stores'>
            <div className='SingelProductDetail_container_stores_bookstorage'>
            <h1 className='SingelProductDetail_container_stores_bookstorage_primary'>Book Storage</h1>
        <div className='SingelProductDetail_singlestore_big'>
                <div className='SingelProductDetail_singlestore_image_big'>
                  <img src={Image} alt='Single product'/>
                </div>
                <div className='SingelProductDetail_singlestore_detail_big'>
                <h1>{data.mainName}</h1>
                <p>{data.rating}</p>
                </div>
        </div>
        <div className='SingelProductDetail_singlestore_detailsecondary'>
                <p><span><ImLocation  className='icon'/></span>Dharan-15</p>
                <p><span><IoIosCall  className='icon'/></span>+977 9817485859</p>
                <p><span><AiOutlineMail  className='icon'/></span>storage1@gmail.com</p>
                </div>
            </div>
            <div className='SingelProductDetail_container_stores_fruits'>
            {
            data.subarray.map((data)=>{
              return(
                <div className='SingelProductDetail_singlestore' key={data.id}>
                <div className='SingelProductDetail_singlestore_image'>
                <h2>{data.name}</h2>
                  <img src={Image} alt='Single product'/>
                </div>
                <div className='SingelProductDetail_singlestore_detail'>
                <p><span><BsFillCartFill /></span>{data.kg}</p>
                <p><span><BsThermometerHalf /></span>{data.humidity}&#8451;C</p>
                <p><span><WiHumidity /></span>{data.temperature}%</p>
                </div>
        </div>
              )
            })
            }
            </div>
      </div>
    </div>
  )
}

export default SingelProductDetail