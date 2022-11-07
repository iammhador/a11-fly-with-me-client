import React, { createContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const Context = ({ children }) => {
  //# Google Login & Register :
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  //# Pass ALl the Value :
  const authInfo = { googleLogin };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
