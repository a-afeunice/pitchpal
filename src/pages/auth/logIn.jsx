import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { idea } from "../../assets";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-4/5 max-w-4xl">
        
        <div className="w-2/5">
          <img
            src={idea} 
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="w-3/5 p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              id="email"
              placeholder="Enter your email or username"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-green-500"
              {...register("email", { required: "Email is not provided" })}
            />
            {errors.email && (
              <p className="text-red-500 italic">{errors.email.message}</p>
            )}
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-green-500"
              {...register("password", { required: "Provide password" })}
            />
            {errors.password && (
              <p className="text-red-500 italic">{errors.password.message}</p>
            )}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-800">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-green-500 hover:text-green-700 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
