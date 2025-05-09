import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
   return (
      <div>
         <h2 className="text-primary text-xl font-semibold mb-3">Login With</h2>

         <button className="socialBtn text-blue-400 mb-3">
            <FcGoogle size={23} /> Login with Google
         </button>

         <button className="socialBtn text-primary">
            <FaGithub size={22} /> Login with GitHub
         </button>
      </div>
   );
};

export default SocialLogin;
