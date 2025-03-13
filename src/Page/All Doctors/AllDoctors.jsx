import React from 'react'
import { assets, doctors, specialityData } from '../../assets/assets'
import DoctorCart from '../../Component/DoctorCart'

const AllDoctors = () => {

    const filteredValue = [
        { name: "General physician" },
        { name: "Gynecologist" },
        { name: "Dermatologist" },
        { name: "Pediatricians" },
        { name: "Neurologist" },
        { name: "Gastroenterologist" },
    ]

    return (
        <div className='container sectionContainer sm:px-2.5 max-sm:px-2.5'>
            <h1 className='font-medium text-[20px] text-[#4B5563] py-2.5'>Browse through the doctors specialist</h1>
            <div className='grid md:grid-cols-9 gap-1'>
                <div className='md:col-span-2'>
                    <form>
                        <div className='hidden md:block'>
                            {
                                filteredValue.map((item, idx) => <input className='outline-none text-gray-500 hover:bg-[#E2E5FF] duration-500 border border-gray-400 px-2 py-2 mb-2 rounded-md' readOnly key={idx} type="text" value={item.name} />)
                            }
                        </div>
                        <div className='md:hidden py-3.5'>
                            <fieldset className="fieldset">
                                {/* <legend className="fieldset-legend">Browsers</legend> */}
                                <select defaultValue="Pick a specialist" className="select">
                                    <option disabled={true}>Pick a specialist</option>
                                    {filteredValue.map((item, idx) => <option key={idx} value={item.name}>{item.name}</option>)}
                                </select>
                            </fieldset>
                            {/* <select>
                                {filteredValue.map((item, idx) => <option key={idx} value={item.name}>{item.name}</option>)}
                            </select> */}
                        </div>
                    </form>
                </div>
                <div className='md:col-span-7 grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5'>
                    {
                        doctors.map((item) => <DoctorCart key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>

    )
}

export default AllDoctors