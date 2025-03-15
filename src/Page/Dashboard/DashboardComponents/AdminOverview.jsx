import React from 'react'
import { admin } from '../../../assets/admin'

const AdminOverview = () => {

  const data = {
    labels: ["Doctors", "Appointments", "Patients"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className='p-7'>
      <div className='flex flex-col md:flex-row gap-3'>
        {/* Item one */}
        <div className='flex gap-2.5 items-center shadow-md p-4 rounded-[12px]'>
          <div>
            <img src={admin.doctor_icon} alt="" />
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-[18px] text-[#515151]'>14</h1>
            <h2 className='text-[#8893B0] text-[14px]'>Doctors</h2>
          </div>
        </div>
        {/* Item Two */}
        <div className='flex gap-2.5 items-center shadow-md p-4 rounded-[12px]'>
          <div>
            <img src={admin.appointments_icon} alt="" />
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-[18px] text-[#515151]'>14</h1>
            <h2 className='text-[#8893B0] text-[14px]'>Appointments</h2>
          </div>
        </div>
        {/* Item Three */}
        <div className='flex gap-2.5 items-center shadow-md p-4 rounded-[12px]'>
          <div>
            <img src={admin.patients_icon} alt="" />
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-[18px] text-[#515151]'>14</h1>
            <h2 className='text-[#8893B0] text-[14px]'>Patients</h2>
          </div>
        </div>
      </div>
      {/* Chat */}
      <div>

      </div>
    </div>
  )
}

export default AdminOverview