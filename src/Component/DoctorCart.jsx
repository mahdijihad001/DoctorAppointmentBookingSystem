import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const DoctorCart = ({item}) => {
  return (
    <div className='rounded-md shadow-sm'>
        <Link to={`/doctorDetail/${item._id}`}><img className='w-full hover:scale-104 duration-300 bg-[#C9D8FF] rounded-t-md' src={item.image} alt="" /></Link>
        <div className='p-2.5'>
            <h2 className='flex items-center gap-1 text-[#0FBF00]'><span className='text-[15px]'><GoDotFill /></span><span>Available</span></h2>
            <Link to={`/doctorDetail/${item._id}`} className='font-medium text-[18px] text-[#1F2937]'>{item.name}</Link>
            <p className='text-[#4B5563] text-[12px] font-normal'>{item.speciality}</p>
        </div>
    </div>
  )
}

export default DoctorCart