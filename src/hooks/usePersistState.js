import { useState, useEffect } from "react";
import { getItem, setItem } from "../functions/storage"; 
import { useEffectSkipInitialRender } from "./useEffectSkipInitialRender"; 
import { useIsRenderedBefore } from "./useIsRenderedBefore";

export const usePersistState = (key) => {
  
  const [value, setValue] = useState({});

  useEffectSkipInitialRender(()=>{
    setItem(key, JSON.stringify(value));
  }, "setItem", [value]);

  useEffect(()=>{
      getItem(key)
      .then(res => setValue(res))
      .catch(error => console.log(error));
    },[key]);

  return [value, setValue];
};