import React, { useEffect, useState } from "react";
import { pitch } from "../../assets";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit =() => 
    console.log(data)
  return (
    <div
      className="relative flex items-center justify-center h-screen w-screen bg-cover bg-center overflow-hidden overflow-y-hidden"
      style={{ backgroundImage: `url(${pitch})` }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative flex shadow-lg bg-white bg-opacity-30 p-8 rounded-lg">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex place-content-center items-center font-serif"
          >
            <div className="mx-8">
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold">SIGN UP</h1>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-8 ">
                  <div>
                    <label htmlFor="" className="block text-black mb-1 ml-4">
                      Firstname
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="firstname"
                      className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                      {...register("firstName", {
                        required: "First name is required",
                        minLength: {
                          value: 2,
                          message: "length must be more than 2 characters",
                        },
                      })}
                    />
                    <label htmlFor="" className="block text-black mb-1 ml-4">
                      Lastname
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="lastname"
                      className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                      {...register("lastName", {
                        required: "Last name is required",
                        minLength: {
                          value: 2,
                          message: "length must be more than 2 characters",
                        },
                      })}
                    />
                    <label
                      htmlFor="email"
                      className="block text-black mb-1 ml-4"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="email"
                      className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (<p className="text-red-500 italic">{errors.email.message}</p>)}
                  </div>
                  <div>
                    <label htmlFor="" className="block text-black mb-1 ml-4">
                      Role
                    </label>
                    <select
                      id="role"
                      className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                    >
                      <option>Entrepreneur</option>
                      <option>Investor</option>
                    </select>
                    <label
                      htmlFor="username"
                      className="block text-black mb-1 ml-4"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="username"
                      className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 3,
                          message:
                            "Username length must be more than 3 characters",
                        },
                      })}
                    />
                    {errors.username && (<p className="text-red-500 italic">{errors.username.message}</p>)}
                    <label
                      htmlFor="password"
                      className="block text-black mb-1 ml-4"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                      className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-6"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password length must be more than 8 characters",
                        },
                      })}
                    />
                     {errors.password && (<p className="text-red-500 italic">{errors.password.message}</p>)}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <button
                  type="submit"
                  className="text-center text-white py-2 px-4 bg-blue-500 border-2 border-blue-500 rounded-3xl hover:bg-blue-700"
                >
                  Sign up
                </button>
              </div>

              <div className="text-center text-white">
                <p>
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-blue-400 hover:text-blue-300 hover:underline"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
