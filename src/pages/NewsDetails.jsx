import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomePageLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
   const data = useLoaderData();
   const { id } = useParams();
   const [news, setNews] = useState({});

   useEffect(() => {
      const newsDetails = data.find((singleNews) => singleNews.id == id);
      setNews(newsDetails);
   }, [data, id]);

   return (
      <div>
         <header>
            <Header />
         </header>

         <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 py-12">
            <section className="col-span-9">
               <h2 className="text-xl font-semibold mb-5">Dragon News</h2>

               <NewsDetailsCard news={news} />
            </section>

            <aside className="col-span-3">
               <RightAside />
            </aside>
         </main>
      </div>
   );
};

export default NewsDetails;
