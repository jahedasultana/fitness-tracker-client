import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
    const {  loading } = useAuth();
    const location = useLocation();

    if(loading){
      return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
  
  }
    return (
        <div className="dark:bg-gray-800 max-w-[1440px] mx-auto">
             <Navbar></Navbar>
         
             {
              location.pathname == "/" &&  <Banner></Banner>
             }
           <div className="max-w-screen-xl mx-auto">
           <Outlet></Outlet>
           </div>
           <div>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;