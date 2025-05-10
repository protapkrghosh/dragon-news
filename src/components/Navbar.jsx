import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
   const { user } = useContext(AuthContext);

   return (
      <div className="grid grid-cols-3">
         <div className=""></div>

         <div className="nav text-accent text-[18px] space-x-6 mt-2 flex justify-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/career"}>Career</NavLink>
         </div>

         <div className="flex justify-end items-center gap-3">
            <img src={userImg} alt="User" />
            {user ? (
               <button className="btn btn-primary text-[17px] rounded-none px-10 py-5">
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
