import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container sectionContainer'>
      <div className='flex flex-col md:flex-row items-center justify-between py-[60px] gap-10 sm:px-2.5 max-sm:px-2.5'>
        {/* Left side */}
        <div className='md:w-1/2'>
          <img className='w-44 cursor-pointer mb-3.5' src={assets.logo} alt="" />
          <p className='text-[16px] font-normal text-[#4B5563]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/* Right Side */}
        <div className='flex justify-between w-full md:w-1/2' >
          <div className='flex flex-col gap-2.5'>
            <h1 className='font-bold text-[16px] text-[#4B5563]'>COMPANY</h1>
            <Link className='text-[15px] text-[#4B5563] hover:underline' to={"/home"}>Home</Link>
            <Link className='text-[15px] text-[#4B5563] hover:underline' to={"/about"}>About us</Link>
            <Link className='text-[15px] text-[#4B5563] hover:underline' to={"/contact"}>Contact us</Link>
            <Link className='text-[15px] text-[#4B5563] hover:underline' to={"/login"}>Create Account</Link>
          </div>
          <div className='flex flex-col items-start gap-2.5'>
            <h1 className='font-bold text-[16px] text-[#4B5563]'>GET IN TOUCH</h1>
            <h2 className='text-[15px] text-[#4B5563] hover:underline' >+1-212-456-7890</h2>
            <h3 className='text-[15px] text-[#4B5563] hover:underline' >jihad@gmail.com</h3>
          </div>
        </div>
      </div>
      <hr className='border border-gray-500' />
      <div className='py-2.5 text-center'>
        <p className='font-normal text-[#4B5563] text-[14px]'>Copyright © 2024 Mahedi Hasan Jihad - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer