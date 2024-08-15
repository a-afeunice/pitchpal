import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#082D04] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">PitchPal</h2>
          <p className="mt-3 text-gray-400">
            Connecting Entrepreneurs and Investors
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end text-sm">
          <p className="text-gray-400">© {new Date().getFullYear()} PitchPal.</p>
          <p className="text-gray-400">All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
