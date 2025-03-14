import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'
import { assets } from '../../../assets/assets_frontend/assets'
import { IoIosArrowDropdown } from 'react-icons/io'
import { FaBarsStaggered } from 'react-icons/fa6'

const Navbar = () => {

  const NavItem = [
    { name: "Home", path: "/" },
    { name: "All Doctors", path: "/allDoctor" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }


  return (
    <div className=' text-sm py-4 border-b border-b-gray-400 max-sm:px-4 md:px-10 sm:px-5 fixed w-[100%] bg-white z-40'>
      <div className='flex items-center justify-between sectionContainer container'>
        {/* Menu Bar */}
        <FaBarsStaggered onClick={HandleMenuOpen} className='text-[28px] md:hidden' />
        {/* Logo */}
        <img className='w-44 cursor-pointer hidden md:block' src={assets.logo} alt="" />
        {/* Menu */}
        <ul className='hidden md:flex items-center gap-5 font-medium'>
          {
            NavItem.map((item, idx) => <NavLink onClick={() => setMenuOpen(false)} to={item.path} key={idx}><li className='text-[16px] font-medium uppercase text-[#1F2937]'>{item.name}</li></NavLink>)
          }

          {isAdmin && (
            <Link
              to="/dashboard"
              className="px-4 py-2 border border-gray-300 rounded-full text-gray-500 hidden md:block"
            >
              Admin panel
            </Link>
          )}
        </ul>
        {/* Nav Button */}
        <div className='flex items-center gap-4'>
          {
            token ? <div className='flex items-center gap-1 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <button><IoIosArrowDropdown className='text-[17px]' /></button>

              <div className={`absolute top-0 right-0 p-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block z-50`}>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <Link to={"/profile"} className='hover:text-black cursor-pointer'>My Profile</Link>
                  <Link to={`/appointment`} className='hover:text-black cursor-pointer'>My Appointments</Link>
                  <p className='hover:text-black cursor-pointer'>Log Out</p>
                </div>
              </div>

            </div> :
              <button className='bg-[#5F6FFF] hover:bg-[#8390ff] duration-500 text-white px-8 py-3 rounded-full font-light hidden md:block' >Create Account</button>
          }

        </div>
      </div>
      {/* Mobild Menu */}
      <div className={`bg-slate-300 w-[250px] h-[100%] fixed p-5 duration-700 top-0 z-50 ${menuOpen ? "left-0" : "left-[-100%]"}`}>
        <div className='py-5 flex items-center justify-between'>
          <h1 className='font-bold text-3xl'>LAB-H</h1>
          <span onClick={HandleMenuOpen} className='font-bold text-3xl'><RxCross1 /></span>
        </div>
        <ul className='flex flex-col gap-3'>
          {
            NavItem.map((item, idx) => <NavLink onClick={HandleMenuOpen} to={item.path} key={idx} className='text-[16px]'>{item.name}</NavLink>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar