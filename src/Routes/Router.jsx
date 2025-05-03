import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


const router = createBrowserRouter([
   {
      path: "/",
      Component: HomeLayout,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: 'category/:id',
            Component: CategoryNews,
         }
      ]
   },
   {
      path: 'auth',
      element: <h2>Authentication Layout</h2>
   },
   {
      path: "*",
      element: <h3 className="flex justify-center text-accent text-9xl font-extrabold mt-52">Error 404</h3>,
   },
]);

export default router;
