import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
   const [error, setError] = useState("");
   const { logInUser } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();

   const handleLogIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      setError("");
      logInUser(email, password)
         .then((result) => {
            toast.success("Login Successfully");
            navigate(location?.state || "/");
         })
         .catch((error) => {
            setError(error.code);
            toast.error(error.code);
         });
   };

   return (
      <div className="card bg-white w-full max-w-md shrink-0 shadow-sm mx-auto mt-10 pt-10 pb-5">
         <h1 className="text-2xl text-gray-700 text-center font-semibold">
            Login Your Account
         </h1>

         <hr className="w-10/12 mx-auto border-base-300 mt-6" />

         <div className="card-body">
            <form onSubmit={handleLogIn} className="fieldset px-3 md:px-6">
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

               {error && (
                  <small className="text-red-500 text-[12px]">{error}</small>
               )}

               <input
                  type="submit"
                  value="login"
                  className="btn btn-primary mt-4"
               />
            </form>

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
