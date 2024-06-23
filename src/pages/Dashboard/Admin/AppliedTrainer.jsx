import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AppliedTrainer = () => {
  const { loading } = useAuth();
  const [trainers, setTrainers] = useState([]);
  const axios = useAxiosSecure();

  let fetchTrainer = () => {
    fetch("http://localhost:5000/slot-slot")
      .then((res) => res.json())
      .then((data) => setTrainers(data))
      .catch((error) => console.error("Error fetching trainers:", error));
  };

  let confirmTrainer = (email, make_trainer = false) => {
    axios
      .post("http://localhost:5000/slot/make-trainer/" + email, {
        make_trainer,
      })
      .then((res) => {
        if (res.status) {
          toast.success("Trainer Status Change Successfully");
        }
      })
      .finally(() => {
        fetchTrainer();
      });
  };

  useEffect(() => {
    fetchTrainer();
 
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-12 bg-violet-900 mt-44 items-center">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }

  return (
    <div className="mb-20 bg-white p-6 rounded-lg shadow-lg">
      <SectionTitle heading="Applied Trainers" />
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full bg-white dark:bg-violet-500 divide-y divide-gray-200">
          <thead className="bg-violet-900 text-lg font-bold text-white">
            <tr className="text-left">
              <th className="px-4 py-3">Sl</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Photo</th>
              <th className="px-4 py-3">Skill</th>
              <th className="px-4 py-3">Day</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trainers?.map((trainer, index) => (
              <tr key={trainer._id} className="text-sm font-semibold text-gray-900 dark:text-white">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{trainer?.email}</td>
                <td className="px-4 py-3">{trainer?.status}</td>
                <td className="px-4 py-3">{trainer?.info?.name}</td>
                <td className="px-4 py-3">{trainer?.info?.age}</td>
                <td className="px-4 py-3">
                  <img
                    src={trainer?.info?.photo}
                    alt="Photo"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-3">{trainer?.info.skill}</td>
                <td className="px-4 py-3">{trainer?.info.day}</td>
                <td className="px-4 py-3">{trainer?.info.time}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => confirmTrainer(trainer?.email, true)}
                    className="btn btn-sm bg-green-500 text-white hover:bg-green-700"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => confirmTrainer(trainer?.email, false)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-700"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedTrainer;
