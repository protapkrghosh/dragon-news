import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
   const [nameError, setNameError] = useState("");
   const { setUser, createUser, updateUser } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();

   const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      if (name.length < 5) {
         setNameError("Name should be more then 5 character");
         return;
      } else {
         setNameError("");
      }
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;

      createUser(email, password)
         .then((result) => {
            const user = result.user;
            toast.success("Register Successful");
            navigate(location?.state || "/");

            updateUser({ displayName: name, photoURL: photoURL })
               .then(() => {
                  setUser({ ...user, displayName: name, photoURL: photoURL });
               })
               .catch((error) => {
                  toast.error(error.code);
               });
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   return (
      <div className="card bg-white w-full max-w-md shrink-0 shadow-sm mx-auto my-10">
         <h1 className="text-2xl text-gray-700 text-center font-semibold pt-10">
            Register Your Account
         </h1>

         <hr className="w-10/12 mx-auto border-base-300 mt-6" />

         <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset px-3 md:px-6">
               <label className="label text-[14px] text-primary font-medium">
                  Your Name
               </label>
               <input
                  type="text"
                  name="name"
                  className="input mb-3 text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter your name"
                  required
               />

               {nameError && (
                  <small className="text-red-500 text-[12px]">
                     {nameError}
                  </small>
               )}

               <label className="label text-[14px] text-primary font-medium">
                  Photo URL
               </label>
               <input
                  type="text"
                  name="photoURL"
                  className="input mb-3 text-[13px] w-full bg-base-200 border-0 focus:outline-0"
                  placeholder="Enter Photo URL"
                  required
               />

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

               <div className="flex items-center gap-2 mt-2">
                  <input
                     type="checkbox"
                     defaultChecked
                     className="checkbox checkbox-xs"
                  />
                  <a className="link link-hover">Accept Term & Conditions</a>
               </div>

               <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary mt-4"
               />
            </form>

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
