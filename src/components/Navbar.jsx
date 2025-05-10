import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
   const { user, userLogOut } = useContext(AuthContext);

   const handleLogOut = () => {
      userLogOut()
         .then(() => {
            toast.success("your Logged Out Successfully");
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };

   return (
      <div className="grid grid-cols-3">
         <div className=""></div>

         <div className="nav text-accent text-[18px] space-x-6 mt-2 flex justify-center">
            <NavLink to={"/category/1"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/career"}>Career</NavLink>
         </div>

         <div className="flex justify-end items-center gap-3">
            <img src={user ? user?.photoURL : userImg} alt="User" className="w-14 h-14 rounded-full" />

            {user ? (
               <button
                  onClick={handleLogOut}
                  className="btn btn-primary text-[17px] rounded-none px-10 py-5"
               >
                  LogOut
               </button>
            ) : (
               <Link
                  to={"/auth/login"}
                  className="btn btn-primary text-[17px] rounded-none px-10 py-5"
               >
                  LogIn
               </Link>
            )}
         </div>
      </div>
   );
};

export default Navbar;
