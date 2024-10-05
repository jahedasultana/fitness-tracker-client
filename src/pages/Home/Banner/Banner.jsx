import { useEffect, useState } from "react";

const images = [
  {
    src: "https://i.postimg.cc/Gp3qKLHg/workout.jpg",
   
  },
  {
    src: "https://i.postimg.cc/MTpBgXSN/sportsm.jpg",
   
  },
  {
    src: "https://i.postimg.cc/W3ydKnSq/men2.jpg",
   
  },
  {
    src: "https://i.postimg.cc/jjdQYM6M/woman.jpg",
   
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
        <div className="relative w-full md:h-[450px] h-[280px] overflow-hidden">
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
                  className="w-full md:h-[450px] h-[280px] object-cover"
                />
                <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-full bg-black bg-opacity-40">
                  <h1 className="text-white text-3xl md:text-5xl font-bold px-4">
                    {image.text}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* property details */}
        <div className="md:absolute -bottom-[60px] md:mt-0 mt-1 rounded-xl bg-white border border-gray-800/30 md:w-[70%] w-[90%] mx-auto md:p-6 p-4 shadow-md">
          <div className="flex justify-between md:flex-row flex-col md:space-y-0 space-y-3 md:relative">
          {/* <Link to='/allClasses'> */}
            <button className="md:absolute text-center -top-10 bg-[#133c55] rounded-3xl py-2 px-5 text-sm font-medium text-white">Classes Page</button>
            {/* </Link> */}
            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80">
                property name here || title
              </h5>
              <p className="text-black/45 text-sm">Added: 02/03/2024</p>
            </div>
            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80">
                Price
              </h5>
              <p className="text-black/45 text-sm">22,000$</p>
            </div>
            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80">
                Areas
              </h5>
              <p className="text-black/45 text-sm">12,000 Sqr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


{/* <Link to='/allClasses'>
<button className="px-8 py-3 m-2 text-lg font-semibold rounded-lg dark:bg-violet-600 dark:text-gray-50">Classes Page</button>
</Link> */}