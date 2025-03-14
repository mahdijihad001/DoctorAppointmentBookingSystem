import React from 'react';
import { assets } from '../../assets/assets';

const Profile = () => {
  return (
    <div className='container sectionContainer h-screen px-2.5'>
      <div className='flex flex-col md:flex-row gap-2.5 bg-white boxShadow py-3.5 mt-2.5 p-4 rounded-md'>
        {/* Left Side */}
        <div>
          <img className='rounded-full h-[120px] w-[120px]' src={assets.profile_pic} alt="" />
        </div>
        {/* Right Side */}
        <div>
          <h1 className='font-bold text-3xl text-blue-400'>Wellcome, Mohammad Jihad!</h1>
          <h2 className='font-medium text-[15px] text-gray-500 mt-1'>Email : mohammad@gmail.com</h2>
          <h3 className='font-medium text-[15px] text-gray-500 mt-1'>Number : 01234567890</h3>
          <button className='px-7 mt-2.5 py-2 font-bold text-white hover:bg-blue-300 duration-300 rounded-md bg-blue-400'>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;