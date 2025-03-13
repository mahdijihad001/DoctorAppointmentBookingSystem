import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Edward Vincent</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">CONTRACT INFORMATION</h2>
        <p className="text-gray-600">Email id: richardgameswap@gmail.com</p>
        <p className="text-gray-600">Phone: +1 123 456 7890</p>
        <p className="text-gray-600">Address: 57th Cross, Richmond Circle, Church Road, London</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">BASIC INFORMATION</h2>
        <p className="text-gray-600">Gender: Male</p>
        <p className="text-gray-600">Birthday: 20 July, 2024</p>
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Edit
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
          Save information
        </button>
      </div>
    </div>
  );
};

export default Profile;