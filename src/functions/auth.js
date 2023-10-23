import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "./firebaseInit";

export const signInEmail = (id, pw) => {
  return signInWithEmailAndPassword(auth, id, pw);
};

export const signOutApp = () => {
  return signOut(auth);
};

export const signUpEmail = (id, pw) => {
  return createUserWithEmailAndPassword(auth, id, pw);
};

export const OAuthProviderName = {
  google: "Google",
  facebook: "Facebook"
};
export const signInOAuth = (OAuthType) => {
  const providerTypes = {
    [OAuthProviderName.google]: new GoogleAuthProvider(),
    [OAuthProviderName.facebook]: new FacebookAuthProvider()
  };
  const provider = providerTypes[OAuthType];
  
  return signInWithPopup(auth, provider);
};