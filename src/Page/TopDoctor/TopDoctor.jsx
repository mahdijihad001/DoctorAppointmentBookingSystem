import React from 'react'
import { doctors } from '../../assets/assets'
import DoctorCart from '../../Component/DoctorCart'

const TopDoctor = () => {
  return (
    <div className='py-10 container sectionContainer'>
      <h1 className='text-center font-bold text-3xl pb-3.5'>Top Doctors to Book</h1>
      <h2 className='text-center font-normal text-[#4B5563]'>Simply browse through our extensive list of trusted doctors.</h2>

      <div className='py-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        {
          doctors.map((item , idx) =>(
            <DoctorCart key={idx} item={item} />
          ))
        }
      </div>

    </div>
  )
}

export default TopDoctor