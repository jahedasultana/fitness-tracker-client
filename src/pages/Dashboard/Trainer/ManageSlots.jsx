
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageSlots = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: slotId = [], isLoading } = useQuery({
    queryKey: ["slot", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/slot-manage/${user?.email}`);
      return response.data;
    },
    enabled: !!user?.email, // only run query if user email exists
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosSecure.delete(`/slot-delete/${user?.email}`);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Successfully deleted.");
      queryClient.invalidateQueries(["slot", user?.email]);
    },
    onError: (error) => {
      toast.error(`Failed to delete: ${error.message}`);
    }
  });

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate();
      }
    });
  };

  if (loading || isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (!Array.isArray(slotId)) {
    return <div>Unexpected error: slots data is not in the expected format.</div>;
  }

  return (
    <div>
      <section className="container px-4 mx-auto">
      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Manage Slots</h1>
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Slots Title</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Skill</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Day</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Time</th>
                      <th className="relative py-3.5 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {slotId.map((slot) => (
                      <tr key={slot._id}>
                        <td className="px-4 py-4 tetimext-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{slot?.trainerName}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{slot.skill.join(", ")}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{slot.day.join(", ")}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{slot.time.join(", ")}</td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={handleDelete}
                            className="text-white px-3 py-2 rounded-md hover:bg-[#143951]/80 bg-[#143951] transition-colors duration-200 focus:outline-none"
                          >
                            Delete All
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSlots;
