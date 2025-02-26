import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";


const Main = () => {
    const {  loading } = useAuth();

    if(loading){
      return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
  
  }
    return (
        <div className="dark:bg-gray-800">
             <Navbar></Navbar>
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