import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({children}) => {
    
const {user, loading} = useAuth();
const location = useLocation();

if(loading){
    return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>

}
 
    if(!user){
        return <Navigate to='/login' state={location?.
            pathname || '/'}></Navigate>
           
            
    } 
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;