import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
   return (
      <div>
         <Suspense fallback={<span className="loading loading-dots w-10"/>}>
            <Categories />
         </Suspense>
      </div>
   );
};

export default LeftAside;
