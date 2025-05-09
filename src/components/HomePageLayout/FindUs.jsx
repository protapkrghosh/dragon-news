import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
   return (
      <div>
         <h2 className="text-primary text-xl font-semibold mb-3">Find Us On</h2>

         <div>
            <div className="join join-vertical w-full">
               <button className="btn btn-outline join-item py-7 group border-gray-300">
                  <span className="text-[#1877F2] bg-base-200 group-hover:bg-base-100 duration-300 p-2 rounded-full">
                     <FaFacebookF size={15} />
                  </span>
                  <span className="text-gray-500 font-medium mr-auto">
                     Facebook
                  </span>
               </button>

               <button className="btn btn-outline join-item py-7 group border-t-0 border-gray-300">
                  <span className="text-[#14171A] bg-base-200 group-hover:bg-base-100 duration-300 p-2 rounded-full">
                     <FaXTwitter size={15} />
                  </span>
                  <span className="text-gray-500 font-medium mr-auto">
                     Twitter
                  </span>
               </button>

               <button className="btn btn-outline join-item py-7 group border-gray-300">
                  <span className="text-[#E52765] bg-base-200 group-hover:bg-base-100 duration-300 p-2 rounded-full">
                     <FaInstagram size={15} />
                  </span>
                  <span className="text-gray-500 font-medium mr-auto">
                     Instagram
                  </span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default FindUs;
