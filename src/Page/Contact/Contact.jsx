import React from 'react';
import { assets } from './../../assets/assets';

const Contact = () => {
  return (
    <div className='py-10 container sectionContainer sm:px-3.5 max-sm:px-3.5 h-screen'>
      <h1 className='text-3xl font-bold text-[#4B5563] text-center'>
        CONTACT <span className='text-slate-500'>US</span>
      </h1>
      <div className='flex flex-col md:flex-row gap-5 justify-center items-center py-4'>
        {/* Contact image */}
        <div className='w-full md:w-1/3 flex justify-center'>
          <img src={assets.contact_image} alt="Contact" className='max-w-full h-auto' />
        </div>
        {/* Contact Information */}
        <div className='w-full md:w-2/3 space-y-4'>
          <h2 className='text-2xl font-semibold text-[#4B5563]'>OUR OFFICE</h2>
          <div className='space-y-2'>
            <p className='text-[#6B7280]'>54709 Wilms Station</p>
            <p className='text-[#6B7280]'>Suite 350, Washington, USA</p>
          </div>
          <div className='space-y-2'>
            <p className='text-[#6B7280]'>Tel: (415) 555-0132</p>
            <p className='text-[#6B7280]'>Email: grecintockdevelopmail.com</p>
          </div>
          <h1 className='text-2xl font-semibold text-[#4B5563]'>Careers at PRESCRIPTO</h1>
          <h2 className='text-[#6B7280]'>Learn more about our teams and job openings.</h2>
          {/* <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
            Explore Jobs
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;