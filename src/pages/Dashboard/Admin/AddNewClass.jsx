import { Helmet } from "react-helmet-async";
import { TbFidgetSpinner } from "react-icons/tb";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

import Swal from "sweetalert2";
import { imageUpload } from "../../../components/imageUpload";

const AddNewClass = () => {
  const { user, loading } = useAuth() || {};
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (classData) => {
      const { data } = await axiosSecure.post(`/class`, classData);
      return data;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Class added successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "Error!",
        text: "Failed to add class",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      
    },
  });

  const handleClassAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const className = form.className.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const admin = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };
    try {
      const image_url = await imageUpload(image);
      const classData = { className, description, image: image_url, admin };
      console.table(classData);
      await mutateAsync(classData);
    } catch (err) {
      
      Swal.fire({
        title: "Error!",
        text: "Failed to upload image",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Admin | Add Class</title>
      </Helmet>
      <div className="text-lg bg-[#143951] font-bold p-4 md:p-8 lg:p-16 my-16 mx-2 rounded-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-lato text-center font-extrabold mb-6">
          Add Class
        </h2>

        <form onSubmit={handleClassAdd} className="space-y-4">
          {/* Class name and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg font-bold">
                  Class Name
                </span>
              </label>
              <input
                required
                type="text"
                name="className"
                placeholder="Class Name"
                className="input input-bordered input-double-line p-3"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg font-bold">
                  Class Image
                </span>
              </label>
              <input
                required
                type="file"
                name="image"
                className="input input-bordered input-double-line p-3"
                accept="image/*"
              />
            </div>
          </div>
          {/* Class Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-lg font-bold">
                Class Description
              </span>
            </label>
            <textarea
              required
              name="description"
              placeholder="Class Description"
              className="input input-bordered input-double-line p-3 h-40 resize-none"
            />
          </div>
          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#143951] hover:bg-gray-800 border border-gray-500"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Save Class"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewClass;