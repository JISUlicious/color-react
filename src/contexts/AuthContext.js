import { auth } from "../functions/firebaseInit";
import { createContext, useContext, useEffect, useReducer } from "react";


const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);
export const useAuthDispatchContext = () => useContext(AuthDispatchContext);

export const authActionTypes = {
  signIn: "signIn",
  signOut: "signOut",
  initAuth: "initAuth"
};

export const authActionCreator = {
  signIn: (user) => ({type: authActionTypes.signIn, user}),
  signOut: (user) => ({type: authActionTypes.signOut, user}),
  initAuth: () => ({type: authActionTypes.initAuth})
};

const authReducer = (authState, action) => {
  switch (action.type) {
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
    case authActionTypes.initAuth: {
      return {...authState, initialized: true}
    }
    default: {
      throw new Error("Invalid action type:" + action.type);
    }
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    authReducer, {auth, user: null, initialized: false}
  );
  
  useEffect(() => {
    const unsubscribe = state.auth.onAuthStateChanged(function (user) {
      dispatch(authActionCreator.initAuth());
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