import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, ChevronRight, Calendar, Award, Dumbbell } from "lucide-react"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import useAxiosPublic from "../../hooks/useAxiosPublic"

const AllTrainerPage = () => {
  const axiosPublic = useAxiosPublic()

  const { data: slots = [] } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/slots")
      return data
    },
  })

  return (
    <div className="dark:bg-[#1F2937] min-h-screen py-10 transition-colors duration-300">
      <Helmet>
        <title>Fitness | Trainer Slots</title>
      </Helmet>

      <SectionTitle heading={"Available Trainers"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 my-16">
        {slots.map((slot) => (
          <Link
            to={`/slot/${slot._id}`}
            key={slot._id}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 dark:border border-gray-600"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#143951] to-[#1e5272] rounded-bl-full opacity-80" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#143951] to-[#1e5272] rounded-tr-full opacity-60" />

            <div className="relative p-6 flex flex-col h-full">
              {/* Image with border gradient */}
              <div className="relative mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#143951] to-[#1e5272] rounded-full blur-sm transform scale-105 group-hover:scale-110 transition-transform duration-300" />
                <img
                  src={slot.photo || "/placeholder.svg"}
                  alt={slot.name}
                  className="relative w-32 h-32 object-cover rounded-full border-4 border-white dark:border-gray-700"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 group-hover:text-[#143951] dark:group-hover:text-[#6ba0bc] transition-colors duration-300">
                {slot.name}
              </h3>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg flex items-center">
                  <Calendar className="w-4 h-4 text-[#143951] dark:text-[#6ba0bc] mr-2" />
                  <span className="text-sm font-medium dark:text-gray-200">Age: {slot.age}</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg flex items-center">
                  <Award className="w-4 h-4 text-[#143951] dark:text-[#6ba0bc] mr-2" />
                  <span className="text-sm font-medium dark:text-gray-200">{slot.experience} yrs exp</span>
                </div>
              </div>

              {/* Days */}
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-3">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Available Days:</h4>
                <div className="flex flex-wrap gap-1">
                  {slot.day.map((day, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#143951]/10 dark:bg-[#143951]/30 text-[#143951] dark:text-[#6ba0bc] px-2 py-1 rounded-full"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 flex items-center">
                  <Dumbbell className="w-4 h-4 text-[#143951] dark:text-[#6ba0bc] mr-1" />
                  Skills:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {slot.skill.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#143951]/10 dark:bg-[#143951]/30 text-[#143951] dark:text-[#6ba0bc] px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social media */}
              <div className="flex justify-center gap-4 my-2">
                <a
                  href="#"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#143951]/10 dark:hover:bg-[#143951]/30 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5 text-[#143951] dark:text-[#6ba0bc]" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#143951]/10 dark:hover:bg-[#143951]/30 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5 text-[#143951] dark:text-[#6ba0bc]" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#143951]/10 dark:hover:bg-[#143951]/30 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 text-[#143951] dark:text-[#6ba0bc]" />
                </a>
              </div>

              {/* Button */}
              <button className="mt-auto w-full py-3 bg-[#143951] hover:bg-[#0d2a3d] dark:bg-[#143951] dark:hover:bg-[#0d2a3d] text-white rounded-lg font-medium flex items-center justify-center transition-all duration-300">
                See Details
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllTrainerPage;