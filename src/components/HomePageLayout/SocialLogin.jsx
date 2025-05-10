import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
   const { googleLogin } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();

   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            toast.success("Login Successful");
            navigate(location?.state || "/");
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   return (
      <div>
         <h2 className="text-primary text-xl font-semibold mb-3">Login With</h2>

         <button
            onClick={handleGoogleLogin}
            className="socialBtn text-blue-400 mb-3"
         >
            <FcGoogle size={23} /> Login with Google
         </button>

         <button className="socialBtn text-primary">
            <FaGithub size={22} /> Login with GitHub
         </button>
      </div>
   );
};

export default SocialLogin;
