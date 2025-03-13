import React from 'react'
import { assets } from '../assets/assets'

const DoctorDetail = () => {

  return (
    <div>
      <div className='container sectionContainer sm:px-2.5 max-sm:px-2.5 h-screen'>
        {/* Doctor About */}
        <div className='grid grid-cols-1 md:grid-cols-5 gap-3.5 items-stretch py-2.5'>
          {/* Doctor Img */}
          <div className='md:col-span-1 bg-[#5F6FFF] rounded-md flex items-end justify-end'>
            <img className='w-full' src={assets.appointment_img} alt="" />
          </div>
          {/* Doctor About */}
          <div className='md:col-span-4 border-2 border-gray-400 rounded-md flex flex-col justify-center p-10 gap-2'>
            <div className='flex items-center gap-1 text-[#1F2937] text-[26px] font-bold'><span>Dr. Richard James</span><img className='h-[18px]' src={assets.verified_icon} alt="" /></div>
            <h2 className='text-[#4B5563] text-[17px]'><span>MBBS - General Physician</span> <span className='px-2.5 py-1 rounded-full border border-gray-400'>2 Years</span></h2>
            <div className='flex items-center gap-2 font-bold text-[20px]'><span>About</span> <img src={assets.info_icon} alt="" /></div>
            <p className='text-[#4B5563] text-[16px]'>Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective </p>
            <h4 className='text-[#4B5563] font-normal text-[20px]'>Appointment fee: $<span className='font-bold'>{50}</span> </h4>
            <div className='mt-2.5'>
              <button className='px-7 py-2.5 bg-[#5F6FFF] rounded-4xl font-bold text-white hover:bg-[#8893f7] duration-500'>Book an appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:py-[80px] max-sm:py-[100px]'>
        <h1>Book an appointment</h1>
        <form>

        </form>
      </div>
    </div>
  )
}

export default DoctorDetail