import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
   return (
      <div className="flex items-center gap-3 bg-base-200 p-4">
         <p className="bg-secondary text-white px-3 py-2 text-xl font-medium">
            Latest
         </p>
         <Marquee pauseOnHover={true} className="gap-6">
            <p className=" text-[18px] font-semibold">
               Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
               Military Aid Package Yet.
            </p>

            <p className=" text-[18px] font-semibold">
               Bayern Slams Authorities Over Flight Delay to Club World Cup.
            </p>
         </Marquee>
      </div>
   );
};

export default LatestNews;
