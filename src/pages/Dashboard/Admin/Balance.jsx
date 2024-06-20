import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import PieChart from "./PieChart";


const Balance = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const { loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetch('http://localhost:5000/subscribers')
            .then(res => res.json())
            .then(data => setSubscribers(data))
            .catch(error => console.error('Error fetching subscribers:', error));
    }, []);

    useEffect(() => {
        fetchTrainer();
    }, []);

    const fetchTrainer = () => {
        fetch('http://localhost:5000/payment-list')
            .then(res => res.json())
            .then(data => setTrainers(data?.data))
            .catch(error => console.error('Error fetching trainers:', error));
    };

    let total = 0;
    const calculateTotal = () => {
        trainers?.forEach((trainer) => {
            total += trainer?.price;
        });
        return total;
    };

    if (loading) {
        return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>;
    }

    return (
        <div className="mb-20">
            <SectionTitle heading="Balance" />
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full bg-white dark:bg-gray-800">
                    <thead className="bg-black text-lg font-bold text-white">
                        <tr className="text-left">
                            <th className="px-4 py-4">Sl</th>
                            <th className="w-1/3 px-4 py-4">email</th>
                            <th className="w-1/3 px-4 py-4">package name</th>
                            <th className="w-1/3 px-4 py-4">trainer name</th>
                            <th className="w-1/3 px-4 py-4">price</th>
                            {/* <th className="w-1/3 px-4 py-2">Subscription Date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {trainers?.reverse()?.slice(0, 6).map((subscriber, index) => (
                            <tr key={subscriber._id} className="font-bold text-black">
                                <td className="border px-4 py-4">{index + 1}</td>
                                <td className="border px-4 py-4">{subscriber?.email}</td>
                                <td className="border px-4 py-4">{subscriber?.package_name}</td>
                                <td className="border px-4 py-4">{subscriber?.trainer_info?.name}</td>
                                <td className="border px-4 py-4">{subscriber?.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="border px-4 py-4">Total: {calculateTotal()}</th>
                        </tr>
                    </tfoot>
                </table>

                {/* <PieChart
                    paiData={{
                        total_subscriber: subscribers.length,
                        paid_members: trainers.length
                    }}
                /> */}
            </div>
        </div>
    );
};

export default Balance;
