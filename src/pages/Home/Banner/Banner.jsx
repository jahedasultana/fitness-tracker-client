import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5";
const images = [
  {
    src: "https://i.postimg.cc/SKS6Vs12/workout.jpg",
  },
  {
    src: "https://i.postimg.cc/nh8kyVgh/sportsm.jpg",
  },
  {
    src: "https://i.postimg.cc/mgGYdX1c/men2.jpg",
  },
  {
    src: "https://i.postimg.cc/J4X5zSBn/woman.png",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:pb-[60px]">
      <div className="md:relative md:flex justify-center">
        <div className="relative w-full md:h-[475px] h-[280px] overflow-hidden">
          <div
            className="transition-opacity duration-700 ease-in-out"
            style={{ opacity: 1 }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full aspect-auto md:h-[475px] h-[280px] object-cover object-top"
                />
                <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-full bg-black bg-opacity-30">
                  <h1 className="text-white text-3xl md:text-5xl font-bold px-4">
                    {image.text}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* property details */}
        {/* property details */}
        <div className="md:absolute -bottom-[60px] md:mt-0 mt-1 rounded-xl bg-white dark:bg-gray-900 border border-gray-800/30 md:w-[70%] w-[90%] mx-auto md:p-6 p-4 shadow-md">
          <div className="flex justify-evenly md:flex-row flex-col md:space-y-0 space-y-3 md:relative">
            <Link
              className="md:absolute right-5 -top-[38px] bg-[#133c55] text-white rounded-3xl text-[13px] px-3 pb-[8px] pt-[3px]"
              to="/allClasses"
            >
              Class Page
            </Link>

            <div className="text-[#1a77b0] pt-2 dark:text-[#63cdda]">
              <IoTimerOutline className="md:text-6xl text-4xl" />
            </div>

            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80 dark:text-white">
                Morning
              </h5>
              <p className="text-black/45 text-sm dark:text-gray-300">
                8:00 AM - 11:00 AM
              </p>
            </div>

            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80 dark:text-white">
                Evening
              </h5>
              <p className="text-black/45 text-sm dark:text-gray-300">
                7:00 PM - 8:00 PM
              </p>
            </div>

            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-[#2383be] dark:text-[#63cdda] text-lg font-semibold">
                Night
              </h5>
              <p className="text-black/45 text-sm dark:text-gray-300">
                9:00 PM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
