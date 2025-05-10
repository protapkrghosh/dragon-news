import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
   const { user, createUser } = useContext(AuthContext);
   console.log(user);

   const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log({ name, photoURL, email, password });

      createUser(email, password)
         .then((result) => {
            console.log(result.user);
         })
         .catch((error) => {
            console.log(error.message);
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
