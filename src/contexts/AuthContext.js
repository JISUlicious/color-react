import { auth } from "../functions/firebaseInit";
import { createContext, useContext, useEffect, useReducer } from "react";


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
      console.log("Invalid Action Type:", action.type);
      return {...authState};
    }
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    authReducer, {auth, user: null}
  );
  
  useEffect(() => {
    const unsubscribe = state.auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch(authActionCreator.signIn(user));
      } else {
        dispatch(authActionCreator.signOut());
      }
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};