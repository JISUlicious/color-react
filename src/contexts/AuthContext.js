import { getAuth } from "firebase/auth";
import { app } from "../firebase/init";
import { createContext, useContext, useReducer } from "react";

const auth = getAuth(app);

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);
export const useAuthDispatchContext = () => useContext(AuthDispatchContext);

export const authActionTypes = {
  signUp: "signUp",
  signIn: "signIn",
  signOut: "signOut",
  deleteUser: "deleteUser"
};

export const authActionCreator = {
  signUp: (id, pw) => ({type: authActionTypes.signUp, id, pw}),
  signIn: (user) => ({type: authActionTypes.signIn, user}),
  signOut: (user) => ({type: authActionTypes.signOut, user}),
  deleteUser: (user) => ({type: authActionTypes.deleteUser, user})
};

const authReducer = (authState, action) => {
  switch (action.type) {
    case authActionTypes.signUp: {
      // sign up
      return {};
    }
    case authActionTypes.signIn: {
      return {...authState, user: action.user}
    }
    case authActionTypes.signOut: {
      return {...authState, user: null};
    }
    case authActionTypes.deleteUser: {
      // delete user
      return {};
    }
    default: {
      return console.log("Invalid Action Type:", action.type);
    }
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    authReducer, {auth, user: null}
  );
  
  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};