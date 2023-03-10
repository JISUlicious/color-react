import { useState, useRef, useEffect } from "react";
import { getItem, setItem } from "../functions/storage"; 
import { useEffectSkipInitialRender } from "./useEffectSkipInitialRender"; 

export const usePersistState = (key) => {
  
  const isRendered = useRef({});
  
  const [value, setValue] = useState({});
  
  useEffectSkipInitialRender(isRendered, ()=>{
    setItem(key, JSON.stringify(value));
  }, "setItem", [value]);

  useEffect(()=>{
      getItem(key)
      .then(res => setValue(res))
      .catch(error => console.log(error));
    },[key]);

  return [value, setValue];
};