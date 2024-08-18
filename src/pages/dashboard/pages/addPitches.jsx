import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddPitches = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("companyName", data.companyName);
    formData.append("description", data.description);
    formData.append("fundingGoal", data.fundingGoal);
    formData.append("video", data.video[0]); // Access the uploaded file

    console.log(formData.get("video")); // You can check the uploaded file here
    setIsSubmitting(true);
    // Add your API call or form submission logic here
  };

  return (
    <div className="h-screen">
      <h1 className="flex justify-center font-bold text-3xl mb-8 mt-10">
        Add Pitch
      </h1>
      <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="place-content-center m-8"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-1 ml-4">Title</label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              {errors.title && <p className="text-red-500 text-sm ml-4">{errors.title.message}</p>}

              <label className="block mb-1 ml-4">Video</label>
              <input
                type="file"
                id="video"
                accept="video/*"
                {...register("video", { required: "Video file is required" })}
                className="h-11 w-full py-2 border-black border-2 rounded-lg mb-4"
              />
              {errors.video && <p className="text-red-500 text-sm ml-4">{errors.video.message}</p>}

              <label className="block mb-1 ml-4">Company Name</label>
              <input
                type="text"
                id="companyName"
                {...register("companyName", { required: "Company Name is required" })}
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              {errors.companyName && <p className="text-red-500 text-sm ml-4">{errors.companyName.message}</p>}
            </div>

            <div>
              <label className="block mb-1 ml-4">Description</label>
              <textarea
                id="description"
                {...register("description", { required: "Description is required" })}
                className="h-28 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              {errors.description && <p className="text-red-500 text-sm ml-4">{errors.description.message}</p>}

              <label className="block mb-1 ml-4">Funding Goal</label>
              <input
                type="number"
                id="fundingGoal"
                {...register("fundingGoal", { required: "Funding Goal is required" })}
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              {errors.fundingGoal && <p className="text-red-500 text-sm ml-4">{errors.fundingGoal.message}</p>}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="h-10 w-30 px-3 py-2 bg-green-500 border-2 border-green-500 text-white rounded-xl hover:bg-white hover:text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Add Pitch"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPitches;
