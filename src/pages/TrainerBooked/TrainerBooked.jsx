import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BookingCard from "./BookingCard";

const TrainerBooked = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const location = useLocation();
  const { trainer, selectedSlot } = location.state || {};

  return (
    <div>
      <Helmet>
        <title> Booking Page</title>
      </Helmet>
      <SectionTitle heading={"Booking Page"}></SectionTitle>
      <div className="">
        <BookingCard
          key={trainer._id}
          slot={{ ...trainer, selectedSlot }}
          trainer={trainer}
        />
      </div>
    </div>
  );
};

export default TrainerBooked;
