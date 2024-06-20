import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BookingCard from "./BookingCard";

const TrainerBooked = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedSlot, trainer } = location.state || {};
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Navigate back if no selectedSlot or trainer is provided in the state
    if (!selectedSlot && !trainer) {
        navigate(-1);
        return null; // Return null to render nothing
    }

    // Check if trainer and trainer.slots are defined
    if (!trainer || !trainer.slots || trainer.slots.length === 0) {
        return <div>No slots found.</div>;
    }

    return (
        <div>
            <Helmet>
                <title>Fitness | Booking Page</title>
            </Helmet>
            <SectionTitle heading={'Booking Page'} />
            <div className="">
                <BookingCard key={trainer._id} trainer={trainer} slot={selectedSlot} />
            </div>
        </div>
    );
};

export default TrainerBooked;
