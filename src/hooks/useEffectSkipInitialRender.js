import { useEffect } from "react";

export const useEffectSkipInitialRender = (isRenderedRef, fn, fnKey, depsList) => {
  useEffect(() => {
    if (isRenderedRef.current[fnKey]) {
      fn();
    } else {
      isRenderedRef.current = {...isRenderedRef.current, [fnKey]:true};
    }  
  }, [...depsList]);
};
