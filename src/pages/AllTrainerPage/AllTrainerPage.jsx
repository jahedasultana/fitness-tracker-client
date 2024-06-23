import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const AllTrainerPage = () => {
  const axiosPublic = useAxiosPublic();

  const { data: slots = [] } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/slots");
      return data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Fitness | Trainer Slots</title>
      </Helmet>
      <SectionTitle heading={"Available Trainer"}></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-16 ">
        {slots.map((slot) => (
          <Link
            to={`/slot/${slot._id}`}
            key={slot._id}
            className="card bg-white p-4 shadow-xl border-l-2 border-b-2 rounded-md hover:bg-violet-200 transition duration-300"
          >
            <img
              src={slot.photo}
              alt=""
              className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <h3 className="text-3xl capitalize mt-6 text-violet-600 font-bold mb-2">
              {slot.name}
            </h3>
            <div className="flex justify-between">
              <p className="mb-2 font-bold">Age: {slot.age}</p>
              <p className="mb-2 font-bold">Experience: {slot.experience} years</p>
            </div>
            <div className="flex justify-between">
              <p className="mb-2 font-bold">Time: {slot.time.join(", ")}</p>
            </div>

            <p className="mb-2 font-bold">Skills: {slot.skill.join(", ")}</p>
            <div className="flex gap-6 my-3">
              <Link>
                <FaFacebook className="text-3xl" />
              </Link>
              <Link>
                <GrInstagram className="text-3xl" />
              </Link>
              <Link>
                <FaTwitter className="text-3xl" />
              </Link>
            </div>
            <button className="mt-2 px-4 py-2 bg-violet-500 w-full text-white rounded-md">
              See More
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllTrainerPage;
