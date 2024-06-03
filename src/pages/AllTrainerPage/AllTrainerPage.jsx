import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllTrainerPage = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/trainers");
      return data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
      {trainers.map((item) => (
        <div
          key={item._id}
          className="max-w-lg p-4 shadow-md bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800"
        >
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="mb-0 capitalize text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800"
              >
                Photography
              </a>
            </div>
            <a rel="noopener noreferrer" href="#">
              See All
            </a>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?4"
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-violet-400 dark:text-violet-600 text-violet-400 dark:text-violet-600">
                  Facere ipsa nulla corrupti praesentium pariatur architecto
                </h3>
              </a>
              <p className="leading-snug text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Repellat, excepturi.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTrainerPage;
