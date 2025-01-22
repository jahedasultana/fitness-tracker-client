"use client"

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { Link, useParams } from "react-router-dom"
import { CalendarDays, Clock, Mail, Award, User } from "lucide-react"

const Details = () => {
  const { id } = useParams()
  const axiosPublic = useAxiosPublic()

  const { data: trainer = {}, isLoading } = useQuery({
    queryKey: ["slot", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/slot/${id}`)
      return data
    },
  })

  const { data: slotTime = {} } = useQuery({
    queryKey: ["slot", trainer?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/slot-add/${trainer?.email}`)
      return data
    },
    enabled: !!trainer?.email,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-t-violet-600 border-b-violet-600 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-12 mx-auto max-w-7xl">


   {/* Become a trainer banner */}
   <div className="mb-12">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#143951]/90 to-[#143951]/80  rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-[url('https://i.postimg.cc/q7JZLnTY/abstract.jpg')] opacity-10"></div>
            <div className="px-8 py-12 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Become A Trainer</h2>
                <p className="text-violet-100 max-w-md">
                  Share your expertise and help others achieve their fitness goals
                </p>
              </div>
              <Link
                to="/become-a-trainer"
                className="inline-flex z-30 items-center px-6 py-3 text-base font-medium text-[#143951] bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>


        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Trainer information section */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200/10">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 sm:h-80"
                  src={trainer.photo || "/placeholder.svg"}
                  alt={trainer.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h1 className="text-3xl font-bold text-white">{trainer.name}</h1>
                </div>
              </div>

              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{trainer.bio || "No Bio"}"</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#143951]" />
                      <span className="text-gray-800 dark:text-gray-200">
                        <span className="font-medium">Experience:</span> {trainer.experience}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#143951]" />
                      <span className="text-gray-800 dark:text-gray-200">
                        <span className="font-medium">Email:</span> {trainer.email}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-[#143951]" />
                      <span className="text-gray-800 dark:text-gray-200">
                        <span className="font-medium">Age:</span> {trainer.age}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#143951]" />
                      <span className="text-gray-800 dark:text-gray-200">
                        <span className="font-medium">Available Times:</span> {trainer.time.join(", ")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {trainer.skill &&
                        trainer.skill.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-[#143951] text-white rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About</h3>
                    <p className="text-gray-700 dark:text-gray-300">{trainer.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking section */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg h-ful border border-gray-200/10">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-[#143951] text-white  text-sm font-medium rounded-full mb-3">
                  BOOKING
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Available Time Slots</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Select a time slot that works for you</p>
              </div>

              {slotTime.time && slotTime.time.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {slotTime.time.map((time, index) => (
                    <Link
                      key={index}
                      to={"/bookingPage"}
                      state={{
                        slotTime: slotTime,
                        trainer: trainer,
                        selectedSlot: time,
                      }}
                      className="group"
                    >
                      <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:border-[#143951] dark:hover:border-[#143951] hover:shadow-md group-hover:scale-105">
                        <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-violet-100 dark:bg-[#143951] text-[#143951] dark:text-violet-100 group-hover:bg-[#143951] group-hover:text-white transition-colors duration-300">
                          <CalendarDays className="w-5 h-5" />
                        </div>
                        <p className="text-base font-medium text-gray-900 dark:text-white">{time}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No time slots available</p>
                </div>
              )}
            </div>
          </div>
        </div>

     
      </div>
    </div>
  )
}

export default Details

