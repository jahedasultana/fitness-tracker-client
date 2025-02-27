import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import MenuItem from "./Menu/MenuItem";
import TrainerMenu from "./Menu/TrainerMenu";
import AdminMenu from "./Menu/AdminMenu";
import MemberMenu from "./Menu/MemberMenu";
import { IoChevronBackCircleSharp } from "react-icons/io5";
const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
 

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/ZWcm0D2/logo.jpg"
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#133C55]/90 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex  items-center mx-auto">
              <Link to="/">
                <div className="flex items-center justify-center">
                  <IoChevronBackCircleSharp className="text-4xl text-white"></IoChevronBackCircleSharp>
                 
                </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem
                label="Statistics"
                address="/dashboard"
                icon={BsGraphUp}
              ></MenuItem>

              {/* Manage Slots*/}

              {role === "trainer" && <TrainerMenu></TrainerMenu>}
              {role === "admin" && <AdminMenu></AdminMenu>}
              {role === "member" && <MemberMenu></MemberMenu>}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          {/* Profile Menu */}
          <MenuItem
            label="Profile"
            address="/dashboard/profile"
            icon={FcSettings}
          ></MenuItem>

          <Link
            to="/"
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-[#133C55]/50 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium text-white/70">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
