
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/PrivateRoute/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";



const Login = () => {
  const {signInUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";
   const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
    .then((result) => {
      
      toast.success("Login successful", result);
      navigate(from);
    })
      .catch((error) => {
        toast.error(
          "Failed to login. Please check your email or password.",
          error
        );
      });
  };


    return (
        <div>
          
          <Helmet>
                <title>Foods Project | Login</title>
            </Helmet>
            <div className="hero min-h-screen my-8 rounded-2xl bg-[url('https://i.postimg.cc/4Nm4YYnb/anot.jpg')] bg-cover bg-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h2 className="text-3xl text-center font-bold p-4 pt-8">Login your account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" 
           {...register('email', { required: true })}
          />
           {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password"}
           name="password" 
           placeholder="password"
            className="input input-bordered"  {...register('password', { required: true })}/>
          <span className="absolute lg:ml-72 ml-52 mt-14 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          {errors.password && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r bg-violet-500 text-white">Login</button>
        </div>
     
      </form>
      <SocialLogin></SocialLogin>
     <p className="text-center mb-6">Do not have an account? <Link className="text-blue-800 font-bold underline" to='/register'>Register</Link></p>
     
     
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;
