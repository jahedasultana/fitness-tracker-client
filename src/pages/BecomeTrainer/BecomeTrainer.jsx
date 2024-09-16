import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Select from "react-select";
import { useState } from "react";

const BecomeATrainer = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [description, setDescription] = useState("");

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
      description
    };
   
    try {
      const currentUser = {
        email: user?.email,
        role: "member",
        status: "requested",
        info,
      };
      const { data } = await axiosSecure.post("/slots", {
        ...currentUser,
        ...info,
      });
     
      if (data.insertedCount > 0) {
        toast.success("Your apply successfully received");
      } else {
        toast.success("Wait for admin approval");
      }
    } catch (error) {
      
      toast.error(error.message);
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
    { value: 1, label: "1h" },
    { value: 2, label: "2h" },
    { value: 3, label: "3h" },
    { value: 4, label: "4h" },
  ];

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto my-16 bg-[#133c55] text-white rounded-md shadow-md">
        <h2 className="text-4xl text-center font-semibold capitalize">Become A Trainer Form</h2>
        <form onSubmit={handleTrainer}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-200">Full Name</label>
              <input
                id="username"
                defaultValue={user?.displayName}
                name="name"
                type="text"
                disabled
                placeholder="Full Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-300 bg-white
                dark:bg-gray-700 border border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-200">Email Address</label>
              <input
                id="emailAddress"
                disabled
                defaultValue={user?.email}
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-700 dark:text-gray-300 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-200">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                placeholder="Your age"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-700 dark:text-gray-300 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-200">Profile Photo</label>
              <input
                id="photo"
                name="photo"
                disabled
                type="text"
                placeholder="Photo URL"
                defaultValue={user?.photoURL}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-700 dark:text-gray-300 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-200">Skill</label>
              <Select
                className="px-4 text-black"
                name="Skill"
                options={skills}
                labelField="label"
                valueField="value"
                isMulti
                onChange={setSelectedSkills}
              />
            </div>
            <div>
              <label className="text-gray-200">Days</label>
              <Select
  name="day"
  options={options}
  isMulti
  onChange={setSelectedDays}
  styles={{
    control: (provided) => ({
      ...provided,
      backgroundColor: '#4b5563', // Customize control background color (container)
      color: 'white', // Text color
      padding: '5px 2px',
    }),
 
   
  }}
/>

            </div>
            <div>
              <label className="text-gray-200 ">Times</label>
              <Select
                className="px-4 py-2 text-black "
                name="time"
                options={times}
                labelField="label"
                valueField="value"
                isMulti
                onChange={setSelectedTimes}
              />
            </div>
            <div>
              <label className="text-gray-200">Experience</label>
              <input
                id="experience"
                name="experience"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-700 dark:text-gray-300 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-200">Status</label>
              <input
                id="status"
                name="status"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-700 dark:text-gray-300 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                defaultValue="pending"
              />
            </div>
            <div>
              <label className="text-gray-200">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Brief description about yourself"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border dark:bg-gray-700 dark:text-gray-300 border-gray-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#1a618d] rounded-md hover:bg-[#366f92] focus:outline-none focus:bg-violet-600 w-full">
              Apply
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BecomeATrainer;
