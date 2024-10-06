import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaDribbble } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="mb-20 mt-32 bg-white dark:bg-[#1D232A]">
      <SectionTitle subHeading="About Team" heading="Our team" />

      <section className="py-6 text-gray-800 dark:text-gray-300">
        <div className="container mx-auto p-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Team Member Card */}
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300 transition-transform transform hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/sports-blonde-sportswear-training-gym_1157-30046.jpg?t=st=1728223080~exp=1728226680~hmac=6b99dd79be2cffddc46c46e93a4fb6004e5625db6a1351af2237a0c6320cfdd5&w=826"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                David Lee
              </h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga
                instructor and wellness expert....
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Email" className="p-2">
                  <MdEmail className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Facebook" className="p-2">
                  <FaFacebook className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Dribbble" className="p-2">
                  <FaDribbble className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2">
                  <FaTwitter className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300 transition-transform transform hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/attractive-sports-girl-personal-trainer-middle-modern-gym-with-workout-plan-her-hands_496169-2795.jpg?t=st=1728223008~exp=1728226608~hmac=408b7532da3a1a1c3e7a74f885d4c9116db7573a4ff07414c08dcb4abe084df9&w=826"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                David Soniya
              </h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga
                instructor and wellness expert...
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Email" className="p-2">
                  <MdEmail className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Facebook" className="p-2">
                  <FaFacebook className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Dribbble" className="p-2">
                  <FaDribbble className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2">
                  <FaTwitter className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300 transition-transform transform hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/funny-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background_613910-5149.jpg?t=st=1728222571~exp=1728226171~hmac=10f36e147e205f8e604ecbd874d2583919c7c6778d158d5868f4b9060b2fc488&w=740"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Zon Doo
              </h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga
                instructor and wellness expert...
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Email" className="p-2">
                  <MdEmail className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Facebook" className="p-2">
                  <FaFacebook className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Dribbble" className="p-2">
                  <FaDribbble className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2">
                  <FaTwitter className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300 transition-transform transform hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/young-sports-man-training-gym_1303-20716.jpg?t=st=1728222774~exp=1728226374~hmac=518c072a48a383bf2f2b6cda5ade179cbac8e60a3ca9eea4eb23e39bd6e4e74f&w=826"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
               Zon Sina
              </h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga
                instructor and wellness expert...
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Email" className="p-2">
                  <MdEmail className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Facebook" className="p-2">
                  <FaFacebook className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Dribbble" className="p-2">
                  <FaDribbble className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2">
                  <FaTwitter className="text-xl text-gray-800 dark:text-white hover:text-violet-600 dark:hover:text-violet-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Duplicate or Add More Team Members Here */}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
