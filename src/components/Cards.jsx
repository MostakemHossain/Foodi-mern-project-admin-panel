import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cards = ({item}) => {
  const [isHeartFilled,setIsHeartFilled]= useState(false);
  const handleHeartClick=()=>{
    setIsHeartFilled(!isHeartFilled);
  }
    
   
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-2xl relative">
          <div className={`rating gap-1 absolute p-4 right-2 top-2 bg-green heartStar ${isHeartFilled?"text-rose-500":"text-white"}`} 
          onClick={handleHeartClick}>
            <FaHeart className='h-5 w-5 cursor-pointer'/>
          </div>


 <Link to={`/menu/${item._id}`}>
 <figure><img src={item.image} alt=""
 className='hover:scale-105 transition-all duration-300 md:h-72'
  /></figure></Link>
  <div className="card-body">
    <Link to={`/menu/${item._id}`} ><h2 className="card-title">{item.name}</h2></Link>
    <p>Description of the Item</p>
    <div className="card-actions justify-between items-center mt-2">
        <h5 className='font-semi-bold'><span className='text-sm text-red'>$</span>{item.price}</h5>
      <button className="btn bg-green text-white">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards