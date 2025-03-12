import React from 'react'
import { assets } from '../../../../assets/assets_frontend/assets'

const Banner = () => {
    return (
        <div className='sectionContainer flex flex-col md:flex-row flex-wrap bg-[#5F6FFF] md:rounded-lg px-6 md:px-10 lg:px-20'>
            {/* Left Side */}
            <div className='md:w-1/2 flex flex-col items-start justify-between gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white'>Book Appointment With Trusted Doctors</h1>
                <p className='text-[18px] font-medium text-white'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                <button className='flex items-center gap-3.5 bg-white px-8 py-3 rounded-full font-normal text-gray-600 hover:scale-105 transition-all duration-300'>Book Appointment <img src={assets.arrow_icon} alt="" /></button>
            </div>
            {/* Right Side */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Banner