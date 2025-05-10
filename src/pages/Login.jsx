import React from "react";
import { Link } from "react-router";

const Login = () => {
   return (
      <div className="card bg-white w-full max-w-md shrink-0 shadow-sm mx-auto mt-10 pt-10 pb-5">
         <h1 className="text-2xl text-gray-700 text-center font-semibold">
            Login Your Account
         </h1>

         <hr className="w-10/12 mx-auto border-base-300 mt-6" />

         <div className="card-body">
            <fieldset className="fieldset px-3 md:px-6">
               <label className="label text-[14px] text-primary font-medium">
                  Email Address
               </label>
               <input
                  type="email"
                  name="email"
                  className="input mb-3 text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter your email address"
                  required
               />

               <label className="label text-[14px] text-primary font-medium">
                  Password
               </label>

               <input
                  type="password"
                  name="password"
                  className="input text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter your password"
                  required
               />

               <div className="mt-2">
                  <a className="link link-hover">Forgot password?</a>
               </div>

               <input
                  type="submit"
                  value="login"
                  className="btn btn-primary mt-4"
               />
            </fieldset>

            <small className="text-accent font-medium text-center mt-2">
               Don't Have An Account?{" "}
               <Link to={"/auth/register"} className="text-secondary">
                  Register
               </Link>
            </small>
         </div>
      </div>
   );
};

export default Login;
