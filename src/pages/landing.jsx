import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="bgImage">
        <div className="overlay flex flex-col justify-center items-start ">
          <h1 className="text-5xl font-bold text-white mt-20 ml-6 ">
            No idea is too small{" "}
          </h1>
          <br />
          <p className="text-5xl font-bold text-white ml-6">
            {" "}
            Let's build it together
          </p>
          <Link to="/signup">
            <button className="ml-14 mt-10 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg">
              Get started
            </button>
          </Link>
        </div>
      </div>

      <div className="h-80 mt-10">
        <h1 className="text-xl font-semibold">About Us</h1>
        <div className="grid grid-cols-1  md:grid-cols-2 justify-center items-center gap-8" >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit. Ullamco laboris nisi ut
            aliquip ex ea commodo
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit. Ullamco laboris nisi ut
            aliquip ex ea commodo
          </div>
        </div>
      </div>
      <div>pitches</div>
      <div>resources</div>
      <div>programs</div>
    </>
  );
};

export default Landing;
