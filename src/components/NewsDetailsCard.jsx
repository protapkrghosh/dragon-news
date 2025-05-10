import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
   const {
      id,
      category_id,
      title,
      rating,
      total_view,
      author,
      published_date,
      thumbnail_url,
      details,
   } = news;

   return (
      <div className="border border-base-300 p-5 rounded-lg">
         <img
            src={thumbnail_url}
            alt="Image"
            className="w-full h-[450px] object-cover rounded-lg"
         />
         <h2 className="text-3xl font-semibold my-5">{title}</h2>
         <p className="text-accent leading-8">{details}</p>

         <Link
            to={`/category/${category_id}`}
            className="btn btn-secondary mt-7 group"
         >
            <span className="group-hover:mr-1 duration-300">
               <FaArrowLeftLong size={18} />
            </span>
            <span>All news in this category</span>
         </Link>
      </div>
   );
};

export default NewsDetailsCard;
