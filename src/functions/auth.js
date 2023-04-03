import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseInit";

export const signInEmail = (id, pw) => {
  return signInWithEmailAndPassword(auth, id, pw);
};

export const signOutApp = () => {
  return signOut(auth);
};

