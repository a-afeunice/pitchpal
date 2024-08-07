import React from "react";
import { pitch } from "../../assets";
import { useForm } from "react-hook-form";

const LogIn = () => {
 const {
  register,
  handleSubmit,
  watch,
  formState : {errors}
 } =useForm();

const onSubmit = async (data) => {
  console.log(data);
}

  return (
    <div
      className="relative flex items-center justify-center h-screen w-screen bg-cover bg-center overflow-hidden overflow-y-hidden"
      style={{ backgroundImage: `url(${pitch})` }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative flex shadow-lg bg-white bg-opacity-30 p-8 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center text-xl font-serif">
            <div className="mx-8">
              <div className="mb-6 text-center">
                <h1 className="text-4xl font-bold ">Login</h1>
                <p className="text-sm text-gray-200 mt-3">
                  Welcome back! Please sign in to continue
                </p>
              </div>

              <label htmlFor="email" className="block text-black mb-1 ml-4">
                Email/Username
              </label>
              <input
                type="text"
                id="email"
                placeholder="email/username"
                className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                {
                  ...register("email", { required: "email is not provided" })
                  }
              />
                {errors.email && (<p className="text-red-500 italic">{errors.email.message}</p>)}

              <label htmlFor="password" className="block text-black mb-1 ml-4">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-6"
                {
                  ...register("password", { required: "provide password" })
                  }
              />
                {errors.password && (<p className="text-red-500 italic">{errors.password.message}</p>)}

              <div className="flex items-center justify-between w-full mb-6">
                <label className="flex items-center text-black text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a
                  href="/forgot-password"
                  className="text-blue-400 text-sm hover:text-blue-300 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="flex justify-center mb-6">
                <button
                  type="submit"
                  className="text-center text-white py-2 px-4 bg-blue-500 border-2 border-blue-500 rounded-3xl hover:bg-blue-700"
                >
                  Login
                </button>
              </div>

              <div className="text-center text-white">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-blue-400 hover:text-blue-300 hover:underline"
                  >
                    Sign up
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

export default LogIn;
