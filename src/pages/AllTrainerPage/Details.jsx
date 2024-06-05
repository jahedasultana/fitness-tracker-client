import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: trainer = {} } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/trainer/${id}`);
      return data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Fitness-Tracker | Details</title>
      </Helmet>
      <div className="flex my-16 gap-12">
        <div className="w-1/2">
          <div className="p-6 sm:p-12 shadow-lg border-2 rounded-lg bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <img
                src={trainer.image}
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-extrabold mb-2 text-center md:text-left">
               {trainer.name}
                </h4>
                <h4><span className="font-extrabold text-violet-500 text-lg mr-2">
                   years_of_experience: </span>{trainer.years_of_experience}</h4>
                   <hr />
                <p className="text-gray-400 dark:text-gray-600">
                 {trainer.background}
                </p>
              </div>
            </div>
           
          </div>
        </div>
        {/* Available slots */}
        <div className="">
      <h2 className="text-2xl font-bold">Available slots</h2>
      <p>----------------------------------------------------</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
