import React from "react";
import { Link } from "react-router";

const Register = () => {
   return (
      <div className="card bg-white w-full max-w-md shrink-0 shadow-sm mx-auto mt-10 pt-10 pb-5">
         <h1 className="text-2xl text-gray-700 text-center font-semibold">
            Register Your Account
         </h1>

         <hr className="w-10/12 mx-auto border-base-300 mt-6" />
         
         <div className="card-body">
            <fieldset className="fieldset px-3 md:px-6">
               <label className="label text-[14px] text-primary font-medium">
                  Your Name
               </label>
               <input
                  type="text"
                  className="input mb-3 text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter your name"
               />

               <label className="label text-[14px] text-primary font-medium">
                  Photo URL
               </label>
               <input
                  type="text"
                  className="input mb-3 text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter Photo URL"
               />

               <label className="label text-[14px] text-primary font-medium">
                  Email Address
               </label>
               <input
                  type="email"
                  className="input mb-3 text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter your email address"
               />

               <label className="label text-[14px] text-primary font-medium">
                  Password
               </label>
               <input
                  type="password"
                  className="input text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter your password"
               />

               <div className="flex items-center gap-2 mt-2">
                  <input
                     type="checkbox"
                     defaultChecked
                     className="checkbox checkbox-xs"
                  />
                  <a className="link link-hover">Accept Term & Conditions</a>
               </div>

               <button className="btn btn-primary mt-4">Register</button>
            </fieldset>

            <small className="text-accent font-medium text-center mt-2">
               Already Have An Account?{" "}
               <Link to={"/auth/login"} className="text-secondary">
                  Login
               </Link>
            </small>
         </div>
      </div>
   );
};

export default Register;
