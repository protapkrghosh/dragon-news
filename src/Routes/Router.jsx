import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
   {
      path: "/",
      Component: HomeLayout,
   },
   {
      path: "/*",
      element: <h3>Error 404</h3>,
   },
]);

export default router;
