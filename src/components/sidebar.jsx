import React from 'react';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import K from '../constants';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-r from-green-700 via-green-600 to-green-500 min-h-screen flex flex-col shadow-lg">
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center ml-12 mb-8">
          <h1 className="text-2xl font-semibold text-white">PitchPal</h1>
          <p className="text-xl mt-1 font-bold text-green-700">.</p>
        </div>
        
        <div className="flex flex-col gap-y-5">
          {K.NAVLINKS.map(({ icon, text, link }, index) => (
            <Link
              to={link}
              key={index}
              className='flex gap-x-4 items-center text-white hover:bg-green-600 rounded-lg p-2 transition duration-300'
            >
              <span>{icon}</span>
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 mt-auto">
        <button
          className="flex gap-x-4 items-center shadow-xl bg-green-600 text-white hover:bg-green-600 rounded-lg p-2 transition duration-300"
        >
          <span className="text-white p-2 rounded-full">
            <LogOut />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
