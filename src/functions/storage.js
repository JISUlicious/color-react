import localforage from "localforage";

export const getItem = (key, defaultValue = {}) => localforage.getItem(key)
    .then(res => JSON.parse(res))
    .catch(error => {
        console.log(error);
        return defaultValue;
    });

export const setItem = (key, value) => localforage.setItem(key, value)
    .then(res => res)
    .catch(error => console.log(error));