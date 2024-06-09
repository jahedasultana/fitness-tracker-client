import { Helmet } from "react-helmet-async";
import { TbFidgetSpinner } from "react-icons/tb";
import Select from "react-select";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddNewSlot = () => {
  const { user, loading } = useAuth() || {};
  const axiosSecure = useAxiosSecure();

  const { data: trainerData, isLoading: trainerLoading } = useQuery({
    queryKey: ["trainer", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data;
    }
  });

  const { data: classes, isLoading: classesLoading } = useQuery({
    queryKey: "classes",
    queryFn: async () => {
      const { data } = await axiosSecure.get("/classes");
      return data;
    }
  });

  const mutation = useMutation({
    mutationFn: async (slotData) => {
      const { data } = await axiosSecure.post("/trainerSlots", slotData);
      return data;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Slot added successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "Error!",
        text: "Failed to add slot",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      console.log(error);
    },
  });

  const handleSlotAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const slotName = form.slotName.value;
    const slotTime = form.slotTime.value;
    const selectedClasses = form.classes.value;
    const days = form.days.value;

    const slotData = {
      trainerId: trainerData?._id,
      slotName,
      slotTime,
      classes: selectedClasses,
      days,
      trainer: {
        name: user?.displayName,
        email: user?.email,
      },
    };

    try {
      console.table(slotData);
      await mutation.mutateAsync(slotData);
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: "Failed to add slot",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  if (loading || trainerLoading || classesLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TbFidgetSpinner className="animate-spin text-violet-700 text-6xl" />
      </div>
    );
  }

  const classOptions = classes.map((classItem) => ({
    value: classItem.className,
    label: classItem.className,
  }));

  const daysOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  const slotNameOptions = [
    { value: "morning", label: "Morning Slot" },
    { value: "afternoon", label: "Afternoon Slot" },
    { value: "evening", label: "Evening Slot" },
    { value: "night", label: "Night Slot" },
  ];

  const slotTimeOptions = [
    { value: "30 minutes", label: "30 minutes" },
    { value: "1 hour", label: "1 hour" },
    { value: "1.5 hours", label: "1.5 hours" },
    { value: "2 hours", label: "2 hours" },
  ];

  return (
    <div>
      <Helmet>
        <title>Trainer | Add Slot</title>
      </Helmet>
      <div className="text-lg bg-violet-900 font-bold p-4 md:p-8 lg:p-16 my-16 mx-2 rounded-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-lato text-center font-extrabold mb-6">
          Add Slot
        </h2>

        <form onSubmit={handleSlotAdd} className="space-y-4">
          {/* Slot name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-lg font-bold">
                Slot Name
              </span>
            </label>
            <Select
              required
              name="slotName"
              options={slotNameOptions}
              className="input input-bordered input-double-line p-3"
            />
          </div>

          {/* Slot time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-lg font-bold">
                Slot Time
              </span>
            </label>
            <Select
              required
              name="slotTime"
              options={slotTimeOptions}
              className="input input-bordered input-double-line p-3"
            />
          </div>

          {/* Select days */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-lg font-bold">
                Select Days
              </span>
            </label>
            <Select
              required
              name="days"
              options={daysOptions}
              isMulti
              className="input input-bordered input-double-line p-3"
            />
          </div>

          {/* Classes included */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-lg font-bold">
                Classes Included
              </span>
            </label>
            <Select
              required
              name="classes"
              options={classOptions}
              isMulti
              className="input input-bordered input-double-line p-3"
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-violet-500"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Save Slot"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewSlot;
