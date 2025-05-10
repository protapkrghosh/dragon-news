import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomePageLayout/LeftAside";
import RightAside from "../components/HomePageLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
   const { state } = useNavigate();

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
            <aside className="col-span-3 sticky top-5 h-fit">
               <LeftAside />
            </aside>

            <section className="main col-span-6">
               {state == "loading" ? <Loading /> : <Outlet />}
            </section>

            <aside className="col-span-3 sticky top-5 h-fit">
               <RightAside />
            </aside>
         </main>
      </div>
   );
};

export default HomeLayout;
