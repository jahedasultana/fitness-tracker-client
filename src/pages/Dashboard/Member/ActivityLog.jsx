import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";


const ActivityLog = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState(null);

    const { data: slots = [], isLoading, error } = useQuery({
        queryKey: ['slots', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/slots/${user?.email}`);
            return data;
        }
    });
   

    const openModal = (slot) => {
        setSelectedApplication(slot);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedApplication(null);
        setShowModal(false);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Trainer Application Status</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array?.isArray(slots) && slots.length > 0 ? (
                            slots?.map((slot, index) => (
                                <tr key={slot._id}>
                                    <td>{index + 1}</td>
                                    <td>{slot?.info?.email}</td>
                                    <td>{slot?.info?.status}</td>
                                    <td>
                                        <button className="btn" onClick={() => openModal(slot)}>
                                            <FaEye /> {/* Eye icon */}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="text-center" colSpan="4">No applications found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && selectedApplication && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="modal-box bg-white p-6 rounded shadow-lg">
                        <h3 className="font-bold text-lg">Feed Back</h3>
                        <p className="py-2"><strong>Name:</strong> {selectedApplication?.info?.name}</p>
                        <p className="py-2"><strong>Email:</strong> {selectedApplication?.info?.email}</p> 
                        <p className="py-2"><strong>Age:</strong> {selectedApplication?.info?.age}</p>
                        <p className="py-2"><strong>Photo:</strong> <img src={selectedApplication?.info?.photo} alt="applicant" className="w-16 h-16 rounded-full" /></p>
                        <p className="py-2"><strong>Skills:</strong> {selectedApplication?.info?.skill?.join(', ')}</p>
                        <p className="py-2"><strong>Days:</strong> {selectedApplication?.info?.day?.join(', ')}</p>
                        <p className="py-2"><strong>Time:</strong> {selectedApplication?.info?.time?.join(', ')}</p>
                        <p className="py-2"><strong>Experience:</strong> {selectedApplication?.info?.experience} years</p>
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityLog;