import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
   const categories = use(categoryPromise);

   return (
      <div>
         <h4 className="text-xl text-primary font-semibold">All Categories</h4>

         <div className="category_nav grid grid-cols-1 mt-5 gap-2">
            {categories.map((category) => (
               <NavLink
                  to={`/category/${category.name}`}
                  key={category.id}
                  className={
                     "btn bg-white hover:bg-base-300 border-0 shadow-none justify-start text-primary text-base font-semibold py-6 pl-14"
                  }
               >
                  {category.name}
               </NavLink>
            ))}
         </div>
      </div>
   );
};

export default Categories;
