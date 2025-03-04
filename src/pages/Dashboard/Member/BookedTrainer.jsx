import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Modal from "react-modal";
import Rating from "react-rating-stars-component";

// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css'

Modal.setAppElement("#root"); // Set the app element for accessibility

const BookedTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: payments = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payment/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const handleReviewSubmit = async () => {
    try {
      await axiosSecure.post("/review", {
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        trainerId: selectedTrainer?.trainer_info?._id,
        review,
        rating,
        date: new Date(),
      });
      setSelectedTrainer(null);
      setReview("");
      setRating(0);
      setIsModalOpen(false);
      toast.success("Review added successfully");
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to add review, please try again");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Your Email</th>
              <th>Your Name</th>
              <th>Trainer Name</th>
              <th>Class Name</th>
              <th>Slot</th>
              <th>Time</th>
              <th>Package</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment?.email}</td>
                <td>{payment?.displayName}</td>
                <td>{payment?.trainer_info?.name}</td>
                <td>{payment?.trainer_info?.skill.join(", ")}</td>
                <td>{payment?.trainer_info?.day?.join(", ")}</td>
                <td>{payment?.trainer_info?.time?.join(", ")}</td>
                <td>{payment?.package_name}</td>
                <td>{payment?.price}</td>
                <td>
                  <label
                    htmlFor="review-modal"
                    className="btn hover:bg-[#143951]/80 bg-[#143951] text-white"
                    onClick={() => setSelectedTrainer(payment)}
                  >
                    Review
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTrainer && (
        <input type="checkbox" id="review-modal" className="modal-toggle" />
      )}
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="review-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setSelectedTrainer(null)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Review {user?.displayName}</h3>
          <textarea
            className="textarea textarea-bordered w-full my-4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here"
          />
          <Rating
            count={5}
            value={rating}
            onChange={setRating}
            size={24}
            activeColor="#ffd700"
          />

          <div className="modal-action">
            <label
              htmlFor="review-modal"
              className="btn"
              onClick={handleReviewSubmit}
            >
              Submit Review
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTrainer;
