import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className="">
      <SectionTitle heading="About Us" subHeading="Learn about our mission to inspire and support your fitness journey with top-quality gear and expert guidance."></SectionTitle>
      <div>
        <section className="">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row rounded-2xl md:px-0 px-2">
            <div className="flex flex-col px-2 md:px-6 md:py-8 py-2 space-y-6 rounded-xl sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-[#133c55] text-gray-300">
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="md:text-lg font-medium leading-snug">
                    State-of-the-Art Facilities
                  </p>
                  <p className="leading-snug text-sm">
                    Our gym is equipped with the latest fitness equipment,
                    ensuring that you have everything you need for a
                    comprehensive workout.
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="md:text-lg font-medium leading-snug">
                    Expert Trainers
                  </p>
                  <p className="leading-snug text-sm">
                    Our team of certified trainers is passionate about fitness
                    and dedicated to helping you succeed. Whether you're looking
                    to build muscle, our trainers will create a personalized
                    plan tailored to your needs.!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="md:text-lg font-medium leading-snug">
                    Customized Training Plans
                  </p>
                  <p className="leading-snug text-sm">
                    We understand that everyone’s fitness journey is unique. Our
                    trainers will work with you to develop a customized training
                    plan that fits your goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 md:pb-0 pb-3">
              <div className="flex items-center justify-center p-0 md:p-8 lg:p-12">
                <img
                  src="https://i.ibb.co/VqGRpkx/3d-gym-equipment-23-2151114137.jpg"
                  alt=""
                  className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
