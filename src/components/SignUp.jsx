import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';
import Modal from './Modal';

const SignUp = () => {
  const {createUser}=useContext(AuthContext);
  const location = useLocation();
  const navigate= useNavigate();
  const from = location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
      const email= data.email;
     const password= data.password;
     createUser(email,password).then((result)=>{
      const user= result.user;
      toast.success('🦄 Create user Successfully', {
        position: "top-center",
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
      
      
     }).catch((err)=>{
      toast("Something went Wrong");
     }) 

      }
  return (
    <div className='max-w-screen bg-white mx-auto shadow w-full flex  items-center justify-center mt-20'>
        <div className="modal-action flex flex-col justify-center mt-0">
    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
      <h1 className='font-bold text-lg'>Create a account</h1>
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

       {/* login btn  */}
      <div className="form-control mt-6">
        <input type="submit" value="Sign up" className="btn hover:bg-green bg-green text-white"/>
      </div>
      <p>Have an account? <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='text-red ml-2 underline font-bold'>Login</button>  </p>

      <Link
      to="/"
      
      
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <div className='text-center space-x-7 mb-4'>
      <button className='btn btn-circle hover:bg-green hover:text-white'>
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
    <Modal/>
    
    </div>
  )
}

export default SignUp