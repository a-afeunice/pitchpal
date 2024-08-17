import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { idea } from "../../assets";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";
import Loader from "../../components/loader";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);
  };

  const onSubmit = async (data) => {
    console.log(data)
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log("Response", res.data);

      addToLocalStorage(res.data.accessToken, res.data.user);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      console.log(error)
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            Sign In
          </h2>
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
            <div className="text-center">
              <div className="relative">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition duration-300"
                  
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <Loader />
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </div>
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
