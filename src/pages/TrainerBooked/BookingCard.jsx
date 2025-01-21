// import Select from "react-select";

import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Check } from "lucide-react";

const BookingCard = ({ trainer, slot }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch class data from the server
  const {
    data: classes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["c"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/class`);
      return response.data;
    },
  });

  if (error) {
    console.error("Error fetching classes:", error);
  }

 

  const paymentStarted = (packageInfo) => {
    // link to navigate payment page with packageinfo and trainer and slot data
    
   
    
    navigate("/pay-now", {
      state: {
        trainer,
        slot,
        packageInfo,
      },
    });
  };
  return (
    <div className="">

      <div className="w-full rounded-md dark:text-gray-800">
        <div className="flex flex-col justify-between p-6 space-y-8 bg-[#143951] text-white rounded-md">
          <div className="space-y-2 ">
            <h2 className="text-3xl font-semibold tracking-wide">
              Trainer Name: {trainer?.info?.name}
            </h2>
            <div className="w-1/2">
              <select className="select select-bordered w-full max-w-xs text-white bg-gray-400">
                <option disabled selected>
                  Please select class
                </option>
                {!isLoading &&
                  classes?.map((classItem) => (
                    <option key={classItem._id}>{classItem.className}</option>
                  ))}
              </select>
            </div>
            <h2>Slot: {slot.selectedSlot}</h2>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between my-6">
          {trainer?.classLists?.map((classItem) => (
            <div key={classItem._id} className="shadow p-4">
              <h2 className="text-xl font-semibold tracking-wide">
                Class Name: {classItem?.className}
              </h2>
              <p className="dark:text-gray-800">
                Duration: {classItem?.duration}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* pricing section */}
      <section className="py-20 bg-white dark:bg-[#1F2937] transition-colors duration-300">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase text-[#143951] dark:text-[#6b9dc2]">Pricing</span>
          <h2 className="text-4xl font-bold lg:text-5xl text-gray-900 dark:text-white">Choose your best plan</h2>
        </div>

        <div className="flex flex-wrap items-stretch -mx-4">
          {/* Beginner Plan */}
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300 border border-gary-200">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Beginner</h4>
                <span className="text-6xl font-bold text-gray-900 dark:text-white">Free</span>
              </div>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                Etiam ac convallis enim, eget euismod dolor.
              </p>
              <ul className="flex-1 mb-6 text-gray-600 dark:text-gray-300">
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Aenean quis</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Morbi semper</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Tristique enim nec</span>
                </li>
              </ul>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#143951] hover:bg-[#0e2a3d] text-white transition-colors"
                onClick={() => {
                  paymentStarted({
                    name: "basic",
                    price_show_name: "$10",
                    price: 10,
                  })
                }}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded-lg shadow-lg bg-[#143951] text-white">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Pro</h4>
                <span className="text-6xl font-bold">
                  $24
                  <span className="text-sm tracking-wide">/month</span>
                </span>
              </div>
              <p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
              <ul className="flex-1 space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Phasellus tellus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Praesent faucibus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Aenean et lectus blandit</span>
                </li>
              </ul>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-white hover:bg-gray-100 text-[#143951] font-bold transition-colors"
                onClick={() => {
                  paymentStarted({
                    name: "standard",
                    price_show_name: "$50",
                    price: 50,
                  })
                }}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Team Plan */}
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300 border border-gray-200">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Team</h4>
                <span className="text-6xl font-bold text-gray-900 dark:text-white">
                  $72
                  <span className="text-sm tracking-wide">/month</span>
                </span>
              </div>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                Phasellus ultrices bibendum nibh in vehicula.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Fusce sem ligula</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Curabitur dictum</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Duis odio eros</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#143951] dark:text-[#6b9dc2]" />
                  <span>Vivamus ut lectus ex</span>
                </li>
              </ul>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-[#143951] hover:bg-[#0e2a3d] text-white transition-colors"
                onClick={() => {
                  paymentStarted({
                    name: "premimum",
                    price_show_name: "$100",
                    price: 100,
                  })
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BookingCard;
