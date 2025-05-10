import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
import { Link } from "react-router";

const Header = () => {
   return (
      <div className="flex flex-col justify-center items-center mt-12">
         <Link to={"/"}>
            <img src={logo} alt="Logo" />
         </Link>
         <p className="mt-5 mb-2 text-[18px] text-accent">
            Journalism Without Fear or Favour
         </p>

         <p className="font-medium text-primary">
            {format(new Date(), "EEEE, MMMM dd, yyyy")}
         </p>
      </div>
   );
};

export default Header;
