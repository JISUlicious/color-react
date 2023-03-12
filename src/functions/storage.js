import localforage from "localforage";

/**
 * 
 * @param {*} key string
 * @param {*} defaultValue {}
 * @returns object 
 */
export const getItem = (key, defaultValue = {}) => localforage.getItem(key)
    .then(res => JSON.parse(res))
    .catch(error => {
        console.log(error);
        return defaultValue;
    });

/**
 * 
 * @param {*} key string
 * @param {*} value JSON string
 * @returns JSON string
 */
export const setItem = (key, value) => localforage.setItem(key, value)
    .then(res => res);