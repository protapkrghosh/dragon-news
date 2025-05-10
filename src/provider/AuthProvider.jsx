import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const userLogOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         // if (currentUser) {
            setUser(currentUser);
         // }
      });

      return () => {
         unsubscribe();
      };
   }, []);

   const authData = {
      user,
      setUser,
      createUser,
      logInUser,
      userLogOut,
   };

   return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
