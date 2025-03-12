import React from 'react'
import { specialityData } from '../../assets/assets'

const Speciality = () => {
    return (
        <div className='py-[70px] sectionContainer container'>
            <div className='flex items-center flex-col'>
                <h1 className='text-3xl font-bold text-center mb-2.5'>Find by Speciality</h1>
                <h2 className='w-3/6 text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</h2>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-[20px] py-[20px]'>
                {
                    specialityData.map((item, idx) => (
                        <div className='flex flex-col items-center gap-2.5 hover:translate-y-[-10px] duration-500' key={idx}>
                            <img src={item.image} alt="" />
                            <h1>{item.speciality}</h1>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Speciality