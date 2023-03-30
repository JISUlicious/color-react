import { db } from "./firebaseInit";
import { doc, getDoc, setDoc } from "firebase/firestore";
/**
 * 
 * @param {*} key string, firestore path
 * @param {*} defaultValue null
 * @returns object 
 */

export const getItem = (key, defaultValue = null) => {
  return getDoc(doc(db, key))
    .then(res => {
      if (res === null) {
        return defaultValue;
      } else {
        return res.data();
      }
    });
};

/**
 * 
 * @param {*} key string, firestore path
 * @param {*} value any
 * @returns Promise
 */

export const setItem = (key, value) => {
  return setDoc(doc(db, key), value, {merge: true});
};