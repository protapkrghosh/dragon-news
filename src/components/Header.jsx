import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
   return (
      <div className="flex flex-col justify-center items-center mt-12">
         <img src={logo} alt="Logo" />
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
