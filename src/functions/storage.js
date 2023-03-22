import localforage from "localforage";

/**
 * 
 * @param {*} key string
 * @param {*} defaultValue null
 * @returns object 
 */
export const getItem = (key, defaultValue = null) => localforage.getItem(key)
    .then(res => {
        if (res === null) {
            return defaultValue;
        } else {
            return JSON.parse(res);
        }
    });

/**
 * 
 * @param {*} key string
 * @param {*} value any
 * @returns JSON string
 */
export const setItem = (key, value) => {
  return localforage.setItem(key, JSON.stringify(value));
};