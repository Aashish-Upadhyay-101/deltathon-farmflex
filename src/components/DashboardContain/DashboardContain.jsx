import React from 'react'
import "./Dashboard.css"
import Image from "../../images/safe-part-2-svgrepo-com.svg"
import { Link } from 'react-router-dom'
export const DashboardContain = () => {

      const data = [{
        id:'1',
        name: 'storage 1', 
        rating: 5
      },{
        id:'2',
        name: 'storage 2', 
        rating: 5
      },{
        id:'3',
        name: 'storage 3', 
        rating: 5
      },{
        id:'4',
        name: 'storage 4', 
        rating: 5
      },{
        id:'5',
        name: 'storage 5', 
        rating: 5
      },{
        id:'6',
        name: 'storage 6', 
        rating: 5
      },{
        id:'7',
        name: 'storage 7', 
        rating: 5
      },{
        id:'8',
        name: 'storage 8', 
        rating: 5
      },{
        id:'9',
        name: 'storage 9', 
        rating: 5
      },{
        id:'10',
        name: 'storage 10', 
        rating: 5
      },{
        id:'11',
        name: 'storage 11', 
        rating: 5
      }]

  return (
    <div className='DashboardContain_container'>
      <div className='DashboardContain_container_primary'>
        <h2>farmname / Get Storage / Book Storage </h2>
      </div>
      <div className='DashboardContain_container_stores'>
{
  data.map((data)=>{
    return(
      <Link to="/store/id" key={data.id}>
        <div className='dashboard_singlestore'>
                <div className='dashboard_singlestore_image'>
                  <img src={Image} alt='Single product'/>
                </div>
                <div className='dashboard_singlestore_detail'>
                <h1>{data.name}</h1>
                <p>{data.rating}</p>
                </div>
        </div>
        </Link>
    )
  })
}
      </div>
    </div>
  )
}
