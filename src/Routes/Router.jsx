import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
   {
      path: "/",
      Component: HomeLayout,
      hydrateFallbackElement: <Loading />,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: "category/:id",
            Component: CategoryNews,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading />,
         },
      ],
   },
   {
      path: "auth",
      element: <AuthLayout />,
      children: [
         {
            path: "/auth/login",
            element: <Login />,
         },
         {
            path: "/auth/register",
            element: <Register />,
         },
      ],
   },
   {
      path: "news-details/:id",
      element: (
         <PrivateRoute>
            <NewsDetails />
         </PrivateRoute>
      ),
      loader: () => fetch("/news.json"),
      hydrateFallbackElement: <Loading />,
   },
   {
      path: "*",
      element: (
         <h3 className="flex justify-center text-accent text-9xl font-extrabold mt-52">
            Error 404
         </h3>
      ),
   },
]);

export default router;
