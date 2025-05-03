import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/user.png'

const Navbar = () => {
   return (
      <div className='grid grid-cols-3'>
         <div className=""></div>

         <div className="nav text-accent text-[18px] space-x-6 mt-2 flex justify-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/career"}>Career</NavLink>
         </div>

         <div className="flex justify-end items-center gap-3">
            <img src={userImg} alt="User" />
            <button className="btn btn-primary text-[17px] rounded-none px-10 py-5">
               Login
            </button>
         </div>
      </div>
   );
};

export default Navbar;