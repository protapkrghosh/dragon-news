import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const userLogOut = () => {
      return signOut(auth);
   };

   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });

      return () => {
         unsubscribe();
      };
   }, []);

   const authData = {
      user,
      loading,
      setUser,
      createUser,
      logInUser,
      userLogOut,
      googleLogin,
      updateUser,
   };

   return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
