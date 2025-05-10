import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <Loading />;
   }

   if (user && user?.email) {
      return <div>{children}</div>;
   }

   return <Navigate to={"/auth/login"} state={location.pathname} />;
};

export default PrivateRoute;
