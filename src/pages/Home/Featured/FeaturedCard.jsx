const FeaturedCard = () => {
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 my-16  bg-[#FFFFFF] dark:bg-[#1D232A] text-gray-700 dark:text-gray-300">
      <div className="rounded-md  bg-gray-50 dark:bg-gray-800 border dark:border-gray-500  border-gray-300 shadow-lg sm:w-96 p-4">
        <img
          src="https://i.ibb.co/48r3GRF/full-shot-woman-working.jpg"
          alt=""
          className="object-cover object-center rounded-md w-full h-72 bg-gray-500 transition-all duration-700 dark:bg-gray-500 hover:scale-150"
        />
        <div className="p-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">
            Weight Lifting
          </h2>
          <p>
            Join a supportive community of like-minded individuals. Share
            experiences, get tips, and stay motivated together.
          </p>
        </div>
      </div>
      <div className="rounded-md  bg-gray-50 dark:bg-gray-800 border dark:border-gray-500  border-gray-300 shadow-lg sm:w-96 p-4">
        <img
          src="https://i.ibb.co/yXMskVD/beautiful-brunette-female.jpg"
          alt=""
          className="object-cover object-center rounded-md w-full h-72 bg-gray-500 transition-all duration-700 dark:bg-gray-500 hover:scale-150"
        />
        <div className="p-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">
            Body Building
          </h2>
          <p>
            Get custom workout plans tailored to your fitness goals and level.
            Achieve better results with a plan made just for you.
          </p>
        </div>
      </div>
      <div className="rounded-md  bg-gray-50 dark:bg-gray-800 border dark:border-gray-500  border-gray-300 shadow-lg sm:w-96 p-4">
        <img
          src="https://i.ibb.co/wdXLZNd/Milon-vaia.jpg"
          alt=""
          className="object-cover object-center rounded-md w-full h-72 bg-gray-500 transition-all duration-700 dark:bg-gray-500 hover:scale-150"
        />
        <div className="p-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">
            Musculation
          </h2>
          <p>
            Book training sessions that fit your schedule. Enjoy the convenience
            of flexible time slots and easy online booking.
          </p>
        </div>
      </div>
      <div className="rounded-md  bg-gray-50 dark:bg-gray-800 border dark:border-gray-500  border-gray-300 shadow-lg sm:w-96 p-4">
        <img
          src="https://i.ibb.co/8MjFZjX/www-vaia.jpg"
          alt=""
          className="object-cover object-center rounded-md w-full h-72 bg-gray-500 transition-all duration-700 dark:bg-gray-500 hover:scale-150"
        />
        <div className="p-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">
            Fitness Running
          </h2>
          <p>
            Learn from certified and experienced trainers who provide guidance,
            support, and motivation to help you reach your potential
          </p>
        </div>
      </div>
      <div className="rounded-md  bg-gray-50 dark:bg-gray-800 border dark:border-gray-500  border-gray-300 shadow-lg sm:w-96 p-4">
        <img
          src="https://i.ibb.co/26JTwcK/woman-waterfall-1098-13042.jpg"
          alt=""
          className="object-cover object-center rounded-md w-full h-72 bg-gray-500 transition-all duration-700 dark:bg-gray-500 hover:scale-150"
        />
        <div className="p-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">
            Indoor Swimming Pool
          </h2>
          <p>
            Receive personalized meal plans and nutritional advice to complement
            your training and enhance your overall health.
          </p>
        </div>
      </div>
      <div className="rounded-md  bg-gray-50 dark:bg-gray-800 border dark:border-gray-500  border-gray-300 shadow-lg sm:w-96 p-4">
        <img
          src="https://i.ibb.co/QdJX2r8/johan-vaia.jpg"
          alt=""
          className="object-cover object-center rounded-md w-full h-72 bg-gray-500 transition-all duration-700 dark:bg-gray-500 hover:scale-150"
        />
        <div className="p-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">
            Body Building
          </h2>
          <p>
            Monitor your progress with advanced tracking tools. Set goals, log
            workouts, and see your improvements over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
