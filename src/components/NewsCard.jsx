import React from "react";
import { FaEye } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
   const {
      title,
      rating,
      total_view,
      author,
      published_date,
      thumbnail_url,
      details,
   } = news;

   const formatDate = (isoString) => {
      const date = new Date(isoString);
      return date.toLocaleDateString(undefined, {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
   };

   return (
      <div className="card bg-base-100 shadow border border-[#cccaca] rounded-lg">
         {/* Header */}
         <div className="flex items-center justify-between px-4 py-4 bg-base-200">
            <div className="flex items-center space-x-3">
               <img
                  src={author?.img}
                  alt={author?.name}
                  className="w-10 h-10 rounded-full object-cover"
               />
               <div>
                  <p className="font-semibold">{author?.name}</p>
                  <p className="text-sm text-gray-500">
                     {formatDate(author?.published_date)}
                  </p>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <FaRegBookmark
                  size={21}
                  className="cursor-pointer text-accent hover:text-secondary duration-300"
               />
               <IoShareSocialOutline
                  size={22}
                  className="cursor-pointer text-accent hover:text-secondary duration-300"
               />
            </div>
         </div>

         {/* Thumbnail */}
         <figure className="p-4">
            <img
               src={thumbnail_url}
               alt="News Thumbnail"
               className="w-full h-64 object-cover rounded"
            />
         </figure>

         {/* Content */}
         <div className="px-4 pb-4">
            <h2 className="card-title text-lg font-bold mt-3">{title}</h2>
            <p className="text-gray-500 mt-2">
               {details.length > 200 ? (
                  <>
                     {details.slice(0, 200)}...{" "}
                     <button className="link link-hover text-secondary font-medium">
                        Read More
                     </button>
                  </>
               ) : (
                  details
               )}
            </p>

            <div className="flex items-center justify-between mt-5 pb-2 text-sm text-gray-600">
               {/* Rating */}
               <div className="flex items-center gap-1">
                  {Array.from({ length: rating.number }).map((_, i) => (
                     <MdStarRate
                        key={i}
                        size={18}
                        className="text-yellow-500"
                     />
                  ))}
                  <span className="font-medium">{rating?.number}</span>
               </div>

               <div className="flex items-center gap-2">
                  <FaEye />
                  <span className="font-medium">{total_view}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewsCard;
