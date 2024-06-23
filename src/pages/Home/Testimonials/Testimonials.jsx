import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-24">
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-10 flex flex-col items-center bg-violet-600 p-10 rounded-3xl">
              <img
                alt=""
                src={review.photoURL}
                className="object-cover w-24 h-24 mb-4 rounded-full shadow dark:bg-gray-500"
              />

              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="mt-3 text-white">{review.review}</p>
              <h3 className="text-2xl font-semibold mt-3 text-white">
                {review.displayName}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
