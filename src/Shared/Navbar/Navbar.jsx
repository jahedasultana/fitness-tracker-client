import { Link, NavLink } from "react-router-dom";

import { renderToString } from "react-dom/server";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
  const { logout, user } = useAuth();

  const tooltipContent = <>{user?.displayName || "User name not found"}</>;
  const tooltipString = renderToString(tooltipContent);

  const navLinks = (
    <>
      <li className="font-semibold hover:underline">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold hover:underline">
        <NavLink to="/allTrainer">All Trainer</NavLink>
      </li>
      <li className="font-semibold hover:underline">
        <NavLink to="/allClasses">All Classes</NavLink>
      </li>
      <li className="font-semibold hover:underline">
        <NavLink to="/community">Community</NavLink>
      </li>

      {user && (
        <li className="font-semibold hover:underline">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b-2 flex items-center justify-between">
      <div className="navbar-start w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
          >
            {navLinks}
          </ul>
        </div>
        <div className="font-pop font-bold lg:text-2xl  sm:flex items-center justify-center text-[#133c55] dark:text-[#0264a1]">
          <span>
            <img
              src="https://i.ibb.co/ZWcm0D2/logo.jpg"
              alt=""
              className="w-12 h-12 hidden sm:block mr-2"
            />
          </span>
          <span className="lg:text-3xl text-xl md:text-2xl font-extrabold">
            Fitness Tracker
          </span>
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">{navLinks}</ul>
      </div>

      <div className="flex items-center md:gap-4 gap-2">
        {user && (
          <div className="navbar-end">
            <div className="dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="tooltip tooltip-bottom avatar"
                data-tip={tooltipString}
              >
                <div className="lg:w-[44px] w-[32px] rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </label>
            </div>
          </div>
        )}

        <div className="">
          <Link to="/login">
            {user ? (
              <button
                onClick={logout}
                className="lg:px-4 px-3 py-2 lg:text-lg font-semibold rounded-md dark:bg-[#133c55] dark:text-gray-50"
              >
                LogOut
              </button>
            ) : (
              <button
                onClick={logout}
                className="lg:px-8 px-3 py-3 m-2 lg:text-lg font-semibold rounded-lg dark:bg-[#133c55] dark:text-gray-50"
              >
                Login
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
