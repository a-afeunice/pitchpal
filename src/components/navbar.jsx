import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-[#082D04] shadow-md w-full  h-14 place-content-center">
      <div className="flex justify-between">
        <div className="flex ml-12">
          <h1 className="text-2xl font-semibold text-white">PitchPal</h1>
          <p className="text-xl mt-1 font-[1000] text-green-700">.</p>
        </div>

        <div className="flex text-white space-x-6 mr-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-green-700 cursor-pointer"
          >
            About
          </Link>

          <NavLink
          to="/pitch-list" 
          className="hover:text-green-700">
            Pitch List
          </NavLink>

          <Link to="resources" 
           smooth={true}
           duration={500}
          className="hover:text-green-700 cursor-pointer">
            Resources
          </Link>

          <Link to="programs" 
           smooth={true}
           duration={900}
          className="hover:text-green-700 cursor-pointer">
            Programs
          </Link>
          <NavLink to="/login" 
           
          className="hover:text-green-700">
            Login
            <ChevronDown className="inline-flex text-green-500" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
