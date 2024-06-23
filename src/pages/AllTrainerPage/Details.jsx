import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: trainer = {}, isLoading } = useQuery({
    queryKey: ["slot", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/slot/${id}`);
      return data;
    },
  });

  const { data: slotTime = {} } = useQuery({
    queryKey: ["slot", trainer?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/slot-add/${trainer?.email}`);
      return data;
    },
    enabled: !!trainer?.email,
  });
  console.log('slot time', slotTime)

  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 mx-auto bg-yellow-500 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Trainer information section */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <div className="lg:max-w-lg bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img
                className="object-cover w-full"
                src={trainer.photo}
                alt="Trainer"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {trainer.name}
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {trainer.bio}
                </p>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p className="">
                    <strong>Experience:</strong> {trainer.experience}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Email:</strong> {trainer.email}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Description:</strong> {trainer.description}
                  </p>

                  <p className="mb-2 font-bold">
                    Time: {trainer.time.join(", ")}
                  </p>
                  <div className="flex justify-between">
                    <p className="mb-2 font-bold">
                      Skills: {trainer.skill.join(", ")}
                    </p>
                    <p className="mb-2 font-bold">Age: {trainer.age}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <span className="block mb-2 text-lg font-medium tracking-widest text-center uppercase dark:text-violet-600">
                For Booking
              </span>
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                Available Slots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {slotTime.time &&
                  slotTime.time.length > 0 &&
                  slotTime.time.map((time, index) => (
                    <Link
                      key={index}
                      to={"/bookingPage"}
                      state={{
                        slotTime: slotTime,
                        trainer: trainer,
                        selectedSlot: time,
                      }}
                      className="flex flex-col items-center text-center text-black p-4 dark:text-white bg-gray-50 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                    >
                      <div className="flex items-center justify-center w-10 h-10 text-xl font-bold rounded-full bg-violet-600 text-white mb-2">
                        {index + 1}
                      </div>
                      <p className="text-lg font-semibold">{time}</p>
                    </Link>
                  ))}
              </div>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {slotTime.day &&
                  slotTime.day.length > 0 &&
                  slotTime.day.map((day, index) => (
                    <Link
                      key={index}
                      to={"/bookingPage"}
                      state={{
                        slotTime: slotTime,
                        trainer: trainer,
                        selectedSlot: day,
                      }}
                      className="flex flex-col items-center text-center text-black p-4 dark:text-white bg-gray-50 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                    >
                      <div className="flex items-center justify-center w-10 h-10 text-xl font-bold rounded-full bg-violet-600 text-white mb-2">
                        {index + 1}
                      </div>
                      <p className="text-lg font-semibold">{day}</p>
                    </Link>
                  ))}
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <div className="bg-white dark:bg-gray-800 h-48 w-full mx-auto my-12 rounded-xl flex  items-center justify-around shadow-xl dark:border-none border">
            <h2 className="text-4xl font-bold dark:text-white mb-4">
              Become A Trainer
            </h2>
            <Link
              to="/become-a-trainer"
              className="bg-blue-500 btn border-none  btn-lg text-white py-4 px-6 rounded-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Details;
