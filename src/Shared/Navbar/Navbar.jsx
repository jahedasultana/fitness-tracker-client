import { useState } from "react";
import { Link, NavLink,} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RiMenuAddFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { renderToString } from "react-dom/server";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();

  const tooltipContent = <>{user?.displayName || "User name not found"}</>;
  const tooltipString = renderToString(tooltipContent);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black dark:bg-[#133C55]/50 bg-[#133C55]/90 relative">
      <div className="mx-auto flex justify-between items-center">
        <div className="w-full">
          {/* first part */}
          <div className="flex justify-between items-center w-full py-5 md:px-10 px-3">
            <div>
              <img className="md:w-[55%] w-[45%]" src="https://i.postimg.cc/SNvKhfT6/Screenshot-from-2025-02-26-21-50-36-removebg-preview.png" alt="logo" />
            </div>

            <div className="hidden md:flex items-center justify-center gap-5">
              {/* karpa start */}
              <div className="flex gap-4">
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
                        className="lg:px-4 px-3 py-2 lg:text-lg font-semibold rounded-md bg-[#113a53] text-white shadow-md"
                      >
                        LogOut
                      </button>
                    ) : (
                      <button
                        onClick={logout}
                        className="lg:px-8 px-3 py-3 m-2 lg:text-lg font-semibold rounded-lg bg-[#113a53] text-white shadow-md"
                      >
                        Login
                      </button>
                    )}
                  </Link>
                </div>
              </div>
              {/* karpa end */}
            </div>
          </div>

          {/* second part */}
          <div className="hidden md:flex dark:bg-[#133C55]/70 bg-[#133C55] text-white/95 py-5 pl-10 border-b border-[#0a2231] shadow">
            <div className="hidden md:flex lg:gap-16 md:gap-5 text-center">
              {/* again karpa start */}

              <NavLink to="/">Home</NavLink>
              <NavLink to="/allTrainer">All Trainer</NavLink>
              <NavLink to="/allClasses">All Classes</NavLink>
              <NavLink to="/community">Community</NavLink>
              {user && (
                  <NavLink to="/dashboard">Dashboard</NavLink>
              )}
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden pr-3 text-white">
          <button id="btn" onClick={toggleMenu}>
            {
              isOpen
                ? <VscChromeClose size={30} />
                : <RiMenuAddFill size={30} />
            }

          </button>
        </div>
        
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full md:hidden mt-4 absolute top-[70px] z-10 bg-[#133C55]/80 text-white py-7 transition-all duration-300 ease-in-out transform ${isOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-[-20px] opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex items-center flex-col space-y-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allTrainer">All Trainer</NavLink>
          <NavLink to="/allClasses">All Classes</NavLink>
          <NavLink to="/community">Community</NavLink>
          {user && (
              <NavLink to="/dashboard">Dashboard</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;