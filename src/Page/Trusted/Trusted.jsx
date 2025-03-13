import React from 'react';
import { assets } from '../../assets/assets';

const Trusted = () => {
  return (
    <div className="container sectionContainer flex flex-col md:flex-row items-center justify-between gap-6 bg-[#5F6FFF] md:rounded-2xl px-4 sm:px-6 md:px-10 sm:py-5 max-sm:py-5">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-bold text-[30px] sm:text-[35px] md:text-[45px] text-white">
          Book Appointment With 100+ Trusted Doctors
        </h1>
        <button className="px-7 py-2.5 bg-white rounded-full text-[#4B5563] mt-3 hover:bg-[#4B5563] hover:text-white duration-500">
          Create account
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-md h-auto" src={assets.appointment_img} alt="Appointment" />
      </div>
    </div>
  );
};

export default Trusted;
