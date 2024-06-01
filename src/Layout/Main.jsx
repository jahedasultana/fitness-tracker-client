import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
           <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
           <Outlet></Outlet>
           </div>
           <div>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;