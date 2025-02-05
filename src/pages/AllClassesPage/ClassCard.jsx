import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { ArrowRight, Users } from "lucide-react"

const ClassCard = ({ singleClass }) => {
  const { className, image, description, _id } = singleClass
  const axiosPublic = useAxiosPublic()

  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers", _id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/trainers/class/${_id}`)
      return data
    },
  })

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#1F2937] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {/* Image with overlay gradient */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#143951]/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
        <img
          src={image || "/placeholder.svg"}
          alt={className}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-medium bg-[#143951] text-white rounded-full">Fitness Class</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-[#143951] dark:group-hover:text-sky-400 transition-colors">
          {className}
        </h2>

        <div className="min-h-12 overflow-hidden mb-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4">{description}</p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
          <div className="flex items-center mb-3">
            <Users size={18} className="text-[#143951] dark:text-sky-400 mr-2" />
            <h3 className="font-semibold text-gray-800 dark:text-white">Trainers ({trainers.length})</h3>
          </div>

          {trainers.length > 0 ? (
            <div className="flex -space-x-2 overflow-hidden">
              {trainers.slice(0, 5).map((trainer) => (
                <Link key={trainer?._id} to={"/trainer/" + trainer?._id} className="relative group/trainer">
                  <div className="absolute -inset-1 bg-[#143951] dark:bg-sky-500 rounded-full opacity-0 group-hover/trainer:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <img
                    src={trainer?.image || "/placeholder.svg"}
                    className="relative h-10 w-10 rounded-full border-2 border-white dark:border-[#1F2937] object-cover transition-transform group-hover/trainer:scale-110"
                    alt={trainer?.name || "Trainer"}
                  />
                </Link>
              ))}
              {trainers.length > 5 && (
                <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white dark:border-[#1F2937] bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-800 dark:text-white">
                  +{trainers.length - 5}
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">No trainers available</p>
          )}
        </div>
      </div>

      {/* View details button */}
      <div className="p-5 pt-0">
        
        <button className="flex items-center justify-center w-full py-2.5 px-4 bg-[#143951] hover:bg-[#0e2a3c] text-white rounded-lg transition-colors group/btn">
        <span>View Details</span>
        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
        

      </div>
    </div>
  )
}

export default ClassCard

