import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  //# Google Login & Register :
  const googleLogin = () => {
    setLoader(false);
    return signInWithPopup(auth, googleProvider);
  };

  //# Register :
  const register = (email, password) => {
    setLoader(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //# Login :
  const login = (email, password) => {
    setLoader(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //# Logout :
  const logout = () => {
    setLoader(false);
    signOut(auth);
  };

  //# Store User Info :
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setLoader(true);
      setUser(currentUser);
    });
    return () => unSub();
  }, []);

  //# Pass ALl the Value :
  const authInfo = { user, loader, googleLogin, register, login, logout };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
