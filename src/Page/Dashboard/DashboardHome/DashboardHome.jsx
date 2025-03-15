import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { assets } from '../../../assets/assets'
import { admin } from './../../../assets/admin';

const DashboardHome = () => {
  return (
    <div className='container sectionContainer flex gap-2.5 h-screen'>
      <header className='w-1/5 bg-white shadow-md p-4'>
        {/* Dashboard Logo */}
        <div>
          <Link to={"/"}><img className='h-[40px]' src={admin.admin_logo} alt="" /></Link>
        </div>
        <ul className='mt-9 flex flex-col gap-3'>
          <li><Link className='flex gap-2.5 items-center text-[18px] font-normal text-[#515151]'><img src={admin.home_icon} alt="" />Dashboard</Link></li>
          <li><Link className='flex gap-2.5 items-center text-[18px] font-normal text-[#515151]'><img src={admin.appointment_icon} alt="" />Appioments</Link></li>
          <li><Link className='flex gap-2.5 items-center text-[18px] font-normal text-[#515151]'><img src={admin.people_icon} alt="" />All Doctor</Link></li>
          <li><Link className='flex gap-2.5 items-center text-[18px] font-normal text-[#515151]'><img src={admin.add_icon} alt="" />Add Doctor</Link></li>
          <li><Link className='flex gap-2.5 items-center text-[18px] font-normal text-[#515151]'> <img src={admin.people_icon} alt="" /> All Patient</Link></li>
        </ul>
      </header>
      <main className='w-4/5 bg-white shadow-md overflow-y-auto'>
        <Outlet/>
      </main>
    </div>
  )
}

export default DashboardHome