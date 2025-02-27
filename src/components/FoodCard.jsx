import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
function FoodCard({id,name,price,desc,img,rating,handleToast}) {
  const dispatch=useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex-col rounded-lg gap-2'>
        <img src={img}
        alt="" 
        className='w-full h-[150px] overflow-hidden hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'/>
        <div className='text-sm flex justify-between my-2'>
            <h2>{name}</h2>
            <span className='text-gray-500'> ₹{price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
        <div className='flex justify-between my-2'>
            <span className='flex justify-center items-center'>
                <FaStar className='mr-1 text-yellow-400'/> {rating}
            </span>
            <button 
            onClick={()=>{
              dispatch(addToCart({id,name,price,rating,img,qty:1}));
              handleToast(name);
            }}
            className='p-1 text-white bg-green-500 hover:bh-green-600 rounded-lg text-sm'>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard