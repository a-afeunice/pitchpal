import React from 'react';

const PitchCard = ({ title, image, status, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
     <div className='flex justify-between'>
     <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        Status: <span className="text-green-500 font-bold">{status}</span>
      </p>
     </div>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
    </div>
    <div className="bg-green-500 text-center text-white p-2">
      <button className="w-full">Invest in Pitch</button>
    </div>
  </div>
  );
};

export default PitchCard;
