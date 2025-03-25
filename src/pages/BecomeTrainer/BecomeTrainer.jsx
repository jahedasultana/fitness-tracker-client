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
    const info = { name, email, age, photo, skill, day, time, experience, status, description };

    try {
      const currentUser = { email: user?.email, role: "member", status: "requested", info };
      const { data } = await axiosSecure.post("/slots", { ...currentUser, ...info });
      
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
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
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
            {[
              { label: "Full Name", name: "name", value: user?.displayName, disabled: true },
              { label: "Email Address", name: "email", value: user?.email, disabled: true },
              { label: "Age", name: "age", placeholder: "Your age", type: "number" },
              { label: "Profile Photo", name: "photo", value: user?.photoURL, disabled: true },
              { label: "Experience", name: "experience" },
              { label: "Status", name: "status", value: "pending" },
            ].map(({ label, name, value, placeholder, type = "text", disabled = false }) => (
              <div key={name}>
                <label className="text-gray-200">{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  defaultValue={value}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label className="text-gray-200">Skill</label>
              <Select className="text-black" name="Skill" options={skills} isMulti onChange={setSelectedSkills} />
            </div>
            <div>
              <label className="text-gray-200">Days</label>
              <Select name="day" options={options} isMulti onChange={setSelectedDays} className="text-black" />
            </div>
            <div>
              <label className="text-gray-200">Times</label>
              <Select name="time" options={times} isMulti onChange={setSelectedTimes} className="text-black" />
            </div>
            <div>
              <label className="text-gray-200">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Brief description about yourself"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 text-white transition bg-[#1a618d] rounded-md hover:bg-[#366f92] focus:outline-none w-full">
              Apply
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BecomeATrainer;