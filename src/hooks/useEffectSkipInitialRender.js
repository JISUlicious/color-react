import { useEffect, useRef } from "react";

export const useEffectSkipInitialRender = (fn, depsList) => {
  const isRendered = useRef(false);
  useEffect(() => {
    console.log("check render");
    
    if (isRendered.current) {
      console.log("render");
      fn();
    } else {
      console.log("skip");
      isRendered.current = true;
    }  
  }, [...depsList]);
};
