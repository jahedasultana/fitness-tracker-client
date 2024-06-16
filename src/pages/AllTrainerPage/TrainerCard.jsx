import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
    const { name, specialist,
        experience, bio, image, _id, socialIcons, slots } = trainer;
    return (

        <Link to={`/trainer/${_id}`} className="flex p-5 flex-col items-center transition-colors duration-300 transform border shadow-2xl cursor-pointer rounded-xl hover:border-transparent group hover:bg-violet-400 dark:hover:border-transparent">
            <img src={image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300"></div>
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-black group-hover:text-white"> <span className="text-violet-800 font-bold">Trainer:</span> {name}</h1>

            <p className="mt-2 font-bold text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"><span className="text-violet-800 font-bold">Specialty: </span>{specialist}</p>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 font-bold"><span className="text-violet-800 font-bold">Experience: </span>
                {experience}</p>
            <div className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 font-bold"><span className="text-violet-800 font-bold">Available Slots: </span>
                <ul>
                    {/* <li>{slots[0]}</li>
                    <li>{slots[1]}</li>
                    <li>{slots[2]}</li> */}
                </ul>
            </div>

            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{bio}</p>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 flex gap-3">
                {/* <FaFacebook to={socialIcons.facebook} className="text-4xl" />
                <FaTwitter to={socialIcons.twitter} className="text-4xl" />
                <FaInstagram to={socialIcons.instagram} className="text-4xl" /> */}
            </p>
            <button className="btn mt-4 font-extrabold w-full">See More</button>
        </Link>

    );
};

export default TrainerCard;