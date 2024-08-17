import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-green-700 shadow-md w-full  h-14 place-content-center">
      <div className="flex justify-between">
        <div className="flex  ml-12">
          <h1 className="text-2xl font-semibold text-white">PitchPal</h1>
          <p className="text-3xl  font-extrabold text-green-900">.</p>
        </div>

        <div className="flex text-white space-x-6 mr-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            About
          </Link>

          <NavLink
          to="/pitch-list" 
          className="hover:underline">
            Pitch List
          </NavLink>

          <Link to="resources" 
           smooth={true}
           duration={500}
          className="hover:underline cursor-pointer">
            Resources
          </Link>

          <Link to="programs" 
           smooth={true}
           duration={900}
          className="hover:underline cursor-pointer">
            Programs
          </Link>
          <NavLink to="/login" 
           
          className="hover:underline">
            Login
            <ChevronDown className="inline-flex text-green-500" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
