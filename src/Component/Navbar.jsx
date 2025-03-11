import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  const NavItem = [
    { name: "Home", path: "/home" },
    { name: "All Doctor", path: "/AllDoctor" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className='py-4 fixed w-[100%] bg-white shadow-sm'>
      <div className='sectionContainer flex items-center justify-between max-sm:px-2.5'>
        {/* Logo */}
        <div className='flex items-center justify-center gap-1'>
          <span onClick={HandleMenuOpen} className='text-xl md:hidden text-[#000B6D]'>
            <FaBars />
          </span>
          <span className='font-bold text-xl text-[#000B6D]'>LAB-H</span>
        </div>
        {/* Menu */}
        <div className='hidden md:block'>
          <ul className='flex gap-3 items-center font-medium text-[#1F2937]'>

            {
              NavItem.map((item, idx) => <Link key={idx} className='text-[16px]'>{item.name}</Link>)
            }
          </ul>
        </div>
        {/* Auth */}
        <div>
          <Link className='px-[20px] py-2.5 bg-[#5F6FFF] hover:bg-[#6d74ac] duration-500 text-white font-bold rounded-3xl'>Create Account</Link>
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
            NavItem.map((item, idx) => <Link key={idx} className='text-[16px]'>{item.name}</Link>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar