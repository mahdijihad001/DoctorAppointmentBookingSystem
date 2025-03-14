import React from 'react'
import { assets } from '../assets/assets'

const DoctorDetail = () => {

  return (
    <div>
      <div className='container sectionContainer sm:px-2.5 max-sm:px-2.5'>
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

            </div>
          </div>
        </div>
      </div>
      <div className='sm:py-[80px] max-sm:py-[100px] container sectionContainer'>
        <h1 className='text-3xl font-bold text-gray-600 text-center'>Book an appointment</h1>
        <form className="space-y-6 py-10 sm:px-2.5 max-sm:px-2.5 bg-white rounded-lg shadow-lg p-6">
          {/* Name & Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name
              </label>
              <input
                type="text"
                id="patientName"
                placeholder="Enter patient name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter age"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
          </div>

          {/* Date and Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
                Appointment Date
              </label>
              <input
                type="date"
                id="appointmentDate"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                Patient Gender
              </label>
              <select
                id="gender"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

          </div>

          {/* Disease & Description */}
          <div>
            <label htmlFor="diseaseDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Disease and Description
            </label>
            <textarea
              id="diseaseDescription"
              rows="4"
              placeholder="Enter disease and description..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#5F6FFF] rounded-full font-bold text-white hover:bg-[#8893f7] transition duration-500 transform hover:scale-105"
            >
              Book an Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DoctorDetail