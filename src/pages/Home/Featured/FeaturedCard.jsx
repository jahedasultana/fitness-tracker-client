const FeaturedCard = () => {
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 my-16  bg-[#FFFFFF] dark:bg-[#1D232A] text-gray-700 dark:text-gray-300">
     {
      data.map((t) =>( <div key={t.heading} className="rounded-md bg-gray-50 dark:bg-gray-800 border dark:border-gray-500  border-gray-300 shadow-lg sm:w-96 p-4">
        <div className="overflow-hidden">
          <img
            src={t.image}
            alt=""
            className="object-cover object-center rounded-md w-full h-72 bg-gray-500 transition-all duration-700 dark:bg-gray-500 hover:scale-150"
          />
        </div>

        <div className="p-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-wide mb-2">{t.heading}</h2>
          <p>{t.paragraph}</p>
        </div>
      </div>)
      )
     }
     
    </div>
  );
};

const data = [
  {
    "heading": "Body Building",
    "image": "https://i.ibb.co/yXMskVD/beautiful-brunette-female.jpg",
    "paragraph": "Get custom workout plans tailored to your fitness goals and level.Achieve better results with a plan made just for you."
  },
  {
    "heading": "Musculation",
    "image": "https://i.ibb.co/wdXLZNd/Milon-vaia.jpg",
    "paragraph": "Book training sessions that fit your schedule. Enjoy the convenience of flexible time slots and easy online booking."
  },
  {
    "heading": "Fitness Running",
    "image": "https://i.ibb.co/8MjFZjX/www-vaia.jpg",
    "paragraph": "Learn from certified and experienced trainers who provide guidance, support, and motivation to help you reach your potential."
  },
  {
    "heading": "Indoor Swimming Pool",
    "image": "https://i.ibb.co/26JTwcK/woman-waterfall-1098-13042.jpg",
    "paragraph": "Receive personalized meal plans and nutritional advice to complement your training and enhance your overall health."
  },
  {
    "heading": "Body Building",
    "image": "https://i.ibb.co/QdJX2r8/johan-vaia.jpg",
    "paragraph": "Monitor your progress with advanced tracking tools. Set goals, log workouts, and see your improvements over time."
  },
  {
    "heading": "Weight Lifting",
    "image": "https://i.ibb.co/48r3GRF/full-shot-woman-working.jpg",
    "paragraph": "Join a supportive community of like-minded individuals. Share experiences get tips and stay motivated together."
  }
];


export default FeaturedCard;
