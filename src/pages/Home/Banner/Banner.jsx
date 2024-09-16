import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mb-24">
      <div
        className="hero min-h-screen "
        style={{
          
          backgroundImage:
            "url(https://i.ibb.co/yXMskVD/beautiful-brunette-female.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Fitness Tracker</h1>
            <p className="mb-5">
            Experts define physical fitness as “one's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior
            </p>
           <Link to='/allClasses'>
           <button className="px-8 py-3 m-2 text-lg font-semibold rounded-lg dark:bg-violet-600 dark:text-gray-50">Classes Page</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
