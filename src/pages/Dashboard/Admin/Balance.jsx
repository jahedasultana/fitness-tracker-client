// src/pages/Dashboard/Admin/Balance.jsx
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PieChart from "./PieChart";



const Balance = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [trainers, setTrainers] = useState([]);
    
    useEffect(() => {
        fetch('https://fitness-tracker-server-lemon.vercel.app/subscribers')
            .then(res => res.json())
            .then(data => setSubscribers(data))
            .catch(error => console.error('Error fetching subscribers:', error));
    }, []);

    useEffect(() => {
        fetch('https://fitness-tracker-server-lemon.vercel.app/payment-list')
            .then(res => res.json())
            .then(data => setTrainers(data?.data))
            .catch(error => console.error('Error fetching trainers:', error));
    }, []);

    let total = 0;
   

    let calculateTotal = () => {
        trainers?.forEach((trainer) => {
            total += trainer?.price
        });
        return total;
    }

    return (
        <div className="mb-20">
            <SectionTitle heading="Balance" />
            <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full text-white">
                    <thead className="bg-[#143951] text-lg font-bold text-white">
                        <tr className="text-left text-white">
                            <th className="px-4 py-4">Sl</th>
                            <th className="w-1/3 px-4 py-4">Email</th>
                            <th className="w-1/3 px-4 py-4">Package Name</th>
                            <th className="w-1/3 px-4 py-4">Trainer Name</th>
                            <th className="w-1/3 px-4 py-4">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers?.slice(-6).reverse().map((subscriber, index) => {
                            return <tr key={subscriber._id} className="font-bold text-white bg-[#37576B]">
                                <td className="border px-4 py-4">{index + 1}</td>
                                <td className="border px-4 py-4">{subscriber?.email}</td>
                                <td className="border px-4 py-4">{subscriber?.package_name}</td>
                                <td className="border px-4 py-4">{subscriber?.trainer_info?.name}</td>
                                <td className="border px-4 py-4">{subscriber?.price}</td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="border px-4 py-4 text-black/90 dark:text-white/90">Total: {calculateTotal()}</th>
                        </tr>
                    </tfoot>
                </table>

             <div className="w-1/2 mx-auto ">
             <PieChart paiData={{
                    total_subscriber: subscribers.length,
                    paid_members: trainers.length
                }} />
             </div>
            </div>
        </div>
    );
};

export default Balance;