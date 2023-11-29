import React from 'react';
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { Link } from "react-router-dom";
const Modal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  
  
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

         {/* login btn  */}
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn hover:bg-green bg-green text-white"/>
        </div>
        <p>Dont have an account? <Link className='text-red ml-2 underline font-bold' to="/signup">Sign up</Link>  </p>
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
    </div>
  </dialog></div>
  )
}

export default Modal