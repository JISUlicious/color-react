import { useState, useEffect } from "react";
import { getItem, setItem } from "../functions/storage"; 
import { useEffectSkipInitialRender } from "./useEffectSkipInitialRender";

export const usePersistState = (key, defaultValue) => {

  const [value, setValue] = useState(defaultValue);

  useEffectSkipInitialRender(()=>{
    setItem(key, value).catch(error => console.log(error));
  }, [value]);

  useEffect(()=>{
    getItem(key)
    .then(res => setValue(res))
    .catch(error => console.log(error));
  }, [key]);

  return [value, setValue];
};