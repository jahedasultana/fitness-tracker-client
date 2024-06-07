import Select from "react-select";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const BecomeTrainer = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleTrainer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const photo = form.photo.value;
    const skill = selectedSkills.map((skill) => skill.value);
    const day = selectedDays.map((day) => day.value);
    const time = selectedTimes.map((time) => time.value);
    const experience = form.experience.value;
    const status = form.status.value;
    const info = {
      name,
      email,
      age,
      photo,
      skill,
      day,
      time,
      experience,
      status,
    };
    console.log(info);
    try {
      const currentUser = {
        email: user?.email,
        role: "trainer",
        status: "requested",
        info,
      };
      const { data } = await axiosSecure.post(
        "/trainerApplications",
        currentUser
      );
      console.log(data);
      if (data.insertedCount > 0) {
        Swal.fire({
            title: 'Success!',
            text: 'Your apply successfully received',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      } else {
        Swal.fire({
            title: 'Success!',
            text: 'wait for admin approval',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      }
    } catch (error) {
      console.log(error);
    }
  };
  const options = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "TuesDay", label: "TuesDay" },
    { value: "WednesDay", label: "WednesDay" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];
  const skills = [
    { value: "Yoga", label: "Yoga" },
    { value: "Zumba Dance", label: "Zumba Dance" },
    { value: "Body Building", label: "Body Building" },
    { value: "Musculation", label: "Musculation" },
    { value: "Fitness Running", label: "Fitness Running" },
    { value: "Weight Lifting", label: "Weight Lifting" },
    { value: "Classic Yoga", label: "Classic Yoga" },
  ];
  const times = [
    { value: "Morning- 06am to 08am", label: "Morning- 06am to 08am" },
    { value: "Evening- 16pm to 18pm", label: "Evening- 16pm to 18pm" },
    { value: "Night- 21pm to 23pm", label: "Night- 21pm to 23pm" },
  ];

  return (
    <div>
      <section className="container mx-auto my-16 p-8 bg-violet-400 shadow-xl border rounded-lg">
        <h2 className="text-4xl font-lato text-center font-extrabold mb-6">
          <span style={{ color: "", fontWeight: "bold" }}>
            <Typewriter
              words={["Become a Trainer"]}
              loop={1000000}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <form onSubmit={handleTrainer}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input
                id="username"
                defaultValue={user?.displayName}
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                defaultValue={user?.email}
                name="email"
                type="email"
                readOnly
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200 block">Age</label>
              <input
                id="age"
                name="age"
                type="age"
                placeholder="Your age"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Profile Photo
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Skill</label>
              <Select
                className="px-4 py-2 mt-2"
                name="Skill"
                options={skills}
                labelField="label"
                valueField="label"
                isMulti
                onChange={setSelectedSkills}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Days</label>
              <Select
                className="px-4 py-2 mt-2"
                name="day"
                options={options}
                labelField="label"
                valueField="label"
                isMulti
                onChange={setSelectedDays}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Times</label>
              <Select
                className="px-4 py-2"
                name="time"
                options={times}
                labelField="label"
                valueField="label"
                isMulti
                onChange={setSelectedTimes}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Experience
              </label>
              <input
                id="experience"
                name="experience"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="text-black dark:text-gray-200">Status</label>
              <input
                id="status"
                name="status"
                type="text"
                className="input input-bordered w-full"
                defaultValue="pending"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform  rounded-md hover:bg-gray-600 bg-violet-800 focus:outline-none focus:bg-gray-600">
              Apply
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BecomeTrainer;
