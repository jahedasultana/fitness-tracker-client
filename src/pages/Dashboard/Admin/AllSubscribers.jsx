
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const AllSubscribers = () => {
    const {  loading } = useAuth();
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subscribers')
            .then(res => res.json())
            .then(data => setSubscribers(data))
            .catch(error => console.error('Error fetching subscribers:', error));
    }, []);

    if (loading) {
        return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
      }
    return (
        <div className="mb-20">
            <SectionTitle heading="Newsletter Subscribers" />
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full bg-white dark:bg-gray-800">
                    <thead className="bg-violet-500 font-bold text-white">
                        <tr>
                            <th className="w-1/3 px-4 py-2">Name</th>
                            <th className="w-1/3 px-4 py-2">Email</th>
                            {/* <th className="w-1/3 px-4 py-2">Subscription Date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((subscriber, index) => (
                            <tr key={index} className="bg-violet-500 font-bold text-white text-center">
                                <td className="border px-4 py-2">{subscriber?.name}</td>
                                <td className="border px-4 py-2">{subscriber?.email}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSubscribers;
