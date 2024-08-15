import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { idea } from "../../assets";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex shadow-lg bg-white w-4/5 max-w-3xl rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:flex w-2/5">
          <img
            src={idea}
            alt="Sign Up"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Right Form Section */}
        <div className="p-8 bg-white flex flex-col justify-center w-full md:w-3/5">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-green-900">Sign Up</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-1/2 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "Length must be more than 2 characters",
                  },
                })}
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-1/2 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Length must be more than 2 characters",
                  },
                })}
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}

            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <div className="flex space-x-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-1/2 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password length must be more than 8 characters",
                  },
                })}
              />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-1/2 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}

            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username length must be more than 3 characters",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}

            <select
              id="role"
              className="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("role", { required: "Role is required" })}
            >
              <option value="">Select Role</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="investor">Investor</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                {...register("terms", {
                  required: "You must accept the terms",
                })}
              />
              <label
                htmlFor="terms"
                className="ml-2 text-gray-800 text-sm cursor-pointer"
              >
                I agree to the Terms of Use
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-gray-800 mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-green-500 hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
