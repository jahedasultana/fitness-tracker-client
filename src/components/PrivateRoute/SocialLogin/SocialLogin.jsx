import { FaGithub, FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";



const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); 

    const from = location?.state || '/';

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
          toast.success("Registration successfully");
           if(result.user){
           
            navigate(from);
           }
        })

        .catch(error => {
          console.error(error);
          toast.error("Registration failed. Please try again."); 
        });

    }

    return (
        <div>
               <div className="p-4">
        <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline w-full mb-4">
          <FaGoogle />
          Login with Google
        </button>
        <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      
        </div>
        </div>
    );
};

export default SocialLogin;