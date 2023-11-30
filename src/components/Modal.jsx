import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';
const Modal = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const {signUpWithGmail,login}=useContext(AuthContext);
  const [errorMessage,setErrorMessage]=useState("");

  // redirecting page
  const location = useLocation();
  const navigate= useNavigate();
  const from = location.state?.from?.pathname || "/"

  const onSubmit = (data) => {
    console.log(data)
    const email= data.email;
    const password= data.password;
    login(email,password)
    .then((result) => {
      const user = result.user;
      toast.success('🦄 Login In SuccessFully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

        
      });
      navigate(from,{replace:true});
      document.getElementById('my_modal_5').close()
    })
    .catch((err) => {
      const errorMessage=err.message;
      setErrorMessage("Provide a correct email & password");
     
    });
  }

 

  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        toast.success('🦄 Sign In SuccessFully', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // Add a custom class for styling
        });
      })
      .catch((err) => {
        toast.error('Something Went Wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: 'toast-dark',
        });
      });
  };

  
  
  return (
    <div><dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
    <div className="modal-box">
      
      <div className="modal-action flex flex-col justify-center mt-0">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
      <button
      htmlFor="my_modal_5"
      onClick={()=>document.getElementById('my_modal_5').close()}
      
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h1 className='font-bold text-lg'>Please login</h1>
        {/* email  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" 
          {...register("email")}
          />
        </div>
        {/* password  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("password")}
          />
          <label className="label mt-1">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

         {/* error message  */}

         {
          errorMessage? <p className='text-red text-xs italic'>{errorMessage}</p>: ""
         }


         {/* login btn  */}
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn hover:bg-green bg-green text-white"/>
        </div>
        <p>Dont have an account? <Link className='text-red ml-2 underline font-bold' to="/signup">Sign up</Link>  </p>
      </form>
      <div className='text-center space-x-7 mb-4'>
        <button onClick={handleLogin}  className='btn btn-circle hover:bg-green hover:text-white'>
          <FaGoogle/>

        </button >
        <button className='btn btn-circle hover:bg-green hover:text-white'>
          <FaFacebookF/>

        </button >
        <button className='btn btn-circle hover:bg-green hover:text-white'>
          <FaGithub/>

        </button >
        
      </div>
      </div>
    </div>
  </dialog></div>
  )
}

export default Modal