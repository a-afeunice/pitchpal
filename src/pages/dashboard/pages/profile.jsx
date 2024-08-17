import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { profile } from '../../../assets';

const Profile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Profile Header */}
      <div className="flex items-center mb-6">
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">Eunice Afrifa </h1>
          <p className="text-lg text-gray-600">CEO & Founder</p>
          <p className="text-gray-500 mt-2">Email: afrifae2@gmail.com</p>
          <p className="text-gray-500">Phone: (123) 456-7890</p>
          <div className="flex mt-2 space-x-4">
            <a
              href="https://linkedin.com/in/johndoe"
              className="text-blue-600 hover:text-blue-800"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/johndoe"
              className="text-blue-400 hover:text-blue-600"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com/johndoe"
              className="text-blue-700 hover:text-blue-900"
              aria-label="Facebook Profile"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/johndoe"
              className="text-pink-600 hover:text-pink-800"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">
          Eunice is a passionate entrepreneur with over 5 years of experience in the tech industry. <br /> She is dedicated to bringing innovative solutions to market and driving growth through strategic leadership.
        </p>
      </div>

      {/* Business Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Business Details</h2>
        <p className="text-gray-700"><strong>Company Name:</strong> Tech Innovators Inc.</p>
        <p className="text-gray-700"><strong>Industry:</strong> Technology</p>
        <p className="text-gray-700"><strong>Location:</strong> Accra, Ghana</p>
        <a
          href="https://techinnovators.com"
          className="text-blue-600"
        >
          Visit Website
        </a>
      </div>

      {/* Recent Activities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Pitched new AI-driven product to investors</li>
          <li>Launched new project management tool</li>
          <li>Secured funding for next round of development</li>
        </ul>
      </div>

      
    </div>
  );
}

export default Profile;
