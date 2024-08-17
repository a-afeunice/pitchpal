import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { idea } from "../../assets";
import { apiRegister } from "../../services/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

 

  const userNameWatch = watch("userName")
  console.log(userNameWatch);

  useEffect(() => {
    // const debouncedSearch = debounce(async () => {
    //   if (userNameWatch) {
    //     await checkUsername(userNameWatch)
    //   }
    
    // }, 1000)
    // debouncedSearch()
    // return () => {
    //   debouncedSearch.cancel();
    // }
  }, [userNameWatch]);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      
      username: data.username,
      role: data.role,
    };
  try {
    const res = await apiRegister(payload);
    console.log(res.data)
    toast.success(res.data.message)
    navigate("/login");
   } catch (error) {
    console.log(error)
    toast.error("An error occurred!")
   } finally {
    setIsSubmitting(false)
   }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex shadow-lg bg-white w-4/5 max-w-3xl rounded-lg overflow-hidden">
        
        <div className="hidden md:flex w-2/5">
          <img
            src={idea}
            alt="Sign Up"
            className="h-full w-full object-cover"
          />
        </div>
        
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
             
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
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

            <div className="flex text-center">
            <div  className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200">
            <button
              type="submit"
             
            >
             {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
            </div>
            </div>

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
