import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
   return (
      <div className="bg-base-200 min-h-dvh">
         <header className="w-11/12 mx-auto pt-8 pb-5">
            <Navbar />
         </header>

         <main className="w-11/12 mx-auto pb-5">
            <Outlet />
         </main>
      </div>
   );
};

export default AuthLayout;
