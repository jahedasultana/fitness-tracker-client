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
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300">
            <img
              src="https://i.ibb.co/kMBt8t5/team-two.jpg"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">David Lee</h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga instructor and wellness expert...
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
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300">
            <img
              src="https://i.ibb.co/kMBt8t5/team-two.jpg"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">David Lee</h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga instructor and wellness expert...
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
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300">
            <img
              src="https://i.ibb.co/kMBt8t5/team-two.jpg"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">David Lee</h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga instructor and wellness expert...
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
          <div className="flex flex-col items-center max-w-xs p-6 shadow-lg rounded-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-none dark:shadow-md dark:text-gray-300">
            <img
              src="https://i.ibb.co/kMBt8t5/team-two.jpg"
              alt="Team member"
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">David Lee</h2>
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold mr-2">Bio:</span>Megan is a yoga instructor and wellness expert...
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
