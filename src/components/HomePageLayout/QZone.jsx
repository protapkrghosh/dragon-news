import React from 'react';
import swimming from '../../assets/swimming.png'
import classroom from "../../assets/classroom.png";
import playground from '../../assets/playground.png'
import background from '../../assets/bg.png'

const QZone = () => {
   return (
      <div>
         <div className="bg-base-200 p-3">
            <h2 className="text-primary text-xl font-semibold my-3">Q-Zone</h2>

            <div className="space-y-8 mt-5">
               <img src={swimming} alt="Image" />
               <img src={classroom} alt="Image" />
               <img src={playground} alt="Image" />
            </div>
         </div>

         <img src={background} alt="Image" className="mt-5" />
      </div>
   );
};

export default QZone;
