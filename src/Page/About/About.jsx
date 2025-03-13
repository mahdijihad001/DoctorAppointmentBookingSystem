import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {

    const whyChooseUs = [
        {title : "Efficiency:" , des : "Streamlined appointment scheduling that fits into your busy lifestyle."},
        {title : "Convenience:" , des : "Access to a network of trusted healthcare professionals in your area."},
        {title : "Personalization:" , des : "Tailored recommendations and reminders to help you stay on top of your health."}
    ] 

  return (
    <div className='container sectionContainer py-10 px-3.5'>
        <h1 className='text-center text-3xl font-bold mb-2.5'><span className='text-[#4B5563]'>About </span><span className='text-gray-500'>US</span></h1>
        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-center'>
            {/* Left Side */}
            <div className='col-span-1'>
                <img className='w-full' src={assets.about_image} alt="" />
            </div>
            <div className='col-span-2 flex flex-col gap-5'>
                <p className='text-[16px] font-normal text-[#4B5563]'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                <p className='text-[16px] font-normal text-[#4B5563]'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you re booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                <h2 className='font-bold text-[#4B5563]'>Our Vision</h2>
                <p className='text-[16px] font-normal text-[#4B5563]'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
            </div>
        </div>
        <div className='py-14'>
            <h1 className='font-bold text-3xl text-gray-600 mb-7'>Why <span className='text-[#a3b5cc]'>Choose Us</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    {
                        whyChooseUs.map((item , idx) => (
                            <div className='border border-gray-400 rounded-[8px] px-3.5 py-10 hover:bg-blue-400 text-gray-600 hover:text-white duration-500' key={idx}>
                                <h2 className='font-bold text-2xl
                                 mb-2.5'>{item.title}</h2>
                                <p>{item.des}</p>
                            </div>
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default About