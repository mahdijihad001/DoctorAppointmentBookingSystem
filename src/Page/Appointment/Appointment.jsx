import React from "react";
import { assets } from "../../assets/assets";

const Appointment = () => {
  return (
    <div className="h-screen container sectionContainer px-4">
      <h1 className="text-[24px] font-medium text-[#4B5563] py-5">
        My Appointments
      </h1>

      <div className="border border-gray-300 rounded-lg p-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side */}
          <div className="flex gap-5 items-center">
            <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[#EAEFFF] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={assets.appointment_img}
                alt="Doctor"
              />
            </div>
            <div className="text-gray-700">
              <h1 className="text-lg font-semibold">Dr. Richard James</h1>
              <h2 className="text-sm text-gray-500">General physician</h2>
              <div className="mt-2">
                <h3 className="font-semibold">Address:</h3>
                <p className="text-sm">57th Cross, Richmond</p>
                <p className="text-sm">Circle, Church Road, London</p>
                <h3 className="mt-2 text-sm">
                  Date & Time: 25, July, 2024 | 8:30 PM
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side - Buttons */}
          <div className="flex flex-col items-end space-y-2 mt-4 md:mt-0">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Downlod Invoice
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Cancel appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
