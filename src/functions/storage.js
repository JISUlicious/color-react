import { db } from "./firebaseInit";
import { doc, setDoc, getDocs, addDoc, collection, query } from "firebase/firestore";

/**
 *
 * @param key firestore path to collection
 * @param defaultValue
 * @param filter firestore query constrain
 * @returns {Promise<QuerySnapshot<DocumentData>>}
 */

export const getItem = (key, defaultValue = null, filter = null) => {
  return getDocs(query(collection(db, key), filter))
    .then(res => {
      if (res === null) {
        return defaultValue;
      } else {
        return res;
      }
    });
};

/**
 *
 * @param key firestore firestore path to collection
 * @param value
 * @returns {Promise<DocumentReference<DocumentData>>}
 */

export const addItem = (key, value) => {
  return addDoc(collection(db, key), value);
};

/**
 *
 * @param key firestore path to document
 * @param value
 * @returns {Promise<void>}
 */
export const updateItem = (key, value) => {
  return setDoc(doc(db, key), value);
};