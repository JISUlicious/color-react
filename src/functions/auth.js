import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signInEmail = (auth, id, pw) => {
  return signInWithEmailAndPassword(auth, id, pw);
};

export const signOutApp = (auth) => {
  return signOut(auth);
};

