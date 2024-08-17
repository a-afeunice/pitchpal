import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Resources from "../components/resources";
import ProgramsSection from "../components/programsSection";
import PitchesSec from "../components/pitchesSec";

const Landing = () => {
  return (
    <>
      <div className="bgImage">
        <div className="overlay flex flex-col justify-center items-center ">
          <h1 className="text-5xl font-bold text-white mt-20 ml-6 ">
            No <span className="uppercase  font-extrabold text-green-600">idea</span> is too small{" "}
          </h1>
          <br />
          <p className="text-5xl font-bold text-white ml-6">
            {" "}
            Let's build it together
          </p>
          <Link to="/signup">
            <button className="ml-14 mt-10 px-6 py-3 bg-green-700 text-white font-bold rounded-lg">
              Get started
            </button>
          </Link>
        </div>
      </div>

          {/* About section */}
      <div id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At PitchPal, our mission is to bridge the gap between visionary entrepreneurs and forward-thinking investors. We aim to revolutionize the way startups secure funding by creating a transparent, streamlined, and accessible platform that empowers businesses to connect with the right investors.
            </p>
          </div>
          
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">Community & Growth</h3>
            <p className="text-gray-600">
              We believe that every great idea needs the right support to thrive. PitchPal is more than just a funding platform; it’s a community where collaboration and mentorship drive growth. Entrepreneurs can refine their pitches, receive valuable feedback, and present their ideas to a global audience.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">For Entrepreneurs</h3>
            <p className="text-gray-600">
              PitchPal is designed with entrepreneurs in mind. Our platform provides you with the tools to effectively pitch your business to a diverse pool of investors. From creating compelling presentations to receiving constructive feedback, we help you refine your pitch to attract the right investment and take your startup to the next level.
            </p>
          </div>
          
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">For Investors</h3>
            <p className="text-gray-600">
              PitchPal offers investors a gateway to cutting-edge innovations and emerging markets. Our platform provides detailed insights into each business, including market analysis and financial projections, ensuring that investors can make informed decisions with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>

       <div>
        <PitchesSec/>
        </div> 

      <div id="resources">
        <Resources/>
      </div>

      <div id="programs">
        <ProgramsSection/>
      </div>
    </>
  );
};

export default Landing;
