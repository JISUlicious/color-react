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
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //     console.log(user);
  //   }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   console.log(error);
  //   // ...
  // });
}