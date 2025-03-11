import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/doc-header-img.png"

const Banner = () => {
    return (
        <div className='h-screen sectionContainer pt-[60px] flex flex-col items-center'>
            {/* Top White Background */}
            <div className="w-full h-[80px] bg-white"></div>

            {/* Main Banner Section */}
            <div className='w-full flex items-center justify-center bg-gradient-to-r from-[#5F6FFF] to-[#4f5dd6] py-[100px] rounded-3xl'>
                <div className='flex h-full flex-col md:flex-row gap-3.5 items-center justify-between px-9'>
                    {/* Text Section */}
                    <div className='flex flex-col gap-4 py-10 px-2 md:w-1/2'>
                        <h1 className='font-bold text-5xl text-white leading-tight'>
                            Book Appointment
                        </h1>
                        <h2 className='font-bold text-4xl text-white'>
                            With Trusted Doctors
                        </h2>
                        <p className='text-white text-lg'>
                            Simply browse through our extensive list of trusted doctors, 
                            schedule your appointment hassle-free.
                        </p>
                        <button className='mt-4 px-6 py-3 bg-white text-[#5F6FFF] font-bold rounded-full shadow-md hover:bg-gray-100 transition'>
                            <Link>Book appointment →</Link>
                        </button>
                    </div>
                    
                    {/* Image Section */}
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <img src={bannerImg} alt="Doctors" className='w-full max-w-lg'/>
                    </div>
                </div>
            </div>

            {/* Bottom White Background */}
            <div className="w-full h-[80px] bg-white"></div>
        </div>
    );
}

export default Banner;
