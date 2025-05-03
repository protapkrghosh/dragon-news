import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomePageLayout/LeftAside";
import RightAside from "../components/HomePageLayout/RightAside";

const HomeLayout = () => {
   return (
      <div>
         <header>
            <Header />

            <section className="w-11/12 mx-auto mt-8 mb-5">
               <LatestNews />
            </section>

            <nav className="w-11/12 mx-auto">
               <Navbar />
            </nav>
         </header>

         <main className="w-11/12 mx-auto grid grid-cols-12 gap-6 mt-[76px]">
            <aside className="col-span-3">
               <LeftAside />
            </aside>

            <section className="main col-span-6">
               <Outlet />
            </section>

            <aside className="col-span-3">
               <RightAside />
            </aside>
         </main>
      </div>
   );
};

export default HomeLayout;
