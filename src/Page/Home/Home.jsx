import React from 'react'
import Banner from '../Banner/Banner'
import Speciality from '../Speciality/Speciality'
import TopDoctor from '../TopDoctor/TopDoctor'

const Home = () => {
  return (
    <div>
      <div className='md:pb-14'></div>
      <Banner/>
      <div className='md:pb-14'></div>
      <Speciality/>
      <TopDoctor/>
    </div>
  )
}

export default Home