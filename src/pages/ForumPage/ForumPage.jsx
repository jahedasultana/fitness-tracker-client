import { Helmet } from "react-helmet-async"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { BookmarkIcon, ChevronLeftIcon, ChevronRightIcon, HeartIcon, MessageCircleIcon, ShareIcon } from "lucide-react"

const ForumPage = () => {
  // Correctly call the hook to get the axios instance
  const axiosPublic = useAxiosPublic()
  const [page, setPage] = useState(1)

  // Use the axios instance returned by the hook
  const { data, isLoading } = useQuery({
    queryKey: ["forum", page],
    queryFn: async () => {
      const response = await axiosPublic.get(`/forum?page=${page}`)
      return response.data
    },
  })

  // Handle the case when data is undefined during initial load
  const forums = data?.forums || []
  const totalPages = data?.pages || 1

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Forums</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 dark:text-white">
          Forum <span className="text-[#143951] dark:text-">Discussions</span>
        </h1>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                      <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {forums.map((forum) => (
                <div
                  key={forum._id}
                  className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-400/60"
                >
                  <div className="relative">
                    <img
                      src={forum.image || "/placeholder.svg?height=300&width=500"}
                      alt={forum.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#143951] text-white">
                        {forum.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={forum.photoURL || "/placeholder.svg?height=48&width=48"}
                        alt={forum.displayName}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#143951]"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{forum.displayName}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Posted by {forum.role}</p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{forum.title}</h2>

                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{forum.description}</p>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-[#143951] dark:text-gray-400 dark:hover:text-violet-400 transition-colors">
                          <HeartIcon size={18} />
                          <span>283</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-[#143951] dark:text-gray-400 dark:hover:text-violet-400 transition-colors">
                          <MessageCircleIcon size={18} />
                          <span>30</span>
                        </button>
                      </div>

                      <div className="flex space-x-2">
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <ShareIcon size={18} className="text-gray-500 dark:text-gray-400" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <BookmarkIcon size={18} className="text-gray-500 dark:text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setPage(page > 1 ? page - 1 : page)}
                  disabled={page === 1}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-l-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeftIcon size={16} className="mr-1" />
                  Previous
                </button>
                <div className="inline-flex items-center px-4 py-2 text-sm font-medium bg-[#143951] text-white border border-[#143951]">
                  Page {page} of {totalPages}
                </div>
                <button
                  onClick={() => setPage(page < totalPages ? page + 1 : page)}
                  disabled={page === totalPages}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-r-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRightIcon size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ForumPage;