import React from 'react'
import { GoDotFill } from 'react-icons/go'

const DoctorCart = ({item}) => {
  return (
    <div className='rounded-md shadow-sm'>
        <img className='w-full bg-[#C9D8FF] rounded-t-md' src={item.image} alt="" />
        <div className='p-2.5'>
            <h2 className='flex items-center gap-1 text-[#0FBF00]'><span className='text-[15px]'><GoDotFill /></span><span>Available</span></h2>
            <h1 className='font-medium text-[18px] text-[#1F2937]'>{item.name}</h1>
            <p className='text-[#4B5563] text-[12px] font-normal'>{item.speciality}</p>
        </div>
    </div>
  )
}

export default DoctorCart