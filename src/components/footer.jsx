import React from 'react';

const Footer = () => {
  return (
    <div className="bg-green-700 text-white py-10">
      <div className="container mx-auto gap-2 flex flex-col items-center">
        <div className="text-center ">
          <h2 className="text-2xl font-bold">PitchPal</h2>
          <p className="mt-5 text-gray-400 ">
            Connecting Entrepreneurs and Investors
          </p>
        </div>
        <div className="flex items-center text-sm">
          <p className="text-gray-400">© {new Date().getFullYear()} PitchPal.All Rights Reserved</p>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
