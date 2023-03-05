import { useState, useEffect, useRef } from "react";


export const usePersistState = (key, defaultValue = null) => {
  const getStoredValue = (key) => {
    const storedData = localStorage.getItem(key);
    console.log("item loaded");
    const storedValue = storedData === null ? defaultValue : JSON.parse(storedData);
    return storedValue;
  };
  
  const isRendered = useRef({});
  const isRenderedBefore = (fn, fnKey) => {
    if (isRendered.current[fnKey]) {
      fn();
      console.log(fnKey, "is rendered before. fn() executing")
    } else {
      isRendered.current = {...isRendered.current, [fnKey]:true};
      console.log(fnKey, "is rendered for first time. Skipping fn()");
    }
  };

  console.log(isRendered.current);
  const storedValue = getStoredValue(key);
  console.log("first load");
  const [value, setValue] = useState(storedValue);

  useEffect(() => isRenderedBefore(()=>{
      localStorage.setItem(key, JSON.stringify(value));
      console.log("item set");
    }, "setItem"), [value]);

  useEffect(() => isRenderedBefore(()=>{
      const storedValue = getStoredValue(key);
      setValue(storedValue);
      console.log("get item");
    }, "getStoredValue"), [key]);

  return [value, setValue];
};