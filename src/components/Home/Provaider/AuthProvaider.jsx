import { createContext, useEffect, useState } from "react";
import auth from "../About/firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContex = createContext(null);

const provider = new GoogleAuthProvider();

const gitProvider = new GithubAuthProvider();

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");

  // const {isLoading, setIsLoading} = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  });

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGithub = () => {
    return signInWithPopup(auth, gitProvider);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  const handelSuccces = (succesMessege) => {
    setSucces(succesMessege);
  };

  const authInfo = {
    user,
    creatUser,
    error,
    handleError,
    logInUser,
    succes,
    handelSuccces,
    logInWithGoogle,
    logInWithGithub,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvaider;
