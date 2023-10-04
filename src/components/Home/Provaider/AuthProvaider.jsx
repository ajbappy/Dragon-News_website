import { createContext, useState } from "react";
import auth from "../About/firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContex = createContext(null);

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, creatUser };
  return <AuthContex value={{ authInfo }}>{children}</AuthContex>;
};

export default AuthProvaider;
